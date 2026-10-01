'use client';

import Link from 'next/link';
import { Globe } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  season: Season;
  setSeason: (season: Season) => void;
}

export default function Navbar({ lang, setLang, season, setSeason }: NavbarProps) {
  const navText = {
    tr: { about: 'Hakkımda', projects: 'Projeler', articles: 'Yazılarım', works: 'Çalışmalar', contact: 'İletişim' },
    en: { about: 'About', projects: 'Projects', articles: 'Articles', works: 'Works', contact: 'Contact' },
    kr: { about: '소개', projects: '프로젝트', articles: '아티클', works: '연구', contact: '연락처' },
    de: { about: 'Über mich', projects: 'Projekte', articles: 'Artikel', works: 'Arbeiten', contact: 'Kontakt' },
    es: { about: 'Sobre mí', projects: 'Proyectos', articles: 'Artículos', works: 'Trabajos', contact: 'Contacto' },
    ar: { about: 'معلومات عني', projects: 'المشاريع', articles: 'المقالات', works: 'الأعمال', contact: 'اتصل بي' },
  };

  const t = navText[lang];

  return (
    <div className="w-full z-50 backdrop-blur-lg bg-stone-950/85 border-b border-stone-800 shadow-2xl sticky top-0">
      <header className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO VE İSİM */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-stone-900 border border-stone-700 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center p-0.5">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-wide text-stone-100">
            Bengisu Küçük
          </span>
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden md:flex gap-5 text-xs text-stone-300">
            <Link href="/" className="hover:text-stone-100 transition-colors">{t.about}</Link>
            <Link href="/projeler" className="hover:text-stone-100 transition-colors">{t.projects}</Link>
            <Link href="/yazilar" className="hover:text-stone-100 transition-colors">{t.articles}</Link>
            <Link href="/calismalar" className="hover:text-stone-100 transition-colors">{t.works}</Link>
            <Link href="/iletisim" className="hover:text-stone-100 transition-colors">{t.contact}</Link>
          </nav>

          {/* MEVSİM DEĞİŞTİRME BUTONU */}
          <div className="flex items-center bg-stone-900/90 border border-stone-800 rounded-xl p-1 gap-1">
            <button onClick={() => setSeason('spring')} title="İlkbahar" className={`p-1.5 rounded-lg text-xs ${season === 'spring' ? 'bg-pink-500/30 text-pink-300' : 'text-stone-400'}`}>🌸</button>
            <button onClick={() => setSeason('summer')} title="Yaz" className={`p-1.5 rounded-lg text-xs ${season === 'summer' ? 'bg-amber-500/30 text-amber-300' : 'text-stone-400'}`}>☀️</button>
            <button onClick={() => setSeason('autumn')} title="Sonbahar" className={`p-1.5 rounded-lg text-xs ${season === 'autumn' ? 'bg-orange-500/30 text-orange-300' : 'text-stone-400'}`}>🍁</button>
            <button onClick={() => setSeason('winter')} title="Kış" className={`p-1.5 rounded-lg text-xs ${season === 'winter' ? 'bg-cyan-500/30 text-cyan-300' : 'text-stone-400'}`}>❄️</button>
          </div>

          {/* DİL SEÇİCİ */}
          <div className="flex items-center gap-1 bg-stone-900/90 border border-stone-800 rounded-xl px-2 py-1 text-xs text-stone-200 backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-stone-200 focus:outline-none cursor-pointer"
            >
              <option value="tr" className="bg-stone-900 text-stone-100">TR</option>
              <option value="en" className="bg-stone-900 text-stone-100">EN</option>
              <option value="kr" className="bg-stone-900 text-stone-100">KR</option>
              <option value="de" className="bg-stone-900 text-stone-100">DE</option>
              <option value="es" className="bg-stone-900 text-stone-100">ES</option>
              <option value="ar" className="bg-stone-900 text-stone-100">AR</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}