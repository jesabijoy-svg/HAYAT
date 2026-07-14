import React, { useState, useRef } from 'react';
import { FileText, Plus, FileSpreadsheet, Image as ImageIcon, Upload, Loader2, AlertCircle } from 'lucide-react';
import { LegalDocument, DocumentType } from '../types';

interface DocumentSelectorProps {
  documents: LegalDocument[];
  selectedDocId: string;
  onSelect: (docId: string) => void;
  onUpload: (name: string, content: string, mimeType: string, size: string) => Promise<void>;
  isProcessing: boolean;
}

export default function DocumentSelector({
  documents,
  selectedDocId,
  onSelect,
  onUpload,
  isProcessing,
}: DocumentSelectorProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [textInputOpen, setTextInputOpen] = useState(false);
  const [customText, setCustomText] = useState('');
  const [customName, setCustomName] = useState('');
  const [customType, setCustomType] = useState<DocumentType>('judgment');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = async (file: File) => {
    setUploadError(null);
    const sizeStr = (file.size / 1024).toFixed(0) + ' KB';
    
    // Support images via base64 data URLs
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        try {
          await onUpload(file.name, base64, file.type, sizeStr);
        } catch (err: any) {
          setUploadError(err.message || 'Failed to process image');
        }
      };
      reader.readAsDataURL(file);
    } 
    // Support plain text / logs / etc.
    else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target?.result as string;
        try {
          await onUpload(file.name, text, 'text/plain', sizeStr);
        } catch (err: any) {
          setUploadError(err.message || 'Failed to process text file');
        }
      };
      reader.readAsText(file);
    } 
    // Otherwise warn the user and open the paste-text panel
    else {
      setCustomName(file.name);
      setTextInputOpen(true);
      setUploadError(`Note: ${file.name} is a binary file. Paste the document plain-text below to process via Gemini:`);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await processFile(e.target.files[0]);
    }
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;
    
    const name = customName.trim() || `Pasted_Document_${Math.floor(Math.random() * 1000)}.txt`;
    setUploadError(null);
    try {
      await onUpload(name, customText, 'text/plain', `${(customText.length / 1024).toFixed(1)} KB`);
      setCustomText('');
      setCustomName('');
      setTextInputOpen(false);
    } catch (err: any) {
      setUploadError(err.message || 'Failed to process text');
    }
  };

  const getDocIcon = (mime: string, status: string) => {
    if (status === 'processing') return <Loader2 className="h-5 w-5 animate-spin text-gold" />;
    if (mime.startsWith('image/')) return <ImageIcon className="h-5 w-5 text-gold" />;
    return <FileText className="h-5 w-5 text-gold/80" />;
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-white/5 bg-dark-card p-5" id="document-selector-container">
      <div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90">Document Repository</h2>
        <p className="text-xs text-white/40 mt-0.5">Select a pre-loaded case or upload a new deed / judgment.</p>
      </div>

      {/* Existing documents */}
      <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1" id="documents-list">
        {documents.map((doc) => {
          const isSelected = doc.id === selectedDocId;
          return (
            <button
              key={doc.id}
              onClick={() => onSelect(doc.id)}
              disabled={isProcessing}
              className={`group flex items-center justify-between gap-3 rounded-lg border p-3 text-left transition-all ${
                isSelected
                  ? 'border-gold/30 bg-gold/5 text-white shadow-[0_0_15px_rgba(212,175,55,0.06)]'
                  : 'border-white/5 bg-white/5 text-white/70 hover:border-white/10 hover:bg-white/10'
              } disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer`}
              id={`doc-item-${doc.id}`}
            >
              <div className="flex items-center gap-3 overflow-hidden w-full">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded ${
                  isSelected ? 'bg-gold text-dark-bg shadow-[0_0_10px_rgba(212,175,55,0.3)]' : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  {getDocIcon(doc.mimeType, doc.status)}
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="truncate text-xs font-semibold">{doc.name}</div>
                  <div className="flex items-center gap-2 text-[10px] text-white/40 mt-0.5">
                    <span>{doc.fileSize}</span>
                    <span>•</span>
                    <span className="capitalize">{doc.results?.metadata.documentType || 'Deed'}</span>
                    <span>•</span>
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${
                      doc.status === 'completed' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' :
                      doc.status === 'review_required' ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]' :
                      doc.status === 'processing' ? 'bg-gold animate-pulse' : 'bg-red-400'
                    }`} />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Drag & Drop Upload Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`flex flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-gold bg-gold/10 text-white'
            : 'border-white/15 bg-white/5 text-white/50 hover:border-gold/30 hover:bg-white/10'
        } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
        id="drag-drop-zone"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,text/plain"
          className="hidden"
        />
        <Upload className="h-6 w-6 text-gold/75 mb-2 group-hover:text-gold" />
        <span className="text-xs font-semibold text-white/80">Upload Legal File</span>
        <span className="text-[10px] text-white/40 mt-1">Drag images/txt, or click to browse</span>
      </div>

      {/* Direct pasting option */}
      <button
        onClick={() => {
          setTextInputOpen(!textInputOpen);
          setUploadError(null);
        }}
        disabled={isProcessing}
        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
        id="paste-text-toggle"
      >
        <Plus className="h-3.5 w-3.5 text-gold" />
        <span>Paste Legal Text</span>
      </button>

      {/* Upload/Paste Form */}
      {textInputOpen && (
        <form onSubmit={handleCustomSubmit} className="flex flex-col gap-3 rounded-lg border border-white/5 bg-white/5 p-4 animate-fadeIn">
          <div>
            <label className="block text-[10px] font-bold tracking-[0.15em] text-gold/80 uppercase">Document Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Agreement_Apex_v2.txt"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white placeholder-white/20 px-2.5 py-1.5 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold tracking-[0.15em] text-gold/80 uppercase">Document Text Content</label>
            <textarea
              required
              rows={5}
              placeholder="Paste contract clauses, writ petitions, or judge orders here..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white placeholder-white/20 px-2.5 py-1.5 text-xs font-mono focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-y"
            />
          </div>
          <div className="flex justify-end gap-2 text-xs">
            <button
              type="button"
              onClick={() => setTextInputOpen(false)}
              className="px-2.5 py-1.5 font-semibold text-white/40 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-gold px-3 py-1.5 font-bold text-dark-bg hover:bg-gold-600 transition-all shadow-[0_0_12px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              Process with Engine
            </button>
          </div>
        </form>
      )}

      {uploadError && (
        <div className="flex gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
          <span className="leading-normal">{uploadError}</span>
        </div>
      )}
    </div>
  );
}
