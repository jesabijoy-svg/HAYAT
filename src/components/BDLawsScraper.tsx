import React, { useState } from 'react';
import { Globe, Search, Download, CheckCircle, AlertCircle, Loader2, Info, ExternalLink, FileText, Database } from 'lucide-react';
import { LegalDocument } from '../types';

interface BDLawsScraperProps {
  onImportDocument: (doc: LegalDocument) => void;
}

export default function BDLawsScraper({ onImportDocument }: BDLawsScraperProps) {
  const [url, setUrl] = useState('http://bdlaws.minlaw.gov.bd/act-36.html');
  const [isScraping, setIsScraping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [scrapedDoc, setScrapedDoc] = useState<LegalDocument | null>(null);

  // Common Presets in Bangladesh laws database
  const presets = [
    {
      name: 'The Contract Act, 1872',
      actNo: 'Act No. IX of 1872',
      url: 'http://bdlaws.minlaw.gov.bd/act-36.html',
      description: 'The fundamental law governing agreements, proposals, consent, and damages for breach in Bangladesh.'
    },
    {
      name: 'The Penal Code, 1860',
      actNo: 'Act No. XLV of 1860',
      url: 'http://bdlaws.minlaw.gov.bd/act-11.html',
      description: 'The primary penal code of Bangladesh, establishing offenses, liabilities, and punishments.'
    },
    {
      name: 'The Code of Criminal Procedure, 1898',
      actNo: 'Act No. V of 1898',
      url: 'http://bdlaws.minlaw.gov.bd/act-75.html',
      description: 'Consolidates and amends the law relating to the constitution, jurisdiction, and procedures of criminal courts.'
    }
  ];

  const handleScrape = async (targetUrl: string) => {
    setIsScraping(true);
    setError(null);
    setWarning(null);
    setScrapedDoc(null);

    try {
      const response = await fetch('/api/scrape-bdlaws', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: targetUrl }),
      });

      if (!response.ok) {
        throw new Error(`Scraper failed with status ${response.status}`);
      }

      const data = await response.json();
      if (data.success && data.document) {
        setScrapedDoc(data.document);
        if (data.warning) {
          setWarning(data.warning);
        }
      } else {
        throw new Error(data.error || 'Scraper failed to return document structure');
      }
    } catch (err: any) {
      console.error('Scrape error:', err);
      setError(err.message || 'Connection lost during web scraping cycle.');
    } finally {
      setIsScraping(false);
    }
  };

  return (
    <div className="bg-dark-card border border-white/5 rounded-xl p-6 space-y-6" id="bdlaws-scraper-container">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
        <div>
          <div className="flex items-center gap-2 text-gold">
            <Globe className="h-5 w-5" />
            <span className="text-[10px] font-bold tracking-widest uppercase font-mono">Public Domain Cataloger</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">BDLaws Scraper & Compiler</h2>
          <p className="text-xs text-white/45 mt-1">
            Crawl, scrape, and structure laws and codes directly from the Bangladesh Ministry of Law's bdlaws.minlaw.gov.bd database.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs bg-gold/10 text-gold border border-gold/20 px-3 py-1.5 rounded-lg">
          <Database className="h-4 w-4" />
          <span>Zero-Hallucination Legal Compiler</span>
        </div>
      </div>

      {/* Input Bar & Search */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-white/60 block font-mono">Target Law Database URL</label>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white/30">
              <Globe className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-dark-bg/60 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50"
              placeholder="http://bdlaws.minlaw.gov.bd/act-36.html"
              id="scraped-url-input"
            />
          </div>
          <button
            onClick={() => handleScrape(url)}
            disabled={isScraping || !url}
            className="bg-gold hover:bg-gold-light text-dark-bg text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            id="scraped-url-btn"
          >
            {isScraping ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Scraping Site...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Fetch & Scrape
              </>
            )}
          </button>
        </div>
      </div>

      {/* Act Presets */}
      <div className="space-y-3">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 block">Statutory Act Templates</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {presets.map((preset, idx) => (
            <div
              key={idx}
              onClick={() => {
                setUrl(preset.url);
                handleScrape(preset.url);
              }}
              className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                url === preset.url
                  ? 'bg-gold/5 border-gold/30 text-white'
                  : 'bg-dark-bg/40 border-white/5 hover:border-white/10 text-white/80'
              }`}
            >
              <div className="text-xs font-bold text-gold flex justify-between items-center">
                <span>{preset.name}</span>
                <ExternalLink className="h-3 w-3 text-white/30" />
              </div>
              <div className="text-[10px] text-white/40 font-mono mt-0.5">{preset.actNo}</div>
              <p className="text-[11px] text-white/45 mt-2 line-clamp-2 leading-relaxed">
                {preset.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Error & Warning Display */}
      {error && (
        <div className="flex items-start gap-3 bg-red-950/20 border border-red-900/30 text-red-400 p-4 rounded-lg text-xs leading-relaxed">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <div>
            <span className="font-bold block">Scraping Interrupted</span>
            <p className="mt-0.5 text-white/60">
              {error}. We recommend using one of the pre-loaded templates above to bypass public firewalls and fetch the clean compiled laws.
            </p>
          </div>
        </div>
      )}

      {warning && (
        <div className="flex items-start gap-3 bg-amber-950/20 border border-amber-900/30 text-amber-400 p-4 rounded-lg text-xs leading-relaxed">
          <Info className="h-4 w-4 mt-0.5 shrink-0" />
          <div>
            <span className="font-bold block">Scraper Network Redirect</span>
            <p className="mt-0.5 text-white/60">{warning}</p>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isScraping && (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-dark-bg/30 border border-white/5 rounded-lg h-[300px]">
          <Loader2 className="h-8 w-8 text-gold animate-spin mb-3" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">Crawling Laws Portal</span>
          <p className="text-[11px] text-white/40 mt-2 max-w-sm leading-relaxed">
            Downloading index files from <span className="font-mono text-gold/80">bdlaws.minlaw.gov.bd</span>, extracting document markup, stripping script indices, and running zero-hallucination Gemini schema compiler...
          </p>
        </div>
      )}

      {/* Scraped Preview Results */}
      {scrapedDoc && (
        <div className="space-y-4 border border-gold/10 bg-gold/5 p-5 rounded-lg animate-fade-in" id="scraped-results-preview">
          
          {/* Header Action Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gold/20 p-2.5 rounded-lg border border-gold/30">
                <FileText className="h-5 w-5 text-gold" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gold font-bold uppercase">Success • Laws Structured</span>
                <h3 className="text-sm font-bold text-white mt-0.5">{scrapedDoc.results?.metadata.title}</h3>
                <p className="text-[10px] text-white/40 font-mono">{scrapedDoc.results?.metadata.caseNumber || 'Compiled Statute'}</p>
              </div>
            </div>
            
            <button
              onClick={() => onImportDocument(scrapedDoc)}
              className="bg-gold hover:bg-gold-light text-dark-bg text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/10"
              id="import-scraped-btn"
            >
              <Download className="h-4 w-4 animate-bounce" />
              Import into Workspace
            </button>
          </div>

          {/* Quick Analytics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-dark-bg/40 p-3 rounded-lg border border-white/5 text-xs">
            <div>
              <span className="text-[9px] text-white/30 uppercase tracking-wider block">Legal Domain</span>
              <span className="font-semibold text-white/80 block mt-0.5">{scrapedDoc.results?.metadata.legalDomain}</span>
            </div>
            <div>
              <span className="text-[9px] text-white/30 uppercase tracking-wider block">Jurisdiction</span>
              <span className="font-semibold text-white/80 block mt-0.5">{scrapedDoc.results?.metadata.court}</span>
            </div>
            <div>
              <span className="text-[9px] text-white/30 uppercase tracking-wider block">Sections Extracted</span>
              <span className="font-semibold text-white/80 block mt-0.5">{scrapedDoc.results?.layout.items.filter(item => item.type === 'section').length} Sections</span>
            </div>
            <div>
              <span className="text-[9px] text-white/30 uppercase tracking-wider block">Digital Fingerprint</span>
              <span className="font-mono text-gold/80 block mt-0.5 text-[10px] truncate">{scrapedDoc.results?.validation.fingerprint}</span>
            </div>
          </div>

          {/* Legislative Body Preview */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 block">Statutory Text Preview</span>
            <div className="bg-dark-bg/60 border border-white/5 rounded-lg p-4 h-[250px] overflow-y-auto text-xs font-mono leading-relaxed text-white/70 space-y-4 select-text">
              <div className="text-center pb-2 border-b border-white/5">
                <span className="text-sm font-bold text-gold uppercase tracking-wider block">{scrapedDoc.results?.metadata.title}</span>
                <span className="text-[10px] text-white/45 block mt-0.5">{scrapedDoc.results?.metadata.bench}</span>
              </div>
              
              <div className="text-[11px] italic text-white/40">
                {scrapedDoc.results?.ocr.text.split('\n\n').slice(2, 4).join('\n\n')}
              </div>

              <div className="space-y-4 mt-4 pt-4 border-t border-white/5">
                {scrapedDoc.results?.clauses.map((clause, idx) => (
                  <div key={idx} className="border-l-2 border-gold/30 pl-3 py-1 space-y-1 bg-white/[0.01] rounded-r p-2">
                    <span className="text-[10px] text-gold font-bold">{clause.title}</span>
                    <p className="text-[11px] text-white/75 italic">"{clause.text}"</p>
                    <p className="text-[10px] text-white/40"><span className="text-gold/50">Core Impact:</span> {clause.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guidance Info */}
          <div className="flex items-center gap-2.5 text-[10px] text-white/40 bg-white/[0.02] p-2.5 rounded border border-white/5 leading-relaxed">
            <Info className="h-4 w-4 text-gold shrink-0" />
            <span>
              Once imported, this statute will be cataloged in your active documents database. You will be able to visual its pipeline services, extract tabular data, inspect key clauses, and query it in the Knowledge Graph.
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
