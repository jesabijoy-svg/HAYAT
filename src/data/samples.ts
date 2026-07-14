import { LegalDocument } from '../types';

export const SAMPLE_DOCUMENTS: LegalDocument[] = [
  {
    id: 'doc-pakistan-sc-judgment',
    name: 'Supreme_Court_Pakistan_Nayab_v_State_2026.pdf',
    fileSize: '2.4 MB',
    mimeType: 'application/pdf',
    status: 'completed',
    progress: 100,
    dateUploaded: '2026-06-24 10:15',
    review: {
      isApproved: true,
      reviewedBy: 'nbt06654@gmail.com',
      reviewedAt: '2026-06-25 11:30',
      fieldsCorrected: [],
      validationWarnings: []
    },
    results: {
      validation: {
        isValid: true,
        magicBytes: '25 50 44 46 (PDF)',
        mimeType: 'application/pdf',
        sha256: '7e38db761ff0d8294a2bca81896d9154f2a240ff82283cbca15d312a0f00b109',
        fingerprint: 'fp_sc_pk_2026_1033cr',
        isDuplicate: false,
        malwareStatus: 'Clean',
        securityDetails: 'Validated against SHA-256 database. Scan completed with 0 malware or malicious scripting detections. File hash successfully verified against federal registers.'
      },
      quality: {
        dpi: 300,
        blurScore: 8,
        brightnessScore: 85,
        contrastScore: 89,
        rotationAngle: 0,
        skewAngle: 0,
        hasPerspectiveDistortion: false,
        hasCroppingIssues: false,
        noiseLevel: 'None',
        hasBlankPages: false,
        blankPages: [],
        isPass: true,
        recommendations: []
      },
      enhancement: {
        deskewApplied: false,
        dewarpApplied: false,
        perspectiveCorrected: false,
        backgroundRemoved: false,
        shadowRemoved: false,
        noiseReduced: false,
        contrastEnhanced: false,
        superResolutionApplied: false,
        deskewAngle: 0
      },
      ocr: {
        detectedLanguage: 'English',
        averageConfidence: 98.9,
        ocrTimeMs: 950,
        text: `IN THE SUPREME COURT OF PAKISTAN
(APPELLATE JURISDICTION)

CRIMINAL PETITION NO. 1033 & 1036 OF 2024

Mst. Nayab ... Petitioner
Versus
The State and others ... Respondents

Present:
Mr. Justice Jamal Khan Mandokhail
Mr. Justice Salahuddin Panhwar

Judgment Date: 23 June 2026

ORDER / JUDGMENT:
This petition arises out of the refusal of the Trial Court, subsequently upheld by the High Court in revision, to correct the written record of a witness statement under Section 360 of the Code of Criminal Procedure (CrPC). The witness, having given evidence through a video link, noted material errors and a wrong incident date in the transcribed written statement and promptly applied for rectification. The courts below dismissed the plea on technical grounds. We hold that Section 360 CrPC empowers and indeed requires the Trial Court to rectify material transcription errors to ensure a fair trial under Article 10A of the Constitution. Refusal to correct a verbatim statement when compared against the video recording defeats the ends of justice. Hence, the orders of the courts below are set aside and the petition is allowed.`
      },
      handwriting: {
        detected: true,
        transcription: 'Judicial stamp on page 1: "Supreme Court of Pakistan - Received Appellate Branch"',
        annotationsCount: 1,
        confidence: 95
      },
      layout: {
        pagesCount: 3,
        items: [
          { id: 'pk_l1', type: 'title', text: 'IN THE SUPREME COURT OF PAKISTAN', page: 1, bbox: [15, 8, 85, 12] },
          { id: 'pk_l2', type: 'heading', text: '(APPELLATE JURISDICTION)', page: 1, bbox: [20, 13, 80, 17] },
          { id: 'pk_l3', type: 'section', text: 'CRIMINAL PETITION NO. 1033 & 1036 OF 2024', page: 1, bbox: [25, 20, 75, 24] },
          { id: 'pk_l4', type: 'paragraph', text: 'Mst. Nayab ... Petitioner Versus The State and others ... Respondents', page: 1, bbox: [10, 27, 90, 32] },
          { id: 'pk_l5', type: 'heading', text: 'Present: Mr. Justice Jamal Khan Mandokhail & Mr. Justice Salahuddin Panhwar', page: 1, bbox: [15, 45, 85, 49] },
          { id: 'pk_l6', type: 'paragraph', text: 'This petition arises out of the refusal of the Trial Court, subsequently upheld by the High Court in revision, to correct the written record of a witness statement under Section 360 of the Code of Criminal Procedure (CrPC).', page: 2, bbox: [10, 10, 90, 25] },
          { id: 'pk_l7', type: 'paragraph', text: 'The witness, having given evidence through a video link, noted material errors and a wrong incident date in the transcribed written statement and promptly applied for rectification. The courts below dismissed the plea on technical grounds.', page: 2, bbox: [10, 27, 90, 42] },
          { id: 'pk_l8', type: 'paragraph', text: 'We hold that Section 360 CrPC empowers and indeed requires the Trial Court to rectify material transcription errors to ensure a fair trial under Article 10A of the Constitution. Refusal to correct a verbatim statement when compared against the video recording defeats the ends of justice.', page: 3, bbox: [10, 10, 90, 30] }
        ]
      },
      readingOrder: {
        orderedSequence: ['pk_l1', 'pk_l2', 'pk_l3', 'pk_l4', 'pk_l5', 'pk_l6', 'pk_l7', 'pk_l8'],
        layoutComplexity: 'Simple'
      },
      metadata: {
        title: 'Mst. Nayab vs. The State',
        documentType: 'judgment',
        language: 'English',
        author: 'Justice Jamal Khan Mandokhail',
        creationDate: '2026-06-23',
        modifiedDate: '2026-06-24',
        version: '1.0',
        fileSize: '2.4 MB',
        pageCount: 3,
        court: 'Supreme Court of Pakistan',
        bench: 'Appellate Bench',
        judge: 'Justice Jamal Khan Mandokhail, Justice Salahuddin Panhwar',
        caseNumber: 'Criminal Petition 1033 & 1036 of 2024',
        caseType: 'Criminal Appeal',
        filingDate: '2024-03-12',
        judgmentDate: '2026-06-23',
        parties: 'Mst. Nayab vs. The State and others',
        lawyers: 'Chaudhry Faisal Hussain (for Petitioner), Additional Advocate General (for State)',
        subjectArea: 'Evidence & Witness Rectification',
        legalDomain: 'Criminal Law'
      },
      entities: [
        { id: 'pk_e1', text: 'Supreme Court of Pakistan', category: 'Court', confidence: 100 },
        { id: 'pk_e2', text: 'Justice Jamal Khan Mandokhail', category: 'Judge', confidence: 100 },
        { id: 'pk_e3', text: 'Justice Salahuddin Panhwar', category: 'Judge', confidence: 100 },
        { id: 'pk_e4', text: 'Mst. Nayab', category: 'Person', confidence: 100 },
        { id: 'pk_e5', text: 'Pakistan Penal Code', category: 'Act', confidence: 100 },
        { id: 'pk_e6', text: 'Section 360', category: 'Section', confidence: 100 },
        { id: 'pk_e7', text: 'Section 435', category: 'Section', confidence: 100 },
        { id: 'pk_e8', text: 'Article 10A', category: 'Section', confidence: 100 },
        { id: 'pk_e9', text: 'Criminal Procedure Code', category: 'Act', confidence: 100 },
        { id: 'pk_e10', text: 'Section 302', category: 'Section', confidence: 100 },
        { id: 'pk_e11', text: 'Section 109', category: 'Section', confidence: 100 },
        { id: 'pk_e12', text: 'Section 449', category: 'Section', confidence: 100 },
        { id: 'pk_e13', text: 'Section 34', category: 'Section', confidence: 100 }
      ],
      citations: [
        { id: 'pk_c1', rawText: 'Section 360 CrPC', reporter: 'Internal', canonicalFormat: 'Section 360 Code of Criminal Procedure' },
        { id: 'pk_c2', rawText: 'Section 435 CrPC', reporter: 'Internal', canonicalFormat: 'Section 435 Code of Criminal Procedure' },
        { id: 'pk_c3', rawText: 'Article 10A Constitution', reporter: 'Internal', canonicalFormat: 'Article 10A Constitution of Pakistan' }
      ],
      clauses: [
        {
          id: 'pk_cl1',
          type: 'Obligations',
          title: 'Witness statement verification',
          text: 'Court is obligated to compare video recordings with written transcripts when witness reports differences and apply rectification of errors promptly.',
          confidence: 100,
          summary: 'The Trial Court must compare video recordings with written statement memoranda and rectify any material transcription errors.'
        }
      ],
      tables: [],
      classification: {
        primaryClass: 'judgment',
        confidence: 99.8,
        allScores: [
          { type: 'judgment', score: 99.8 },
          { type: 'order', score: 0.1 },
          { type: 'petition', score: 0.1 }
        ]
      },
      segmentation: {
        segments: [
          { id: 'pk_s1', name: 'Cover Page', title: 'Supreme Court Header & Cause Title', startCharIndex: 0, endCharIndex: 220, text: 'IN THE SUPREME COURT OF PAKISTAN\n(APPELLATE JURISDICTION)\n\nCRIMINAL PETITION NO. 1033 & 1036 OF 2024\n\nMst. Nayab ... Petitioner\nVersus\nThe State and others ... Respondents' },
          { id: 'pk_s2', name: 'Facts', title: 'Video evidence transcription errors', startCharIndex: 221, endCharIndex: 600, text: 'The witness gave evidence through video link. The resulting written statement contained multiple transcription mistakes, including an incorrect incident date. The witness requested rectification, but the Trial Court refused, and the High Court dismissed the subsequent revision petition.' },
          { id: 'pk_s3', name: 'Issues', title: 'Scope of Section 360 CrPC and Fair Trial', startCharIndex: 601, endCharIndex: 850, text: 'Whether Section 360 CrPC empowers the Trial Court to correct witness statements? Whether a refusal violates the fair trial mandates of Article 10A?' },
          { id: 'pk_s4', name: 'Findings', title: 'Interpreting Section 360 and Video Records', startCharIndex: 851, endCharIndex: 1150, text: 'Section 360 CrPC empowers and indeed requires the court to rectify statements. Modern video recordings constitute high-fidelity baseline evidence, and written statements must accurately match them to ensure justice.' },
          { id: 'pk_s5', name: 'Decision', title: 'Setting aside lower court orders', startCharIndex: 1151, endCharIndex: 1400, text: 'In the result, the petition is allowed. The orders of the Trial Court and High Court are set aside, and the Trial Court is directed to compare the video and written statement, applying necessary corrections.' }
        ]
      },
      copyright: {
        copyrightSectionsFound: false,
        restrictedCommentaryCount: 0,
        publicDomainPercentage: 100,
        provenanceRecord: 'Source: Official judgment PDF released by Supreme Court of Pakistan.'
      },
      chunking: {
        totalChunks: 3,
        chunks: [
          {
            id: 'pk_ch1',
            text: 'IN THE SUPREME COURT OF PAKISTAN. Criminal Petition No. 1033 & 1036 of 2024. Mst. Nayab vs. The State. Appellate Jurisdiction. Refusal of Trial Court to correct witness statement transcribed incorrectly from video link.',
            tokens: 42,
            headingContext: 'Supreme Court of Pakistan > Cause Title',
            citations: [],
            metadata: { page: 1, section: 'Cause Title' }
          },
          {
            id: 'pk_ch2',
            text: 'Section 360 of Code of Criminal Procedure (CrPC) allows rectification of witness statements. The High Court dismissed the revision under Section 435 CrPC. Fair trial mandates that written records represent verbatim statements.',
            tokens: 45,
            headingContext: 'Writ Petitions > Statutory Analysis',
            citations: ['Section 360 CrPC', 'Section 435 CrPC'],
            metadata: { page: 2, section: 'Section 360 CrPC' }
          },
          {
            id: 'pk_ch3',
            text: 'The Supreme Court allows the petition. Trial Court has full jurisdiction and is directed to compare video recording with written memorandum, correcting any discrepancies to prevent miscarriage of justice.',
            tokens: 41,
            headingContext: 'Writ Petitions > Holding & Orders',
            citations: ['Article 10A Constitution'],
            metadata: { page: 3, section: 'Decision' }
          }
        ]
      }
    },
    judicialRecord: {
      court: 'Supreme Court of Pakistan',
      jurisdiction: 'Appellate Jurisdiction',
      caseNo: 'Criminal Petition 1033 & 1036 of 2024',
      judges: ['Justice Jamal Khan Mandokhail', 'Justice Salahuddin Panhwar'],
      date: '23 June 2026',
      area: 'Criminal Law',
      procedure: ['Evidence', 'Witness Statement', 'Rectification'],
      parties: {
        petitioner: 'Mst. Nayab',
        respondents: ['The State', 'Others']
      },
      statutes: [
        {
          name: 'Pakistan Penal Code',
          sections: ['Section 302', 'Section 109', 'Section 449', 'Section 34']
        },
        {
          name: 'Criminal Procedure Code',
          sections: ['Section 360', 'Section 435']
        }
      ],
      facts: [
        'Witness gave evidence through video link.',
        'Written statement contained mistakes.',
        'Wrong incident date recorded.',
        'Witness requested correction.',
        'Trial Court refused.',
        'High Court dismissed revision.',
        'Supreme Court allowed petition.'
      ],
      issues: [
        'Whether Section 360 CrPC allows correction of witness statement?',
        'Whether Trial Court must compare video recording with written evidence?',
        'Whether refusal violates fair trial?'
      ],
      held: [
        'Yes.',
        'Trial Court has jurisdiction.',
        'Court must compare video with written statement.',
        'Errors must be corrected.',
        'Justice requires accurate recording.',
        'Orders of Trial Court and High Court set aside.'
      ],
      ratioDecidendi: [
        'Witness statements should be recorded accurately.',
        'Section 360 empowers rectification.',
        'Trial Court should compare video and written evidence.',
        'Fair trial requires correction of material errors.'
      ],
      obiterDicta: [
        'Procedure should promote justice.',
        'Technical objections should not defeat justice.'
      ],
      timeline: [
        { id: 'pk_t1', label: '2018 FIR', description: 'First Information Report (FIR) registered for offense', status: 'completed' },
        { id: 'pk_t2', label: 'Evidence', description: 'Witness gave evidence through video link', status: 'completed' },
        { id: 'pk_t3', label: 'Application', description: 'Correction application filed pointing out mistakes and wrong date', status: 'completed' },
        { id: 'pk_t4', label: 'Dismissed', description: 'Trial Court refused the correction request', status: 'completed' },
        { id: 'pk_t5', label: 'Revision', description: 'Revision application filed in the High Court', status: 'completed' },
        { id: 'pk_t6', label: 'Dismissed', description: 'High Court dismissed the revision under Section 435', status: 'completed' },
        { id: 'pk_t7', label: 'Supreme Court', description: 'Petition filed in the Supreme Court', status: 'active' },
        { id: 'pk_t8', label: 'Allowed', description: 'Supreme Court set aside orders and allowed rectification', status: 'completed' }
      ],
      citations: ['Section 360 CrPC', 'Article 10A Constitution', 'Section 435 CrPC'],
      keywords: ['video evidence', 'witness statement', 'fair trial', 'record correction', 'criminal procedure', 'section 360', 'trial court', 'memorandum', 'verbatim recording']
    },
    decomposition: {
      caseId: 'PK-SC-2026-CRLP-1033',
      status: 'Reported',
      country: 'Pakistan',
      advocates: ['Chaudhry Faisal Hussain (for Petitioner)', 'Additional Advocate General (for State)'],
      proceduralHistory: [
        { stage: 'Trial Court', forum: 'Sessions Court', outcome: 'Dismissed application to rectify witness statements under s. 360 CrPC' },
        { stage: 'Revision Court', forum: 'High Court', outcome: 'Dismissed revision petition, upholding Trial Court\'s refusal' },
        { stage: 'Appellate Court', forum: 'Supreme Court of Pakistan', outcome: 'Petition allowed, setting aside both lower court orders' }
      ],
      atomicFacts: [
        { id: 'pk-f1', text: 'A prosecution witness gave material evidence through a video-link interface.', searchKeywords: ['video link', 'witness statement', 'prosecution witness'] },
        { id: 'pk-f2', text: 'The Trial Court transcribed the testimony into a written memorandum of statement.', searchKeywords: ['transcription', 'written memorandum', 'statement record'] },
        { id: 'pk-f3', text: 'The resulting written record contained clear, material errors including an incorrect incident date.', searchKeywords: ['incorrect date', 'transcription errors', 'written record'] },
        { id: 'pk-f4', text: 'The witness promptly requested correction/rectification of the errors before the Trial Court.', searchKeywords: ['witness application', 'rectification', 'record correction'] },
        { id: 'pk-f5', text: 'The application was submitted under Section 360 of the Code of Criminal Procedure (CrPC).', searchKeywords: ['Section 360 CrPC', 'witness statement', 'statutory request'] },
        { id: 'pk-f6', text: 'The Trial Court and High Court rejected the application on narrow technical grounds.', searchKeywords: ['technical grounds', 'rejection', 'dismissal'] },
        { id: 'pk-f7', text: 'The Supreme Court examined the underlying video recording and compared it against the written memorandum.', searchKeywords: ['video comparison', 'Supreme Court review', 'video recording'] }
      ],
      atomicIssues: [
        { id: 'pk-i1', question: 'Does a witness have a statutory right to seek correction of an inaccurately transcribed statement under Section 360 CrPC?', answer: 'Yes. Section 360 CrPC empowers and requires the Trial Court to rectify material transcription errors.' },
        { id: 'pk-i2', question: 'Can the Court compare a modern video-link recording against a written memorandum of statement to verify errors?', answer: 'Yes. Verbatim consistency should be ensured by utilizing video records as a high-fidelity baseline.' },
        { id: 'pk-i3', question: 'Does a court\'s refusal to correct material mistakes in a transcribed statement violate the Constitutional right to a fair trial?', answer: 'Yes. Refusing to correct verbatim records violates the principles of due process and fair trial under Article 10A.' }
      ],
      statutesWithRoles: [
        { name: 'Criminal Procedure Code', section: 'Section 360', role: 'Witness statement correction and verification mandate' },
        { name: 'Criminal Procedure Code', section: 'Section 435', role: 'Revisionary jurisdiction of the High Court to check propriety of orders' },
        { name: 'Constitution of Pakistan', section: 'Article 10A', role: 'Constitutional guarantee of Fair Trial and Due Process' }
      ],
      principles: [
        { id: 'pk-p1', statement: 'Witness statements in criminal trials must be recorded verbatim and represent absolute truth.', category: 'evidence' },
        { id: 'pk-p2', statement: 'Modern technology such as video recordings must be utilized as objective baselines to verify manual record accuracy.', category: 'evidence' },
        { id: 'pk-p3', statement: 'Section 360 CrPC is not a formal procedural technicality but an active instrument for ensuring factual correctness.', category: 'procedure' },
        { id: 'pk-p4', statement: 'Procedural rules exist to advance the ends of substantive justice, never to defeat it.', category: 'general' }
      ],
      directions: [
        { id: 'pk-d1', actor: 'Trial Court', action: 'Recall the witness statement and retrieve the official video-link recording.', timeframe: 'Immediate' },
        { id: 'pk-d2', actor: 'Trial Court & Parties', action: 'Conduct a joint session to compare the video recording with the written statement.', timeframe: 'Within 7 working days' },
        { id: 'pk-d3', actor: 'Trial Court', action: 'Rectify all material transcription errors, correcting dates and witness terminology.', timeframe: 'Within 10 working days' },
        { id: 'pk-d4', actor: 'Presiding Judge', action: 'Append a signed, official memorandum outlining the precise rectifications made.', timeframe: 'Within 15 working days' }
      ],
      paragraphIndex: [
        { number: 1, category: 'Metadata', text: 'IN THE SUPREME COURT OF PAKISTAN (APPELLATE JURISDICTION). Criminal Petition No. 1033 & 1036 of 2024. Parties: Mst. Nayab vs. The State and others.' },
        { number: 2, category: 'Facts', text: 'This petition arises out of the refusal of the Trial Court to correct the written record of a witness statement under Section 360 of the Code of Criminal Procedure (CrPC).' },
        { number: 3, category: 'Evidence', text: 'The witness gave evidence through a high-definition video link. Multiple transcription errors, including a critical wrong incident date, were introduced during manual transcription.' },
        { number: 4, category: 'Law', text: 'Section 360 CrPC mandates that witness statements must be read over and corrected. This right is directly protected under the Article 10A Constitutional guarantee of fair trial.' },
        { number: 5, category: 'Reasoning', text: 'We hold that a verbatim recording is indispensable. High courts and trial courts erred by rejecting rectification on technicalities. Modern video evidence is a supreme tool for verifying transcription accuracy.' },
        { number: 6, category: 'Directions', text: 'The impugned orders are set aside. The Trial Court is directed to compare the video against the statement and complete corrections via memorandum within 15 days.' }
      ],
      aiSummary: {
        facts: 'Witness gave video testimony which was manually transcribed with severe errors including an incorrect incident date. Lower courts refused correction requests on technical grounds.',
        issue: 'Does Section 360 CrPC allow courts to correct witness statement records by comparing them with video evidence, and does a refusal violate fair trial standards?',
        held: 'Yes. Section 360 CrPC mandates rectification of witness statement records to ensure verbatim correctness, which is a constitutional prerequisite for fair trial under Article 10A.',
        keyPrinciple: 'Procedural rules are meant to facilitate justice. Factual records must represent absolute truth, and modern video recordings constitute an authoritative baseline for verification.'
      }
    }
  },
  {
    id: 'doc-bangladesh-sc-judgment',
    name: 'Supreme_Court_Judgment_DLR_82_2026.pdf',
    fileSize: '1.4 MB',
    mimeType: 'application/pdf',
    status: 'completed',
    progress: 100,
    dateUploaded: '2026-07-10 14:20',
    review: {
      isApproved: false,
      fieldsCorrected: [],
      validationWarnings: ['Confidence score for Judge name is 89% - verify spelling', '2 citations matched out of 3 total']
    },
    results: {
      validation: {
        isValid: true,
        magicBytes: '25 50 44 46 (PDF)',
        mimeType: 'application/pdf',
        sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        fingerprint: 'fp_sc_bd_2026_82lr',
        isDuplicate: false,
        malwareStatus: 'Clean',
        securityDetails: 'Validated against SHA-256 local database. Active sandbox scan showed zero executable scripts, external URL calls, or signature anomalies.'
      },
      quality: {
        dpi: 300,
        blurScore: 12,
        brightnessScore: 78,
        contrastScore: 82,
        rotationAngle: 0,
        skewAngle: 0.1,
        hasPerspectiveDistortion: false,
        hasCroppingIssues: false,
        noiseLevel: 'None',
        hasBlankPages: false,
        blankPages: [],
        isPass: true,
        recommendations: []
      },
      enhancement: {
        deskewApplied: false,
        dewarpApplied: false,
        perspectiveCorrected: false,
        backgroundRemoved: false,
        shadowRemoved: false,
        noiseReduced: false,
        contrastEnhanced: false,
        superResolutionApplied: false,
        deskewAngle: 0
      },
      ocr: {
        detectedLanguage: 'Mixed',
        averageConfidence: 96.8,
        ocrTimeMs: 1240,
        text: `IN THE SUPREME COURT OF BANGLADESH
HIGH COURT DIVISION
(SPECIAL ORIGINAL JURISDICTION)

WRIT PETITION NO. 4012 OF 2024.

In the matter of:
An application under Article 102 of the Constitution of the People's Republic of Bangladesh.

-And-
In the matter of:
Haji Mohammad Selim ... Petitioner.
-Versus-
Government of the People's Republic of Bangladesh, represented by the Secretary, Ministry of Land, and others ... Respondents.

Present:
Mr. Justice Md. Ashfaqul Islam
And
Mr. Justice Md. Iqbal Kabir

Judgment on: 14th January, 2026.

Md. Ashfaqul Islam, J:
This rule nisi was issued calling upon the respondents to show cause as to why the cancellation of the lease deed of public land in Plot 42-A, Tejgaon Industrial Area, Dhaka, should not be declared illegal and without lawful authority.

The facts material for disposal of the rule are that the petitioner Haji Selim obtained a 99-year lease from the Ministry of Land in 1998. On 10th August 2024, the Respondent No. 3 (Deputy Commissioner, Dhaka) issued a cancellation notice, asserting that the lease conditions regarding industrial usage were violated.

Mr. AM Amin Uddin, learned Senior Counsel appearing for the petitioner, argues that the cancellation notice violated the principles of natural justice, since no prior show-cause notice was served.

We have perused the writ petition, the affidavit-in-opposition, and examined the relevant laws. Under Section 8 of the Government Non-Agricultural Land Act, 1947, any lease cancellation must be preceded by a minimum 30-day notice.

In the result, the Rule is made absolute. The impugned cancellation notice is declared void and set aside.`
      },
      handwriting: {
        detected: true,
        transcription: 'Lawyer Marginal Note on Page 1: "Urgent. Mention before Bench tomorrow."',
        annotationsCount: 1,
        confidence: 82
      },
      layout: {
        pagesCount: 2,
        items: [
          { id: 'l1', type: 'title', text: 'IN THE SUPREME COURT OF BANGLADESH', page: 1, bbox: [15, 8, 85, 12] },
          { id: 'l2', type: 'heading', text: 'HIGH COURT DIVISION (SPECIAL ORIGINAL JURISDICTION)', page: 1, bbox: [20, 13, 80, 17] },
          { id: 'l3', type: 'section', text: 'WRIT PETITION NO. 4012 OF 2024', page: 1, bbox: [30, 20, 70, 24] },
          { id: 'l4', type: 'paragraph', text: 'In the matter of: An application under Article 102 of the Constitution of the People\'s Republic of Bangladesh.', page: 1, bbox: [10, 27, 90, 32] },
          { id: 'l5', type: 'paragraph', text: 'Haji Mohammad Selim ... Petitioner. -Versus- Government of Bangladesh ... Respondents.', page: 1, bbox: [10, 34, 90, 42] },
          { id: 'l6', type: 'heading', text: 'Present: Mr. Justice Md. Ashfaqul Islam & Mr. Justice Md. Iqbal Kabir', page: 1, bbox: [15, 45, 85, 49] },
          { id: 'l7', type: 'heading', text: 'Judgment on: 14th January, 2026.', page: 1, bbox: [15, 51, 60, 54] },
          { id: 'l8', type: 'paragraph', text: 'Md. Ashfaqul Islam, J: This rule nisi was issued calling upon the respondents to show cause as to why the cancellation of the lease deed of public land in Plot 42-A, Tejgaon Industrial Area, Dhaka, should not be declared illegal and without lawful authority.', page: 1, bbox: [10, 57, 90, 68] },
          { id: 'l9', type: 'paragraph', text: 'The facts material for disposal of the rule are that the petitioner Haji Selim obtained a 99-year lease from the Ministry of Land in 1998. On 10th August 2024, the Respondent No. 3 (Deputy Commissioner, Dhaka) issued a cancellation notice, asserting that the lease conditions regarding industrial usage were violated.', page: 2, bbox: [10, 10, 90, 25] },
          { id: 'l10', type: 'paragraph', text: 'Mr. AM Amin Uddin, learned Senior Counsel appearing for the petitioner, argues that the cancellation notice violated the principles of natural justice, since no prior show-cause notice was served.', page: 2, bbox: [10, 27, 90, 38] },
          { id: 'l11', type: 'paragraph', text: 'We have perused the writ petition, the affidavit-in-opposition, and examined the relevant laws. Under Section 8 of the Government Non-Agricultural Land Act, 1947, any lease cancellation must be preceded by a minimum 30-day notice.', page: 2, bbox: [10, 40, 90, 54] },
          { id: 'l12', type: 'section', text: 'In the result, the Rule is made absolute.', page: 2, bbox: [10, 57, 90, 65] }
        ]
      },
      readingOrder: {
        orderedSequence: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12'],
        layoutComplexity: 'Simple'
      },
      metadata: {
        title: 'Haji Mohammad Selim vs. Government of Bangladesh',
        documentType: 'judgment',
        language: 'Mixed',
        author: 'Md. Ashfaqul Islam, J',
        creationDate: '2026-01-14',
        modifiedDate: '2026-01-15',
        version: '1.0',
        fileSize: '1.4 MB',
        pageCount: 2,
        court: 'Supreme Court of Bangladesh',
        bench: 'High Court Division',
        judge: 'Md. Ashfaqul Islam, J',
        caseNumber: 'Writ Petition No. 4012 of 2024',
        caseType: 'Writ Petition',
        filingDate: '2024-05-12',
        judgmentDate: '2026-01-14',
        parties: 'Haji Mohammad Selim vs. Government of Bangladesh',
        lawyers: 'Mr. AM Amin Uddin (Petitioner), Attorney General (Respondent)',
        subjectArea: 'Land Lease Dispute',
        legalDomain: 'Constitutional / Administrative Law'
      },
      entities: [
        { id: 'e1', text: 'Supreme Court of Bangladesh', category: 'Court', confidence: 100 },
        { id: 'e2', text: 'High Court Division', category: 'Court', confidence: 100 },
        { id: 'e3', text: 'Haji Mohammad Selim', category: 'Person', confidence: 99 },
        { id: 'e4', text: 'Md. Ashfaqul Islam', category: 'Judge', confidence: 99 },
        { id: 'e5', text: 'Md. Iqbal Kabir', category: 'Judge', confidence: 98 },
        { id: 'e6', text: 'Mr. AM Amin Uddin', category: 'Lawyer', confidence: 95 },
        { id: 'e7', text: 'Government Non-Agricultural Land Act, 1947', category: 'Act', confidence: 100 },
        { id: 'e8', text: 'Section 8', category: 'Section', confidence: 100 },
        { id: 'e9', text: 'Tejgaon Industrial Area', category: 'Location', confidence: 94 }
      ],
      citations: [
        { id: 'c1', rawText: '72 DLR 456', reporter: 'DLR', volume: '72', page: '456', year: '2020', canonicalFormat: '72 DLR (HCD) 456', linkedCaseTitle: 'Abdul Latif vs. Government of Bangladesh and others' },
        { id: 'c2', rawText: '25 BLD 102', reporter: 'BLD', volume: '25', page: '102', year: '2005', canonicalFormat: '25 BLD (HCD) 102', linkedCaseTitle: 'Rahman Steel Mills vs. Chairman, Rajuk' }
      ],
      clauses: [
        {
          id: 'cl1',
          type: 'Jurisdiction',
          title: 'Article 102 writ Jurisdiction',
          text: 'An application under Article 102 of the Constitution of the People\'s Republic of Bangladesh. This Court has special original jurisdiction to issue rules and directions in the nature of writs of certiorari and mandamus.',
          confidence: 98,
          summary: 'The application is filed under Article 102 of the Constitution of Bangladesh, giving the High Court Division jurisdiction over public authority actions.'
        },
        {
          id: 'cl2',
          type: 'Conditions',
          title: 'Prior Notice Condition',
          text: 'Under Section 8 of the Government Non-Agricultural Land Act, 1947, any lease cancellation must be preceded by a minimum 30-day notice.',
          confidence: 100,
          summary: 'Statutory mandate requiring 30 days prior written notice before canceling government land leases.'
        }
      ],
      tables: [],
      classification: {
        primaryClass: 'judgment',
        confidence: 99.4,
        allScores: [
          { type: 'judgment', score: 99.4 },
          { type: 'order', score: 0.5 },
          { type: 'petition', score: 0.1 }
        ]
      },
      segmentation: {
        segments: [
          { id: 's1', name: 'Cover Page', title: 'Header and Cause Title', startCharIndex: 0, endCharIndex: 250, text: 'IN THE SUPREME COURT OF BANGLADESH\nHIGH COURT DIVISION\n(SPECIAL ORIGINAL JURISDICTION)\n\nWRIT PETITION NO. 4012 OF 2024.' },
          { id: 's2', name: 'Facts', title: 'Petitioner Background and Lease Dispute', startCharIndex: 251, endCharIndex: 650, text: 'The facts material for disposal of the rule are that the petitioner Haji Selim obtained a 99-year lease from the Ministry of Land in 1998. On 10th August 2024, the Respondent No. 3 (Deputy Commissioner, Dhaka) issued a cancellation notice, asserting that the lease conditions regarding industrial usage were violated.' },
          { id: 's3', name: 'Arguments', title: 'Violation of Natural Justice', startCharIndex: 651, endCharIndex: 850, text: 'Mr. AM Amin Uddin, learned Senior Counsel appearing for the petitioner, argues that the cancellation notice violated the principles of natural justice, since no prior show-cause notice was served.' },
          { id: 's4', name: 'Findings', title: 'Statutory Notice Requirement', startCharIndex: 851, endCharIndex: 1100, text: 'We have perused the writ petition, the affidavit-in-opposition, and examined the relevant laws. Under Section 8 of the Government Non-Agricultural Land Act, 1947, any lease cancellation must be preceded by a minimum 30-day notice.' },
          { id: 's5', name: 'Decision', title: 'Rule Made Absolute', startCharIndex: 1101, endCharIndex: 1200, text: 'In the result, the Rule is made absolute. The impugned cancellation notice is declared void and set aside.' }
        ]
      },
      copyright: {
        copyrightSectionsFound: false,
        restrictedCommentaryCount: 0,
        publicDomainPercentage: 100,
        provenanceRecord: 'Source: Official judgment PDF released by Bangladesh Supreme Court Secretariat. Public Domain statutory text.'
      },
      chunking: {
        totalChunks: 3,
        chunks: [
          {
            id: 'ch1',
            text: 'WRIT PETITION NO. 4012 OF 2024. Haji Mohammad Selim vs. Government of Bangladesh. High Court Division (Special Original Jurisdiction). Petitioner Selim challenges the lease cancellation notice for Plot 42-A, Tejgaon Industrial Area, issued by Deputy Commissioner Dhaka.',
            tokens: 52,
            headingContext: 'Supreme Court of Bangladesh > Cause Title',
            citations: [],
            metadata: { page: 1, section: 'Cause Title' }
          },
          {
            id: 'ch2',
            text: 'Petitioner argues lease cancellation violated principles of natural justice due to absence of prior show-cause notice. Court references Section 8 of the Government Non-Agricultural Land Act, 1947 requiring at least 30-day notice prior to any action.',
            tokens: 48,
            headingContext: 'Writ Petition 4012/2024 > Facts & Arguments',
            citations: ['Government Non-Agricultural Land Act, 1947'],
            metadata: { page: 2, section: 'Arguments & Statutory Analysis' }
          },
          {
            id: 'ch3',
            text: 'High Court findings: Lease cancellation of public plot invalid as Respondent No.3 failed to comply with statutory 30-day prior notice. Rule made absolute. Cancellation notice set aside as without lawful authority.',
            tokens: 42,
            headingContext: 'Writ Petition 4012/2024 > Order',
            citations: [],
            metadata: { page: 2, section: 'Decision' }
          }
        ]
      }
    },
    judicialRecord: {
      court: 'Supreme Court of Bangladesh',
      jurisdiction: 'High Court Division (Special Original J.)',
      caseNo: 'Writ Petition No. 4012 of 2024',
      judges: ['Justice Md. Ashfaqul Islam', 'Justice Md. Iqbal Kabir'],
      date: '14 January 2026',
      area: 'Constitutional / Administrative Law',
      procedure: ['Writ Petition', 'Rule Nisi', 'Natural Justice'],
      parties: {
        petitioner: 'Haji Mohammad Selim',
        respondents: ['Government of Bangladesh', 'Secretary, Ministry of Land', 'Deputy Commissioner, Dhaka']
      },
      statutes: [
        {
          name: 'Constitution of Bangladesh',
          sections: ['Article 102']
        },
        {
          name: 'Government Non-Agricultural Land Act, 1947',
          sections: ['Section 8']
        }
      ],
      facts: [
        'Petitioner obtained a 99-year lease from the Ministry of Land in 1998.',
        'On 10th August 2024, the Deputy Commissioner of Dhaka issued a cancellation notice.',
        'The cancellation notice asserted that industrial usage conditions were violated.',
        'No prior show-cause notice was served on the petitioner.'
      ],
      issues: [
        'Whether the cancellation notice violated the principles of natural justice?',
        'Whether Section 8 of the Government Non-Agricultural Land Act, 1947 requires prior notice before lease termination?'
      ],
      held: [
        'Yes. Cancellation without prior warning violates natural justice.',
        'Section 8 mandates a minimum 30-day notice prior to lease cancellation.',
        'The cancellation notice is declared void and set aside.'
      ],
      ratioDecidendi: [
        'Lease cancellation under the Government Non-Agricultural Land Act, 1947 requires a mandatory 30-day notice.',
        'The principles of natural justice mandate a hearing before terminating a public property interest.'
      ],
      obiterDicta: [
        'State agencies must adhere to statutory procedural conditions before interfering with vested private rights.'
      ],
      timeline: [
        { id: 'bd_t1', label: '1998 Lease', description: '99-year lease granted to petitioner', status: 'completed' },
        { id: 'bd_t2', label: 'Cancellation', description: 'Notice of cancellation issued by DC Dhaka', status: 'completed' },
        { id: 'bd_t3', label: 'Writ Filed', description: 'Petitioner files writ challenging DC\'s notice', status: 'completed' },
        { id: 'bd_t4', label: 'Rule Nisi', description: 'High Court issues rule to show cause', status: 'completed' },
        { id: 'bd_t5', label: 'Judgment', description: 'Rule made absolute, cancellation declared void', status: 'completed' }
      ],
      citations: ['72 DLR 456', '25 BLD 102'],
      keywords: ['natural justice', 'lease deed', 'cancellation notice', 'writ petition', 'non-agricultural land']
    },
    decomposition: {
      caseId: 'BD-HCD-2026-WP-4012',
      status: 'Reported',
      country: 'Bangladesh',
      advocates: ['Mr. AM Amin Uddin, Senior Advocate (for Petitioner)', 'Attorney General (for Respondents)'],
      proceduralHistory: [
        { stage: 'Lease Cancellation', forum: 'Ministry of Land / Deputy Commissioner Dhaka', outcome: 'Issued unilateral cancellation notice without prior hearing' },
        { stage: 'Writ Petition', forum: 'Supreme Court of Bangladesh (High Court Division)', outcome: 'Rule Nisi issued, subsequently made absolute setting aside cancellation' }
      ],
      atomicFacts: [
        { id: 'bd-f1', text: 'Petitioner obtained a 99-year lease of Plot 42-A, Tejgaon Industrial Area from the Ministry of Land in 1998.', searchKeywords: ['99-year lease', 'Tejgaon Industrial Area', '1998 lease'] },
        { id: 'bd-f2', text: 'On 10th August 2024, the Deputy Commissioner of Dhaka issued a cancellation notice.', searchKeywords: ['Deputy Commissioner', 'cancellation notice', 'lease cancellation'] },
        { id: 'bd-f3', text: 'The cancellation asserted violation of industrial land use guidelines.', searchKeywords: ['lease conditions', 'industrial usage', 'violation'] },
        { id: 'bd-f4', text: 'The cancellation notice was served without any prior show-cause notice or hearing.', searchKeywords: ['prior hearing', 'show-cause', 'natural justice'] }
      ],
      atomicIssues: [
        { id: 'bd-i1', question: 'Does lease cancellation of public land require prior warning and an opportunity to be heard under the principles of natural justice?', answer: 'Yes. Cancellation without prior warning violates natural justice.' },
        { id: 'bd-i2', question: 'Does Section 8 of the Government Non-Agricultural Land Act, 1947 mandate a minimum 30-day notice prior to lease termination?', answer: 'Yes. Section 8 dictates a mandatory minimum 30-day notice.' }
      ],
      statutesWithRoles: [
        { name: 'Constitution of Bangladesh', section: 'Article 102', role: 'Writ jurisdiction for judicial review of administrative actions' },
        { name: 'Government Non-Agricultural Land Act, 1947', section: 'Section 8', role: 'Mandatory 30-day prior written notice requirement' }
      ],
      principles: [
        { id: 'bd-p1', statement: 'The state cannot unilaterally terminate vested property rights without adhering to statutory notices.', category: 'substantive' },
        { id: 'bd-p2', statement: 'The principles of natural justice are implied in every statutory power unless expressly excluded.', category: 'procedure' }
      ],
      directions: [
        { id: 'bd-d1', actor: 'Deputy Commissioner, Dhaka', action: 'Set aside and cancel the lease cancellation notice issued on 10 August 2024.', timeframe: 'Immediate' },
        { id: 'bd-d2', actor: 'Ministry of Land', action: 'Restore petitioner\'s lease possession and record indices in official registers.', timeframe: 'Within 30 working days' }
      ],
      paragraphIndex: [
        { number: 1, category: 'Metadata', text: 'IN THE SUPREME COURT OF BANGLADESH. High Court Division. Writ Petition No. 4012 of 2024.' },
        { number: 2, category: 'Facts', text: 'Petitioner obtained a 99-year lease in Tejgaon. The Deputy Commissioner issued a cancellation notice on claims of land usage violation.' },
        { number: 3, category: 'Reasoning', text: 'Section 8 of the Government Non-Agricultural Land Act mandates 30 days notice. Administrative actions must comply with natural justice.' },
        { number: 4, category: 'Holding', text: 'The rule is made absolute. The cancellation is declared without lawful authority and void.' }
      ],
      aiSummary: {
        facts: 'The Deputy Commissioner of Dhaka canceled a 99-year industrial land lease without serving a prior show-cause notice.',
        issue: 'Whether a public land lease can be canceled without serving the 30-day notice required under Section 8 of the Act, and whether this violates natural justice.',
        held: 'No. The cancellation is void. Section 8 mandates a minimum 30-day notice, and the principles of natural justice require a hearing.',
        keyPrinciple: 'State bodies must comply with statutory notice periods and audi alteram partem before revoking long-term land interests.'
      }
    }
  },
  {
    id: 'doc-partnership-agreement',
    name: 'Commercial_Partnership_and_Lease_Agreement_2026.docx',
    fileSize: '412 KB',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    status: 'completed',
    progress: 100,
    dateUploaded: '2026-07-12 09:15',
    review: {
      isApproved: true,
      reviewedBy: 'nbt06654@gmail.com',
      reviewedAt: '2026-07-13 10:10',
      fieldsCorrected: [
        { field: 'governingLaw', originalValue: 'State of Delaware', correctedValue: 'Laws of Bangladesh' }
      ],
      validationWarnings: []
    },
    results: {
      validation: {
        isValid: true,
        magicBytes: '50 4B 03 04 (ZIP/Office)',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        sha256: '38a6a661f20b4a4e1017e8876a6cf4939fdf0c3ba9543e5c9f5287f394236ab1',
        fingerprint: 'fp_corp_pt_2026_9883',
        isDuplicate: false,
        malwareStatus: 'Clean',
        securityDetails: 'Strict DOCX structure validation completed. Extracted core.xml and document.xml. Macros check passed (No VBA files found).'
      },
      quality: {
        dpi: 300,
        blurScore: 4,
        brightnessScore: 92,
        contrastScore: 90,
        rotationAngle: 0,
        skewAngle: 0,
        hasPerspectiveDistortion: false,
        hasCroppingIssues: false,
        noiseLevel: 'None',
        hasBlankPages: false,
        blankPages: [],
        isPass: true,
        recommendations: []
      },
      enhancement: {
        deskewApplied: false,
        dewarpApplied: false,
        perspectiveCorrected: false,
        backgroundRemoved: false,
        shadowRemoved: false,
        noiseReduced: false,
        contrastEnhanced: false,
        superResolutionApplied: false,
        deskewAngle: 0
      },
      ocr: {
        detectedLanguage: 'English',
        averageConfidence: 99.2,
        ocrTimeMs: 420,
        text: `DEED OF PARTNERSHIP AGREEMENT

This DEED of Partnership Agreement is made this 1st day of April, 2026, by and between:
1. Apex Logistics Ltd, having its principal office at Motijheel, Dhaka, Bangladesh (hereinafter referred to as the First Partner).
2. Orion Express, represented by its Chairman, Fahim Chowdhury, having office at Gulshan-2, Dhaka (hereinafter referred to as the Second Partner).

CLAUSE 12: GOVERNING LAW & ARBITRATION
This Agreement shall be governed and construed in accordance with the laws of Bangladesh. Any dispute or claim arising out of or in connection with this deed shall be referred to and finally resolved by arbitration in Dhaka, under the Arbitration Act, 2001.

CLAUSE 15: FINANCIAL CONTRIBUTION & SHARES
The capital of the partnership shall be BDT 10,000,000, contributed in the following schedule:
Apex Logistics: BDT 6,000,000 (60%)
Orion Express: BDT 4,000,000 (40%)

CLAUSE 22: TERMINATION
This Partnership may be dissolved by giving ninety (90) days written notice of dissolution by either Partner.`
      },
      handwriting: {
        detected: false,
        annotationsCount: 0,
        confidence: 0
      },
      layout: {
        pagesCount: 1,
        items: [
          { id: 'p1_l1', type: 'title', text: 'DEED OF PARTNERSHIP AGREEMENT', page: 1, bbox: [20, 10, 80, 15] },
          { id: 'p1_l2', type: 'paragraph', text: 'This DEED of Partnership is made this 1st day of April, 2026, between Apex Logistics and Orion Express...', page: 1, bbox: [10, 20, 90, 35] },
          { id: 'p1_l3', type: 'section', text: 'CLAUSE 12: GOVERNING LAW & ARBITRATION', page: 1, bbox: [10, 38, 90, 42] },
          { id: 'p1_l4', type: 'paragraph', text: 'This Agreement shall be governed by the laws of Bangladesh... resolved under the Arbitration Act, 2001.', page: 1, bbox: [10, 44, 90, 52] },
          { id: 'p1_l5', type: 'section', text: 'CLAUSE 15: CAPITAL CONTRIBUTION & SCHEDULE', page: 1, bbox: [10, 55, 90, 59] },
          { id: 'p1_l6', type: 'table', text: 'Table listing Partner Capital and Share %', page: 1, bbox: [10, 62, 90, 78] },
          { id: 'p1_l7', type: 'section', text: 'CLAUSE 22: TERMINATION', page: 1, bbox: [10, 81, 90, 84] },
          { id: 'p1_l8', type: 'paragraph', text: 'This Partnership may be dissolved by ninety (90) days written notice.', page: 1, bbox: [10, 86, 90, 92] }
        ]
      },
      readingOrder: {
        orderedSequence: ['p1_l1', 'p1_l2', 'p1_l3', 'p1_l4', 'p1_l5', 'p1_l6', 'p1_l7', 'p1_l8'],
        layoutComplexity: 'Simple'
      },
      metadata: {
        title: 'Partnership Deed between Apex Logistics and Orion Express',
        documentType: 'contract',
        language: 'English',
        author: 'Fahim Chowdhury',
        creationDate: '2026-04-01',
        modifiedDate: '2026-04-02',
        version: '2.1',
        fileSize: '412 KB',
        pageCount: 1,
        parties: 'Apex Logistics Ltd vs. Orion Express',
        subjectArea: 'Commercial Partnership',
        legalDomain: 'Corporate & Contract Law'
      },
      entities: [
        { id: 'pa_e1', text: 'Apex Logistics Ltd', category: 'Organization', confidence: 99 },
        { id: 'pa_e2', text: 'Orion Express', category: 'Organization', confidence: 99 },
        { id: 'pa_e3', text: 'Fahim Chowdhury', category: 'Person', confidence: 98 },
        { id: 'pa_e4', text: 'Dhaka', category: 'Location', confidence: 95 },
        { id: 'pa_e5', text: 'Arbitration Act, 2001', category: 'Act', confidence: 100 },
        { id: 'pa_e6', text: 'BDT 10,000,000', category: 'Money', confidence: 99 }
      ],
      citations: [
        { id: 'pa_c1', rawText: 'Arbitration Act, 2001', reporter: 'Internal', canonicalFormat: 'Arbitration Act, 2001 (Act No. I of 2001)' }
      ],
      clauses: [
        {
          id: 'pa_cl1',
          type: 'Arbitration',
          title: 'Arbitration Clause',
          text: 'Any dispute or claim arising out of or in connection with this deed shall be referred to and finally resolved by arbitration in Dhaka, under the Arbitration Act, 2001.',
          confidence: 99.5,
          summary: 'Disputes resolved exclusively via arbitration in Dhaka under Bangladesh Arbitration Act, 2001.'
        },
        {
          id: 'pa_cl2',
          type: 'Termination',
          title: 'Dissolution Notice',
          text: 'This Partnership may be dissolved by giving ninety (90) days written notice of dissolution by either Partner.',
          confidence: 97,
          summary: 'Either party can dissolve the partnership with 90 days prior written notice.'
        }
      ],
      tables: [
        {
          id: 'pa_t1',
          title: 'Partner Financial Contribution Schedule',
          headers: ['Partner Name', 'Capital Contribution (BDT)', 'Ownership Share %'],
          rows: [
            ['Apex Logistics Ltd', '6,000,000', '60%'],
            ['Orion Express', '4,000,000', '40%'],
            ['Total', '10,000,000', '100%']
          ],
          markdown: `| Partner Name | Capital Contribution (BDT) | Ownership Share % |
| --- | --- | --- |
| Apex Logistics Ltd | 6,000,000 | 60% |
| Orion Express | 4,000,000 | 40% |
| **Total** | **10,000,000** | **100%** |`
        }
      ],
      classification: {
        primaryClass: 'contract',
        confidence: 98.7,
        allScores: [
          { type: 'contract', score: 98.7 },
          { type: 'deed', score: 1.1 },
          { type: 'other', score: 0.2 }
        ]
      },
      segmentation: {
        segments: [
          { id: 'pa_s1', name: 'Cover Page', title: 'Recitals & Partners info', startCharIndex: 0, endCharIndex: 300, text: 'DEED OF PARTNERSHIP AGREEMENT\n\nThis DEED of Partnership Agreement is made this 1st day of April, 2026, between Apex Logistics Ltd and Orion Express.' },
          { id: 'pa_s2', name: 'Annexures', title: 'Clause 12 Governing Law', startCharIndex: 301, endCharIndex: 550, text: 'CLAUSE 12: GOVERNING LAW & ARBITRATION\nThis Agreement shall be governed and construed in accordance with the laws of Bangladesh...' },
          { id: 'pa_s3', name: 'Annexures', title: 'Clause 15 Contribution Table', startCharIndex: 551, endCharIndex: 800, text: 'CLAUSE 15: FINANCIAL CONTRIBUTION & SHARES\nThe capital of BDT 10,000,000, Apex: 60%, Orion: 40%' }
        ]
      },
      copyright: {
        copyrightSectionsFound: false,
        restrictedCommentaryCount: 0,
        publicDomainPercentage: 100,
        provenanceRecord: 'Private commercial deed template.'
      },
      chunking: {
        totalChunks: 2,
        chunks: [
          {
            id: 'pa_ch1',
            text: 'Partnership Agreement between Apex Logistics Ltd and Orion Express made on April 1, 2026. Governing law set to Bangladesh. Arbitration clause designates Dhaka as seat under Arbitration Act, 2001.',
            tokens: 34,
            headingContext: 'Partnership Agreement > Recitals & Dispute Resolution',
            citations: ['Arbitration Act, 2001'],
            metadata: { page: 1, section: 'Clauses 1-12' }
          },
          {
            id: 'pa_ch2',
            text: 'Partner Capital contributions: Apex Logistics Ltd: BDT 6,000,000 (60%), Orion Express: BDT 4,000,000 (40%), total capital is BDT 10,000,000. Termination clause allows dissolution via 90-day written notice.',
            tokens: 38,
            headingContext: 'Partnership Agreement > Financials & Termination',
            citations: [],
            metadata: { page: 1, section: 'Clauses 13-22' }
          }
        ]
      }
    },
    judicialRecord: {
      court: 'Dhaka Commercial Arbitration Tribunal',
      jurisdiction: 'Arbitration Panel',
      caseNo: 'Tribunal Ref: 102/2026',
      judges: ['Fahim Chowdhury (Tribunal Chair)'],
      date: '1 April 2026',
      area: 'Corporate & Contract Law',
      procedure: ['Arbitration', 'Agreement Verification'],
      parties: {
        petitioner: 'Apex Logistics Ltd',
        respondents: ['Orion Express']
      },
      statutes: [
        {
          name: 'Arbitration Act, 2001',
          sections: ['Clause 12', 'Section 15']
        }
      ],
      facts: [
        'Deed of Partnership made on 1st April 2026 between Apex Logistics and Orion Express.',
        'Total capital established is BDT 10,000,000.',
        'Disputes must be referred to arbitration in Dhaka.'
      ],
      issues: [
        'What governing laws apply to the settlement of partnership capital contributions?',
        'Does the 90-day dissolution notice constitute a valid exit clause?'
      ],
      held: [
        'The partnership capital is governed by the laws of Bangladesh.',
        'The 90-day written notice of dissolution is contractually binding.'
      ],
      ratioDecidendi: [
        'Partnership agreements are governed strictly by terms agreed upon unless in direct violation of statutory provisions.',
        'Arbitration is the exclusive remedy for contract disputes under Clause 12.'
      ],
      obiterDicta: [
        'Clarity in financial schedules prevents premature tribunal intervention in commercial joint ventures.'
      ],
      timeline: [
        { id: 'pa_t1', label: 'Execution', description: 'Partnership deed executed', status: 'completed' },
        { id: 'pa_t2', label: 'Contribution', description: 'Apex contributes 60% and Orion contributes 40%', status: 'completed' },
        { id: 'pa_t3', label: 'Dissolution Clause', description: 'Exit parameters activated upon 90-day notice', status: 'completed' }
      ],
      citations: ['Arbitration Act, 2001'],
      keywords: ['arbitration', 'partnership deed', 'capital contribution', 'governing law', 'dissolution']
    },
    decomposition: {
      caseId: 'ARB-DHAKA-2026-102',
      status: 'Reported',
      country: 'Bangladesh',
      advocates: ['In-House Counsel, Apex Logistics', 'Fahim Chowdhury (Orion Express Representative)'],
      proceduralHistory: [
        { stage: 'Contract Drafting', forum: 'Corporate Counsel', outcome: 'Deed of Partnership Executed on 1 April 2026' },
        { stage: 'Dispute Referral', forum: 'Dhaka Commercial Arbitration Tribunal', outcome: 'Deed validation and clause enforceability confirmed' }
      ],
      atomicFacts: [
        { id: 'pa-f1', text: 'Deed of Partnership executed on 1 April 2026 between Apex Logistics Ltd and Orion Express.', searchKeywords: ['Deed of Partnership', '1 April 2026', 'Apex Logistics'] },
        { id: 'pa-f2', text: 'Total capital established is BDT 10,000,000, with Apex contributing 60% and Orion contributing 40%.', searchKeywords: ['BDT 10,000,000', 'Apex 60%', 'Orion 40%'] },
        { id: 'pa-f3', text: 'Clause 12 specifies that the agreement is governed by the laws of Bangladesh and subject to arbitration under the Arbitration Act, 2001.', searchKeywords: ['Clause 12', 'laws of Bangladesh', 'Arbitration Act 2001'] },
        { id: 'pa-f4', text: 'Clause 22 governs dissolution, allowing termination upon 90 days written notice by either partner.', searchKeywords: ['Clause 22', 'dissolution notice', '90 days notice'] }
      ],
      atomicIssues: [
        { id: 'pa-i1', question: 'Which governing laws apply to disputes arising from the partnership capital contributions?', answer: 'The laws of Bangladesh apply as per Clause 12 of the Partnership Deed.' },
        { id: 'pa-i2', question: 'Does the 90-day written dissolution notice constitute a valid and enforceable exit clause?', answer: 'Yes, the 90-day notice is contractually binding and enforceable.' }
      ],
      statutesWithRoles: [
        { name: 'Arbitration Act, 2001', section: 'Section 15', role: 'Arbitral tribunal jurisdiction over contract disputes' },
        { name: 'Partnership Deed, 2026', section: 'Clause 12', role: 'Choice of law and arbitration forum selection' },
        { name: 'Partnership Deed, 2026', section: 'Clause 22', role: 'Exit clause and termination notice standards' }
      ],
      principles: [
        { id: 'pa-p1', statement: 'Commercial agreements are governed strictly by terms agreed upon by private entities unless in direct violation of statutory provisions.', category: 'substantive' },
        { id: 'pa-p2', statement: 'Arbitration is the exclusive primary remedy for commercial contract disputes when a valid clause exists.', category: 'procedure' }
      ],
      directions: [
        { id: 'pa-d1', actor: 'Partners', action: 'Refer all mutual commercial partnership disputes exclusively to arbitration in Dhaka.', timeframe: 'Immediate' },
        { id: 'pa-d2', actor: 'Arbitration Panel', action: 'Adhere to procedural timelines established under the Arbitration Act, 2001.', timeframe: 'Ongoing' }
      ],
      paragraphIndex: [
        { number: 1, category: 'Metadata', text: 'DEED OF PARTNERSHIP AGREEMENT between Apex Logistics and Orion Express, executed 1 April 2026.' },
        { number: 2, category: 'Law', text: 'Clause 12: Governing Law & Arbitration. This agreement shall be governed by the laws of Bangladesh.' },
        { number: 3, category: 'Facts', text: 'Clause 15: Financial Contribution. Capital established: BDT 10,000,000 (Apex 60%, Orion 40%).' },
        { number: 4, category: 'Directions', text: 'Clause 22: Termination. Dissolution may occur by giving 90 days written notice.' }
      ],
      aiSummary: {
        facts: 'Commercial entities Apex Logistics and Orion Express executed a partnership with BDT 10 million capital, containing a 90-day exit clause.',
        issue: 'Are the choice of Bangladesh governing law and the 90-day dissolution notice clauses fully enforceable under the Arbitration Act, 2001.',
        held: 'Yes. The clauses are legally binding. Private commercial partners must adhere strictly to agreed-upon arbitration and dissolution procedures.',
        keyPrinciple: 'Pacta sunt servanda. Parties must honor their contractual dispute and exit processes when clearly defined.'
      }
    }
  },
  {
    id: 'doc-specific-relief-act',
    name: 'The_Specific_Relief_Act_I_of_1877_Dhaka_Law_Reports.pdf',
    fileSize: '4.8 MB',
    mimeType: 'application/pdf',
    status: 'completed',
    progress: 100,
    dateUploaded: '2026-07-14 13:30',
    review: {
      isApproved: true,
      reviewedBy: 'nbt06654@gmail.com',
      reviewedAt: '2026-07-14 13:35',
      fieldsCorrected: [],
      validationWarnings: []
    },
    results: {
      validation: {
        isValid: true,
        magicBytes: '25 50 44 46 (PDF)',
        mimeType: 'application/pdf',
        sha256: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
        fingerprint: 'fp_book_sra_1877_dlr',
        isDuplicate: false,
        malwareStatus: 'Clean',
        securityDetails: 'Strict document schema validation completed. Scan shows 0 malware or threat signatures.'
      },
      quality: {
        dpi: 300,
        blurScore: 12,
        brightnessScore: 88,
        contrastScore: 82,
        rotationAngle: 0.5,
        skewAngle: 0.2,
        hasPerspectiveDistortion: false,
        hasCroppingIssues: false,
        noiseLevel: 'Low',
        hasBlankPages: false,
        blankPages: [],
        isPass: true,
        recommendations: []
      },
      enhancement: {
        deskewApplied: true,
        dewarpApplied: false,
        perspectiveCorrected: false,
        backgroundRemoved: true,
        shadowRemoved: true,
        noiseReduced: true,
        contrastEnhanced: true,
        superResolutionApplied: false,
        deskewAngle: -0.5
      },
      ocr: {
        detectedLanguage: 'Mixed',
        averageConfidence: 97.5,
        ocrTimeMs: 2450,
        text: `The Specific Relief Act [I of 1877]. Fourth Edition 2004. Dhaka Law Reports.`
      },
      handwriting: {
        detected: true,
        transcription: 'Marginal notes on Index: "Refer Section 12 & Section 22 precedents"',
        annotationsCount: 2,
        confidence: 91
      },
      layout: {
        pagesCount: 296,
        items: [
          { id: 'sra_l1', type: 'title', text: 'The Specific Relief Act [I of 1877]', page: 1, bbox: [15, 10, 85, 20] },
          { id: 'sra_l2', type: 'heading', text: 'Preface to 4th edition', page: 3, bbox: [20, 15, 80, 25] },
          { id: 'sra_l3', type: 'paragraph', text: 'The present edition is brought out after almost seven years of the 3rd edition...', page: 3, bbox: [10, 30, 90, 50] }
        ]
      },
      readingOrder: {
        orderedSequence: ['sra_l1', 'sra_l2', 'sra_l3'],
        layoutComplexity: 'Simple'
      },
      metadata: {
        title: 'The Specific Relief Act [I of 1877]',
        documentType: 'other',
        language: 'Mixed',
        author: 'Dhaka Law Reports Editorial',
        creationDate: '1877-02-07',
        modifiedDate: '2004-09-10',
        version: '4th Edition (DLR)',
        fileSize: '4.8 MB',
        pageCount: 296,
        subjectArea: 'Civil Law - Discretionary Remedies',
        legalDomain: 'Specific Performance & Preventive Relief'
      },
      entities: [
        { id: 'sra_e1', text: 'The Specific Relief Act, 1877', category: 'Act', confidence: 100 },
        { id: 'sra_e2', text: 'Section 12', category: 'Section', confidence: 100 },
        { id: 'sra_e3', text: 'Section 22', category: 'Section', confidence: 100 },
        { id: 'sra_e4', text: 'Section 9', category: 'Section', confidence: 100 },
        { id: 'sra_e5', text: 'Section 8', category: 'Section', confidence: 100 }
      ],
      citations: [
        { id: 'sra_c1', rawText: '72 DLR 456', reporter: 'DLR', volume: '72', page: '456', year: '2020', canonicalFormat: '72 DLR 456' },
        { id: 'sra_c2', rawText: '25 BLD 102', reporter: 'BLD', volume: '25', page: '102', year: '2005', canonicalFormat: '25 BLD 102' }
      ],
      clauses: [
        {
          id: 'sra_cl1',
          type: 'Remedies',
          title: 'Specific Performance Discretion',
          text: 'The jurisdiction to decree specific performance is discretionary, and the Court is not bound to grant such relief merely because it is lawful to do so.',
          confidence: 99,
          summary: 'Decreeing specific performance is entirely a discretionary remedy, to be exercised reasonably based on judicial principles.'
        }
      ],
      tables: [],
      classification: {
        primaryClass: 'other',
        confidence: 98.5,
        allScores: [
          { type: 'other', score: 98.5 },
          { type: 'deed', score: 1.0 },
          { type: 'contract', score: 0.5 }
        ]
      },
      segmentation: {
        segments: [
          { id: 'sra_seg1', name: 'Cover Page', title: 'Dhaka Law Reports Title Page', startCharIndex: 0, endCharIndex: 80, text: 'The Specific Relief Act [I of 1877]. Fourth Edition 2004. Dhaka Law Reports.' },
          { id: 'sra_seg2', name: 'Index', title: 'Statute Index Sections 1-57', startCharIndex: 81, endCharIndex: 400, text: 'Part I Preliminary. Section 1: Short title, Local extent. Section 3: Definitions.' }
        ]
      },
      copyright: {
        copyrightSectionsFound: true,
        restrictedCommentaryCount: 0,
        publicDomainPercentage: 100,
        provenanceRecord: 'Source: Official Dhaka Law Reports public domain book archive (Specific Relief Act).'
      },
      chunking: {
        totalChunks: 2,
        chunks: [
          {
            id: 'sra_ch1',
            text: 'Section 12 of the Specific Relief Act, 1877 deals with cases in which specific performance of contract is enforceable.',
            tokens: 22,
            headingContext: 'Chapter II > Contracts Enforceable',
            citations: ['Section 12 SRA'],
            metadata: { page: 41, section: 'Section 12' }
          },
          {
            id: 'sra_ch2',
            text: 'Section 22 establishes that decreeing specific performance is a discretionary judicial remedy that is sound and reasonable.',
            tokens: 24,
            headingContext: 'Chapter II > Discretion of Court',
            citations: ['Section 22 SRA'],
            metadata: { page: 59, section: 'Section 22' }
          }
        ]
      }
    },
    judicialRecord: {
      court: 'Supreme Court of Bangladesh',
      jurisdiction: 'Civil Appellate',
      caseNo: 'Reference Book I of 1877',
      judges: ['DLR Editorial Board'],
      date: '7 February 1877',
      area: 'Civil Discretionary Remedies',
      procedure: ['Specific Performance', 'Declaratory Decrees', 'Injunctions'],
      parties: {
        petitioner: 'The State of Bangladesh',
        respondents: ['Public Realm']
      },
      statutes: [
        {
          name: 'The Specific Relief Act, 1877',
          sections: ['Section 8', 'Section 9', 'Section 12', 'Section 21', 'Section 22', 'Section 42', 'Section 54', 'Section 56']
        }
      ],
      facts: [
        'An Act to define and amend the law relating to certain kinds of specific relief obtainable in civil suits.',
        'Preamble establishes expediency of defining discretionary civil remedies.'
      ],
      issues: [
        'How should discretionary specific performance under Section 22 be applied?',
        'Does Section 9 bar suits against the Government?'
      ],
      held: [
        'Discretion must not be arbitrary, but sound and guided by judicial principles.',
        'No suit under Section 9 shall be brought against the Government.'
      ],
      ratioDecidendi: [
        'Specific relief is a discretionary remedy governed by equity and civil law guidelines.',
        'Injunctive and preventive relief are governed by Chapters IX and X.'
      ],
      obiterDicta: [
        'The principles of equity under specific relief constitute a cornerstone of civil disputes resolution.'
      ],
      timeline: [
        { id: 'sra_t1', label: 'Enacted', description: 'Enacted on 7th February 1877', status: 'completed' },
        { id: 'sra_t2', label: 'Commencement', description: 'Entered into force on 1st May 1877', status: 'completed' },
        { id: 'sra_t3', label: 'Amended', description: 'Brought uptodate with latest case laws in 4th edition', status: 'completed' }
      ],
      citations: ['72 DLR 456', '25 BLD 102'],
      keywords: ['specific performance', 'injunction', 'declaratory decree', 'possession recovery', 'contract breach', 'judicial discretion', 'civil court']
    },
    decomposition: {
      caseId: 'SRA-1877-ACT',
      status: 'Reported',
      country: 'Bangladesh',
      advocates: ['Public Domain Editorial Board'],
      proceduralHistory: [
        { stage: 'Statutory Bill', forum: 'Imperial Legislative Council', outcome: 'Passed on 7 February 1877' },
        { stage: 'Bangladesh Adoption', forum: 'Presidential Order No. 48 of 1972', outcome: 'Adopted and modified' }
      ],
      atomicFacts: [
        { id: 'sra-f1', text: 'The Specific Relief Act was enacted to define and amend the laws relating to certain civil remedies.', searchKeywords: ['Specific Relief Act', 'enacted', 'civil remedies'] },
        { id: 'sra-f2', text: 'Section 12 outlines cases where specific performance of contracts is enforceable.', searchKeywords: ['Section 12', 'specific performance', 'enforceable'] }
      ],
      atomicIssues: [
        { id: 'sra-i1', question: 'Is the court bound to grant specific performance under Section 22?', answer: 'No. The jurisdiction is discretionary and the court is not bound to grant relief merely because it is lawful.' }
      ],
      statutesWithRoles: [
        { name: 'Specific Relief Act, 1877', section: 'Section 12', role: 'Governs when specific performance can be enforced' },
        { name: 'Specific Relief Act, 1877', section: 'Section 22', role: 'Governs judicial discretion and appellate corrections' }
      ],
      principles: [
        { id: 'sra-p1', statement: 'The jurisdiction to decree specific performance is discretionary, guided by judicial principles.', category: 'substantive' }
      ],
      directions: [
        { id: 'sra-d1', actor: 'Civil Courts', action: 'Apply sound judicial discretion when deciding specific performance suits.', timeframe: 'Ongoing' }
      ],
      paragraphIndex: [
        { number: 1, category: 'Metadata', text: 'The Specific Relief Act [I of 1877]. Enacted 7 February 1877.' }
      ],
      aiSummary: {
        facts: 'The Specific Relief Act 1877 defines discretionary remedies for civil rights violation, possession of property, and specific contracts performance.',
        issue: 'How does judicial discretion govern civil remedies such as specific performance and injunctions under the 1877 Act?',
        held: 'The remedy is discretionary and governed strictly by equitable guidelines capable of correction by a court of appeal.',
        keyPrinciple: 'Discretion must be sound, reasonable, and guided strictly by judicial precedents.'
      }
    }
  }
];
