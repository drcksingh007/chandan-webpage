/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

interface DoctorAvatarProps {
  className?: string;
  size?: number;
  shape?: 'circle' | 'rounded';
  src?: string;
}

/**
 * DoctorAvatar renders a high-fidelity medical portrait of Dr. Chandan Kumar Singh,
 * MD Medicine & Gastroenterology practitioner, based on his authentic photograph
 * wearing his traditional Nepali Dhaka topi, royal blue stethoscope, white lab coat,
 * and embroidered clinician credentials.
 */
export function DoctorAvatar({
  className = '',
  size = 128,
  shape = 'circle',
  src,
}: DoctorAvatarProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(src || null);

  useEffect(() => {
    if (src) {
      setPhotoUrl(src);
      return;
    }
    const saved = localStorage.getItem('dr_chandan_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
    const handleUpdate = () => {
      const updated = localStorage.getItem('dr_chandan_photo');
      setPhotoUrl(updated || null);
    };
    window.addEventListener('dr-photo-updated', handleUpdate);
    return () => window.removeEventListener('dr-photo-updated', handleUpdate);
  }, [src]);

  const roundedClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl';

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center select-none shadow-md ${roundedClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#e6f4f1',
        outline: '2px solid color-mix(in oklab, var(--accent, #0f766e) 30%, transparent)',
        boxShadow: '0 2px 10px -2px rgba(15, 118, 110, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
      }}
      role="img"
      aria-label="Dr. Chandan Kumar Singh, MD Medicine, Practicing Gastroenterology"
    >
      {photoUrl ? (
        <img
          src={photoUrl}
          alt="Dr. Chandan Kumar Singh"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Soft clinical room background matching doctor's clinic photo */}
            <linearGradient id="clinicBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Subtle medical halo */}
            <radialGradient id="haloGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#e0f2fe" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* Traditional Black Nepali Dhaka Topi (authentic shading) */}
            <linearGradient id="dhakaTopiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e2022" />
              <stop offset="35%" stopColor="#2c2e33" />
              <stop offset="70%" stopColor="#18191b" />
              <stop offset="100%" stopColor="#0f1011" />
            </linearGradient>

            {/* Subtle Dhaka woven fabric texture pattern */}
            <pattern id="topiPattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M0 2 L2 0 L4 2 L2 4 Z" fill="#2d3036" opacity="0.25" />
            </pattern>

            {/* South Asian natural warm skin tone */}
            <linearGradient id="docSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5a882" />
              <stop offset="45%" stopColor="#d8966e" />
              <stop offset="85%" stopColor="#bd7950" />
              <stop offset="100%" stopColor="#a35f37" />
            </linearGradient>

            {/* Chin & neck shadow */}
            <linearGradient id="neckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9e5a32" />
              <stop offset="100%" stopColor="#7a4220" />
            </linearGradient>

            {/* Crisp white lab coat */}
            <linearGradient id="coatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Signature Royal Blue Stethoscope Tubing */}
            <linearGradient id="stethBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>

            {/* Stainless steel chrome for binaural & diaphragm */}
            <linearGradient id="chromeMet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Navy blue textured tie */}
            <linearGradient id="navyTie" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="50%" stopColor="#172b47" />
              <stop offset="100%" stopColor="#0f1d30" />
            </linearGradient>
          </defs>

          {/* Clinic Interior Ambient Background */}
          <rect width="160" height="160" fill="url(#clinicBg)" />
          <circle cx="80" cy="70" r="60" fill="url(#haloGlow)" />

          {/* Clinic wall soft shadow corner */}
          <path d="M120 0 L160 0 L160 70 Z" fill="#e2e8f0" opacity="0.3" />

          {/* Shoulders & White Doctor Lab Coat */}
          <path
            d="M10 160 C10 126 34 116 80 116 C126 116 150 126 150 160 Z"
            fill="url(#coatGrad)"
          />

          {/* White Shirt & Collar */}
          <path d="M66 112 L80 134 L94 112 Z" fill="#f8fafc" />
          <path d="M66 112 L73 124 L80 114 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
          <path d="M94 112 L87 124 L80 114 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />

          {/* Navy Blue Textured Necktie */}
          <path d="M77 116 L83 116 L85 146 L80 154 L75 146 Z" fill="url(#navyTie)" />
          <line x1="80" y1="120" x2="80" y2="152" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="1.5 2" opacity="0.6" />

          {/* White Lab Coat Left Lapel & Right Lapel */}
          <path
            d="M32 118 L64 150 L64 160 L12 160 C12 136 22 124 32 118 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <path
            d="M128 118 L96 150 L96 160 L148 160 C148 136 138 124 128 118 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Doctor Coat Buttons */}
          <circle cx="80" cy="156" r="2.2" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.6" />

          {/* Left Chest Pocket with Blue Pen & Identification */}
          <g transform="translate(94, 134)">
            {/* Pocket outline */}
            <rect
              width="26"
              height="22"
              rx="2"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="0.8"
            />
            {/* Blue pen clipped inside pocket */}
            <rect x="5" y="-6" width="3" height="10" rx="1.5" fill="#1d4ed8" />
            <rect x="4.5" y="-2" width="4" height="2" rx="0.5" fill="#94a3b8" />

            {/* Embroidered text representation on pocket */}
            <rect x="3" y="6" width="20" height="1.8" rx="0.9" fill="#1e293b" opacity="0.85" />
            <rect x="3" y="10" width="18" height="1.4" rx="0.7" fill="#475569" opacity="0.8" />
            <rect x="3" y="13.5" width="14" height="1.2" rx="0.6" fill="#0d9488" opacity="0.8" />
          </g>

          {/* Neck with Anatomical Shading */}
          <path d="M64 96 L64 118 C64 124 71 127 80 127 C89 127 96 124 96 118 L96 96 Z" fill="url(#docSkin)" />
          <path d="M68 98 C72 108 88 108 92 98 L92 104 C88 114 72 114 68 104 Z" fill="url(#neckShadow)" opacity="0.35" />

          {/* Head / Face Oval */}
          <ellipse cx="80" cy="74" rx="26" ry="30" fill="url(#docSkin)" />

          {/* Ears with inner detail */}
          <path d="M54 70 C51 70 50 76 51 82 C52 86 55 88 56 83 Z" fill="url(#docSkin)" />
          <path d="M106 70 C109 70 110 76 109 82 C108 86 105 88 104 83 Z" fill="url(#docSkin)" />

          {/* Sideburns / hairline under topi */}
          <path d="M54 62 L54 74 L57 74 L57 64 Z" fill="#1e2022" />
          <path d="M106 62 L106 74 L103 74 L103 64 Z" fill="#1e2022" />

          {/* ======================================================== */}
          {/* TRADITIONAL NEPALI DHAKA TOPI (Black Cap)                */}
          {/* Authentic pointed shape tapering upward & angled crease */}
          {/* ======================================================== */}
          <g id="dhakaTopi">
            {/* Base cap shape */}
            <path
              d="M51 60 C53 44 65 24 81 20 C95 24 104 40 109 60 C98 62 62 62 51 60 Z"
              fill="url(#dhakaTopiGrad)"
            />
            {/* Topi textured pattern overlay */}
            <path
              d="M51 60 C53 44 65 24 81 20 C95 24 104 40 109 60 C98 62 62 62 51 60 Z"
              fill="url(#topiPattern)"
            />
            {/* Topi characteristic angled front crease fold */}
            <path
              d="M81 20 L78 61"
              stroke="#111214"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M81 20 L84 61"
              stroke="#3a3d45"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* Subtle cap rim band */}
            <path
              d="M51 60 Q80 63 109 60"
              stroke="#17181a"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M53 59.5 Q80 62.5 107 59.5"
              stroke="#40444d"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </g>

          {/* Realistic Natural Eyebrows */}
          <path d="M62 67 Q69 63.5 75 66.5" stroke="#1c1613" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M85 66.5 Q91 63.5 98 67" stroke="#1c1613" strokeWidth="2.8" strokeLinecap="round" />

          {/* Expressive Warm Eyes */}
          {/* Left Eye */}
          <ellipse cx="69" cy="73" rx="4.2" ry="2.8" fill="#ffffff" />
          <circle cx="69.2" cy="73" r="2.4" fill="#231812" />
          <circle cx="69.4" cy="72.8" r="1.4" fill="#120c09" />
          <circle cx="70" cy="72.2" r="0.8" fill="#ffffff" />
          <path d="M64 71 Q69 69 74 71" stroke="#874326" strokeWidth="0.9" fill="none" />

          {/* Right Eye */}
          <ellipse cx="91" cy="73" rx="4.2" ry="2.8" fill="#ffffff" />
          <circle cx="90.8" cy="73" r="2.4" fill="#231812" />
          <circle cx="90.6" cy="72.8" r="1.4" fill="#120c09" />
          <circle cx="91.4" cy="72.2" r="0.8" fill="#ffffff" />
          <path d="M86 71 Q91 69 96 71" stroke="#874326" strokeWidth="0.9" fill="none" />

          {/* Well-proportioned Nose */}
          <path
            d="M80 70 L79 81 L83 82.5"
            stroke="#9a5a35"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="76.5" cy="82.5" rx="1.8" ry="1" fill="#874326" opacity="0.35" />
          <ellipse cx="83.5" cy="82.5" rx="1.8" ry="1" fill="#874326" opacity="0.35" />

          {/* Doctor's Friendly, Professional Bedside Smile */}
          <path
            d="M71 89 Q80 94.5 89 89"
            stroke="#7f381c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M74 91.5 Q80 94.5 86 91.5"
            stroke="#b66b49"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Clean Shaven Chin Dimple / Shadow */}
          <ellipse cx="80" cy="98" rx="3.5" ry="1.5" fill="#a46440" opacity="0.25" />

          {/* ======================================================== */}
          {/* SIGNATURE ROYAL BLUE STETHOSCOPE                         */}
          {/* Matches photo's bright blue tubing around doctor's neck  */}
          {/* ======================================================== */}
          <g id="stethoscope">
            {/* Chrome binaural spring tubes coming down */}
            <path d="M57 98 L54 112" stroke="url(#chromeMet)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M103 98 L106 112" stroke="url(#chromeMet)" strokeWidth="2.4" strokeLinecap="round" />

            {/* Blue Stethoscope Tubing draped over shoulders */}
            {/* Right side curve towards chest piece */}
            <path
              d="M54 112 C50 126 48 142 56 154"
              stroke="url(#stethBlue)"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            {/* Left side curve with loop */}
            <path
              d="M106 112 C110 126 108 142 98 152"
              stroke="url(#stethBlue)"
              strokeWidth="4.2"
              strokeLinecap="round"
            />

            {/* Chrome Chest Piece / Bell on right side of lab coat */}
            <circle cx="56" cy="154" r="7.5" fill="url(#chromeMet)" stroke="#334155" strokeWidth="1.4" />
            <circle cx="56" cy="154" r="4.2" fill="url(#stethBlue)" />
            <circle cx="57.5" cy="152.5" r="1.5" fill="#ffffff" opacity="0.85" />
          </g>

          {/* Outer circular bezel glow for crisp framing */}
          <circle
            cx="80"
            cy="80"
            r="79"
            stroke="url(#chromeMet)"
            strokeWidth="2"
            opacity="0.2"
          />
        </svg>
      )}
    </div>
  );
}
