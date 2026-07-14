import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, Undo, RefreshCw, Layers } from 'lucide-react';
import { LegalDocument, DocumentMetadata } from '../types';

interface HumanReviewToolProps {
  document: LegalDocument;
  onUpdateDocument: (updated: LegalDocument) => void;
}

export default function HumanReviewTool({ document, onUpdateDocument }: HumanReviewToolProps) {
  const [formData, setFormData] = useState<Partial<DocumentMetadata>>({});
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const results = document.results;
  const review = document.review;

  useEffect(() => {
    if (results?.metadata) {
      setFormData({ ...results.metadata });
      setHasChanges(false);
      setIsSaved(false);
    }
  }, [document.id, results]);

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-card p-10 text-center h-[350px]">
        <Layers className="h-8 w-8 text-gold animate-pulse mb-3" />
        <span className="text-sm font-semibold text-white/90">Awaiting Extraction Data</span>
        <span className="text-xs text-white/40 max-w-xs mt-1">Please process a document first to activate the Human Review Queue workspace.</span>
      </div>
    );
  }

  const handleFieldChange = (key: keyof DocumentMetadata, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setHasChanges(true);
    setIsSaved(false);
  };

  const handleSaveReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!results) return;

    // Build corrections log
    const correctedList: any[] = [];
    const origMeta = results.metadata as any;
    const currentMeta = formData as any;

    Object.keys(currentMeta).forEach((key) => {
      if (currentMeta[key] !== origMeta[key]) {
        correctedList.push({
          field: key,
          originalValue: origMeta[key] || 'Empty',
          correctedValue: currentMeta[key] || 'Empty',
        });
      }
    });

    // Update document state
    const updatedDoc: LegalDocument = {
      ...document,
      status: 'completed',
      review: {
        isApproved: true,
        reviewedBy: 'nbt06654@gmail.com', // Authenticated user
        reviewedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
        fieldsCorrected: [...(review?.fieldsCorrected || []), ...correctedList],
        validationWarnings: [], // Cleared upon manual review and approval
      },
      results: {
        ...results,
        metadata: {
          ...results.metadata,
          ...formData,
        },
      },
    };

    onUpdateDocument(updatedDoc);
    setHasChanges(false);
    setIsSaved(true);
  };

  const handleReset = () => {
    if (results?.metadata) {
      setFormData({ ...results.metadata });
      setHasChanges(false);
      setIsSaved(false);
    }
  };

  const isApproved = review?.isApproved || false;

  return (
    <div className="rounded-xl border border-white/5 bg-dark-card p-5 animate-fadeIn" id="human-review-corrector-workspace">
      <div className="border-b border-white/5 pb-4 mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white/95">Human Corrector & Verification Workspace</h3>
          <p className="text-xs text-white/40 mt-0.5">Certify extracted values, make manual edits, and approve to indexed legal state.</p>
        </div>

        {isApproved && (
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono px-2.5 py-1 rounded shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Document Approved & Audited</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSaveReview} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Document Title */}
          <div className="col-span-2">
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Document Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs font-semibold focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Legal Meta - Court */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Court Jurisdiction</label>
            <input
              type="text"
              value={formData.court || ''}
              onChange={(e) => handleFieldChange('court', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Legal Meta - Bench */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Bench</label>
            <input
              type="text"
              value={formData.bench || ''}
              onChange={(e) => handleFieldChange('bench', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Legal Meta - Presiding Judge */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Presiding Judge</label>
            <input
              type="text"
              value={formData.judge || ''}
              onChange={(e) => handleFieldChange('judge', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Legal Meta - Case Number */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Case Reference Number</label>
            <input
              type="text"
              value={formData.caseNumber || ''}
              onChange={(e) => handleFieldChange('caseNumber', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs font-mono focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Parties */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Litigant Parties</label>
            <input
              type="text"
              value={formData.parties || ''}
              onChange={(e) => handleFieldChange('parties', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Lawyers */}
          <div>
            <label className="block text-[10px] font-bold text-gold/80 uppercase tracking-[0.15em]">Representing Advocates</label>
            <input
              type="text"
              value={formData.lawyers || ''}
              onChange={(e) => handleFieldChange('lawyers', e.target.value)}
              className="mt-1 block w-full rounded border border-white/10 bg-dark-bg/60 text-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        {/* Audit Trail of Corrections */}
        {review && review.fieldsCorrected.length > 0 && (
          <div className="rounded-lg border border-white/5 bg-white/5 p-3 mt-4">
            <span className="text-[10px] font-bold text-gold uppercase block mb-1 tracking-[0.15em]">Human Modification Audit Trail</span>
            <div className="flex flex-col gap-1.5 mt-2">
              {review.fieldsCorrected.map((corr, cIdx) => (
                <div key={cIdx} className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
                  <span className="font-semibold capitalize text-white/90">{corr.field}:</span>
                  <span className="font-mono bg-white/5 border border-white/5 px-1 text-[11px] text-white/40 rounded line-through">{corr.originalValue}</span>
                  <span className="text-white/30">→</span>
                  <span className="font-mono bg-emerald-500/10 border border-emerald-500/20 px-1 text-[11px] text-emerald-400 rounded font-semibold">{corr.correctedValue}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-5">
          <div>
            {isSaved && (
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Review logged & approved to indexed database successfully
              </span>
            )}
            {hasChanges && (
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-400" /> Unsaved corrections in workspace
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {hasChanges && (
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              >
                <Undo className="h-3.5 w-3.5 text-gold" />
                <span>Revert Changes</span>
              </button>
            )}

            <button
              type="submit"
              disabled={!hasChanges && isApproved}
              className={`flex items-center gap-1.5 rounded-lg px-4.5 py-2 text-xs font-bold text-white shadow-sm transition-all cursor-pointer ${
                hasChanges
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                  : 'bg-gold text-dark-bg hover:bg-gold-600 disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_12px_rgba(212,175,55,0.2)]'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{isApproved && !hasChanges ? 'Approved & Locked' : 'Certify & Save to DB'}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
