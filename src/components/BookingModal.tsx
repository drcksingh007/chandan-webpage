/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Send, Copy, Check, MessageSquare, PhoneCall, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'opd' | 'online' | 'reports';
  isNepali?: boolean;
}

export function BookingModal({
  isOpen,
  onClose,
  initialType = 'opd',
  isNepali = false,
}: BookingModalProps) {
  const [consultType, setConsultType] = useState<'opd' | 'online' | 'reports'>(initialType);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'M' | 'F' | 'Other'>('M');
  const [location, setLocation] = useState('Nepalgunj');
  const [symptom, setSymptom] = useState('Acidity & Gas / पेट पोल्ने');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const typeLabels = {
    opd: isNepali ? 'अस्पताल ओपीडी भ्रमण (Sanjeevani OPD)' : 'Hospital OPD Visit (Sanjeevani)',
    online: isNepali ? 'अनलाइन भिडियो / फोन परामर्श' : 'Online Video / Phone Consultation',
    reports: isNepali ? 'जाँच रिपोर्ट देखाउने र सल्लाह' : 'Review Investigation & Lab Reports',
  };

  const formattedMessage = isNepali
    ? `नमस्ते डा. चन्दन कुमार सिंह ज्यू,\nम परामर्शको लागि समय लिन चाहन्छु।\n\n` +
      `📋 प्रकार: ${typeLabels[consultType]}\n` +
      `👤 बिरामीको नाम: ${patientName || 'बिरामी'}${age ? ` (${age} वर्ष / ${gender})` : ''}\n` +
      `📍 ठेगाना: ${location || 'नेपालगञ्ज'}\n` +
      `🩺 समस्या: ${symptom}\n` +
      (notes ? `📝 थप विवरण: ${notes}\n` : '') +
      `\nकृपया उपयुक्त समय र पालो जानकारी गराइदिनुहोला। धन्यवाद!`
    : `Namaste Dr. Chandan Singh,\nI would like to book a consultation.\n\n` +
      `📋 Consultation: ${typeLabels[consultType]}\n` +
      `👤 Patient Name: ${patientName || 'Patient'}${age ? ` (${age} yrs / ${gender})` : ''}\n` +
      `📍 City/District: ${location || 'Nepalgunj'}\n` +
      `🩺 Chief Concern: ${symptom}\n` +
      (notes ? `📝 Notes: ${notes}\n` : '') +
      `\nPlease let me know the available time slot. Thank you!`;

  const whatsappUrl = `https://wa.me/9779848044146?text=${encodeURIComponent(formattedMessage)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

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
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)]">
              <Calendar className="w-4 h-4" />
            </span>
            <h2 className="font-display text-lg font-medium">
              {isNepali ? 'अपोइन्टमेन्ट अनुरोध' : 'Consultation Request'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--muted)] text-[var(--muted-fg)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="mt-4 space-y-3.5 text-sm">
          {/* Service Mode Selector */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1.5">
              {isNepali ? 'परामर्श प्रकार छनोट गर्नुहोस्' : 'Select Consultation Type'}
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[var(--muted)]">
              <button
                type="button"
                onClick={() => setConsultType('opd')}
                className={`py-2 px-1 text-xs font-medium rounded-lg transition-all text-center ${
                  consultType === 'opd'
                    ? 'bg-[var(--card)] shadow-xs text-[var(--fg)] font-semibold'
                    : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                }`}
              >
                {isNepali ? 'OPD अस्पताल' : 'OPD Visit'}
              </button>
              <button
                type="button"
                onClick={() => setConsultType('online')}
                className={`py-2 px-1 text-xs font-medium rounded-lg transition-all text-center ${
                  consultType === 'online'
                    ? 'bg-[var(--card)] shadow-xs text-[var(--fg)] font-semibold'
                    : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                }`}
              >
                {isNepali ? 'भिडियो/फोन' : 'Video/Phone'}
              </button>
              <button
                type="button"
                onClick={() => setConsultType('reports')}
                className={`py-2 px-1 text-xs font-medium rounded-lg transition-all text-center ${
                  consultType === 'reports'
                    ? 'bg-[var(--card)] shadow-xs text-[var(--fg)] font-semibold'
                    : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                }`}
              >
                {isNepali ? 'रिपोर्ट जाँच' : 'Review Lab'}
              </button>
            </div>
          </div>

          {/* Patient Name */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
              {isNepali ? 'बिरामीको नाम' : 'Patient Name'}
            </label>
            <input
              type="text"
              placeholder={isNepali ? 'उदा. राम बहादुर थापा' : 'e.g. Ram Bahadur Thapa'}
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] focus:outline-hidden focus:border-[var(--accent)] text-sm"
            />
          </div>

          {/* Age & Gender & City in 2 Columns */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
                {isNepali ? 'उमेर र लिंग' : 'Age & Gender'}
              </label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-16 px-2 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)]"
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'M' | 'F' | 'Other')}
                  className="grow px-2 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs focus:outline-hidden focus:border-[var(--accent)]"
                >
                  <option value="M">Male (पुरुष)</option>
                  <option value="F">Female (महिला)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
                {isNepali ? 'ठेगाना / सहर' : 'City / District'}
              </label>
              <input
                type="text"
                placeholder="Nepalgunj / Banke"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)]"
              />
            </div>
          </div>

          {/* Chief Symptom / Issue */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
              {isNepali ? 'मुख्य समस्या वा लक्षण' : 'Primary Digestive Concern'}
            </label>
            <select
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)]"
            >
              <option value="Acid Reflux & Heartburn / छाती र पेट पोल्ने">Acid Reflux / Heartburn / पेट पोल्ने</option>
              <option value="Peptic Ulcer / पेटको घाउ समस्या">Peptic Ulcer / अल्सर समस्या</option>
              <option value="Fatty Liver & Liver Care / कलेजो र जन्डिस">Fatty Liver & Jaundice / कलेजो समस्या</option>
              <option value="FibroScan (Liver Stiffness) / फाइब्रोस्क्यान जाँच">FibroScan (Liver Elastography) / फाइब्रोस्क्यान</option>
              <option value="UBT (Urea Breath Test) / युरिया ब्रेथ टेस्ट">UBT (Urea Breath Test for H. Pylori)</option>
              <option value="Endoscopy / Upper GI Endoscopy सल्लाह">Endoscopy / इन्डोस्कोपी सल्लाह</option>
              <option value="Colonoscopy / कोलोनोस्कोपी जाँच">Colonoscopy / कोलोनोस्कोपी जाँच</option>
              <option value="USG (Abdominal Ultrasound) / भिडियो एक्सरे">USG (Abdominal Ultrasound) / भिडियो एक्सरे</option>
              <option value="Persistent Stomach Pain / लगातार पेट दुख्ने">Persistent Stomach Pain / पेट दुखाइ</option>
              <option value="IBS, Gas & Constipation / ग्यास, कब्जियत, पखाला">IBS, Gas & Constipation / कब्जियत वा पखाला</option>
              <option value="IPD Hospital Admission / अस्पताल भर्ना परामर्श">IPD Admission / अस्पताल भर्ना परामर्श</option>
              <option value="Follow-up Consultation / पुरानो औषधि समीक्षा">Follow-up / पुरानो औषधि समीक्षा</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-[var(--muted-fg)] mb-1">
              {isNepali ? 'थप विवरण वा कति दिनदेखि समस्या छ?' : 'Brief Details or Duration of Symptoms (Optional)'}
            </label>
            <textarea
              rows={2}
              placeholder={isNepali ? 'उदा. २ हप्तादेखि खाना खाएपछि पेट भारी हुन्छ...' : 'e.g. Experiencing pain after meals for 2 weeks...'}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-1.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm focus:outline-hidden focus:border-[var(--accent)] resize-none"
            />
          </div>

          {/* Formatted Preview Box */}
          <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
            <div className="flex items-center justify-between text-xs text-[var(--muted-fg)] mb-1">
              <span>{isNepali ? 'व्हाट्सएपमा जाने सन्देश:' : 'WhatsApp Message Preview:'}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-[var(--fg)] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isNepali ? 'प्रतिलिपि भयो' : 'Copied') : (isNepali ? 'कपी गर्नुहोस्' : 'Copy')}</span>
              </button>
            </div>
            <p className="text-xs font-mono text-[var(--fg)] whitespace-pre-line leading-relaxed max-h-28 overflow-y-auto">
              {formattedMessage}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-medium transition-all shadow-sm text-[var(--accent-fg)]"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Send className="w-4 h-4" />
              <span>{isNepali ? 'व्हाट्सएपमा तुरुन्त पठाउनुहोस्' : 'Send Directly on WhatsApp'}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="viber://chat?number=%2B9779848044146"
                onClick={handleCopy}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium bg-[var(--muted)] text-[var(--fg)] hover:bg-opacity-80 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isNepali ? 'Viber मा खोल्नुहोस्' : 'Open in Viber'}</span>
              </a>

              <a
                href="tel:+9779848044146"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium bg-[var(--muted)] text-[var(--fg)] hover:bg-opacity-80 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{isNepali ? 'फोनमा कुरा गर्नुहोस्' : 'Call 9848044146'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
