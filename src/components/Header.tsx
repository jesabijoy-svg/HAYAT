import React from 'react';
import { Shield, Cpu, Key, HelpCircle, RefreshCw, Layers } from 'lucide-react';

interface HeaderProps {
  isProcessing: boolean;
  warning?: string;
  onReset: () => void;
}

export default function Header({ isProcessing, warning, onReset }: HeaderProps) {
  const isApiConfigured = warning === undefined;

  return (
    <header className="border-b border-white/10 bg-dark-header px-6 py-4" id="hayat-header">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
        {/* Branding & Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold text-dark-bg font-serif font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold">HAYAT Intelligence</span>
            </div>
            <h1 className="font-serif text-lg font-medium tracking-tight text-white/90">
              Document Transformation Engine
            </h1>
          </div>
        </div>

        {/* Real-time details & Controls */}
        <div className="flex flex-wrap items-center gap-4 text-sm">

          {/* API Key Status Indicator */}
          <div 
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-sans text-xs font-medium ${
              isApiConfigured 
                ? 'border-gold-500/30 bg-gold-500/5 text-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.05)]' 
                : 'border-amber-500/20 bg-amber-500/5 text-amber-400'
            }`}
            title={warning ? warning : 'Gemini 3.5-flash live integration active'}
          >
            <Key className={`h-3.5 w-3.5 ${isApiConfigured ? 'text-gold-400' : 'text-amber-400'}`} />
            <span>{isApiConfigured ? 'Gemini API Connected' : 'Sandbox Mode'}</span>
          </div>

          {/* Reset button */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 hover:text-white active:bg-white/20 transition-all cursor-pointer"
            id="reset-demo-btn"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-gold ${isProcessing ? 'animate-spin' : ''}`} />
            <span>Reset Dataset</span>
          </button>
        </div>
      </div>
      
      {/* Warning banner if not using real Gemini API key */}
      {warning && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-300 animate-fadeIn max-w-7xl mx-auto">
          <Shield className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold text-amber-200">Note on Environment:</span> {warning}
          </div>
        </div>
      )}
    </header>
  );
}
