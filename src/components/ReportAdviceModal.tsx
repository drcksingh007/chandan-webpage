/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Send, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface ReportAdviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  isNepali?: boolean;
}

const COMMON_REPORTS = [
  { id: 'usg', en: 'Ultrasound (USG) Abdomen', np: 'भिडियो एक्सरे (USG Abdomen)' },
  { id: 'lft', en: 'Liver Function Test (LFT/Bilirubin)', np: 'कलेजो जाँच (LFT, SGOT, SGPT)' },
  { id: 'fibroscan', en: 'FibroScan / Liver Elastography', np: 'फाइब्रोस्क्यान रिपोर्ट (FibroScan)' },
  { id: 'ubt', en: 'UBT (Urea Breath Test for H. Pylori)', np: 'युरिया ब्रेथ टेस्ट (UBT)' },
  { id: 'endoscopy', en: 'Endoscopy / Biopsy Report', np: 'इन्डोस्कोपी वा बायोप्सी रिपोर्ट' },
  { id: 'colonoscopy', en: 'Colonoscopy & Biopsy Report', np: 'कोलोनोस्कोपी तथा बायोप्सी रिपोर्ट' },
  { id: 'hepatitis', en: 'Hepatitis B / C Serology', np: 'हेपाटाइटिस बी / सी जाँच' },
  { id: 'cbc', en: 'CBC / Hemoglobin (Blood Count)', np: 'रगत जाँच (CBC / हेमोग्लोबिन)' },
  { id: 'stool', en: 'Stool Routine / Occult Blood', np: 'दिसा जाँच (Stool Routine)' },
];

export function ReportAdviceModal({ isOpen, onClose, isNepali = false }: ReportAdviceModalProps) {
  const [selectedReports, setSelectedReports] = useState<string[]>(['lft']);
  const [patientName, setPatientName] = useState('');
  const [summary, setSummary] = useState('');

  if (!isOpen) return null;

  const toggleReport = (id: string) => {
    if (selectedReports.includes(id)) {
      setSelectedReports(selectedReports.filter((r) => r !== id));
    } else {
      setSelectedReports([...selectedReports, id]);
    }
  };

  const selectedReportNames = selectedReports
    .map((id) => COMMON_REPORTS.find((r) => r.id === id)?.[isNepali ? 'np' : 'en'])
    .filter(Boolean)
    .join(', ');

  const textMessage = isNepali
    ? `नमस्ते डा. चन्दन सिंह ज्यू,\nम आफ्नो स्वास्थ्य जाँचको रिपोर्ट सल्लाहको लागि पठाउन चाहन्छु।\n\n` +
      `👤 बिरामीको नाम: ${patientName || 'बिरामी'}\n` +
      `📋 संलग्न रिपोर्टहरू: ${selectedReportNames || 'जाँच रिपोर्टहरू'}\n` +
      (summary ? `📝 मुख्य समस्या: ${summary}\n` : '') +
      `\nकृपया रिपोर्ट हेरी आवश्यक सल्लाह र उपचार मार्गदर्शन गरिदिनुहुन अनुरोध गर्दछु।`
    : `Namaste Dr. Chandan Singh,\nI am sending my lab/investigation reports for your medical advice.\n\n` +
      `👤 Patient: ${patientName || 'Patient'}\n` +
      `📋 Reports attached: ${selectedReportNames || 'Medical Investigation Reports'}\n` +
      (summary ? `📝 Summary: ${summary}\n` : '') +
      `\nPlease advise on the diagnosis and treatment plan. Thank you!`;

  const waUrl = `https://wa.me/9779848044146?text=${encodeURIComponent(textMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl p-5 shadow-2xl transition-all"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--fg)',
          border: '1px solid var(--border)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)]">
              <FileText className="w-4 h-4" />
            </span>
            <h2 className="font-display text-lg font-medium">
              {isNepali ? 'रिपोर्ट पठाउने निर्देशिका' : 'Send Reports for Advice'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--muted)] text-[var(--muted-fg)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3.5 text-sm">
          {/* Patient Details */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
              {isNepali ? 'बिरामीको नाम' : 'Patient Name'}
            </label>
            <input
              type="text"
              placeholder={isNepali ? 'उदा. कृष्ण शर्मा' : 'e.g. Krishna Sharma'}
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)]"
            />
          </div>

          {/* Select which reports */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1.5">
              {isNepali ? 'तपाईंसँग भएका रिपोर्टहरू छान्नुहोस्' : 'Select Reports You Are Sending'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {COMMON_REPORTS.map((r) => {
                const isSelected = selectedReports.includes(r.id);
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => toggleReport(r.id)}
                    className={`flex items-center gap-2 p-2 rounded-xl text-xs text-left transition-all border ${
                      isSelected
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)] font-medium'
                        : 'border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--accent)]'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'opacity-100' : 'opacity-30'}`}
                    />
                    <span className="truncate">{isNepali ? r.np : r.en}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brief symptoms */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
              {isNepali ? 'बिरामीलाई अहिले भइरहेको मुख्य समस्या' : 'Current Symptoms or Reason for Test'}
            </label>
            <input
              type="text"
              placeholder={isNepali ? 'उदा. आँखा पहेंलो भएको, खाना नरुच्ने...' : 'e.g. Elevated bilirubin, stomach pain...'}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)]"
            />
          </div>

          {/* Medical Guidance Box */}
          <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-medium text-[var(--fg)]">
              <AlertCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{isNepali ? 'राम्रो सल्लाहका लागि सुझाव:' : 'Tips for Clear Advice:'}</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-[var(--muted-fg)] leading-relaxed">
              <li>
                {isNepali
                  ? 'रिपोर्टको फोटो उज्यालो ठाउँमा सीधा राखेर खिच्नुहोस्, ताकि नम्बर स्पष्ट पढ्न सकियोस्।'
                  : 'Take photos in good lighting directly from above so lab values and reference ranges are readable.'}
              </li>
              <li>
                {isNepali
                  ? 'यदि पहिलेको औषधिको पुर्जा छ भने त्यसको फोटो पनि सँगै पठाउनुहोस्।'
                  : 'Include photos of current prescription or medicines you are taking.'}
              </li>
              <li>
                {isNepali
                  ? 'डा. चन्दन सिंहले ओपीडी फुर्सद हुनासाथ समीक्षा गरेर जवाफ दिनुहुनेछ।'
                  : 'Dr. Chandan Singh reviews reports between OPD sessions and will advise you on WhatsApp.'}
              </li>
            </ul>
          </div>

          {/* Action */}
          <div className="pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-medium transition-all shadow-sm text-[var(--accent-fg)]"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Send className="w-4 h-4" />
              <span>{isNepali ? 'व्हाट्सएपमा रिपोर्ट पठाउनुहोस्' : 'Send Reports on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
