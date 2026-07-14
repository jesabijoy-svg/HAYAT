export type DocumentType =
  | 'judgment'
  | 'contract'
  | 'petition'
  | 'order'
  | 'affidavit'
  | 'deed'
  | 'other';

export type PipelineStatus = 'idle' | 'running' | 'completed' | 'failed' | 'skipped';

export interface DocumentMetadata {
  title?: string;
  documentType?: DocumentType;
  language?: 'English' | 'Bangla' | 'Mixed';
  author?: string;
  creationDate?: string;
  modifiedDate?: string;
  version?: string;
  fileSize?: string;
  pageCount?: number;
  
  // Legal-specific metadata
  court?: string;
  bench?: string;
  judge?: string;
  caseNumber?: string;
  caseType?: string;
  filingDate?: string;
  judgmentDate?: string;
  parties?: string;
  lawyers?: string;
  subjectArea?: string;
  legalDomain?: string;
}

export interface LegalEntity {
  id: string;
  text: string;
  category: 'Person' | 'Organization' | 'Court' | 'Judge' | 'Lawyer' | 'Act' | 'Section' | 'Date' | 'Money' | 'Location' | 'Regulation';
  confidence: number;
  offsetStart?: number;
  offsetEnd?: number;
}

export interface LegalCitation {
  id: string;
  rawText: string;
  reporter: 'DLR' | 'BLD' | 'BLT' | 'MLR' | 'ADC' | 'PLD' | 'AIR' | 'SCC' | 'Neutral' | 'Internal';
  volume?: string;
  page?: string;
  year?: string;
  canonicalFormat: string;
  linkedCaseTitle?: string;
}

export interface LegalClause {
  id: string;
  type: 'Definition' | 'Jurisdiction' | 'Obligations' | 'Rights' | 'Conditions' | 'Exceptions' | 'Penalties' | 'Remedies' | 'Arbitration' | 'Confidentiality' | 'Termination' | 'Limitation';
  title: string;
  text: string;
  confidence: number;
  summary: string;
}

export interface ExtractedTable {
  id: string;
  title?: string;
  headers: string[];
  rows: string[][];
  markdown: string;
  html?: string;
}

export interface LayoutItem {
  id: string;
  type: 'title' | 'heading' | 'paragraph' | 'section' | 'subsection' | 'header' | 'footer' | 'page_number' | 'table' | 'footnote' | 'margin_note';
  text: string;
  page: number;
  bbox?: [number, number, number, number]; // [x0, y0, x1, y1] normalized to 100
}

export interface DocumentSegment {
  id: string;
  name: 'Cover Page' | 'Index' | 'Facts' | 'Issues' | 'Arguments' | 'Findings' | 'Decision' | 'Order' | 'Annexures';
  title: string;
  startCharIndex: number;
  endCharIndex: number;
  text: string;
}

export interface SemanticChunk {
  id: string;
  text: string;
  tokens: number;
  headingContext: string;
  citations: string[];
  metadata: {
    page: number;
    section: string;
  };
}

export interface QualityReport {
  dpi: number;
  blurScore: number; // 0-100, where 100 is extremely blurry
  brightnessScore: number; // 0-100
  contrastScore: number; // 0-100
  rotationAngle: number; // in degrees
  skewAngle: number; // in degrees
  hasPerspectiveDistortion: boolean;
  hasCroppingIssues: boolean;
  noiseLevel: 'None' | 'Low' | 'Medium' | 'High';
  hasBlankPages: boolean;
  blankPages: number[];
  isPass: boolean;
  recommendations: string[];
}

export interface PipelineResults {
  // 1. File Validation
  validation: {
    isValid: boolean;
    magicBytes: string;
    mimeType: string;
    sha256: string;
    fingerprint: string;
    isDuplicate: boolean;
    malwareStatus: 'Clean' | 'Infected' | 'Unscanned';
    securityDetails: string;
  };
  
  // 2. Image Quality Assessment
  quality: QualityReport;
  
  // 3. Image Enhancement
  enhancement: {
    deskewApplied: boolean;
    dewarpApplied: boolean;
    perspectiveCorrected: boolean;
    backgroundRemoved: boolean;
    shadowRemoved: boolean;
    noiseReduced: boolean;
    contrastEnhanced: boolean;
    superResolutionApplied: boolean;
    deskewAngle: number;
    enhancedImageUrl?: string;
  };
  
