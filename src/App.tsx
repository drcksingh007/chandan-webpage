/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { DoctorAvatar } from './components/DoctorAvatar.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { ReportAdviceModal } from './components/ReportAdviceModal.tsx';
import { ServiceModal, DIGESTIVE_SERVICES, DigestiveService } from './components/ServiceModal.tsx';
import {
  HospitalHeroVisual,
  HospitalBuildingVisual,
  FacilityThumbnail,
} from './components/HospitalVisuals.tsx';
import { HealthArticles } from './components/HealthArticles.tsx';
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Building2,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Users,
  BedDouble,
  Award,
  ChevronRight,
  ArrowRight,
  Share2,
  Globe2,
  PhoneCall,
  MessageSquare,
  AlertCircle,
  Activity,
  Microscope,
  HeartPulse,
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isNepali, setIsNepali] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'opd' | 'online' | 'reports'>('opd');
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<DigestiveService | null>(null);
  const [serviceFilter, setServiceFilter] = useState<'all' | 'procedure' | 'facility' | 'condition'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredServices =
    serviceFilter === 'all'
      ? DIGESTIVE_SERVICES
      : DIGESTIVE_SERVICES.filter((s) => s.category === serviceFilter);

  // Initialize theme from localStorage or system preference safely
  useEffect(() => {
    try {
      const root = document.documentElement;
      let saved: string | null = null;
      try {
        saved = localStorage.getItem('theme');
      } catch {
        // Safe fallback if Chrome localStorage is restricted
      }
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDark = saved === 'dark' || (!saved && prefersDark);
      setIsDark(initialDark);
      if (initialDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      root.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {
        // Ignore storage error
      }
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {
        // Ignore storage error
      }
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Dr. Chandan Singh — Practicing Gastroenterology, Sanjeevani Hospital',
      text: 'Dr. Chandan Kumar Singh, MD Medicine, Practicing Gastroenterology at Sanjeevani College of Medical Sciences, Nepalgunj.',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast(isNepali ? 'लिङ्क कपी गरियो!' : 'Link copied to clipboard!');
      }
    } catch {
      // User dismissed share
    }
  };

  const openBooking = (type: 'opd' | 'online' | 'reports') => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-200 antialiased selection:bg-teal-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[var(--card)] text-[var(--fg)] border border-[var(--border)] shadow-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ======================================================== */}
      {/* TOP NAVBAR (Matching the screenshot's top-level header)   */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[var(--card)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo & Name: Doctor's Picture in place of plus sign */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <DoctorAvatar size={44} shape="circle" />
            </div>
            <div>
              <span className="block font-display font-bold text-base sm:text-lg tracking-tight text-[var(--fg)] leading-none">
                SANJEEVANI HOSPITAL
              </span>
              <span className="block text-[11px] font-medium text-[var(--muted-fg)] mt-1">
                {isNepali
                  ? 'डा. चन्दन सिंह · एमडी मेडिसिन · प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी'
                  : 'Dr. Chandan Singh · MD Medicine · Practicing Gastroenterology'}
              </span>
            </div>
          </a>

          {/* Navigation Links in clean English / Nepali */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[var(--muted-fg)]">
            <a href="#home" className="text-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {isNepali ? 'गृहपृष्ठ' : 'Home'}
            </a>
            <a href="#about" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'हाम्रो बारेमा' : 'About'}
            </a>
            <a href="#services" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'सेवाहरू' : 'Services'}
            </a>
            <a href="#doctor" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'डा. चन्दन सिंह' : 'Doctor Profile'}
            </a>
            <a href="#facilities" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'सुविधाहरू' : 'Facilities'}
            </a>
            <a href="#health-tips" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'स्वास्थ्य सल्लाह' : 'Health Tips'}
            </a>
            <a href="#contact" className="hover:text-[var(--fg)] transition-colors">
              {isNepali ? 'सम्पर्क' : 'Contact'}
            </a>
          </nav>

          {/* Top Actions: Language, Theme, & Book Online */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => setIsNepali(!isNepali)}
              className="h-9 px-3 rounded-full text-xs font-semibold border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--fg)] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Toggle English / नेपाली"
            >
              <Globe2 className="w-3.5 h-3.5 opacity-70" />
              <span>{isNepali ? 'English' : 'नेपाली'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--fg)] transition-colors flex items-center justify-center text-sm cursor-pointer shadow-xs"
              aria-label="Toggle theme"
            >
              {isDark ? '☀' : '◐'}
            </button>

            {/* Primary Action Button: "Book Online" */}
            <button
              type="button"
              onClick={() => openBooking('opd')}
              className="h-10 px-4 rounded-xl text-xs font-bold text-[var(--accent-fg)] shadow-sm hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isNepali ? 'अपोइन्टमेन्ट लिनुहोस्' : 'Book Appointment'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">
        {/* ======================================================== */}
        {/* 1. HERO SECTION (Split Left/Right matching screenshot)   */}
        {/* ======================================================== */}
        <section id="home" className="pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-[var(--accent)] border border-teal-500/20 shadow-xs">
                <span>💙</span>
                <span>
                  {isNepali
                    ? 'तपाईंको स्वास्थ्य, हाम्रो पहिलो प्राथमिकता'
                    : 'Your Health, Our Highest Priority'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--fg)] leading-[1.15]">
                {isNepali
                  ? 'तपाईं र तपाईंको परिवारका लागि उत्कृष्ट पाचन तथा कलेजो स्वास्थ्य सेवा'
                  : 'Excellence in Digestive, Liver & Comprehensive Healthcare'}
              </h1>

              {/* Physician Subtitle & Bio */}
              <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed max-w-xl">
                {isNepali
                  ? 'डा. चन्दन कुमार सिंह, एमडी (मेडिसिन), प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी — संजीवनी कलेज अफ मेडिकल साइन्सेस, नेपालगञ्ज। कोलोनोस्कोपी, फाइब्रोस्क्यान, UBT (श्वास परीक्षण), भिडियो एक्सरे, आधुनिक ल्याब, ICU र २४सै घण्टा आकस्मिक सेवा सहित भरपर्दो उपचार।'
                  : 'Led by Dr. Chandan Kumar Singh, MD (Medicine), Practicing Gastroenterology and liver care at Sanjeevani College of Medical Sciences, Nepalgunj. Equipped with Colonoscopy, FibroScan, UBT, High-Res USG, ICU & 24/7 Emergency.'}
              </p>

              {/* Action Buttons matching screenshot structure */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openBooking('opd')}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[var(--accent-fg)] shadow-md hover:scale-[1.02] active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isNepali ? 'ओपीडी समय लिनुहोस्' : 'Book Consultation'}</span>
                </button>

                <a
                  href="#services"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--fg)] border border-[var(--border)] shadow-xs transition-all flex items-center gap-2"
                >
                  <span>{isNepali ? 'सेवाहरू हेर्नुहोस्' : 'Explore Services'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Signature 3 Direct Consultation Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {/* 1. WhatsApp OPD */}
                <a
                  href="https://wa.me/9779848044146?text=Namaste%20Doctor%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xs transition-all flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">
                    W
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {isNepali ? 'व्हाट्सएप ओपीडी' : 'WhatsApp OPD'}
                    </p>
                    <p className="text-[10px] text-[var(--muted-fg)] truncate">
                      984-8044146
                    </p>
                  </div>
                </a>

                {/* 2. Video / Phone Consultation */}
                <a
                  href="https://wa.me/9779848044146?text=Namaste%20Doctor%2C%20I%20would%20like%20an%20online%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xs transition-all flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-700 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                    🎥
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {isNepali ? 'अनलाइन परामर्श' : 'Online Consult'}
                    </p>
                    <p className="text-[10px] text-[var(--muted-fg)] truncate">
                      {isNepali ? 'भिडियो वा फोन' : 'Video or Phone'}
                    </p>
                  </div>
                </a>

                {/* 3. Send Reports */}
                <button
                  type="button"
                  onClick={() => setReportModalOpen(true)}
                  className="p-3 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xs transition-all flex items-center gap-2.5 group text-left cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-700 dark:text-teal-400 flex items-center justify-center text-sm font-bold shrink-0">
                    📎
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {isNepali ? 'रिपोर्ट देखाउनुहोस्' : 'Send Reports'}
                    </p>
                    <p className="text-[10px] text-[var(--muted-fg)] truncate">
                      {isNepali ? 'ल्याब र भिडियो एक्सरे' : 'Lab & Ultrasound'}
                    </p>
                  </div>
                </button>
              </div>

              {/* Status footer pill */}
              <div className="flex items-center gap-3 text-xs text-[var(--muted-fg)] pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {isNepali ? 'ओपीडी खुला: बिहान ९:०० - दिउँसो ५:००' : 'OPD Open: 9:00 AM – 5:00 PM'}
                  </span>
                </span>
                <span>·</span>
                <span>Sanjeevani College, Nepalgunj</span>
              </div>
            </div>

            {/* Right Column: Visual illustration matching the hospital scene in screenshot */}
            <div className="lg:col-span-6">
              <HospitalHeroVisual />
            </div>
          </div>

          {/* ======================================================== */}
          {/* FLOATING STATS BAR (Matching screenshot layout)          */}
          {/* ======================================================== */}
          <div className="mt-10 sm:mt-14 p-4 sm:p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[var(--fg)] tabular-nums">
                    14+ Years
                  </p>
                  <p className="text-xs text-[var(--muted-fg)] font-medium">
                    {isNepali ? 'चिकित्सा अनुभव' : 'Clinical Experience'}
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xl shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[var(--fg)] tabular-nums">
                    25,000+
                  </p>
                  <p className="text-xs text-[var(--muted-fg)] font-medium">
                    {isNepali ? 'सन्तुष्ट बिरामीहरू' : 'Patients Consulted'}
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shrink-0">
                  <BedDouble className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[var(--fg)] tabular-nums">
                    300+ Beds
                  </p>
                  <p className="text-xs text-[var(--muted-fg)] font-medium">
                    {isNepali ? 'अस्पताल बेड र ICU' : 'Hospital Wards & ICU'}
                  </p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[var(--fg)] tabular-nums">
                    98%
                  </p>
                  <p className="text-xs text-[var(--muted-fg)] font-medium">
                    {isNepali ? 'उच्च बिरामी सन्तुष्टि' : 'Patient Satisfaction'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. ABOUT US SECTION (Matching screenshot's Tentang Kami) */}
        {/* ======================================================== */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Modern Hospital Facade Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <HospitalBuildingVisual isNepali={isNepali} />
            </div>

            {/* Right: Doctor Biography & 4 Clinical Badges */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-[var(--accent)] border border-teal-500/20">
                <span>🏥</span>
                <span>{isNepali ? 'हाम्रो परिचय' : 'About Dr. Chandan Singh & Sanjeevani'}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--fg)] leading-tight">
                {isNepali
                  ? 'स्वस्थ जीवनका लागि भरपर्दो परामर्श र आधुनिक उपचार'
                  : 'Compassionate Listening & Practicing Gastroenterology in Nepalgunj'}
              </h2>

              {/* Exact English & Nepali Statement provided by the Doctor */}
              <p className="text-sm leading-relaxed text-[var(--fg)]">
                I am <strong>Dr. Chandan Kumar Singh, MD (Medicine)</strong>, a physician practicing gastroenterology at Sanjeevani College of Medical Sciences in Nepalgunj. I care for people with digestive and liver conditions — reflux, ulcer disease, hepatitis, fatty liver, abdominal pain, and bowel disorders — with careful listening and clear, practical advice.
              </p>

              <p className="text-sm leading-relaxed text-[var(--muted-fg)]">
                Consultations are unhurried, in language patients and families can use. You are welcome to book on WhatsApp, Viber, or by phone.
              </p>

              <p className="font-deva text-xs sm:text-sm leading-relaxed text-[var(--muted-fg)] bg-[var(--card)] p-3.5 rounded-2xl border border-[var(--border)]">
                म डा. चन्दन कुमार सिंह, एमडी (मेडिसिन), प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी — नेपालगञ्जको संजीवनी कलेज अफ मेडिकल साइन्सेस। पाचन र कलेजोसम्बन्धी समस्यामा ध्यानपूर्वक सुनेर स्पष्ट सल्लाह र भरपर्दो उपचार दिने मेरो प्रयास हो।
              </p>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm mb-2">
                    ⏰
                  </div>
                  <h3 className="text-xs font-bold text-[var(--fg)]">
                    {isNepali ? '२४सै घण्टा आकस्मिक सेवा' : '24/7 Emergency Care'}
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    {isNepali ? '०८१-५२६४५८' : 'Direct Line: 081-526458'}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm mb-2">
                    👨‍⚕️
                  </div>
                  <h3 className="text-xs font-bold text-[var(--fg)]">
                    {isNepali ? 'एमडी विशेषज्ञ परामर्श' : 'MD Specialist Physician'}
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    {isNepali ? 'विस्तृत र समय दिएर जाँच' : 'Unhurried Patient Care'}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm mb-2">
                    🔬
                  </div>
                  <h3 className="text-xs font-bold text-[var(--fg)]">
                    {isNepali ? 'आधुनिक उपकरण सुइट' : 'Advanced GI Equipment'}
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    {isNepali ? 'FibroScan, UBT, USG, Endo' : 'FibroScan, UBT, Colonoscopy'}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm mb-2">
                    🛡️
                  </div>
                  <h3 className="text-xs font-bold text-[var(--fg)]">
                    {isNepali ? 'सुरक्षित र प्रभावकारी' : 'Evidence-Based Medicine'}
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    {isNepali ? 'बिरामीको गोपनीयता र गुणस्तर' : 'High Ethical Standards'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. SERVICES SECTION (Matching screenshot's Layanan Kami) */}
        {/* ======================================================== */}
        <section id="services" className="scroll-mt-24">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {isNepali ? 'चिकित्सा तथा डायग्नोस्टिक सेवाहरू' : 'Clinical & Diagnostic Services'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] mt-1">
                {isNepali ? 'हाम्रा मुख्य सेवा तथा सुविधाहरू' : 'Our Specialized Services'}
              </h2>
            </div>
            <a
              href="#all-services-list"
              className="text-xs font-semibold text-[var(--accent)] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>{isNepali ? 'सबै सेवाहरू हेर्नुहोस्' : 'View All Services'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 6 Quick Category Cards matching the screenshot's row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-8">
            {/* 1. OPD Clinic */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'gerd') || null)}
              className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🩺
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {isNepali ? 'ओपीडी क्लिनिक' : 'Specialist OPD'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? 'डा. चन्दन सिंह' : 'Dr. Chandan Singh'}
                </p>
              </div>
            </div>

            {/* 2. Inpatient Admission (IPD) */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'ipd') || null)}
              className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🛌
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {isNepali ? 'अस्पताल भर्ना (IPD)' : 'Inpatient (IPD)'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? 'क्याबिन तथा वार्ड' : 'Wards & AC Rooms'}
                </p>
              </div>
            </div>

            {/* 3. 24/7 Emergency */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'emergency') || null)}
              className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 hover:border-red-500 hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🚨
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-red-700 dark:text-red-400">
                  {isNepali ? '२४सै घण्टा आकस्मिक' : '24*7 Emergency'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? '०८१-५२६४५८' : 'Line: 081-526458'}
                </p>
              </div>
            </div>

            {/* 4. Radiology & USG */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'usg') || null)}
              className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📡
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {isNepali ? 'भिडियो एक्सरे (USG)' : 'Radiology & USG'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? 'कलेजो र पित्तथैली' : 'Abdominal Ultrasound'}
                </p>
              </div>
            </div>

            {/* 5. Advanced Laboratory */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'lab') || null)}
              className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🔬
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {isNepali ? 'अत्याधुनिक ल्याब' : 'Advanced Lab'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? 'LFT, हेपाटाइटिस, रगत' : 'Automated Testing'}
                </p>
              </div>
            </div>

            {/* 6. Endoscopy & Colonoscopy */}
            <div
              onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'colonoscopy') || null)}
              className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group text-center flex flex-col items-center justify-between min-h-36"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🔬
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {isNepali ? 'कोलोनोस्कोपी' : 'Colonoscopy'}
                </p>
                <p className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                  {isNepali ? 'तल्लो आन्द्राको जाँच' : 'Lower GI & Biopsy'}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Diagnostic & Procedure Explorer with category filter */}
          <div id="all-services-list" className="p-5 sm:p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
              <div>
                <h3 className="font-display text-lg font-bold text-[var(--fg)]">
                  {isNepali ? 'विस्तृत उपचार तथा डायग्नोस्टिक सेवाहरू' : 'Full Diagnostic & Clinical Directory'}
                </h3>
                <p className="text-xs text-[var(--muted-fg)] mt-0.5">
                  {isNepali
                    ? 'विवरण हेर्न वा अपोइन्टमेन्ट लिन कुनै पनि सेवामा क्लिक गर्नुहोस्'
                    : 'Click any service to view medical indications, procedure protocol, and WhatsApp booking.'}
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[var(--muted)] rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setServiceFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    serviceFilter === 'all'
                      ? 'bg-[var(--card)] text-[var(--fg)] shadow-xs'
                      : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isNepali ? 'सबै' : 'All'}
                </button>
                <button
                  type="button"
                  onClick={() => setServiceFilter('procedure')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    serviceFilter === 'procedure'
                      ? 'bg-[var(--card)] text-[var(--fg)] shadow-xs'
                      : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isNepali ? 'जाँच तथा प्रविधि' : 'Procedures & Tests'}
                </button>
                <button
                  type="button"
                  onClick={() => setServiceFilter('facility')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    serviceFilter === 'facility'
                      ? 'bg-[var(--card)] text-[var(--fg)] shadow-xs'
                      : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isNepali ? 'अस्पताल र ICU' : 'Hospital & ICU'}
                </button>
                <button
                  type="button"
                  onClick={() => setServiceFilter('condition')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    serviceFilter === 'condition'
                      ? 'bg-[var(--card)] text-[var(--fg)] shadow-xs'
                      : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isNepali ? 'रोग तथा समस्या' : 'Conditions'}
                </button>
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                      {service.icon || '🩺'}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                        {isNepali ? service.titleNp : service.titleEn}
                      </h4>
                      <p className="text-xs text-[var(--muted-fg)] mt-1 line-clamp-2 leading-relaxed">
                        {isNepali ? service.subtitleNp : service.subtitleEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--border)] text-[11px] font-semibold text-[var(--accent)]">
                    <span>{isNepali ? 'विस्तृत जानकारी' : 'View Details & Book'}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. DOCTOR PROFILE SECTION (Dokter Spesialis layout)     */}
        {/* ======================================================== */}
        <section id="doctor" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {isNepali ? 'एमडी मेडिसिन · प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी' : 'MD Medicine · Practicing Gastroenterology'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] leading-tight">
                {isNepali ? 'डा. चन्दन कुमार सिंह' : 'Dr. Chandan Kumar Singh'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted-fg)] leading-relaxed">
                {isNepali
                  ? 'डा. चन्दन सिंह, एमडी मेडिसिन, प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी — संजीवनी कलेज अफ मेडिकल साइन्सेस, नेपालगञ्ज। बिरामीको समस्या ध्यानपूर्वक सुन्ने र गुणस्तरीय उपचारमा प्रतिबद्ध।'
                  : 'Dr. Chandan Singh, MD Medicine, Practicing Gastroenterology at Sanjeevani College of Medical Sciences, Nepalgunj. Committed to thorough diagnosis, transparent communication, and patient-first care.'}
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => openBooking('opd')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-[var(--accent-fg)] shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isNepali ? 'डा. सिंहसँग समय लिनुहोस्' : 'Book with Dr. Chandan Singh'}</span>
                </button>
                <a
                  href="tel:+9779848044146"
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--fg)] border border-[var(--border)] transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Call 984-8044146</span>
                </a>
              </div>
            </div>

            {/* 4 Doctor/Department Cards matching the screenshot's cards layout */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Dr. Chandan Singh */}
              <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-all text-center flex flex-col items-center justify-between group">
                <div className="relative mb-3">
                  <DoctorAvatar size={88} />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    Dr. Chandan Singh
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5 font-medium">
                    {isNepali ? 'एमडी मेडिसिन · प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी' : 'MD Medicine · Practicing Gastroenterology'}
                  </p>
                  <p className="text-[10px] text-amber-500 font-bold mt-1.5 flex items-center justify-center gap-1">
                    <span>★</span> <span>4.9</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking('opd')}
                  className="w-full mt-3 py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-colors cursor-pointer"
                >
                  {isNepali ? 'अपोइन्टमेन्ट' : 'Book OPD'}
                </button>
              </div>

              {/* Card 2: Critical Care & ICU */}
              <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-all text-center flex flex-col items-center justify-between group">
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                  ICU
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    Critical Care Team
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    24/7 ICU & Resuscitation
                  </p>
                  <p className="text-[10px] text-amber-500 font-bold mt-1.5 flex items-center justify-center gap-1">
                    <span>★</span> <span>4.9</span>
                  </p>
                </div>
                <a
                  href="tel:+97781526458"
                  className="w-full mt-3 py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-[var(--muted)] hover:bg-red-600 hover:text-white transition-colors cursor-pointer block"
                >
                  {isNepali ? 'आकस्मिक कल' : 'Call Emergency'}
                </a>
              </div>

              {/* Card 3: Ultrasound & Radiology */}
              <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-all text-center flex flex-col items-center justify-between group">
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-teal-700 to-emerald-900 text-white flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                  USG
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    Sonology Unit
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    Abdominal Ultrasound
                  </p>
                  <p className="text-[10px] text-amber-500 font-bold mt-1.5 flex items-center justify-center gap-1">
                    <span>★</span> <span>4.8</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking('opd')}
                  className="w-full mt-3 py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-colors cursor-pointer"
                >
                  {isNepali ? 'जाँच बुक' : 'Book USG'}
                </button>
              </div>

              {/* Card 4: Automated Laboratory */}
              <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-all text-center flex flex-col items-center justify-between group">
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-cyan-700 to-blue-950 text-white flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                  Lab
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    Laboratory Unit
                  </h3>
                  <p className="text-[11px] text-[var(--muted-fg)] mt-0.5">
                    Biochemistry & LFT
                  </p>
                  <p className="text-[10px] text-amber-500 font-bold mt-1.5 flex items-center justify-center gap-1">
                    <span>★</span> <span>4.9</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setReportModalOpen(true)}
                  className="w-full mt-3 py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-colors cursor-pointer"
                >
                  {isNepali ? 'रिपोर्ट पठाउनुहोस्' : 'Send Reports'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. MODERN FACILITIES DARK SECTION (From screenshot)     */}
        {/* ======================================================== */}
        <section
          id="facilities"
          className="scroll-mt-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-slate-900 text-white rounded-3xl sm:rounded-[36px] shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  {isNepali ? 'विश्वस्तरीय अस्पताल पूर्वाधार' : 'High-Tech Clinical Infrastructure'}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                  {isNepali
                    ? 'उत्कृष्ट उपचारका लागि अत्याधुनिक सुविधाहरू'
                    : 'Modern Facilities for Comprehensive Patient Care'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                  {isNepali
                    ? 'बिरामीको छिटो स्वास्थ्य लाभका लागि आधुनिक उपकरण, आरामदायी वार्ड र शान्त वातावरण।'
                    : 'State-of-the-art medical technology and comfortable recovery spaces at Sanjeevani College of Medical Sciences.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'icu') || null)}
                className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer self-start sm:self-end"
              >
                <span>{isNepali ? 'सुविधा विवरण हेर्नुहोस् →' : 'View Facility Details →'}</span>
              </button>
            </div>

            {/* 7 Facility Visual Picture Cards in clean English & Nepali */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 pt-2">
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'icu') || null)}>
                <FacilityThumbnail type="icu" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'ipd') || null)}>
                <FacilityThumbnail type="vip" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'endoscopy') || null)}>
                <FacilityThumbnail type="ot" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'fibroscan') || null)}>
                <FacilityThumbnail type="fibroscan" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'ubt') || null)}>
                <FacilityThumbnail type="ubt" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'lab') || null)}>
                <FacilityThumbnail type="lab" isNepali={isNepali} />
              </div>
              <div onClick={() => setSelectedService(DIGESTIVE_SERVICES.find((s) => s.id === 'emergency') || null)}>
                <FacilityThumbnail type="ambulance" isNepali={isNepali} />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. HEALTH ARTICLES & PATIENT GUIDES                     */}
        {/* ======================================================== */}
        <div id="health-tips">
          <HealthArticles isNepali={isNepali} />
        </div>

        {/* ======================================================== */}
        {/* 7. PROMINENT BOTTOM EMERGENCY BANNER                    */}
        {/* ======================================================== */}
        <section
          id="contact"
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-blue-950 via-teal-900 to-slate-950 text-white shadow-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                <span>{isNepali ? '२४सै घण्टा आकस्मिक सेवा' : '24/7 Immediate Medical Care'}</span>
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {isNepali
                  ? 'तत्काल चिकित्सा सल्लाह वा आकस्मिक सहयोग चाहिन्छ?'
                  : 'Need Medical Consultation or Emergency Care?'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {isNepali
                  ? 'रगत बान्ता, कालो दिसा, असह्य पेट दुखाइ वा कलेजोको समस्या भएमा तुरुन्त सम्पर्क गर्नुहोस्।'
                  : 'Our dedicated medical team and ICU ambulance are on standby round the clock at Sanjeevani College of Medical Sciences, Nepalgunj.'}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-medium">
                  🚨 {isNepali ? '२४ घण्टे आपतकालीन कक्ष' : '24*7 Emergency Room'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-medium">
                  👨‍⚕️ {isNepali ? 'विशेषज्ञ डाक्टर टोली' : 'MD Specialist Physician'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-medium">
                  🏥 {isNepali ? 'आईसीयू र भर्ना सुइट' : 'ICU & Inpatient Suites'}
                </span>
              </div>
            </div>

            {/* Right Column: Phone Call Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Emergency Hotline */}
              <a
                href="tel:+97781526458"
                className="p-4 rounded-2xl bg-white text-slate-900 shadow-xl hover:bg-slate-100 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    📞
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide block">
                      {isNepali ? 'आकस्मिक हटलाइन (Emergency)' : '24/7 Emergency Line'}
                    </span>
                    <span className="text-lg font-extrabold text-slate-900 block leading-tight tabular-nums">
                      (081) 526458
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Doctor / Clinic Line */}
              <a
                href="tel:+9779848044146"
                className="p-4 rounded-2xl bg-slate-900/90 text-white border border-white/20 shadow-xl hover:bg-slate-800 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    📱
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wide block">
                      {isNepali ? 'ओपीडी तथा परामर्श फोन' : 'Doctor & Clinic Line'}
                    </span>
                    <span className="text-lg font-extrabold text-white block leading-tight tabular-nums">
                      984-8044146
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Online Booking Button */}
              <button
                type="button"
                onClick={() => openBooking('opd')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
              >
                {isNepali ? 'वा यहाँ क्लिक गरी अनलाइन पालो लिनुहोस्' : 'Or Click Here to Book Online Appointment'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================== */}
      {/* COMPREHENSIVE FOOTER                                     */}
      {/* ======================================================== */}
      <footer className="mt-20 border-t border-[var(--border)] bg-[var(--card)] text-[var(--fg)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Hospital & Doctor Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <DoctorAvatar size={42} shape="rounded" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base leading-tight">
                    Sanjeevani Hospital
                  </h3>
                  <p className="text-xs text-[var(--muted-fg)]">
                    {isNepali
                      ? 'डा. चन्दन कुमार सिंह, एमडी मेडिसिन, प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी'
                      : 'Dr. Chandan Kumar Singh, MD Medicine, Practicing Gastroenterology'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--muted-fg)] leading-relaxed pt-1">
                {isNepali
                  ? 'नेपालगञ्जको संजीवनी कलेज अफ मेडिकल साइन्सेसमा एमडी मेडिसिन, प्रैक्टिसिंग गैस्ट्रोएंटरोलॉजी सेवा। बिरामीको गोपनीयता र गुणस्तरीय स्वास्थ्य सल्लाह।'
                  : 'Internal medicine and practicing gastroenterology at Sanjeevani College of Medical Sciences, Nepalgunj. Dedicated to unhurried, evidence-based care.'}
              </p>
              {/* Doctor Email */}
              <p className="text-xs text-[var(--muted-fg)]">
                <strong>Doctor Email:</strong>{' '}
                <a href="mailto:drcksingh007@gmail.com" className="text-[var(--accent)] hover:underline">
                  drcksingh007@gmail.com
                </a>
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-2.5 text-xs">
              <h4 className="font-bold text-sm text-[var(--fg)]">
                {isNepali ? 'प्रमुख सेवाहरू' : 'Specialized Procedures'}
              </h4>
              <ul className="space-y-1.5 text-[var(--muted-fg)]">
                <li>• Colonoscopy (Lower GI Endoscopy)</li>
                <li>• FibroScan (Liver Stiffness & CAP Score)</li>
                <li>• UBT (Urea Breath Test for H. Pylori)</li>
                <li>• High-Resolution Abdominal USG</li>
                <li>• Upper GI Endoscopy</li>
                <li>• Advanced Automated Laboratory</li>
                <li>• ICU & Inpatient (IPD) Admission</li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="space-y-2.5 text-xs">
              <h4 className="font-bold text-sm text-[var(--fg)]">
                {isNepali ? 'सम्पर्क ठेगाना' : 'Contact & Location'}
              </h4>
              <p className="text-[var(--muted-fg)] leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>
                  B.P. Chowk, Nepalgunj-12, Banke, Nepal
                  <br />
                  <a
                    href="https://maps.app.goo.gl/BFzUT2PCfM9npwQJ7?g_st=ac"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent)] underline font-medium mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </span>
              </p>
              <p className="text-[var(--muted-fg)] flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>Doctor Line: 984-8044146</span>
              </p>
              <p className="text-[var(--muted-fg)] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <a href="mailto:info@sanjeevani.edu.np" className="hover:underline">
                  info@sanjeevani.edu.np
                </a>
              </p>
              <p className="text-[var(--muted-fg)] flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <a
                  href="https://sanjeevani.edu.np/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  sanjeevani.edu.np
                </a>
              </p>
            </div>

            {/* Column 4: Social & Sharing Bar */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[var(--fg)]">
                {isNepali ? 'सामाजिक सञ्जाल' : 'Connect & Share'}
              </h4>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1P6dqQdKL1/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] text-[var(--fg)] flex items-center justify-center text-sm font-bold border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-all shadow-xs"
                >
                  f
                </a>
                {/* Threads */}
                <a
                  href="https://www.threads.com/@drchandansingh.med"
                  aria-label="Threads"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] text-[var(--fg)] flex items-center justify-center text-sm font-bold border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-all shadow-xs"
                >
                  @
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/9779848044146?text=Namaste%20Doctor%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] text-[var(--fg)] flex items-center justify-center text-sm font-bold border border-[var(--border)] hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                >
                  W
                </a>
                {/* Viber */}
                <a
                  href="viber://chat?number=%2B9779848044146"
                  aria-label="Viber"
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] text-[var(--fg)] flex items-center justify-center text-sm font-bold border border-[var(--border)] hover:bg-purple-600 hover:text-white transition-all shadow-xs"
                >
                  V
                </a>
                {/* Share */}
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share"
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] text-[var(--fg)] flex items-center justify-center text-sm font-bold border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-all shadow-xs cursor-pointer"
                  title="Share Website"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-[var(--muted-fg)] leading-relaxed">
                  24/7 Emergency Hotline:{' '}
                  <a href="tel:+97781526458" className="font-bold text-red-600 dark:text-red-400 underline">
                    081-526458
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-fg)]">
            <p>
              © 2026 Dr. Chandan Kumar Singh, MD Medicine · Sanjeevani College of Medical Sciences, Nepalgunj.
            </p>
            <p className="text-[11px]">
              {isNepali
                ? 'नेपालगञ्ज, बाँके · बिरामीको गोपनीयता र गुणस्तरीय स्वास्थ्य सेवा'
                : 'Dedicated to Ethical, Patient-Centric Digestive & Liver Healthcare'}
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingType}
        isNepali={isNepali}
      />

      <ReportAdviceModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        isNepali={isNepali}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        isNepali={isNepali}
      />
    </div>
  );
}
