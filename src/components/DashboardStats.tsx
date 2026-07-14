import React from 'react';
import { Layers, FileText, CheckCircle, Scale, Database, ShieldAlert, Cpu } from 'lucide-react';
import { LegalDocument } from '../types';

interface DashboardStatsProps {
  documents: LegalDocument[];
}

export default function DashboardStats({ documents }: DashboardStatsProps) {
  const totalDocs = documents.length;
  const completedDocs = documents.filter((d) => d.status === 'completed' || d.status === 'review_required').length;
  const pendingReview = documents.filter((d) => d.status === 'review_required' || !d.review?.isApproved).length;

  // Calculate averages
  let totalOcrConfidence = 0;
  let ocrCount = 0;
  let totalQualityScore = 0;
  let qualityCount = 0;

  const docTypeCount: Record<string, number> = {};
  const frequentlyCitedActs: Record<string, number> = {};

  documents.forEach((doc) => {
    const res = doc.results;
    if (res) {
      if (res.ocr) {
        totalOcrConfidence += res.ocr.averageConfidence;
        ocrCount++;
      }
      if (res.quality) {
        // Quality score is 100 - blurScore
        totalQualityScore += Math.max(0, 100 - res.quality.blurScore);
        qualityCount++;
      }
      
      const type = res.metadata.documentType || 'other';
      docTypeCount[type] = (docTypeCount[type] || 0) + 1;

      // Collect cited Acts
      res.entities.forEach((ent) => {
        if (ent.category === 'Act') {
          frequentlyCitedActs[ent.text] = (frequentlyCitedActs[ent.text] || 0) + 1;
        }
      });
    }
  });

  const avgOcrConfidence = ocrCount > 0 ? (totalOcrConfidence / ocrCount).toFixed(1) : '0';
  const avgQualityScore = qualityCount > 0 ? (totalQualityScore / qualityCount).toFixed(0) : '0';

  const docTypes = Object.entries(docTypeCount).map(([type, count]) => ({ type, count }));
  const sortedCitations = Object.entries(frequentlyCitedActs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" id="dashboard-statistics-grid">
      
      {/* Stat Widget - Total Repository */}
      <div className="rounded-xl border border-white/5 bg-dark-card p-4 flex items-center gap-4 hover:border-gold/20 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white/5 text-gold border border-white/10 shadow-[0_0_12px_rgba(212,175,55,0.05)]">
          <Database className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">Legal Repository</span>
          <p className="text-xl font-bold text-white mt-0.5">{totalDocs} Documents</p>
          <span className="text-[10px] text-white/50 font-medium">{completedDocs} parsed pipeline states</span>
        </div>
      </div>

      {/* Stat Widget - OCR Avg Confidence */}
      <div className="rounded-xl border border-white/5 bg-dark-card p-4 flex items-center gap-4 hover:border-gold/20 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-gold/10 text-gold border border-gold/20 shadow-[0_0_12px_rgba(212,175,55,0.1)]">
          <Cpu className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">OCR Accuracy Avg</span>
          <p className="text-xl font-bold text-gold mt-0.5 font-mono">{avgOcrConfidence}%</p>
          <span className="text-[10px] text-white/50 font-medium">Decoded mixed char sets</span>
        </div>
      </div>

      {/* Stat Widget - Quality score */}
      <div className="rounded-xl border border-white/5 bg-dark-card p-4 flex items-center gap-4 hover:border-gold/20 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
          <CheckCircle className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">Scan Integrity Score</span>
          <p className="text-xl font-bold text-white mt-0.5 font-mono">{avgQualityScore}/100</p>
          <span className="text-[10px] text-white/50 font-medium">After deskew & denoising</span>
        </div>
      </div>

      {/* Stat Widget - Verification Queue */}
      <div className="rounded-xl border border-white/5 bg-dark-card p-4 flex items-center gap-4 hover:border-gold/20 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.1)]">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">Review Queue</span>
          <p className="text-xl font-bold text-white mt-0.5">{pendingReview} Cases</p>
          <span className="text-[10px] text-white/50 font-medium">Requires human certs</span>
        </div>
      </div>

      {/* Secondary Row: Frequently Cited Statutes and classified distributions */}
      {totalDocs > 0 && (
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Frequently Cited Statutes */}
          <div className="rounded-xl border border-white/5 bg-dark-card p-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90 mb-3">Frequently Cited Statutes</h4>
            <div className="flex flex-col gap-2.5">
              {sortedCitations.length > 0 ? (
                sortedCitations.map(([act, count], actIdx) => (
                  <div key={actIdx} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs font-semibold text-white/80">
                      <span className="truncate pr-4">{act}</span>
                      <span className="font-mono text-[10px] text-gold bg-gold/10 border border-gold/15 px-1.5 py-0.2 rounded shrink-0">
                        {count} citations
                      </span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden">
                      <div className="h-full bg-gold rounded" style={{ width: `${Math.min(100, (count / totalDocs) * 100)}%` }} />
                    </div>
                  </div>
                ))
              ) : (
                <span className="text-xs text-white/40 italic">No citations cataloged yet.</span>
              )}
            </div>
          </div>

          {/* Document Types classified distribution */}
          <div className="rounded-xl border border-white/5 bg-dark-card p-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90 mb-3">Document Distributions</h4>
            <div className="flex flex-wrap gap-2">
              {docTypes.map(({ type, count }) => (
                <div key={type} className="flex items-center gap-2 rounded border border-white/5 px-3 py-1.5 bg-white/5 hover:border-gold/20 transition-all">
                  <FileText className="h-4 w-4 text-gold/80" />
                  <div>
                    <span className="capitalize text-xs font-semibold text-white/80">{type}</span>
                    <span className="font-mono text-[10px] text-white/40 ml-1.5">({count})</span>
                  </div>
                </div>
              ))}
              {docTypes.length === 0 && (
                <span className="text-xs text-white/40 italic">No files classified yet.</span>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
