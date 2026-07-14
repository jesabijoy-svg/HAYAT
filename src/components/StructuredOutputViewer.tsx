import React, { useState } from 'react';
import { Code, Copy, Check, Download, Layers, Sparkles, FileJson } from 'lucide-react';
import { LegalDocument } from '../types';

interface StructuredOutputViewerProps {
  doc: LegalDocument;
}

export default function StructuredOutputViewer({ doc }: StructuredOutputViewerProps) {
  const [activeTab, setActiveTab] = useState<'metadata' | 'layout' | 'entities' | 'citations' | 'chunks'>('metadata');
  const [copied, setCopied] = useState(false);

  const results = doc.results;
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-card p-10 text-center h-[350px]">
        <Layers className="h-8 w-8 text-gold animate-pulse mb-3" />
        <span className="text-sm font-semibold text-white/95">Structured State Empty</span>
        <span className="text-xs text-white/40 max-w-xs mt-1">Run Document Intelligence on a case file to inspect canonical JSON.</span>
      </div>
    );
  }

  // Get current JSON object to render
  const getOutputData = () => {
    switch (activeTab) {
      case 'metadata':
        return results.metadata;
      case 'layout':
        return results.layout;
      case 'entities':
        return results.entities;
      case 'citations':
        return results.citations;
      case 'chunks':
        return results.chunking;
      default:
        return {};
    }
  };

  const currentJsonString = JSON.stringify(getOutputData(), null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentJsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentJsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `hayat_${activeTab}_extraction_${doc.id}.json`;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-xl border border-white/5 bg-dark-card p-5 animate-fadeIn" id="structured-output-explorer">
      <div className="border-b border-white/5 pb-4 mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white/95">Structured Legal Intelligence Explorer</h3>
          <p className="text-xs text-white/40 mt-0.5">Canonical extracted data schemas exported to local files or indices.</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            id="copy-json-btn"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-gold" /> : <Copy className="h-3.5 w-3.5 text-gold/80" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 rounded bg-gold px-2.5 py-1.5 text-xs font-bold text-dark-bg hover:bg-gold-600 shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-all cursor-pointer"
            id="download-json-btn"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-white/5 overflow-x-auto pb-px" id="output-tabs">
        {(['metadata', 'layout', 'entities', 'citations', 'chunks'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === tab
                ? 'border-gold text-gold font-bold'
                : 'border-transparent text-white/40 hover:text-white/70'
            }`}
            id={`tab-output-${tab}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Code Editor view */}
      <div className="mt-4 relative rounded-lg border border-white/10 overflow-hidden bg-dark-bg text-emerald-400 font-mono text-xs p-4 h-[350px] shadow-inner">
        {/* Floating background icon */}
        <FileJson className="absolute right-4 bottom-4 h-24 w-24 text-white/5 pointer-events-none" />
        
        <pre className="h-full overflow-y-auto overflow-x-auto leading-relaxed select-text pr-10">
          {currentJsonString}
        </pre>
      </div>
    </div>
  );
}
