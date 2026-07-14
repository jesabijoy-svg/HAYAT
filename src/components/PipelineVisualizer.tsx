import React, { useState } from 'react';
import {
  ShieldCheck, Eye, Sparkles, FileText, Edit3, Layout, Layers,
  Dna, HelpCircle, FileSearch, Code, AlertTriangle, Table, Tag,
  FolderTree, BookOpen, CheckCircle, ArrowRight, CheckCircle2, AlertCircle,
  CornerDownRight
} from 'lucide-react';
import { LegalDocument, PipelineResults, LegalEntity, LegalCitation, LegalClause } from '../types';
import LargePDFExtractor from './LargePDFExtractor';

interface PipelineVisualizerProps {
  document: LegalDocument;
  activeServiceId: number;
  setActiveServiceId: (id: number) => void;
}

export default function PipelineVisualizer({
  document,
  activeServiceId,
  setActiveServiceId,
}: PipelineVisualizerProps) {
  const results = document.results;

  // 17 Services metadata grouped into 5 Clusters
  const SERVICE_CLUSTERS = [
    {
      name: 'Document Quality & Safety',
      icon: <ShieldCheck className="h-4 w-4 text-gold" />,
      services: [
        { id: 1, name: 'File Validation', desc: 'Magic number & security scanner' },
        { id: 2, name: 'Image Quality Assessment', desc: 'DPI, blur & brightness check' },
        { id: 3, name: 'Image Enhancement', desc: 'Deskew, dewarp & de-noise' },
      ],
    },
    {
      name: 'Text & Layout Recognition',
      icon: <Layout className="h-4 w-4 text-gold" />,
      services: [
        { id: 4, name: 'OCR Engine', desc: 'Bangla & English mixed extraction' },
        { id: 5, name: 'Handwriting Recognition', desc: 'Lawyer notes & signature check' },
        { id: 6, name: 'Layout Analysis', desc: 'Title, section & paragraph hierarchy' },
        { id: 7, name: 'Reading Order Detection', desc: 'Logical sequence flow mapping' },
        { id: 18, name: 'Large Document Extractor', desc: 'Full text OCR stream & page navigator' },
      ],
    },
    {
      name: 'Legal Intelligence Extraction',
      icon: <Dna className="h-4 w-4 text-gold" />,
      services: [
        { id: 8, name: 'Metadata Extraction', desc: 'Court, judge & party extraction' },
        { id: 9, name: 'Entity Extraction', desc: 'Acts, dates & person names' },
        { id: 10, name: 'Citation Extraction', desc: 'DLR, BLD, PLD parsed & linked' },
        { id: 11, name: 'Clause Extraction', desc: 'Covenants, obligations & liabilities' },
        { id: 12, name: 'Table Extraction', desc: 'Excel & evidence table grid parsed' },
      ],
    },
    {
      name: 'Semantic Structure & IA',
      icon: <FolderTree className="h-4 w-4 text-gold" />,
      services: [
        { id: 13, name: 'Document Classification', desc: 'Judgment vs agreement categorization' },
        { id: 14, name: 'Document Segmentation', desc: 'Facts, issues & decision segments' },
        { id: 15, name: 'Copyright & Filter', desc: 'IP verification & provenance log' },
        { id: 16, name: 'Semantic Chunking', desc: 'Section-aware retrieval chunking' },
      ],
    },
    {
      name: 'Human Verification & Review',
      icon: <CheckCircle className="h-4 w-4 text-gold" />,
      services: [
        { id: 17, name: 'Confidence & Human Review', desc: 'Pipeline score & manual corrector' },
      ],
    },
  ];

  if (!results) {
    return (
      <div className="rounded-xl border border-white/5 bg-dark-card p-12 text-center text-white/40 h-[650px] flex flex-col justify-center items-center">
        <LoaderSpinner />
        <p className="text-sm font-semibold text-white/90 mt-4">Awaiting Pipeline Activation</p>
        <p className="text-xs text-white/40 mt-1 max-w-sm">No analysis active. Click "Process with Engine" to parse and view structured results.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 animate-fadeIn" id="pipeline-visualizer-grid">
      {/* Sidebar - Pipeline Navigator */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="rounded-xl border border-white/5 bg-dark-card p-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90 mb-3">Pipeline Core Services</h3>
          <div className="flex flex-col gap-4">
            {SERVICE_CLUSTERS.map((cluster, cIndex) => (
              <div key={cIndex} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/80 uppercase tracking-wide">
                  {cluster.icon}
                  <span className="text-[10px] tracking-wider font-semibold text-white/90">{cluster.name}</span>
                </div>
                <div className="flex flex-col gap-1 pl-2 border-l border-white/5">
                  {cluster.services.map((svc) => {
                    const isActive = svc.id === activeServiceId;
                    return (
                      <button
                        key={svc.id}
                        onClick={() => setActiveServiceId(svc.id)}
                        className={`group flex flex-col rounded-lg p-2 text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gold text-dark-bg shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                            : 'hover:bg-white/5 text-white/60'
                        }`}
                        id={`btn-service-${svc.id}`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`font-mono text-[10px] ${isActive ? 'text-dark-bg/60 font-bold' : 'text-white/30'}`}>S{svc.id.toString().padStart(2, '0')}</span>
                          <span className={`text-xs font-bold truncate leading-tight ${isActive ? 'text-dark-bg' : 'text-white/85 group-hover:text-white'}`}>{svc.name}</span>
                        </div>
                        <span className={`text-[10px] mt-0.5 leading-none ${isActive ? 'text-dark-bg/80 font-medium' : 'text-white/40'}`}>
                          {svc.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Active Service Inspector Panel */}
      <div className="lg:col-span-8">
        <div className="rounded-xl border border-white/5 bg-dark-card p-6 min-h-[640px] flex flex-col">
          {/* Active service header */}
          <div className="border-b border-white/5 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 text-gold border border-white/10">
                CORE SERVICE {activeServiceId}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="h-3.5 w-3.5" /> Pipeline Verified
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mt-2" id="active-service-title">
              {getServiceName(activeServiceId)}
            </h2>
            <p className="text-xs text-white/40 mt-1">{getServicePurpose(activeServiceId)}</p>
          </div>

          {/* Core Service Output Visualization */}
          <div className="flex-1 flex flex-col justify-between" id="active-service-visualization-canvas">
            {renderServiceContent(activeServiceId, results, document)}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper spinners
function LoaderSpinner() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
      <Layers className="h-5 w-5 text-gold animate-pulse" />
    </div>
  );
}

// Mapped service names
function getServiceName(id: number): string {
  const names: Record<number, string> = {
    1: '1. File Validation Pipeline',
    2: '2. Image Quality Assessment',
    3: '3. Auto-Image Enhancement',
    4: '4. Mixed-Language OCR Engine',
    5: '5. Handwriting & Annotation Tracker',
    6: '6. Document Layout Analysis',
    7: '7. Reading Order Sequence Logic',
    8: '8. Legal Metadata Extraction',
    9: '9. Legal Named Entity Extraction',
    10: '10. Judicial Citation Linker',
    11: '11. Clause & Obligation Extractor',
    12: '12. Financial & Evidence Table Extractor',
    13: '13. Intelligent Document Classification',
    14: '14. Document Segmentation Engine',
    15: '15. Copyright Guard & Content Filtering',
    16: '16. Section-Aware Semantic Chunking',
    17: '17. Human-in-the-Loop Verification Queue',
    18: '18. Large PDF Page-by-Page OCR Full-Text Extractor',
  };
  return names[id] || 'Core Service';
}

// Mapped service purposes
function getServicePurpose(id: number): string {
  const purposes: Record<number, string> = {
    1: 'Performs cryptographic hashing, Magic Number verification, extension checks, and malware sandbox routing.',
    2: 'Analyzes scan characteristics (DPI, brightness, contrast, blur, tilt) before sending files to structural engines.',
    3: 'Executes pixel-level correction, background normalizations, deskew, and adaptive thresholding.',
    4: 'Executes high-accuracy English and Bangla OCR with sub-character confidence score reports.',
    5: 'Segments and decodes marginal notes, signatures, hand-marked annotations, and judicial commentary.',
    6: 'Transforms page lines into semantic boxes: identifying titles, headings, paragraphs, and tables.',
    7: 'Overcomes multi-column layouts, sidebars, and newspapers to reconstruct natural reading flows.',
    8: 'Builds structured case files with judges, lawyers, court levels, filing dates, and judgments.',
    9: 'Extracts critical named entities including person names, statutory Acts, Sections, locations, and monetary values.',
    10: 'Scans and catalogs legal citations (e.g. DLR, BLD) and generates hypertext links to target precedents.',
    11: 'Analyzes covenants and identifies legal obligations, liability, penalties, and dispute resolution models.',
    12: 'Preserves grid boundaries to output clean Markdown tables from unstructured scans and files.',
    13: 'Predicts target legal document type and catalogs files using deep-learning confidence indices.',
    14: 'Divides judgment bodies or agreements into structural segments (e.g. facts, issues, findings, decision).',
    15: 'Excludes protected commentaries, verifying compliance with intellectual property and provenance guidelines.',
    16: 'Slices documents into optimized semantic chunks with metadata attributes, ready for high-accuracy RAG vectors.',
    17: 'Triggers human verification alerts for low-scoring parameters, logging audit history and manual changes.',
    18: 'Splits large documents/books (e.g. Specific Relief Act PDF) into high-fidelity page-by-page OCR streams, with full-text search capability and page jump indexes.',
  };
  return purposes[id] || '';
}

// Main dispatcher to render visual components for each of the 17 Services
function renderServiceContent(id: number, results: PipelineResults, document: LegalDocument) {
  switch (id) {
    case 1: // File Validation
      const val = results.validation;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">MIME DETECTION</span>
              <p className="text-sm font-semibold text-white mt-1">{val.mimeType}</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">MAGIC NUMBER</span>
              <p className="text-sm font-semibold text-white mt-1 font-mono">{val.magicBytes}</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 p-4 col-span-2">
              <span className="text-[10px] font-bold text-gold/80 uppercase">SHA-256 DIGITAL FINGERPRINT</span>
              <p className="text-xs font-semibold text-white mt-1 font-mono break-all">{val.sha256}</p>
            </div>
          </div>
          
          <div className="rounded-lg border border-emerald-500/15 bg-emerald-500/5 p-4 flex gap-3 mt-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-emerald-300">Security Report: {val.malwareStatus}</h4>
              <p className="text-xs text-emerald-400/80 mt-1 leading-relaxed">{val.securityDetails}</p>
            </div>
          </div>
        </div>
      );

    case 2: // Quality Assessment
      const q = results.quality;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="grid grid-cols-3 gap-3">
            <QualityGauge label="DPI Metrics" value={`${q.dpi}`} desc={q.dpi >= 300 ? 'Ideal' : 'Sub-optimal'} isPass={q.dpi >= 300} />
            <QualityGauge label="Contrast" value={`${q.contrastScore}%`} desc="Level" isPass={q.contrastScore > 50} />
            <QualityGauge label="Brightness" value={`${q.brightnessScore}%`} desc="Uniformity" isPass={q.brightnessScore > 40} />
          </div>

          <div className="rounded-lg border border-white/5 p-4 bg-white/5 mt-2">
            <span className="text-[10px] font-bold text-gold/80 uppercase">Tilt & SKEW Diagnostics</span>
            <div className="flex items-center gap-8 mt-2">
              <div>
                <span className="text-xs text-white/40">Skew Angle:</span>
                <p className="text-sm font-bold text-white font-mono">{q.skewAngle}°</p>
              </div>
              <div>
                <span className="text-xs text-white/40">Perspective Distort:</span>
                <p className="text-sm font-bold text-white">{q.hasPerspectiveDistortion ? 'Detected' : 'None'}</p>
              </div>
              <div>
                <span className="text-xs text-white/40">Noise Margin:</span>
                <p className="text-sm font-bold text-white font-mono">{q.noiseLevel}</p>
              </div>
            </div>
          </div>

          {q.recommendations.length > 0 ? (
            <div className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-4 mt-2">
              <h4 className="text-xs font-bold text-amber-300">Quality Alerts & Recommendations:</h4>
              <ul className="list-disc list-inside text-xs text-amber-400/80 mt-2 flex flex-col gap-1.5">
                {q.recommendations.map((rec, rIdx) => (
                  <li key={rIdx}>{rec}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-4 mt-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300">Document quality matches exact enterprise thresholds (Pass)</span>
            </div>
          )}
        </div>
      );

    case 3: // Image Enhancement
      const enh = results.enhancement;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <h4 className="text-xs font-bold text-white/90">Pixel-Correction Algorithms</h4>
              <div className="flex flex-col gap-2 mt-3 text-xs">
                <EnhanceBadge label="Skew Normalization" active={enh.deskewApplied} detail={enh.deskewAngle !== 0 ? `${enh.deskewAngle}° correction` : 'Not required'} />
                <EnhanceBadge label="Geometric Dewarping" active={enh.dewarpApplied} />
                <EnhanceBadge label="Perspective Correction" active={enh.perspectiveCorrected} />
              </div>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <h4 className="text-xs font-bold text-white/90">Aesthetic Normalization</h4>
              <div className="flex flex-col gap-2 mt-3 text-xs">
                <EnhanceBadge label="Adaptive Noise Reduction" active={enh.noiseReduced} />
                <EnhanceBadge label="Adaptive Background Flattening" active={enh.backgroundRemoved} />
                <EnhanceBadge label="Contrast Enhancement" active={enh.contrastEnhanced} />
              </div>
            </div>
          </div>

          {enh.enhancedImageUrl && (
            <div className="mt-3 rounded-lg border border-white/5 p-3 bg-white/5 flex items-center gap-4">
              <img src={enh.enhancedImageUrl} alt="Enhanced document thumb" className="h-16 w-16 object-cover rounded border border-white/10 bg-dark-bg" />
              <div>
                <span className="text-[10px] font-bold text-gold/80 uppercase">SUPER RESOLUTION CAPABILITY</span>
                <h4 className="text-xs font-bold text-white/90 mt-0.5">Pixel interpolation applied successfully</h4>
                <p className="text-[11px] text-white/40 mt-0.5">Auto-upscaled 2x using generative document restoration priors.</p>
              </div>
            </div>
          )}
        </div>
      );

    case 4: // OCR Engine
      const ocr = results.ocr;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/5 p-4">
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">DETECTED LANGUAGE</span>
              <p className="text-sm font-bold text-white mt-0.5">{ocr.detectedLanguage}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">AVG CHARACTER CONFIDENCE</span>
              <p className="text-sm font-bold text-white mt-0.5 font-mono">{ocr.averageConfidence}%</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">OCR LATENCY</span>
              <p className="text-sm font-bold text-white mt-0.5 font-mono">{ocr.ocrTimeMs} ms</p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4 relative">
            <span className="absolute top-2 right-2 rounded bg-white/5 text-[9px] font-mono font-bold text-white/30 px-1.5 py-0.5">Raw Text stream</span>
            <h4 className="text-xs font-bold text-white/90 mb-2">OCR Transcribed Stream</h4>
            <div className="max-h-[300px] overflow-y-auto bg-dark-bg border border-white/5 rounded p-3 font-mono text-xs leading-relaxed text-emerald-400 whitespace-pre-wrap select-text">
              {ocr.text}
            </div>
          </div>
        </div>
      );

    case 5: // Handwriting
      const hw = results.handwriting;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">HANDWRITING DETECTED</span>
              <p className="text-sm font-bold text-white mt-1">{hw.detected ? 'Yes' : 'None detected'}</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">MARGINAL ANNOTATIONS</span>
              <p className="text-sm font-bold text-white mt-1 font-mono">{hw.annotationsCount} instances</p>
            </div>
          </div>

          {hw.detected ? (
            <div className="rounded-lg border border-indigo-500/15 bg-indigo-500/5 p-4">
              <h4 className="text-xs font-bold text-indigo-300">Decoded Handwritten Annotations:</h4>
              <p className="text-xs text-indigo-300 font-mono mt-2 italic border-l-2 border-indigo-500 pl-3 py-2 bg-dark-bg rounded border border-white/5">
                "{hw.transcription}"
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-[10px] text-white/40">
                <span className="font-bold uppercase text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded border border-indigo-500/20">Confidence</span>
                <span>{hw.confidence}% transcription reliability</span>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-white/5 p-4 text-center text-xs text-white/40 bg-white/5">
              No handwritten margins, judicial stamps, or signature annotations identified on this page sheet.
            </div>
          )}
        </div>
      );

    case 6: // Layout analysis
      const lItems = results.layout.items;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <p className="text-xs text-white/40">Layout analysis segments unstructured OCR blocks into logical legal tags with coordinate bounding boxes.</p>
          <div className="rounded-lg border border-white/5 p-4 bg-white/5">
            <span className="text-[10px] font-bold text-gold/80 uppercase">Layout tags distribution</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <TagBadge label="Title" count={lItems.filter(l => l.type === 'title').length} />
              <TagBadge label="Heading" count={lItems.filter(l => l.type === 'heading').length} />
              <TagBadge label="Paragraph" count={lItems.filter(l => l.type === 'paragraph').length} />
              <TagBadge label="Section" count={lItems.filter(l => l.type === 'section').length} />
              <TagBadge label="Tables" count={lItems.filter(l => l.type === 'table').length} />
              <TagBadge label="Footnote" count={lItems.filter(l => l.type === 'footnote').length} />
            </div>
          </div>

          <div className="rounded-lg border border-white/5">
            <div className="bg-white/5 px-4 py-2 text-xs font-bold border-b border-white/5 text-white/60 flex justify-between items-center">
              <span>Layout JSON Tree Preview</span>
              <span className="text-[9px] font-mono text-white/30">JSON output format</span>
            </div>
            <pre className="p-4 text-xs font-mono bg-dark-bg text-emerald-400 rounded-b max-h-[250px] overflow-y-auto overflow-x-auto select-text">
              {JSON.stringify(lItems.slice(0, 4), null, 2)}
              {'\n  // ... remaining layout tree'}
            </pre>
          </div>
        </div>
      );

    case 7: // Reading Order
      const ro = results.readingOrder;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="rounded-lg border border-white/5 bg-white/5 p-4 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">SEQUENCE COMPLEXITY</span>
              <p className="text-sm font-bold text-white mt-1">{ro.layoutComplexity}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-gold/80 uppercase">TOTAL LOGICAL BLOCKS</span>
              <p className="text-sm font-bold text-white mt-1 font-mono">{ro.orderedSequence.length} blocks</p>
            </div>
          </div>

          <div className="rounded-lg border border-white/5 p-4 bg-white/5">
            <h4 className="text-xs font-bold text-white/90 mb-3">Logical Flow Chart Reconstruction</h4>
            <div className="flex flex-wrap items-center gap-2">
              {ro.orderedSequence.map((seq, sIdx) => (
                <React.Fragment key={seq}>
                  <div className="flex items-center gap-1 bg-dark-bg border border-white/10 rounded px-3 py-1.5 shadow-sm text-xs font-mono text-white/85">
                    <span className="text-[9px] font-bold text-gold bg-white/10 px-1 rounded mr-1">#{sIdx + 1}</span>
                    <span>{seq}</span>
                  </div>
                  {sIdx < ro.orderedSequence.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-gold/60 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      );

    case 8: // Metadata
      const meta = results.metadata;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn" id="metadata-dossier-panel">
          <div className="rounded-lg border border-white/5 bg-white/5 p-4">
            <span className="text-[10px] font-bold text-gold/80 uppercase">Document Title</span>
            <p className="text-sm font-bold text-white mt-1">{meta.title || 'N/A'}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MetaRow label="Court" value={meta.court} />
            <MetaRow label="Bench" value={meta.bench} />
            <MetaRow label="Presiding Judge" value={meta.judge} />
            <MetaRow label="Case Number" value={meta.caseNumber} />
            <MetaRow label="Case Category" value={meta.caseType} />
            <MetaRow label="Judgment Date" value={meta.judgmentDate} />
            <MetaRow label="Filing Date" value={meta.filingDate} />
            <MetaRow label="Legal Domain" value={meta.legalDomain} />
            <MetaRow label="Appearing Counsel" value={meta.lawyers} />
            <MetaRow label="Litigant Parties" value={meta.parties} />
          </div>
        </div>
      );

    case 9: // Entity Extraction
      const ents = results.entities;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <p className="text-xs text-white/40">Legal Named Entity Recognition (NER) pipeline isolates critical subjects, statutory Acts, and locations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
            {ents.map((ent) => (
              <div key={ent.id} className="flex items-center justify-between rounded-lg border border-white/5 p-3 bg-white/5 hover:border-white/10 transition-all">
                <div>
                  <p className="text-xs font-semibold text-white">{ent.text}</p>
                  <span className="font-mono text-[9px] text-white/40">Confidence: {ent.confidence}%</span>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded border uppercase ${
                  ent.category === 'Person' || ent.category === 'Judge' || ent.category === 'Lawyer' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                  ent.category === 'Court' || ent.category === 'Organization' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                  ent.category === 'Act' || ent.category === 'Section' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                  'bg-white/5 border-white/10 text-white/60'
                }`}>
                  {ent.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case 10: // Citations
      const cits = results.citations;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn" id="citation-linker-panel">
          {cits.length > 0 ? (
            <div className="flex flex-col gap-3">
              {cits.map((cit) => (
                <div key={cit.id} className="rounded-lg border border-white/5 p-4 hover:border-white/10 transition-all bg-white/5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-gold text-dark-bg rounded font-mono">
                        {cit.reporter} REPORTER
                      </span>
                      <h4 className="text-sm font-bold text-white mt-2 font-mono">{cit.canonicalFormat}</h4>
                    </div>
                    {cit.year && (
                      <span className="text-xs text-white/40 font-semibold font-mono">Year: {cit.year}</span>
                    )}
                  </div>
                  
                  {cit.linkedCaseTitle && (
                    <div className="mt-3 border-t border-dashed border-white/5 pt-2.5">
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.2 rounded uppercase">
                        Matched Precedent Linked
                      </span>
                      <p className="text-xs font-semibold text-white mt-1 leading-normal">
                        {cit.linkedCaseTitle}
                      </p>
                      <p className="text-[10px] text-white/40 mt-0.5">Canonical volume resolution passed. Precedent registered in Hayat legal database.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/5 p-8 text-center text-white/40 text-xs bg-white/5">
              No statutory judicial citations (DLR, BLD, PLD, MLR) matched in this document segment.
            </div>
          )}
        </div>
      );

    case 11: // Clause Extraction
      const clauses = results.clauses;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          {clauses.length > 0 ? (
            <div className="flex flex-col gap-4">
              {clauses.map((cl) => (
                <div key={cl.id} className="rounded-lg border border-white/5 p-4 bg-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full uppercase">
                      {cl.type} CLAUSE
                    </span>
                    <span className="font-mono text-[10px] text-white/40">Confidence: {cl.confidence}%</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2">{cl.title}</h4>
                  
                  <div className="bg-dark-bg border border-white/5 rounded p-3 text-xs text-white/80 mt-3 font-mono leading-relaxed max-h-[120px] overflow-y-auto">
                    {cl.text}
                  </div>

                  <div className="mt-3 bg-white/5 p-2.5 rounded text-xs text-white/60">
                    <span className="font-bold text-white">Covenant Summary: </span>{cl.summary}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/5 p-8 text-center text-white/40 text-xs bg-white/5">
              No specific contract covenants or governing legal clauses extracted from this filing.
            </div>
          )}
        </div>
      );

    case 12: // Table extraction
      const tabs = results.tables;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn" id="table-extractor-panel">
          {tabs && tabs.length > 0 ? (
            <div className="flex flex-col gap-6">
              {tabs.map((tab) => (
                <div key={tab.id} className="rounded-lg border border-white/5">
                  <div className="bg-white/5 border-b border-white/5 px-4 py-2 flex justify-between items-center text-xs font-bold text-white/80">
                    <span>{tab.title || 'Extracted Table'}</span>
                    <span className="font-mono text-[10px] text-white/40">Parsed from scan grid</span>
                  </div>
                  
                  {/* Data Grid table */}
                  <div className="overflow-x-auto p-4">
                    <table className="min-w-full divide-y divide-white/5 text-xs">
                      <thead className="bg-white/5 font-bold text-gold">
                        <tr>
                          {tab.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-3 py-2 text-left uppercase tracking-wider border border-white/5">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 bg-dark-card">
                        {tab.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/5">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-3 py-2 border border-white/5 text-white/80">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Markdown toggler */}
                  <div className="border-t border-white/5">
                    <details className="group">
                      <summary className="bg-white/5 px-4 py-2 text-[11px] font-bold text-white/40 cursor-pointer hover:bg-white/10 select-none list-none flex justify-between items-center">
                        <span>Show Markdown Codeblock</span>
                        <Code className="h-3.5 w-3.5 text-gold" />
                      </summary>
                      <pre className="p-3 bg-dark-bg text-emerald-400 text-xs font-mono overflow-x-auto max-h-[150px] rounded-b border-t border-white/5">
                        {tab.markdown}
                      </pre>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/5 p-8 text-center text-white/40 text-xs bg-white/5">
              No financial tables, registries, annexures, or structured data grids identified in this legal document.
            </div>
          )}
        </div>
      );

    case 13: // Classification
      const cls = results.classification;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="rounded-lg border border-white/5 bg-white/5 p-4 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">CLASSIFIED PRIMARY TYPE</span>
              <p className="text-base font-bold text-white mt-1 capitalize">{cls.primaryClass}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-gold/80 uppercase">CLASSIFIER CONFIDENCE</span>
              <p className="text-base font-bold text-gold mt-1 font-mono">{cls.confidence}%</p>
            </div>
          </div>

          <div className="rounded-lg border border-white/5 p-4 bg-white/5">
            <h4 className="text-xs font-bold text-white/90 mb-3">Probability Distribution Model</h4>
            <div className="flex flex-col gap-3">
              {cls.allScores.map((score, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-semibold text-white/80">
                    <span className="capitalize">{score.type}</span>
                    <span className="font-mono text-white">{score.score}%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-bg rounded overflow-hidden">
                    <div className="h-full bg-gold rounded shadow-[0_0_10px_rgba(212,175,55,0.3)]" style={{ width: `${score.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 14: // Segmentation
      const segs = results.segmentation?.segments || [];
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <p className="text-xs text-white/40">Document Segmentation isolates chronological phases of the filing, preparing structured bodies for indexing.</p>
          
          <div className="relative border-l border-white/5 ml-3 pl-6 flex flex-col gap-5 mt-2">
            {segs.map((seg, sIdx) => (
              <div key={seg.id} className="relative group animate-fadeIn">
                <div className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold font-mono text-[9px] font-bold text-dark-bg shadow-[0_0_8px_rgba(212,175,55,0.3)] ring-4 ring-dark-bg">
                  {sIdx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white capitalize">{seg.name}</span>
                    <span className="text-[10px] text-white/40 font-semibold">— {seg.title}</span>
                  </div>
                  <p className="text-xs text-white/60 mt-1.5 leading-relaxed line-clamp-2 italic border-l-2 border-white/10 pl-3">
                    "{seg.text}"
                  </p>
                  <div className="text-[9px] text-white/40 font-mono mt-1">
                    Index range: {seg.startCharIndex} to {seg.endCharIndex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 15: // Copyright
      const cp = results.copyright;
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">COPYRIGHT MATERIAL STATUS</span>
              <p className="text-sm font-bold text-white mt-1">
                {cp.copyrightSectionsFound ? 'Restricted content identified' : 'Safe / Public Domain Text'}
              </p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 p-4">
              <span className="text-[10px] font-bold text-gold/80 uppercase">PUBLIC DOMAIN DENSITY</span>
              <p className="text-sm font-bold text-gold mt-1 font-mono">{cp.publicDomainPercentage}%</p>
            </div>
          </div>

          <div className="rounded-lg border border-white/5 p-4 bg-white/5">
            <span className="text-[10px] font-bold text-gold/80 uppercase">PROVENANCE & CONTENT VERACITY LOGS</span>
            <p className="text-xs text-white/70 leading-relaxed mt-2 font-mono bg-dark-bg p-3 border border-white/5 rounded">
              {cp.provenanceRecord}
            </p>
            <div className="flex items-center gap-1 text-[10px] text-white/40 mt-2.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Checked against local registry of public statutes & judgments</span>
            </div>
          </div>
        </div>
      );

    case 16: // Semantic chunking
      const chs = results.chunking?.chunks || [];
      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="rounded-lg border border-white/5 bg-white/5 p-4 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">SEMANTIC RETRIEVAL CHUNKS</span>
              <p className="text-sm font-bold text-white mt-1">{chs.length} vectors prepared</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-gold/80 uppercase">MAX EMBEDDING LIMIT</span>
              <p className="text-sm font-bold text-white mt-1 font-mono">512 Tokens</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1">
            {chs.map((chk) => (
              <div key={chk.id} className="rounded-lg border border-white/5 p-3 bg-white/5 hover:border-white/10 transition-all animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2 text-[10px] font-mono text-white/40">
                  <span className="font-bold text-gold">{chk.headingContext}</span>
                  <span>{chk.tokens} Tokens</span>
                </div>
                <p className="text-xs text-white/80 font-mono leading-relaxed">
                  {chk.text}
                </p>
                {chk.citations.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap items-center mt-2 pt-2 border-t border-dashed border-white/5">
                    <span className="text-[9px] font-bold text-white/30">Matched Context:</span>
                    {chk.citations.map((cName, cIdx) => (
                      <span key={cIdx} className="bg-dark-bg border border-white/10 text-[9px] px-1.5 py-0.2 rounded font-mono text-white/60">
                        {cName}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 17: // Confidence / Human Review
      const rev = document.review;
      const isApproved = rev?.isApproved || false;

      return (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/5 bg-white/5 p-4">
            <div>
              <span className="text-[10px] font-bold text-gold/80 uppercase">HUMAN REVIEW STATUS</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className={`inline-block h-2 w-2 rounded-full ${isApproved ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-pulse'}`} />
                <span className="text-sm font-bold text-white">
                  {isApproved ? 'APPROVED & AUDITED' : 'PENDING HUMAN APPROVAL'}
                </span>
              </div>
            </div>

            {isApproved && rev?.reviewedBy && (
              <div className="text-right">
                <span className="text-[10px] font-bold text-white/40 uppercase">AUDITED BY</span>
                <p className="text-xs font-semibold text-white/80 mt-1">{rev.reviewedBy}</p>
                <p className="text-[10px] text-white/40 mt-0.5 font-mono">{rev.reviewedAt}</p>
              </div>
            )}
          </div>

          <div className="rounded-lg border border-white/5 p-4 bg-white/5">
            <h4 className="text-xs font-bold text-white/90 mb-2">Automated Extraction Warning Logs</h4>
            <div className="flex flex-col gap-2">
              {rev?.validationWarnings && rev.validationWarnings.length > 0 ? (
                rev.validationWarnings.map((warn, wIdx) => (
                  <div key={wIdx} className="flex gap-2 items-start rounded bg-amber-500/5 border border-amber-500/15 p-2 text-xs text-amber-400">
                    <AlertCircle className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>{warn}</span>
                  </div>
                ))
              ) : (
                <div className="flex gap-2 items-center rounded bg-emerald-500/5 border border-emerald-500/15 p-2.5 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>All core layout bounds, signatures, and case citations resolved with zero critical system warnings.</span>
                </div>
              )}
            </div>
          </div>

          {!isApproved && (
            <div className="rounded-lg border border-white/5 bg-white/5 p-3.5 flex items-center justify-between text-xs text-white/60">
              <span>Low accuracy or crucial parameters should be manually certified inside the corrector workspace.</span>
              <span className="font-bold text-gold flex items-center gap-0.5 shrink-0 pl-4 border-l border-white/10">
                Use Review Tool <CornerDownRight className="h-3.5 w-3.5" />
              </span>
            </div>
          )}
        </div>
      );

    case 18: // Large Document Full-Text Extractor
      return <LargePDFExtractor document={document} />;

    default:
      return null;
  }
}

// Sub-components
interface QualityGaugeProps {
  label: string;
  value: string;
  desc: string;
  isPass: boolean;
}
function QualityGauge({ label, value, desc, isPass }: QualityGaugeProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/5 p-3.5 hover:shadow-sm transition-all flex flex-col justify-between h-24">
      <span className="text-[10px] font-bold text-gold/80 uppercase">{label}</span>
      <div className="flex items-baseline justify-between mt-1">
        <span className="text-xl font-bold font-mono text-white">{value}</span>
        <span className={`text-[10px] font-bold uppercase px-1.5 py-0.2 rounded border ${
          isPass ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
        }`}>
          {desc}
        </span>
      </div>
    </div>
  );
}

interface EnhanceBadgeProps {
  label: string;
  active: boolean;
  detail?: string;
}
function EnhanceBadge({ label, active, detail }: EnhanceBadgeProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
      <span className="text-white/70">{label}</span>
      <div className="flex items-center gap-2">
        {detail && <span className="text-[10px] text-white/40 font-mono">{detail}</span>}
        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${
          active ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white/5 border-white/5 text-white/30'
        }`}>
          {active ? 'APPLIED' : 'SKIPPED'}
        </span>
      </div>
    </div>
  );
}

interface MetaRowProps {
  label: string;
  value?: string;
}
function MetaRow({ label, value }: MetaRowProps) {
  return (
    <div className="border-b border-white/5 pb-1.5">
      <span className="text-[10px] font-bold text-gold/80 uppercase">{label}</span>
      <p className="text-xs font-semibold text-white/90 mt-0.5 truncate" title={value}>
        {value || <span className="text-white/20">N/A</span>}
      </p>
    </div>
  );
}

interface TagBadgeProps {
  label: string;
  count: number;
}
function TagBadge({ label, count }: TagBadgeProps) {
  return (
    <span className="flex items-center gap-1.5 bg-dark-bg border border-white/10 rounded px-2.5 py-1 text-xs font-mono text-white/80">
      <span className="font-bold text-gold">{label}</span>
      <span className="bg-white/10 text-[10px] font-bold px-1 rounded text-white/60">{count}</span>
    </span>
  );
}
