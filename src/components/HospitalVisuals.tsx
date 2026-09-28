/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import {
  Camera,
  CheckCircle2,
  Award,
  Sparkles,
  Building2,
  Upload,
  Link as LinkIcon,
  RotateCcw,
  MapPin,
  X,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import { DoctorAvatar } from './DoctorAvatar.tsx';

// Visual illustrations and decorated medical scenes matching the modern healthcare website layout

export function HospitalHeroVisual() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check saved photo in localStorage
    const saved = localStorage.getItem('dr_chandan_photo');
    if (saved) {
      setPhotoUrl(saved);
      return;
    }

    // Attempt to load standard doctor photo paths if available
    const testImg = new Image();
    testImg.src = '/dr-chandan-singh.jpg';
    testImg.onload = () => setPhotoUrl('/dr-chandan-singh.jpg');

    const handleUpdate = () => {
      const updated = localStorage.getItem('dr_chandan_photo');
      setPhotoUrl(updated || null);
    };
    window.addEventListener('dr-photo-updated', handleUpdate);
    return () => window.removeEventListener('dr-photo-updated', handleUpdate);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        localStorage.setItem('dr_chandan_photo', dataUrl);
        setPhotoUrl(dataUrl);
        window.dispatchEvent(new Event('dr-photo-updated'));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-[1.25/1] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex items-center justify-center p-0 text-white select-none group">
      {/* Background ambient medical lighting */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hidden File Input for Doctor Photo Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
        aria-label="Upload Dr. Chandan Singh's Photo"
      />

      {photoUrl ? (
        /* Render Real Uploaded / Selected Photo of Dr. Chandan Kumar Singh */
        <div className="relative w-full h-full">
          <img
            src={photoUrl}
            alt="Dr. Chandan Kumar Singh, MD Medicine, Practicing Gastroenterology"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle vignette & bottom gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
        </div>
      ) : (
        /* Full-Frame Medical Portrait of Dr. Chandan Kumar Singh based on his photograph */
        <svg
          viewBox="0 0 600 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        >
          <defs>
            {/* Bright, clean modern clinical consultation room background */}
            <linearGradient id="clinicWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="40%" stopColor="#f1f5f9" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="wallCornerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Doctor Halo Glow */}
            <radialGradient id="docHalo" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* Traditional Black Nepali Dhaka Topi */}
            <linearGradient id="topiBlackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#242629" />
              <stop offset="35%" stopColor="#303238" />
              <stop offset="70%" stopColor="#1c1d20" />
              <stop offset="100%" stopColor="#121315" />
            </linearGradient>

            <pattern id="topiTexture" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M0 3 L3 0 L6 3 L3 6 Z" fill="#3a3d45" opacity="0.3" />
            </pattern>

            {/* Natural South Asian Physician Skin Tone */}
            <linearGradient id="skinToneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e6ab86" />
              <stop offset="50%" stopColor="#d8966e" />
              <stop offset="80%" stopColor="#bf7c54" />
              <stop offset="100%" stopColor="#a35f37" />
            </linearGradient>

            {/* Neck shadow */}
            <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9c5a32" />
              <stop offset="100%" stopColor="#7a4220" />
            </linearGradient>

            {/* Crisp White Medical Doctor Coat */}
            <linearGradient id="whiteCoatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f8fafc" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Royal Blue Stethoscope */}
            <linearGradient id="royalSteth" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="45%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Stainless Steel Chrome */}
            <linearGradient id="chromeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Navy Blue Micro-Textured Tie */}
            <linearGradient id="tieNavy" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="50%" stopColor="#172b47" />
              <stop offset="100%" stopColor="#0f1d30" />
            </linearGradient>
          </defs>

          {/* Clean Medical Clinic Room Background */}
          <rect width="600" height="480" fill="url(#clinicWallGrad)" />
          {/* Clinic Wall Architectural Corner Shadow */}
          <polygon points="440,0 600,0 600,480 440,480" fill="url(#wallCornerGrad)" opacity="0.4" />
          <line x1="440" y1="0" x2="440" y2="480" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Soft Medical Light Aura behind doctor */}
          <circle cx="300" cy="220" r="230" fill="url(#docHalo)" />

          {/* Framed Sanjeevani Clinical Credential on the left wall */}
          <rect x="25" y="45" width="85" height="110" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="30" y="50" width="75" height="100" fill="#f8fafc" />
          <circle cx="67" cy="72" r="10" fill="#0d9488" fillOpacity="0.15" />
          <circle cx="67" cy="72" r="6" fill="#0d9488" />
          <line x1="42" y1="92" x2="92" y2="92" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="45" y1="102" x2="89" y2="102" stroke="#64748b" strokeWidth="1.5" />
          <line x1="48" y1="110" x2="86" y2="110" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="52" y1="118" x2="82" y2="118" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="42" y="126" width="50" height="12" rx="2" fill="#0d9488" fillOpacity="0.1" />
          <text x="67" y="134" fill="#0d9488" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            MD MEDICINE
          </text>

          {/* High-Definition Endoscopy Monitor on right wall */}
          <rect x="475" y="50" width="105" height="75" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="3" />
          <circle cx="527" cy="85" r="20" fill="#881337" fillOpacity="0.75" />
          <circle cx="527" cy="85" r="14" fill="#be123c" />
          <circle cx="527" cy="85" r="8" fill="#fda4af" />
          <text x="483" y="64" fill="#2dd4bf" fontSize="6" fontWeight="bold" fontFamily="monospace">
            HD ENDO · LIVE
          </text>
          <text x="483" y="116" fill="#94a3b8" fontSize="5.5" fontFamily="monospace">
            Sanjeevani Nepalgunj
          </text>

          {/* ======================================================== */}
          {/* DR. CHANDAN KUMAR SINGH: AUTHENTIC PHOTOREALISTIC FIGURE */}
          {/* ======================================================== */}

          {/* Broad Shoulders & Crisp White Doctor Lab Coat */}
          <path
            d="M60 480 C60 350 150 315 300 315 C450 315 540 350 540 480 Z"
            fill="url(#whiteCoatGrad)"
          />

          {/* White Dress Shirt & Stiff Collar */}
          <path d="M255 305 L300 365 L345 305 Z" fill="#ffffff" />
          <path d="M255 305 L278 338 L300 312 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <path d="M345 305 L322 338 L300 312 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Navy Blue Textured Necktie */}
          <path d="M292 316 L308 316 L314 400 L300 422 L286 400 Z" fill="url(#tieNavy)" />
          {/* Micro dots texture on tie */}
          <line x1="300" y1="324" x2="300" y2="415" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />

          {/* White Lab Coat Left Lapel & Right Lapel */}
          <path
            d="M130 325 L245 425 L245 480 L65 480 C65 390 95 345 130 325 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <path
            d="M470 325 L355 425 L355 480 L535 480 C535 390 505 345 470 325 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />

          {/* Lab Coat Center Buttons */}
          <circle cx="300" cy="440" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="300" cy="440" r="1.5" fill="#94a3b8" />

          {/* ======================================================== */}
          {/* LEFT CHEST POCKET WITH EXACT EMBROIDERY FROM PHOTO       */}
          {/* "Dr Chandan Kumar singh \n MD Medicine | Gastrology practicing" */}
          {/* ======================================================== */}
          <g id="doctorPocket" transform="translate(350, 368)">
            {/* Pocket outline with rounded bottom corners */}
            <path
              d="M0 0 L82 0 L82 70 C82 78 74 84 66 84 L16 84 C8 84 0 78 0 70 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />

            {/* Blue pen clipped into left pocket */}
            <rect x="22" y="-18" width="8" height="28" rx="4" fill="#1d4ed8" />
            <rect x="20" y="-8" width="12" height="4.5" rx="1.5" fill="#94a3b8" />
            <circle cx="26" cy="-14" r="1.5" fill="#ffffff" opacity="0.8" />

            {/* Authentic Embroidered Pocket Text matching photo */}
            {/* Line 1: Dr Chandan Kumar singh */}
            <text
              x="41"
              y="28"
              fill="#0f172a"
              fontSize="6.8"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Dr Chandan Kumar singh
            </text>

            {/* Line 2: MD Medicine | Gastrology */}
            <text
              x="41"
              y="42"
              fill="#334155"
              fontSize="6.0"
              fontWeight="600"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              MD Medicine | Gastrology
            </text>

            {/* Line 3: practicing */}
            <text
              x="41"
              y="54"
              fill="#475569"
              fontSize="5.8"
              fontWeight="500"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              practicing
            </text>
          </g>

          {/* Neck with realistic anatomy & chin shadow */}
          <path d="M250 260 L250 320 C250 335 272 342 300 342 C328 342 350 335 350 320 L350 260 Z" fill="url(#skinToneGrad)" />
          <path d="M260 265 C272 290 328 290 340 265 L340 278 C328 305 272 305 260 278 Z" fill="url(#skinShadow)" opacity="0.4" />

          {/* Head & Face Oval */}
          <ellipse cx="300" cy="205" rx="72" ry="84" fill="url(#skinToneGrad)" />

          {/* Ears with realistic anatomical folds */}
          <path d="M228 190 C220 190 216 208 220 224 C224 234 232 238 234 225 Z" fill="url(#skinToneGrad)" />
          <path d="M226 200 C223 205 224 216 227 220" stroke="#9c5a32" strokeWidth="1.8" fill="none" />

          <path d="M372 190 C380 190 384 208 380 224 C376 234 368 238 366 225 Z" fill="url(#skinToneGrad)" />
          <path d="M374 200 C377 205 376 216 373 220" stroke="#9c5a32" strokeWidth="1.8" fill="none" />

          {/* Sideburns / Dark Hair Line */}
          <path d="M228 170 L228 202 L234 202 L234 175 Z" fill="#18191b" />
          <path d="M372 170 L372 202 L366 202 L366 175 Z" fill="#18191b" />

          {/* ======================================================== */}
          {/* TRADITIONAL NEPALI DHAKA TOPI (Black Cap)                */}
          {/* Characteristic angled peak, center crease fold, texture  */}
          {/* ======================================================== */}
          <g id="dhakaTopiCap">
            {/* Topi base conical dome */}
            <path
              d="M220 165 C225 120 258 64 302 52 C342 64 368 108 380 165 C350 170 250 170 220 165 Z"
              fill="url(#topiBlackGrad)"
            />
            {/* Topi woven fabric pattern */}
            <path
              d="M220 165 C225 120 258 64 302 52 C342 64 368 108 380 165 C350 170 250 170 220 165 Z"
              fill="url(#topiTexture)"
            />
            {/* Signature Topi Center Crease Fold */}
            <path
              d="M302 52 L294 167"
              stroke="#0d0e10"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M302 52 L308 167"
              stroke="#40434b"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
            {/* Topi Rim Band */}
            <path
              d="M220 165 Q300 174 380 165"
              stroke="#131416"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M224 164 Q300 172 376 164"
              stroke="#4b4e57"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>

          {/* Natural, Expressive Eyebrows */}
          <path d="M250 186 Q270 178 286 185" stroke="#1c1613" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M314 185 Q330 178 350 186" stroke="#1c1613" strokeWidth="5.5" strokeLinecap="round" />

          {/* Warm, Kind, Confident Eyes */}
          {/* Left Eye */}
          <ellipse cx="268" cy="202" rx="11" ry="7.5" fill="#ffffff" />
          <circle cx="268.5" cy="202" r="6.2" fill="#2b1b14" />
          <circle cx="269" cy="201.5" r="3.5" fill="#110a07" />
          <circle cx="271" cy="199.5" r="2" fill="#ffffff" />
          <path d="M256 198 Q268 193 280 198" stroke="#75351a" strokeWidth="1.8" fill="none" />
          <path d="M258 209 Q268 213 278 209" stroke="#b06b47" strokeWidth="1.2" fill="none" />

          {/* Right Eye */}
          <ellipse cx="332" cy="202" rx="11" ry="7.5" fill="#ffffff" />
          <circle cx="331.5" cy="202" r="6.2" fill="#2b1b14" />
          <circle cx="331" cy="201.5" r="3.5" fill="#110a07" />
          <circle cx="333" cy="199.5" r="2" fill="#ffffff" />
          <path d="M320 198 Q332 193 344 198" stroke="#75351a" strokeWidth="1.8" fill="none" />
          <path d="M322 209 Q332 213 342 209" stroke="#b06b47" strokeWidth="1.2" fill="none" />

          {/* Prominent, Respected Nose */}
          <path
            d="M300 194 L297 225 L308 228"
            stroke="#9c5a32"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="290" cy="227" rx="4.5" ry="2.5" fill="#75351a" opacity="0.35" />
          <ellipse cx="309" cy="227" rx="4.5" ry="2.5" fill="#75351a" opacity="0.35" />

          {/* Doctor's Neat, Refined Mustache */}
          <path
            d="M280 242 Q300 240 320 242 C324 246 312 249 300 249 C288 249 276 246 280 242 Z"
            fill="#1c1613"
          />

          {/* Gentle, Reassuring Bedside Smile */}
          <path
            d="M278 252 Q300 262 322 252"
            stroke="#7f381c"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M284 256 Q300 262 316 256"
            stroke="#b66b49"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Clean Shaven Chin Contour & Dimple */}
          <ellipse cx="300" cy="272" rx="9" ry="4" fill="#a46440" opacity="0.25" />

          {/* ======================================================== */}
          {/* SIGNATURE ROYAL BLUE STETHOSCOPE                         */}
          {/* Authentic blue tubing draped around neck with chrome bell*/}
          {/* ======================================================== */}
          <g id="heroStethoscope">
            {/* Chrome binaural spring tubes coming down from collar */}
            <path d="M236 265 L228 305" stroke="url(#chromeSteel)" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M364 265 L372 305" stroke="url(#chromeSteel)" strokeWidth="5.5" strokeLinecap="round" />

            {/* Royal Blue Stethoscope Tubing looped over shoulders */}
            {/* Right side curve towards chest piece */}
            <path
              d="M228 305 C215 345 208 395 230 435"
              stroke="url(#royalSteth)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Left side curve with loop */}
            <path
              d="M372 305 C385 345 378 395 352 425"
              stroke="url(#royalSteth)"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Chrome Chest Piece / Bell on right side of lab coat */}
            <circle cx="230" cy="435" r="18" fill="url(#chromeSteel)" stroke="#334155" strokeWidth="2.5" />
            <circle cx="230" cy="435" r="11" fill="url(#royalSteth)" />
            <circle cx="233" cy="432" r="3.5" fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      )}

      {/* Floating Trust Card (Top-Right): OPD Open Status */}
      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-3.5 shadow-xl flex items-center gap-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-semibold tracking-wide text-white">
          Sanjeevani OPD Open · 9 AM – 5 PM
        </span>
      </div>

      {/* Top-Left: Direct Photo Upload / Replace Action */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 text-[11px] font-semibold shadow-lg hover:border-teal-400 transition-all cursor-pointer"
          title="Upload or change Dr. Chandan Singh's photo"
        >
          <Camera className="w-3.5 h-3.5 text-teal-400" />
          <span>{photoUrl ? 'फोटो बदल्नुहोस् (Change Photo)' : 'फोटो अपलोड (Upload Photo)'}</span>
        </button>
      </div>

      {/* Floating Doctor Profile Pill (Bottom Overlay) */}
      <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white z-10">
        <div className="flex items-center gap-3">
          <DoctorAvatar size={48} className="shrink-0" />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold leading-tight text-white">
                डा. चन्दन कुमार सिंह (Dr. Chandan Kumar Singh)
              </h3>
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            </div>
            <p className="text-xs text-teal-300 font-medium mt-0.5">
              MD (Medicine) · Practicing Gastroenterology
            </p>
            <p className="text-[11px] text-slate-400">
              संजीवनी कलेज अफ मेडिकल साइन्सेस, नेपालगञ्ज (Sanjeevani Hospital)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
          <a
            href="https://wa.me/9779848044146?text=Namaste%20Dr.%20Chandan%20Singh%2C%20I%20would%20like%20to%20consult."
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>WhatsApp: 984-8044146</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_HOSPITAL_PHOTO =
  'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80';

const HOSPITAL_PHOTO_PRESETS = [
  {
    nameEn: 'Modern Hospital Main Campus',
    nameNp: 'मुख्य अस्पताल क्याम्पस',
    url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    nameEn: 'Medical College & OPD Wing',
    nameNp: 'मेडिकल कलेज तथा बहिरङ्ग विङ्ग',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    nameEn: 'Specialist Clinical Center',
    nameNp: 'विशेषज्ञ क्लिनिकल केन्द्र',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  },
];

export function HospitalBuildingVisual({ isNepali = false }: { isNepali?: boolean }) {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('hospital_building_photo') || DEFAULT_HOSPITAL_PHOTO;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleUpdate = () => {
      const saved = localStorage.getItem('hospital_building_photo');
      if (saved) {
        setPhotoUrl(saved);
        setImageError(false);
      }
    };
    window.addEventListener('hospital-photo-updated', handleUpdate);
    return () => window.removeEventListener('hospital-photo-updated', handleUpdate);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      triggerToast(isNepali ? 'कृपया मान्य फोटो फाइल छान्नुहोस्' : 'Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        setImageError(false);
        try {
          localStorage.setItem('hospital_building_photo', result);
          window.dispatchEvent(new CustomEvent('hospital-photo-updated'));
          triggerToast(
            isNepali ? 'अस्पतालको तस्बिर सफलतापूर्वक सुरक्षित गरियो!' : 'Hospital photo updated successfully!'
          );
        } catch {
          // If quota exceeded in localStorage, photo is still maintained in React state
          triggerToast(
            isNepali ? 'फोटो पूर्वावलोकनमा लोड भयो!' : 'Photo loaded in active view!'
          );
        }
        setIsEditing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setPhotoUrl(urlInput.trim());
    setImageError(false);
    try {
      localStorage.setItem('hospital_building_photo', urlInput.trim());
      window.dispatchEvent(new CustomEvent('hospital-photo-updated'));
    } catch {
      // ignore storage error
    }
    triggerToast(
      isNepali ? 'नयाँ फोटो लिङ्क लागू गरियो!' : 'New photo URL applied!'
    );
    setShowUrlInput(false);
    setUrlInput('');
    setIsEditing(false);
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('hospital_building_photo');
    setPhotoUrl(DEFAULT_HOSPITAL_PHOTO);
    setImageError(false);
    window.dispatchEvent(new CustomEvent('hospital-photo-updated'));
    triggerToast(
      isNepali ? 'पूर्वनिर्धारित तस्बिरमा फिर्ता गरियो' : 'Reset to default hospital picture'
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-slate-900 group select-none transition-all duration-300 ${
        isDragging ? 'ring-4 ring-teal-500 scale-[1.01]' : ''
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFileUpload(file);
      }}
    >
      {/* Hidden File Input for uploading hospital picture */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
      />

      {/* Real Hospital Image with Smooth Hover Effect */}
      {!imageError ? (
        <img
          src={photoUrl}
          alt="Sanjeevani College of Medical Sciences Nepalgunj"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* Fallback Architectural Scene if offline or invalid URL */
        <div className="w-full h-full bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
          <Building2 className="w-16 h-16 text-teal-400 mb-3 opacity-80" />
          <h4 className="font-bold text-base text-white">
            संजीवनी कलेज अफ मेडिकल साइन्सेस
          </h4>
          <p className="text-xs text-slate-300 mt-1 max-w-sm">
            {isNepali
              ? 'अस्पतालको तस्बिर यहाँ अपलोड गर्न वा बदल्न सकिन्छ'
              : 'Real hospital picture can be uploaded or changed here'}
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-4 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-xs font-semibold text-white shadow-md flex items-center gap-2"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{isNepali ? 'तस्बिर छान्नुहोस्' : 'Select Hospital Photo'}</span>
          </button>
        </div>
      )}

      {/* Elegant Dark Gradient Overlays for Razor-Sharp Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40 pointer-events-none" />

      {/* Top Left: Editable Action Button */}
      <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          aria-label={isNepali ? 'अस्पतालको फोटो बदल्नुहोस्' : 'Edit / Upload Hospital Photo'}
          className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/85 hover:bg-teal-600 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all flex items-center gap-1.5 group/btn cursor-pointer"
        >
          <Camera className="w-3.5 h-3.5 text-teal-400 group-hover/btn:text-white transition-colors" />
          <span>{isNepali ? 'फोटो बदल्नुहोस् (Edit)' : 'Edit / Upload Photo'}</span>
        </button>
      </div>

      {/* Top Right: Real Hospital Campus Verified Badge */}
      <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-slate-900/85 border border-white/20 text-white backdrop-blur-md shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isNepali ? 'वास्तविक क्याम्पस' : 'Real Campus Picture'}</span>
        </div>
      </div>

      {/* Drag & Drop Visual Overlay */}
      {isDragging && (
        <div className="absolute inset-0 z-30 bg-teal-900/90 backdrop-blur-sm border-4 border-dashed border-teal-300 flex flex-col items-center justify-center text-white p-6 transition-all">
          <Upload className="w-12 h-12 text-teal-200 animate-bounce mb-2" />
          <p className="font-bold text-base text-center">
            {isNepali ? 'यहाँ अस्पतालको नयाँ फोटो छोड्नुहोस्' : 'Drop hospital photo here to upload'}
          </p>
          <p className="text-xs text-teal-200 mt-1">PNG, JPG, WEBP</p>
        </div>
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-40 bg-emerald-700/95 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl backdrop-blur-md border border-emerald-400/40 flex items-center gap-2 animate-in fade-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Edit Options Modal / Flyout Menu */}
      {isEditing && (
        <div className="absolute inset-x-3.5 top-12 z-30 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-4 shadow-2xl text-white animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-teal-400" />
              <h4 className="text-xs font-bold tracking-tight">
                {isNepali ? 'अस्पतालको तस्बिर सम्पादन गर्नुहोस्' : 'Edit Hospital Real Picture'}
              </h4>
            </div>
            <button
              onClick={() => {
                setIsEditing(false);
                setShowUrlInput(false);
              }}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {/* 1. Upload from Device */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2.5 rounded-xl bg-teal-600/25 hover:bg-teal-600/40 border border-teal-500/40 text-teal-100 flex items-center gap-2.5 transition-colors text-left"
            >
              <Upload className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <p className="font-semibold">{isNepali ? 'उपकरणबाट फोटो छान्नुहोस्' : 'Upload from Device'}</p>
                <p className="text-[10px] text-teal-300/70">{isNepali ? 'मोबाइल वा कम्प्युटरबाट' : 'JPG, PNG, WebP'}</p>
              </div>
            </button>

            {/* 2. Web Image URL */}
            <button
              type="button"
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center gap-2.5 transition-colors text-left"
            >
              <LinkIcon className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <p className="font-semibold">{isNepali ? 'वेब लिङ्कबाट राख्नुहोस्' : 'Paste Image URL'}</p>
                <p className="text-[10px] text-slate-400">{isNepali ? 'कुनै पनि तस्बिर लिङ्क' : 'Online web image'}</p>
              </div>
            </button>
          </div>

          {/* URL Input Box */}
          {showUrlInput && (
            <div className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/hospital-photo.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <button
                type="button"
                onClick={handleApplyUrl}
                className="px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                {isNepali ? 'लागू गर्नुहोस्' : 'Apply'}
              </button>
            </div>
          )}

          {/* Presets Quick-Select */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/80">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1.5">
              {isNepali ? 'नमुना अस्पताल दृश्यहरू (Presets)' : 'Quick Preset Views'}
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {HOSPITAL_PHOTO_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setPhotoUrl(preset.url);
                    setImageError(false);
                    try {
                      localStorage.setItem('hospital_building_photo', preset.url);
                      window.dispatchEvent(new CustomEvent('hospital-photo-updated'));
                    } catch {
                      // ignore
                    }
                    triggerToast(isNepali ? preset.nameNp : preset.nameEn);
                    setIsEditing(false);
                  }}
                  className={`relative rounded-lg overflow-hidden border text-left group/preset aspect-16/10 ${
                    photoUrl === preset.url ? 'border-teal-400 ring-2 ring-teal-400/50' : 'border-slate-700'
                  }`}
                >
                  <img src={preset.url} alt={preset.nameEn} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/60 group-hover/preset:bg-slate-950/30 transition-colors flex items-end p-1">
                    <span className="text-[9px] font-medium leading-tight text-white line-clamp-1">
                      {isNepali ? preset.nameNp : preset.nameEn}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Reset to Default */}
          <div className="mt-3 pt-2 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isNepali ? 'पूर्वनिर्धारितमा फर्काउनुहोस्' : 'Reset to Default'}</span>
            </button>
            <span className="text-[10px] text-slate-500">
              {isNepali ? 'तस्बिर सुरक्षित हुन्छ' : 'Saved in browser'}
            </span>
          </div>
        </div>
      )}

      {/* Floating Bottom Location & Hospital Badge */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-3.5 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-white z-20">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
              संजीवनी कलेज अफ मेडिकल साइन्सेस (Sanjeevani Hospital)
            </h3>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {isNepali ? '३००+ बेड' : '300+ Beds'}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">
              B.P. Chowk, Nepalgunj-12, Banke, Nepal
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3 h-3" />
              {isNepali ? '२४सै घण्टा आकस्मिक सेवा' : '24/7 Emergency & ICU'}
            </span>
            <span>•</span>
            <span>{isNepali ? 'नेपालगञ्ज, बाँके' : 'Nepalgunj, Banke'}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
          <a
            href="tel:081526458"
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>081-526458</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Facility Visual Pictures matching the modern healthcare website layout
export function FacilityThumbnail({
  type,
  isNepali = false,
}: {
  type: 'icu' | 'vip' | 'ot' | 'lab' | 'ambulance' | 'fibroscan' | 'ubt';
  isNepali?: boolean;
}) {
  const configs = {
    icu: {
      titleEn: 'ICU Facilities',
      titleNp: 'सघन उपचार कक्ष (ICU)',
      subtitleEn: 'Intensive Care Unit with Ventilators',
      subtitleNp: 'आधुनिक भेन्टिलेटर र २४ घण्टे निगरानी',
      bg: 'from-blue-950 via-slate-900 to-blue-900',
      badge: 'ICU',
      icon: '🏥',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* ICU Room Wall */}
          <rect width="200" height="130" fill="#0f172a" fillOpacity="0.4" />
          {/* Ventilator Monitor Screen */}
          <rect x="25" y="20" width="75" height="55" rx="6" fill="#0284c7" />
          {/* ECG rhythm trace */}
          <polyline
            points="30,50 45,50 50,35 56,65 62,45 68,50 95,50"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="32" y="32" fill="#bae6fd" fontSize="8" fontWeight="bold">HR 76</text>
          <text x="65" y="32" fill="#4ade80" fontSize="8" fontWeight="bold">SpO2 99%</text>
          {/* Syringe Infusion Pumps */}
          <rect x="115" y="25" width="55" height="70" rx="4" fill="#334155" />
          <line x1="122" y1="38" x2="162" y2="38" stroke="#22c55e" strokeWidth="2.5" />
          <line x1="122" y1="50" x2="152" y2="50" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="122" y1="62" x2="158" y2="62" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="126" cy="78" r="4" fill="#ef4444" />
          <circle cx="138" cy="78" r="4" fill="#22c55e" />
          <circle cx="150" cy="78" r="4" fill="#38bdf8" />
        </svg>
      ),
    },
    vip: {
      titleEn: 'IPD Wards & Cabins',
      titleNp: 'भर्ना सेवा (IPD Cabins)',
      subtitleEn: 'Deluxe AC Rooms & General Wards',
      subtitleNp: 'शान्त र सफा क्याबिन तथा वार्ड',
      bg: 'from-amber-950 via-slate-900 to-amber-900',
      badge: 'IPD',
      icon: '🛌',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Hospital Bed */}
          <rect x="20" y="60" width="160" height="38" rx="6" fill="#f8fafc" />
          {/* Pillow */}
          <rect x="25" y="42" width="50" height="24" rx="5" fill="#cbd5e1" />
          <rect x="35" y="40" width="30" height="8" rx="2" fill="#94a3b8" />
          {/* Bed Rail */}
          <line x1="80" y1="52" x2="170" y2="52" stroke="#94a3b8" strokeWidth="2" />
          <line x1="95" y1="52" x2="95" y2="60" stroke="#94a3b8" strokeWidth="2" />
          <line x1="125" y1="52" x2="125" y2="60" stroke="#94a3b8" strokeWidth="2" />
          <line x1="155" y1="52" x2="155" y2="60" stroke="#94a3b8" strokeWidth="2" />
          {/* Bedside table with lamp */}
          <rect x="145" y="30" width="30" height="38" rx="3" fill="#92400e" />
          <circle cx="160" cy="20" r="9" fill="#fbbf24" opacity="0.7" />
          {/* IV Stand Pole */}
          <line x1="15" y1="15" x2="15" y2="105" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M10 20 C15 15 15 15 20 20" stroke="#cbd5e1" strokeWidth="2" fill="none" />
          <rect x="18" y="22" width="8" height="14" rx="2" fill="#67e8f9" opacity="0.8" />
        </svg>
      ),
    },
    ot: {
      titleEn: 'Endoscopy & Colonoscopy',
      titleNp: 'इन्डोस्कोपी तथा कोलोनोस्कोपी',
      subtitleEn: 'High-Definition Video Endoscopy Suite',
      subtitleNp: 'आधुनिक भिडियो क्यामरा जाँच सुइट',
      bg: 'from-teal-950 via-slate-900 to-teal-900',
      badge: 'Endo & Scope',
      icon: '🩺',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Olympus Endoscopy Video Monitor */}
          <rect x="55" y="15" width="90" height="60" rx="5" fill="#042f2e" stroke="#0d9488" strokeWidth="2" />
          {/* GI lumen circle */}
          <circle cx="100" cy="45" r="20" fill="#9f1239" />
          <circle cx="100" cy="45" r="13" fill="#e11d48" />
          <circle cx="100" cy="45" r="6" fill="#ffe4e6" />
          {/* Scope Tower buttons */}
          <rect x="80" y="80" width="40" height="25" rx="3" fill="#1e293b" />
          <circle cx="90" cy="92" r="3" fill="#14b8a6" />
          <circle cx="100" cy="92" r="3" fill="#38bdf8" />
          <circle cx="110" cy="92" r="3" fill="#f59e0b" />
          {/* Flexible Endoscope tube */}
          <path d="M120 90 Q160 100 175 65" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    lab: {
      titleEn: 'Advanced Laboratory',
      titleNp: 'अत्याधुनिक ल्याब सेवा',
      subtitleEn: 'Automated LFT, Serology & Hematology',
      subtitleNp: 'स्वचालित रगत, कलेजो र भाइरस परीक्षण',
      bg: 'from-indigo-950 via-slate-900 to-indigo-900',
      badge: 'Lab',
      icon: '🔬',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Laboratory Analyzer */}
          <rect x="25" y="45" width="60" height="50" rx="5" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="35" y="55" width="40" height="15" rx="2" fill="#3b82f6" />
          {/* Test tube rack */}
          <rect x="100" y="65" width="75" height="30" rx="3" fill="#334155" />
          {/* Color-coded vacutainer tubes */}
          <rect x="106" y="45" width="8" height="28" rx="2" fill="#ef4444" />
          <rect x="118" y="45" width="8" height="28" rx="2" fill="#a855f7" />
          <rect x="130" y="45" width="8" height="28" rx="2" fill="#3b82f6" />
          <rect x="142" y="45" width="8" height="28" rx="2" fill="#22c55e" />
          <rect x="154" y="45" width="8" height="28" rx="2" fill="#eab308" />
        </svg>
      ),
    },
    ambulance: {
      titleEn: '24*7 Emergency & Ambulance',
      titleNp: '२४/७ आकस्मिक तथा एम्बुलेन्स',
      subtitleEn: 'Resuscitation & Trauma Dispatch',
      subtitleNp: 'तत्काल आपतकालीन सेवा: ०८१-५२६४५८',
      bg: 'from-red-950 via-slate-900 to-red-900',
      badge: '24*7',
      icon: '🚑',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Ambulance Body */}
          <rect x="25" y="40" width="145" height="52" rx="8" fill="#ffffff" />
          <path d="M125 40 L160 55 L160 85 L125 85 Z" fill="#ffffff" />
          <rect x="25" y="62" width="140" height="10" fill="#dc2626" />
          {/* Emergency Cross */}
          <rect x="65" y="47" width="16" height="16" rx="2" fill="#dc2626" />
          <path d="M73 49 L73 61 M67 55 L79 55" stroke="#ffffff" strokeWidth="2.5" />
          {/* Flashing Light */}
          <rect x="85" y="32" width="18" height="8" rx="2" fill="#ef4444" />
          <line x1="94" y1="28" x2="94" y2="32" stroke="#f87171" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="60" cy="94" r="14" fill="#0f172a" />
          <circle cx="60" cy="94" r="5" fill="#94a3b8" />
          <circle cx="135" cy="94" r="14" fill="#0f172a" />
          <circle cx="135" cy="94" r="5" fill="#94a3b8" />
        </svg>
      ),
    },
    fibroscan: {
      titleEn: 'FibroScan & USG Facility',
      titleNp: 'फाइब्रोस्क्यान र युएसजी सेवा',
      subtitleEn: 'Liver Elastography & High-Res Ultrasound',
      subtitleNp: 'कलेजोको बोसो र कडापनको सही ग्रेडिङ',
      bg: 'from-emerald-950 via-slate-900 to-teal-900',
      badge: 'FibroScan',
      icon: '🫀',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* FibroScan Screen */}
          <rect x="30" y="20" width="85" height="60" rx="5" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          {/* Stiffness meter kPa */}
          <path d="M45 60 A 25 25 0 0 1 95 60" fill="none" stroke="#34d399" strokeWidth="4" />
          <line x1="70" y1="60" x2="85" y2="45" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <text x="50" y="35" fill="#a7f3d0" fontSize="8" fontWeight="bold">E = 5.2 kPa</text>
          <text x="50" y="45" fill="#6ee7b7" fontSize="7">CAP = 210 dB/m</text>
          {/* Ultrasound Probe */}
          <rect x="135" y="35" width="22" height="45" rx="5" fill="#334155" />
          <rect x="139" y="80" width="14" height="6" rx="1" fill="#10b981" />
          <path d="M146 35 Q150 15 115 25" stroke="#64748b" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    ubt: {
      titleEn: 'UBT (Urea Breath Test)',
      titleNp: 'युरिया ब्रेथ टेस्ट (UBT)',
      subtitleEn: 'Fast Non-Invasive H. pylori Detection',
      subtitleNp: 'पेटको अल्सर कीटाणु पत्ता लगाउने श्वास जाँच',
      bg: 'from-cyan-950 via-slate-900 to-cyan-900',
      badge: 'UBT Test',
      icon: '💨',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Spectrometer Unit */}
          <rect x="25" y="35" width="80" height="55" rx="6" fill="#083344" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="35" y="45" width="30" height="18" rx="2" fill="#0e7490" />
          <text x="38" y="58" fill="#a5f3fc" fontSize="7" fontWeight="bold">H. PYLORI</text>
          <circle cx="85" cy="50" r="5" fill="#22c55e" />
          <circle cx="85" cy="65" r="5" fill="#06b6d4" />
          {/* Breath Collection Bag */}
          <rect x="125" y="40" width="45" height="45" rx="8" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />
          <path d="M125 40 L170 85 M125 85 L170 40" stroke="#bae6fd" strokeWidth="1" />
          {/* Blow mouthpiece nozzle */}
          <rect x="142" y="25" width="10" height="15" rx="2" fill="#0284c7" />
        </svg>
      ),
    },
  };

  const c = configs[type];

  return (
    <div
      className={`relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-white/10 bg-gradient-to-br ${c.bg} p-3.5 flex flex-col justify-between group hover:scale-[1.02] transition-transform cursor-pointer select-none`}
    >
      <div className="flex items-center justify-between z-10">
        <span className="text-xl">{c.icon}</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white backdrop-blur-xs">
          {c.badge}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {c.svg}
      </div>

      <div className="z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
        <p className="text-xs font-bold text-white leading-tight">
          {isNepali ? c.titleNp : c.titleEn}
        </p>
        <p className="text-[10px] text-slate-300 mt-0.5 truncate">
          {isNepali ? c.subtitleNp : c.subtitleEn}
        </p>
      </div>
    </div>
  );
}
