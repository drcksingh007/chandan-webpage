/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ChevronRight, ArrowUpRight } from 'lucide-react';

export interface HealthArticle {
  id: string;
  categoryEn: string;
  categoryNp: string;
  titleEn: string;
  titleNp: string;
  date: string;
  summaryEn: string;
  summaryNp: string;
  contentEn: string[];
  contentNp: string[];
  readTime: string;
  badge: string;
  svgVisual: React.ReactNode;
}

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'gerd-tips',
    categoryEn: 'Digestive Health',
    categoryNp: 'पाचन स्वास्थ्य',
    titleEn: 'Tips to Manage Acid Reflux & Heartburn Every Day',
    titleNp: 'पेट र छाती पोल्ने (एसिड रिफ्लक्स) नियन्त्रण गर्ने दैनिक उपाय',
    date: '20 Sep 2026',
    readTime: '3 min read',
    badge: 'GERD Care',
    svgVisual: (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-85">
        {/* Esophagus & Stomach Illustration */}
        <path d="M96 10 L96 45 Q96 70 80 80 Q65 90 70 105 Q78 115 110 110 Q135 105 130 80 Q125 55 104 45 L104 10 Z" fill="#f43f5e" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="2" />
        {/* Stomach Acid Pool with bubble effect */}
        <path d="M72 90 Q95 85 125 90 L120 105 Q95 115 75 105 Z" fill="#fbbf24" fillOpacity="0.7" />
        <circle cx="95" cy="80" r="3" fill="#fbbf24" />
        <circle cx="102" cy="72" r="2" fill="#fbbf24" />
        {/* Anti-Reflux Barrier Shield */}
        <ellipse cx="100" cy="48" rx="8" ry="4" fill="#14b8a6" stroke="#0d9488" strokeWidth="1.5" />
      </svg>
    ),
    summaryEn:
      'Simple dietary timing changes, elevating head during sleep, and identifying trigger foods can relieve GERD symptoms.',
    summaryNp: 'सुत्ने समय, खानपानको तालिका र पिरो-चिल्लो घटाएर ग्यास्ट्राइटिस र रिफ्लक्सबाट बच्ने व्यावहारिक सल्लाह।',
    contentEn: [
      'Gastroesophageal reflux occurs when stomach acid repeatedly splashes back into the food pipe. To prevent this, avoid lying down immediately after meals; maintain a 2 to 3 hour gap between dinner and bedtime.',
      'Reduce fried foods, strong caffeine, and carbonated beverages. Eat smaller, frequent meals instead of heavy dinners.',
      'Elevating the head of your bed by 6 inches mechanically prevents nocturnal acid surge. Consult Dr. Chandan Singh if symptoms persist for over two weeks.',
    ],
    contentNp: [
      'खाना खाएपछि कम्तीमा २ देखि ३ घण्टासम्म नसुत्नुहोस्। तुरुन्त सुत्दा पेटको एसिड घाँटीतिर फर्किने सम्भावना धेरै हुन्छ।',
      'अत्यधिक चिल्लो, पिरो, चिया, कफी र चिसो पेय पदार्थको सेवन कम गर्नुहोस्। एकैपटक धेरै खानुको सट्टा थोरै-थोरै गरी पटक-पटक खानु राम्रो हुन्छ।',
      'यदि छाती पोल्ने समस्या हप्तामा दुई पटकभन्दा बढी हुन्छ भने यसलाई सामान्य नठानी डा. चन्दन सिंहसँग परामर्श लिनुहोस्।',
    ],
  },
  {
    id: 'fibroscan-liver',
    categoryEn: 'Liver Care',
    categoryNp: 'कलेजो हेरचाह',
    titleEn: 'Why Early FibroScan is Crucial for Fatty Liver & Jaundice',
    titleNp: 'फ्याट्टी लिभर र जन्डिसमा फाइब्रोस्क्यान किन आवश्यक छ?',
    date: '18 Sep 2026',
    readTime: '4 min read',
    badge: 'FibroScan',
    svgVisual: (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-85">
        {/* Anatomical Liver Contour */}
        <path d="M50 45 C70 25 130 25 150 45 C165 60 160 85 140 100 C110 115 70 110 50 85 C40 70 40 55 50 45 Z" fill="#047857" fillOpacity="0.25" stroke="#10b981" strokeWidth="2" />
        {/* Liver Lobes & Elastography shear wave lines */}
        <path d="M70 50 Q100 45 130 65" stroke="#34d399" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
        <path d="M65 70 Q95 65 125 85" stroke="#34d399" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
        {/* Sensor marker */}
        <circle cx="100" cy="65" r="14" fill="#065f46" stroke="#6ee7b7" strokeWidth="2" />
        <circle cx="100" cy="65" r="5" fill="#a7f3d0" />
      </svg>
    ),
    summaryEn:
      'FibroScan painlessly detects liver stiffness and fat percentage in 10 minutes without invasive needles.',
    summaryNp: 'बिना सुई र बिना दुखाइ १० मिनेटमै कलेजोको बोसो र कडापन मापन गर्ने आधुनिक प्रविधि।',
    contentEn: [
      'Fatty liver disease often develops silently without obvious pain. By the time swelling or jaundice appears, liver stiffness may have already progressed.',
      'FibroScan transient elastography accurately quantifies the CAP score (fat percentage) and stiffness (E-score), providing immediate staging.',
      'With early lifestyle modification, structured aerobic exercise, and medical supervision at Sanjeevani, early-stage fatty liver is completely reversible.',
    ],
    contentNp: [
      'फ्याट्टी लिभर (Fatty Liver) को प्रारम्भिक अवस्थामा कुनै दुखाइ नहुन सक्छ। तर समयमै ख्याल नगरे कलेजो कडा हुने (Cirrhosis) खतरा हुन्छ।',
      'संजीवनीमा उपलब्ध फाइब्रोस्क्यान प्रविधिले १० मिनेटमै कुनै दुखाइ बिना कलेजोको बोसो र कडापनको सही ग्रेडिङ गर्छ।',
      'सही खानपान, शारीरिक व्यायाम र डाक्टरको नियमित सल्लाहले प्रारम्भिक फ्याट्टी लिभर पूर्ण रूपमा निको हुन सक्छ।',
    ],
  },
  {
    id: 'ubt-stomach',
    categoryEn: 'Diagnostics',
    categoryNp: 'डायग्नोस्टिक',
    titleEn: 'UBT (Urea Breath Test): Fast Detection of Stomach Ulcers',
    titleNp: 'युरिया ब्रेथ टेस्ट (UBT): अल्सर गराउने कीटाणु पत्ता लगाउने श्वास जाँच',
    date: '16 Sep 2026',
    readTime: '3 min read',
    badge: 'UBT Lab',
    svgVisual: (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-85">
        {/* Breath Stream & Analyzer Bag */}
        <rect x="110" y="30" width="55" height="60" rx="8" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
        <line x1="137" y1="20" x2="137" y2="30" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
        {/* Exhaled Breath Waveforms */}
        <path d="M40 50 Q65 35 90 55 T135 45" fill="none" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
        <path d="M45 65 Q70 50 95 70 T135 60" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <text x="118" y="70" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">UBT</text>
      </svg>
    ),
    summaryEn:
      'The Urea Breath Test is the non-invasive gold standard test to detect Helicobacter pylori bacterial infection.',
    summaryNp: 'पेटमा नली नछिराई केवल श्वास फुकेर अल्सरको कीटाणु पत्ता लगाउने विश्वस्तरीय जाँच।',
    contentEn: [
      'Helicobacter pylori (H. pylori) bacteria infect the stomach lining and are responsible for the vast majority of peptic ulcers and long-standing gastric burning.',
      'UBT requires only blowing into a special collection bag before and after a safe solution, with 98%+ diagnostic accuracy.',
      'It is also the best method to verify whether your ulcer medication has completely cleared the bacterial infection.',
    ],
    contentNp: [
      'एच. पाइलोरी ब्याक्टेरिया पेटमा घाउ र बारम्बार ग्यास्ट्रिक गराउने मुख्य कारण हो।',
      'युरिया ब्रेथ टेस्ट (UBT) मा नली छिराउनु पर्दैन। केवल श्वास फुकेर १५ मिनेटमै ब्याक्टेरिया भए-नभएको ९८% यकिन हुन्छ।',
      'औषधि खाइसकेपछि कीटाणु नष्ट भयो कि भएन भनेर निश्चित गर्न पनि यो परीक्षण सबैभन्दा भरपर्दो मानिन्छ।',
    ],
  },
  {
    id: 'colonoscopy-care',
    categoryEn: 'Preventive Care',
    categoryNp: 'रोकथाम तथा जाँच',
    titleEn: 'Colonoscopy Screening: Protecting Bowel & Colon Health',
    titleNp: 'कोलोनोस्कोपी जाँच: आन्द्राको स्वास्थ्य र क्यान्सर रोकथाम',
    date: '14 Sep 2026',
    readTime: '4 min read',
    badge: 'Colonoscopy',
    svgVisual: (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-85">
        {/* Large Intestine / Colon Track */}
        <path
          d="M50 95 L50 40 Q50 25 70 25 L130 25 Q150 25 150 40 L150 95"
          fill="none"
          stroke="#475569"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 95 L50 40 Q50 25 70 25 L130 25 Q150 25 150 40 L150 95"
          fill="none"
          stroke="#0f766e"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Endoscope Light Tip */}
        <circle cx="150" cy="75" r="8" fill="#5eead4" />
        <circle cx="150" cy="75" r="4" fill="#ffffff" />
      </svg>
    ),
    summaryEn:
      'Screening colonoscopy enables early identification and painless removal of polyps before they turn into serious disease.',
    summaryNp: 'दिसामा रगत देखिने वा लामो समयदेखि दिसा गडबडी हुने समस्यामा कोलोनोस्कोपी किन गरिन्छ?',
    contentEn: [
      'A colonoscopy allows visual inspection of the entire large intestine and rectum using a flexible high-definition video scope.',
      'Warning signs requiring evaluation include blood in stool, persistent diarrhea or constipation lasting over 4 weeks, and unexplained anemia.',
      'Performed gently under comfortable sedation at Sanjeevani College of Medical Sciences with immediate biopsy and photo documentation.',
    ],
    contentNp: [
      'कोलोनोस्कोपी द्वारा ठूलो आन्द्राको भित्री भाग स्पष्ट क्यामराबाट हेरिन्छ।',
      'दिसामा रगत आउने, बिना कारण तौल घट्ने वा १ महिनाभन्दा बढी दिसा गडबडी भएमा यो जाँच तुरुन्त गर्नुपर्छ।',
      'संजीवनी अस्पतालमा हल्का लट्ठ्याएर बिरामीलाई दुख्न नदिई यो जाँच सुरक्षित रूपमा गरिन्छ।',
    ],
  },
];