  // 4. OCR
  ocr: {
    detectedLanguage: 'Bangla' | 'English' | 'Mixed';
    averageConfidence: number;
    text: string;
    ocrTimeMs: number;
  };
  
  // 5. Handwriting Recognition
  handwriting: {
    detected: boolean;
    transcription?: string;
    annotationsCount: number;
    confidence: number;
  };
  
  // 6. Layout Analysis
  layout: {
    items: LayoutItem[];
    pagesCount: number;
  };
  
  // 7. Reading Order
  readingOrder: {
    orderedSequence: string[]; // array of LayoutItem IDs
    layoutComplexity: 'Simple' | 'Multi-column' | 'Mixed';
  };
  
  // 8. Metadata Extraction
  metadata: DocumentMetadata;
  
  // 9. Entity Extraction
  entities: LegalEntity[];
  
  // 10. Citation Extraction
  citations: LegalCitation[];
  
  // 11. Clause Extraction
  clauses: LegalClause[];
  
  // 12. Table Extraction
  tables: ExtractedTable[];
  
  // 13. Document Classification
  classification: {
    primaryClass: DocumentType;
    confidence: number;
    allScores: { type: DocumentType; score: number }[];
  };
  
  // 14. Document Segmentation
  segmentation: {
    segments: DocumentSegment[];
  };
  
  // 15. Copyright & Filtering
  copyright: {
    copyrightSectionsFound: boolean;
    restrictedCommentaryCount: number;
    publicDomainPercentage: number;
    provenanceRecord: string;
  };
  
  // 16. Semantic Chunking
  chunking: {
    chunks: SemanticChunk[];
    totalChunks: number;
  };
}

export interface TimelineEvent {
  id: string;
  label: string;
  description: string;
  status: 'completed' | 'pending' | 'active' | 'neutral';
}

export interface AtomicFact {
  id: string;
  text: string;
  searchKeywords: string[];
}

export interface AtomicIssue {
  id: string;
  question: string;
  answer: string;
}

export interface StatuteWithRole {
  name: string;
  section: string;
  role: string;
}

export interface LegalPrinciple {
  id: string;
  statement: string;
  category: 'procedure' | 'evidence' | 'substantive' | 'general';
}

export interface DirectionStep {
  id: string;
  actor: string;
  action: string;
  timeframe?: string;
}

export interface ParagraphIndexItem {
  number: number;
  category: 'Metadata' | 'Facts' | 'Evidence' | 'Law' | 'Reasoning' | 'Directions' | 'Holding';
  text: string;
}

export interface CaseDecomposition {
  caseId: string;
  status: 'Reported' | 'Unreported' | 'Pending';
  country: string;
  advocates: string[];
  proceduralHistory: {
    stage: string;
    forum: string;
    outcome: string;
  }[];
  atomicFacts: AtomicFact[];
  atomicIssues: AtomicIssue[];
  statutesWithRoles: StatuteWithRole[];
  principles: LegalPrinciple[];
  directions: DirectionStep[];
  paragraphIndex: ParagraphIndexItem[];
  aiSummary: {
    facts: string;
    issue: string;
    held: string;
    keyPrinciple: string;
  };
}

export interface JudicialRecord {
  court: string;
  jurisdiction: string;
  caseNo: string;
  judges: string[];
  date: string;
  area: string;
  procedure: string[];
  parties: {
    petitioner: string;
    respondents: string[];
  };
  statutes: {
    name: string;
    sections: string[];
  }[];
  facts: string[];
  issues: string[];
  held: string[];
  ratioDecidendi: string[];
  obiterDicta: string[];
  timeline: TimelineEvent[];
  citations: string[];
  keywords: string[];
}

export interface HumanReviewState {
  isApproved: boolean;
  reviewedBy?: string;
  reviewedAt?: string;
  fieldsCorrected: {
    field: string;
    originalValue: any;
    correctedValue: any;
  }[];
  validationWarnings: string[];
}

export interface LegalDocument {
  id: string;
  name: string;
  fileSize: string;
  mimeType: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'review_required';
  progress: number;
  currentStage?: string;
  dateUploaded: string;
  results?: PipelineResults;
  review?: HumanReviewState;
  judicialRecord?: JudicialRecord;
  decomposition?: CaseDecomposition;
}
