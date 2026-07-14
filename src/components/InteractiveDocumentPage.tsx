import React, { useState } from 'react';
import { Eye, Shield, RefreshCcw, Layers, ZoomIn, ArrowRight, CornerDownRight } from 'lucide-react';
import { LegalDocument, LayoutItem } from '../types';

interface InteractiveDocumentPageProps {
  document: LegalDocument;
}

export default function InteractiveDocumentPage({ document }: InteractiveDocumentPageProps) {
  const [activePage, setActivePage] = useState<number>(1);
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null);
  const [showEnhancement, setShowEnhancement] = useState<boolean>(true);
  const [showReadingOrder, setShowReadingOrder] = useState<boolean>(false);

  const results = document.results;
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-card p-10 text-center h-[520px]">
        <Layers className="h-8 w-8 text-gold animate-pulse mb-3" />
        <span className="text-sm font-semibold text-white/90">Pipeline Idle</span>
        <span className="text-xs text-white/40 max-w-xs mt-1">Upload or select a legal document and trigger processing to begin intelligence mapping.</span>
      </div>
    );
  }

  // Find layout items for active page
  const pageItems = results.layout.items.filter((item) => item.page === activePage);
  const quality = results.quality;
  const enhancement = results.enhancement;
  const readingSequence = results.readingOrder.orderedSequence;

  const getBlockStyles = (type: string, isHovered: boolean) => {
    let border = 'border-zinc-300';
    let bg = 'bg-zinc-50/20';
    let text = 'text-zinc-600';

    switch (type) {
      case 'title':
        border = 'border-red-400';
        bg = 'bg-red-50/10';
        text = 'text-red-700';
        break;
      case 'heading':
        border = 'border-amber-400';
        bg = 'bg-amber-50/10';
        text = 'text-amber-700';
        break;
      case 'section':
      case 'subsection':
        border = 'border-indigo-400';
        bg = 'bg-indigo-50/10';
        text = 'text-indigo-700';
        break;
      case 'table':
        border = 'border-emerald-400';
        bg = 'bg-emerald-50/10';
        text = 'text-emerald-700';
        break;
      case 'footnote':
      case 'margin_note':
        border = 'border-violet-400';
        bg = 'bg-violet-50/10';
        text = 'text-violet-700';
        break;
      default:
        border = 'border-blue-400';
        bg = 'bg-blue-50/10';
        text = 'text-blue-700';
    }

    if (isHovered) {
      return {
        border: `${border} border-2 ring-1 ring-gold shadow-sm z-30`,
        bg: bg.replace('/10', '/30'),
        text: `${text} font-semibold`
      };
    }

    return { border, bg, text };
  };

  const getReadingOrderIndex = (blockId: string) => {
    return readingSequence.indexOf(blockId) + 1;
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-white/5 bg-dark-card p-5 animate-fadeIn" id="interactive-doc-visualizer">
      {/* Header Panel controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-white/95">Interactive Document Viewer</h3>
          <p className="text-xs text-white/40 mt-0.5">Hover blocks to inspect recognized layout and reading sequence.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* If the document has skew or tilt corrections */}
          {quality.skewAngle !== 0 && (
            <button
              onClick={() => setShowEnhancement(!showEnhancement)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                showEnhancement
                  ? 'bg-gold text-dark-bg shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
              id="toggle-deskew-btn"
            >
              <RefreshCcw className="h-3.5 w-3.5" />
              <span>{showEnhancement ? 'Showing Deskewed' : 'Showing Skewed Original'}</span>
            </button>
          )}

          {/* Toggle Reading Order */}
          <button
            onClick={() => setShowReadingOrder(!showReadingOrder)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              showReadingOrder
                ? 'bg-gold text-dark-bg shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
            id="toggle-reading-order-btn"
          >
            <ArrowRight className="h-3.5 w-3.5" />
            <span>Reading Order Flow</span>
          </button>
        </div>
      </div>

      {/* Pages switcher */}
      {results.layout.pagesCount > 1 && (
        <div className="flex gap-2">
          {Array.from({ length: results.layout.pagesCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activePage === p
                  ? 'bg-gold text-dark-bg border border-gold/20 shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                  : 'bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
              id={`switch-page-${p}`}
            >
              Page {p}
            </button>
          ))}
        </div>
      )}

      {/* Main interactive visualizer area */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        
        {/* Document Page Canvas */}
        <div className="lg:col-span-7 flex justify-center bg-dark-bg rounded-xl p-6 border border-white/5 relative overflow-hidden min-h-[500px]">
          {/* Quality failed warning badge if applicable */}
          {!quality.isPass && (
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-amber-500 text-dark-bg text-[10px] font-bold px-2.5 py-1 rounded shadow-[0_0_12px_rgba(245,158,11,0.25)]">
              <Shield className="h-3 w-3" />
              <span>Scan Quality Low</span>
            </div>
          )}

          {/* Page sheet */}
          <div
            className="w-full max-w-[420px] bg-white rounded-lg border border-zinc-300 shadow-md relative p-8 select-none transition-all duration-300"
            style={{
              transform: !showEnhancement && quality.skewAngle !== 0 ? `rotate(${quality.skewAngle}deg)` : 'none',
              transformOrigin: 'center center'
            }}
            id="simulated-document-sheet"
          >
            {/* Watermark grid overlay if skewed */}
            {!showEnhancement && quality.skewAngle !== 0 && (
              <div className="absolute inset-0 border border-amber-300/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-lg" />
            )}

            {/* Layout Box Overlays */}
            {pageItems.map((item) => {
              const bbox = item.bbox || [10, 10, 90, 20];
              const isHovered = hoveredBlockId === item.id;
              const styles = getBlockStyles(item.type, isHovered);
              const seqIndex = getReadingOrderIndex(item.id);

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredBlockId(item.id)}
                  onMouseLeave={() => setHoveredBlockId(null)}
                  className={`absolute rounded border border-dashed transition-all cursor-pointer ${styles.border} ${styles.bg}`}
                  style={{
                    left: `${bbox[0]}%`,
                    top: `${bbox[1]}%`,
                    width: `${bbox[2] - bbox[0]}%`,
                    height: `${bbox[3] - bbox[1]}%`,
                  }}
                  id={`bbox-overlay-${item.id}`}
                >
                  {/* Hover or Reading index indicator */}
                  {(showReadingOrder || isHovered) && seqIndex > 0 && (
                    <div className="absolute -top-2.5 -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-dark-bg font-mono text-[9px] font-bold text-gold shadow-[0_0_8px_rgba(212,175,55,0.3)] ring-1 ring-gold/30">
                      {seqIndex}
                    </div>
                  )}

                  {/* Visual segment code */}
                  <div className={`absolute top-0 right-0 px-1 text-[8px] uppercase tracking-wider font-semibold opacity-70 ${styles.text}`}>
                    {item.type}
                  </div>
                </div>
              );
            })}

            {/* Simulated content rendering inside page sheet */}
            <div className="flex flex-col gap-4 font-sans text-[11px] leading-relaxed text-zinc-800">
              {pageItems.map((item) => {
                const isHovered = hoveredBlockId === item.id;
                
                // Styles based on type
                if (item.type === 'title') {
                  return (
                    <div 
                      key={item.id} 
                      className={`text-center font-bold text-zinc-950 leading-tight text-[13px] border-b pb-2 ${isHovered ? 'bg-zinc-100/80' : ''}`}
                    >
                      {item.text}
                    </div>
                  );
                }
                if (item.type === 'heading') {
                  return (
                    <div 
                      key={item.id} 
                      className={`font-semibold text-zinc-900 border-l-2 border-zinc-400 pl-2 mt-2 ${isHovered ? 'bg-zinc-100/80' : ''}`}
                    >
                      {item.text}
                    </div>
                  );
                }
                if (item.type === 'section') {
                  return (
                    <div 
                      key={item.id} 
                      className={`font-mono text-[9px] tracking-widest text-zinc-500 font-bold uppercase mt-2 ${isHovered ? 'bg-zinc-100/80' : ''}`}
                    >
                      {item.text}
                    </div>
                  );
                }
                return (
                  <p 
                    key={item.id} 
                    className={`text-justify indent-4 ${isHovered ? 'bg-zinc-150/80 rounded p-1 -m-1' : ''}`}
                  >
                    {item.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlighted Layout Block Sidebar Inspector */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-lg bg-white/5 p-4 border border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90">Recognized Blocks</h4>
            <p className="text-[11px] text-white/40 mt-0.5">Hover or click any recognized block to track details.</p>
            
            <div className="flex flex-col gap-2 mt-3 max-h-[380px] overflow-y-auto pr-1">
              {pageItems.map((item) => {
                const isHovered = hoveredBlockId === item.id;
                const styles = getBlockStyles(item.type, isHovered);
                const seqIdx = getReadingOrderIndex(item.id);

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredBlockId(item.id)}
                    onMouseLeave={() => setHoveredBlockId(null)}
                    className={`flex items-start gap-2.5 rounded-lg border p-2.5 transition-all ${
                      isHovered
                        ? 'border-gold/30 bg-gold/5 shadow-[0_0_12px_rgba(212,175,55,0.05)] text-white'
                        : 'border-white/5 bg-white/5 text-white/70'
                    }`}
                  >
                    {seqIdx > 0 && (
                      <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded font-mono text-[9px] font-bold transition-all ${
                        isHovered ? 'bg-gold text-dark-bg shadow-[0_0_8px_rgba(212,175,55,0.3)]' : 'bg-white/10 text-gold border border-white/5'
                      }`}>
                        {seqIdx}
                      </div>
                    )}
                    <div className="overflow-hidden flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${styles.border} ${styles.text}`}>
                          {item.type}
                        </span>
                        {item.bbox && (
                          <span className="font-mono text-[9px] text-white/30">
                            [{item.bbox.join(', ')}]
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${isHovered ? 'text-white' : 'text-white/80'}`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
