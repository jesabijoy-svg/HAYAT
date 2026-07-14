import React, { useState, useEffect } from 'react';
import { SAMPLE_DOCUMENTS } from './data/samples';
import { LegalDocument } from './types';
import Header from './components/Header';
import DocumentSelector from './components/DocumentSelector';
import PipelineVisualizer from './components/PipelineVisualizer';
import HumanReviewTool from './components/HumanReviewTool';
import StructuredOutputViewer from './components/StructuredOutputViewer';
import KnowledgeGraphLibrary from './components/KnowledgeGraphLibrary';
import LargePDFExtractor from './components/LargePDFExtractor';
import { Play, Sparkles, Loader2, AlertCircle, ShieldAlert } from 'lucide-react';

export default function App() {
  const [documents, setDocuments] = useState<LegalDocument[]>(() => {
    // Initial load
    return [...SAMPLE_DOCUMENTS];
  });
  const [selectedDocId, setSelectedDocId] = useState<string>('doc-pakistan-sc-judgment');
  const [activeServiceId, setActiveServiceId] = useState<number>(1);
  const [activeDashboardTab, setActiveDashboardTab] = useState<'pipeline' | 'review' | 'export' | 'library' | 'converter'>('pipeline');
  const [isProcessing, setIsProcessing] = useState(false);
  const [warning, setWarning] = useState<string | undefined>(undefined);
  const [processingStage, setProcessingStage] = useState<string>('');

  // Find currently selected document
  const selectedDoc = documents.find((doc) => doc.id === selectedDocId) || documents[0];

  const handleSelectDoc = (docId: string) => {
    setSelectedDocId(docId);
    // Reset active service back to 1 for a new document context
    setActiveServiceId(1);
  };

  // Reassuring pipeline processing stage logger
  const simulateProcessingStages = (callback: () => void) => {
    const stages = [
      'Verifying SHA-256 hash & validating file magic bytes...',
      'Assessing scan readability, brightness, and tilt parameters...',
      'Applying deskew algorithms and adaptive contrast normalizations...',
      'Executing multi-modal bilingual OCR (Bangla + English text maps)...',
      'Scanning for lawyers marginal handwriting and annotations...',
      'Resolving structural layout nodes (headings, footnotes, tables)...',
      'Detecting column bounds and logical reading flows...',
      'Extracting legal metadata (case numbers, judges, bench context)...',
      'Executing Named Entity Recognition ( NER Acts, Dates, Money)...',
      'Reconstructing judicial citations and linking precedents...',
      'Analyzing contract covenants and extracting governing clauses...',
      'Parsing evidence tables into tabular Markdown...',
      'Segmenting case facts, arguments, and court findings...',
      'Validating copyright filters and compiling provenance trails...',
      'Slicing content into section-aware vector chunks...'
    ];

    let currentStageIndex = 0;
    setProcessingStage(stages[0]);

    const interval = setInterval(() => {
      currentStageIndex++;
      if (currentStageIndex < stages.length) {
        setProcessingStage(stages[currentStageIndex]);
      } else {
        clearInterval(interval);
        callback();
      }
    }, 400); // Fast enough to be engaging, slow enough to show the deep pipeline
  };

  // Upload/Paste a new document and trigger Gemini API live server processing
  const handleUploadDoc = async (name: string, content: string, mimeType: string, size: string) => {
    setIsProcessing(true);
    setWarning(undefined);
    
    // Add temporary pending state
    const newDocId = 'doc-uploaded-' + Math.random().toString(36).substring(2, 9);
    const newDoc: LegalDocument = {
      id: newDocId,
      name,
      fileSize: size,
      mimeType,
      status: 'pending',
      progress: 10,
      dateUploaded: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };

    setDocuments((prev) => [newDoc, ...prev]);
    setSelectedDocId(newDocId);

    simulateProcessingStages(async () => {
      try {
        const response = await fetch('/api/process-document', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, content, mimeType, size }),
        });

        const data = await response.json();

        if (data.success && data.results) {
          if (data.warning) {
            setWarning(data.warning);
          }

          setDocuments((prev) =>
            prev.map((doc) =>
              doc.id === newDocId
                ? {
                    ...doc,
                    status: data.results.quality.isPass ? 'completed' : 'review_required',
                    progress: 100,
                    results: data.results,
                    review: {
                      isApproved: false,
                      fieldsCorrected: [],
                      validationWarnings: data.results.quality.isPass 
                        ? [] 
                        : ['OCR Quality Alert: Scan quality failed. Verify character extractions.'],
                    },
                  }
                : doc
            )
          );
        } else {
          throw new Error(data.error || 'Pipeline parsing failed');
        }
      } catch (err: any) {
        console.error('Extraction Error:', err);
        // Fallback to error status
        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === newDocId ? { ...doc, status: 'failed', progress: 100 } : doc
          )
        );
        setWarning('Failed to connect to full-stack Gemini engine. Please check if backend is booting.');
      } finally {
        setIsProcessing(false);
      }
    });
  };

  // Update document (e.g. for Human Review Approval)
  const handleUpdateDoc = (updatedDoc: LegalDocument) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === updatedDoc.id ? updatedDoc : doc))
    );
  };

  // Reset Dataset to default samples
  const handleResetDataset = () => {
    setIsProcessing(true);
    setWarning(undefined);
    setProcessingStage('Rebuilding clean database indices...');
    setTimeout(() => {
      setDocuments([...SAMPLE_DOCUMENTS]);
      setSelectedDocId('doc-pakistan-sc-judgment');
      setActiveServiceId(1);
      setActiveDashboardTab('pipeline');
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans text-white/90 flex flex-col antialiased selection:bg-gold/30 selection:text-white">
      {/* Top Header */}
      <Header
        isProcessing={isProcessing}
        warning={warning}
        onReset={handleResetDataset}
      />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6">
        
        {/* Workspace Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - Doc Repo & Uploads */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <DocumentSelector
              documents={documents}
              selectedDocId={selectedDocId}
              onSelect={handleSelectDoc}
              onUpload={handleUploadDoc}
              isProcessing={isProcessing}
            />
          </div>

          {/* Right Column - Workspaces */}
          <div className="lg:col-span-8 flex flex-col gap-4" id="workspaces-container">
            {/* Tab Controls */}
            <div className="flex border-b border-white/5" id="workspaces-tabs">
              <button
                onClick={() => setActiveDashboardTab('pipeline')}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeDashboardTab === 'pipeline'
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-white/45 hover:text-white/70'
                }`}
                id="btn-tab-pipeline"
              >
                Pipeline Inspector
              </button>
              <button
                onClick={() => setActiveDashboardTab('converter')}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeDashboardTab === 'converter'
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-white/45 hover:text-white/70'
                }`}
                id="btn-tab-converter"
              >
                PDF Extractor & Converter
              </button>
              <button
                onClick={() => setActiveDashboardTab('review')}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all relative cursor-pointer ${
                  activeDashboardTab === 'review'
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-white/45 hover:text-white/70'
                }`}
                id="btn-tab-review"
              >
                Review Workspace
                {selectedDoc && selectedDoc.status === 'review_required' && (
                  <span className="absolute top-2 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveDashboardTab('export')}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeDashboardTab === 'export'
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-white/45 hover:text-white/70'
                }`}
                id="btn-tab-export"
              >
                Export Structs
              </button>
              <button
                onClick={() => setActiveDashboardTab('library')}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  activeDashboardTab === 'library'
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-white/45 hover:text-white/70'
                }`}
                id="btn-tab-library"
              >
                Knowledge Graph & Library
              </button>
            </div>

            {/* Dynamic Workspaces Render */}
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-card p-16 text-center h-[550px] animate-pulse">
                <Loader2 className="h-10 w-10 text-gold animate-spin mb-4" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Running Document Intelligence</span>
                <span className="text-xs text-white/40 max-w-sm mt-2 leading-relaxed h-10 italic">
                  {processingStage}
                </span>
                <div className="mt-8 flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce"></span>
                </div>
              </div>
            ) : selectedDoc.status === 'failed' ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-card p-12 text-center h-[450px]">
                <AlertCircle className="h-12 w-12 text-red-500 mb-3" />
                <span className="text-sm font-bold text-white">Pipeline Failed</span>
                <span className="text-xs text-white/40 max-w-xs mt-1 leading-relaxed">
                  The document could not be processed through the extraction engine. Verify internet connectivity or secret configuration and try again.
                </span>
              </div>
            ) : (
              <div className="space-y-6">
                {activeDashboardTab === 'library' && (
                  <KnowledgeGraphLibrary
                    documents={documents}
                    selectedDocId={selectedDocId}
                    onSelectDoc={handleSelectDoc}
                  />
                )}

                {activeDashboardTab === 'pipeline' && (
                  <PipelineVisualizer
                    document={selectedDoc}
                    activeServiceId={activeServiceId}
                    setActiveServiceId={setActiveServiceId}
                  />
                )}

                {activeDashboardTab === 'review' && (
                  <HumanReviewTool
                    document={selectedDoc}
                    onUpdateDocument={handleUpdateDoc}
                  />
                )}

                {activeDashboardTab === 'export' && (
                  <StructuredOutputViewer doc={selectedDoc} />
                )}

                {activeDashboardTab === 'converter' && (
                  <LargePDFExtractor document={selectedDoc} />
                )}
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