interface HealthArticlesProps {
  isNepali?: boolean;
}

export function HealthArticles({ isNepali = false }: HealthArticlesProps) {
  const [activeArticle, setActiveArticle] = useState<HealthArticle | null>(null);

  return (
    <section className="mt-14" id="berita">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            {isNepali ? 'स्वास्थ्य जानकारी र सुझावहरू' : 'Health News & Guidance'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] mt-1">
            {isNepali ? 'स्वास्थ्य सल्लाह तथा जानकारी' : 'Health News & Clinical Tips'}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setActiveArticle(HEALTH_ARTICLES[0])}
          className="text-xs font-semibold text-[var(--accent)] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
        >
          <span>{isNepali ? 'सबै लेखहरू हेर्नुहोस्' : 'View All Articles'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Article Grid matching the screenshot with visual header pictures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HEALTH_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-md hover:border-[var(--accent)] transition-all cursor-pointer flex flex-col"
          >
            {/* Decorated Picture Thumbnail Header */}
            <div className="h-36 bg-gradient-to-br from-teal-950/20 via-slate-900/10 to-slate-800/20 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center relative p-3 border-b border-[var(--border)] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {article.svgVisual}
              </div>
              <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-teal-800 dark:text-teal-300 shadow-xs backdrop-blur-xs">
                {isNepali ? article.categoryNp : article.categoryEn}
              </span>
              <span className="absolute bottom-2.5 right-3 text-[10px] font-medium text-[var(--muted-fg)] bg-[var(--card)]/90 px-2 py-0.5 rounded-md backdrop-blur-xs border border-[var(--border)]">
                {article.date}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col grow justify-between">
              <div>
                <h3 className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2">
                  {isNepali ? article.titleNp : article.titleEn}
                </h3>
                <p className="text-xs text-[var(--muted-fg)] mt-1.5 line-clamp-2 leading-relaxed">
                  {isNepali ? article.summaryNp : article.summaryEn}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--border)] text-[11px] text-[var(--accent)] font-semibold">
                <span>{isNepali ? 'पूरा पढ्नुहोस्' : 'Read Full Guide'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 shadow-2xl transition-all"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--fg)',
              border: '1px solid var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-[var(--border)]">
              <div>
                <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider">
                  {isNepali ? activeArticle.categoryNp : activeArticle.categoryEn} · {activeArticle.readTime}
                </span>
                <h3 className="font-display text-lg font-bold mt-1 text-[var(--fg)] leading-snug">
                  {isNepali ? activeArticle.titleNp : activeArticle.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-full hover:bg-[var(--muted)] text-[var(--muted-fg)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--fg)]">
              {(isNepali ? activeArticle.contentNp : activeArticle.contentEn).map((paragraph, i) => (
                <p key={i} className="text-xs leading-relaxed text-[var(--fg)]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted-fg)]">
              <span>Dr. Chandan Singh · Sanjeevani Digestive Health</span>
              <a
                href="https://wa.me/9779848044146?text=Namaste%20Doctor%2C%20I%20have%20a%20question%20regarding%20digestive%20health."
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] font-semibold hover:underline"
              >
                {isNepali ? 'डाक्टरसँग सल्लाह लिनुहोस् →' : 'Consult with Doctor →'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
