'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Sparkles } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function Home() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('autumn');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) setSeason('spring');
    else if (month >= 5 && month <= 7) setSeason('summer');
    else if (month >= 8 && month <= 10) setSeason('autumn');
    else setSeason('winter');
  }, []);

  // Mevsime göre renkler, görseller ve ikonlar
  const seasonConfig = {
    spring: {
      bg: '/ilkbahararkaplan.png',
      profile: '/ilkbaharprofil.png',
      icon: '🌸',
      cardBg: 'bg-stone-900/75 border-pink-500/30 shadow-pink-950/40',
      badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
      particles: ['🌸', '🍃', '✨', '🌸'],
    },
    summer: {
      bg: '/yazarkaplan.png',
      profile: '/yazprofil.png',
      icon: '☀️',
      cardBg: 'bg-stone-900/75 border-amber-500/30 shadow-amber-950/40',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      particles: ['☀️', '✨', '⭐', '🌊'],
    },
    autumn: {
      bg: '/sonbahararkaplan.png',
      profile: '/sonbaharprofil.png',
      icon: '🍁',
      cardBg: 'bg-stone-900/75 border-orange-500/30 shadow-orange-950/40',
      badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
      particles: ['🍁', '🍂', '✨', '⭐'],
    },
    winter: {
      bg: '/kisarkaplan.png',
      profile: '/kisprofil.png',
      icon: '❄️',
      cardBg: 'bg-stone-900/75 border-cyan-500/30 shadow-cyan-950/40',
      badgeBg: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/30',
      particles: ['❄️', '🌨️️', '✨', '⭐'],
    },
  };

  const currentSeason = seasonConfig[season];

  const content: Record<Language, any> = {
    tr: {
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navArticles: 'Yazılarım',
      navAssignments: 'Çalışmalar',
      navContact: 'İletişim',
      badge: 'Büyük Veri Analitiği & UI/UX Tasarım',
      name: 'Bengisu Küçük',
      role: 'Veri Analisti & Arayüz Geliştirici',
      bio: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analitiği 2. sınıf öğrencisiyim. Veri analizi ve makine öğrenmesi süreçlerini kullanıcı odaklı arayüz (UI/UX) tasarımıyla buluşturuyor; karmaşık verileri anlaşılır, estetik ve işlevsel dijital deneyimlere dönüştürüyorum.',
    },
    en: {
      navAbout: 'About',
      navProjects: 'Projects',
      navArticles: 'Articles',
      navAssignments: 'Works',
      navContact: 'Contact',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Data Analyst & Interface Developer',
      bio: '2nd-year Big Data Analytics student at Manisa Celal Bayar University. Combining data analysis and machine learning with user-centered UI/UX design.',
    },
    kr: {
      navAbout: '소개',
      navProjects: '프로젝트',
      navArticles: '아티클',
      navAssignments: '연구/실습',
      navContact: '연락처',
      badge: '빅데이터 분석학 & UI/UX 디자인',
      name: '벵기수 퀴취크',
      role: '데이터 분석가 & UI/UX 개발자',
      bio: '마니사 제랄 바야르 대학교 빅데이터 분석학 2학년. 데이터 분석과 사용자 중심 UI/UX 디자인을 결합합니다.',
    },
    de: {
      navAbout: 'Über mich',
      navProjects: 'Projekte',
      navArticles: 'Artikel',
      navAssignments: 'Arbeiten',
      navContact: 'Kontakt',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Datenanalystin & Frontend-Entwicklerin',
      bio: 'Studentin im 2. Jahr der Big Data Analytics an der Manisa Celal Bayar Universität.',
    },
    es: {
      navAbout: 'Sobre mí',
      navProjects: 'Proyectos',
      navArticles: 'Artículos',
      navAssignments: 'Trabajos',
      navContact: 'Contacto',
      badge: 'Análisis de Big Data y Diseño UI/UX',
      name: 'Bengisu Küçük',
      role: 'Analista de Datos y Desarrolladora UI',
      bio: 'Estudiante de 2.º año de Análisis de Big Data en la Universidad Manisa Celal Bayar.',
    },
    ar: {
      navAbout: 'معلومات عني',
      navProjects: 'المشاريع',
      navArticles: 'المقالات',
      navAssignments: 'الأعمال',
      navContact: 'اتصل بي',
      badge: 'تحليل البيانات الكبيرة وتصميم واجهة المستخدم',
      name: 'بنقيسو كوتشوك',
      role: 'محللة بيانات ومطورة واجهات',
      bio: 'طالبة سنة ثانية في تحليل البيانات الكبيرة بجامعة مانسا جلال بايار. أجمع بين تحليل البيانات وتصميم واجهات المستخدم.',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30 overflow-hidden flex flex-col justify-between ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {/* MEVSİME GÖRE DİNAMİK ARKA PLAN */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000"
        style={{ backgroundImage: `url('${currentSeason.bg}')` }}
      />
      
      <div className="fixed inset-0 bg-stone-950/75 backdrop-blur-[1px] -z-20" />

      {/* MEVSİME ÖZEL UÇUŞAN ANİMASYONLAR */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden w-full h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{ y: -60, opacity: 0, rotate: 0 }}
              animate={{
                y: ['0vh', '108vh'],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
                x: [-15, 25, -15],
              }}
              transition={{
                duration: 10 + (i * 1.5),
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'linear',
              }}
              style={{ left: `${(i * 8) + 4}%` }}
              className={`absolute text-xl sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
            >
              {currentSeason.particles[i % currentSeason.particles.length]}
            </motion.div>
          ))}
        </div>
      )}

      {/* FIXED HEADER (ÜST MENÜ - MULTI-PAGE GEÇİŞLERİ) */}
      <div className="w-full z-50 backdrop-blur-lg bg-stone-950/85 border-b border-amber-500/20 shadow-2xl">
        <header className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-base tracking-wide text-amber-200 flex items-center gap-2">
            <span>{currentSeason.icon}</span> Bengisu Küçük
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="hidden md:flex gap-5 text-xs text-stone-300">
              <Link href="/" className="hover:text-amber-300 transition-colors">{t.navAbout}</Link>
              <Link href="/projeler" className="hover:text-amber-300 transition-colors">{t.navProjects}</Link>
              <Link href="/yazilar" className="hover:text-amber-300 transition-colors">{t.navArticles}</Link>
              <Link href="/calismalar" className="hover:text-amber-300 transition-colors">{t.navAssignments}</Link>
              <Link href="/iletisim" className="hover:text-amber-300 transition-colors">{t.navContact}</Link>
            </nav>

            {/* MEVSİM DEĞİŞTİRME BUTONU (DİNAMİK İKONLU) */}
            <div className="flex items-center bg-stone-900/90 border border-amber-500/30 rounded-xl p-1 gap-1">
              <button onClick={() => setSeason('spring')} title="İlkbahar" className={`p-1.5 rounded-lg text-xs ${season === 'spring' ? 'bg-pink-500/30 text-pink-300' : 'text-stone-400'}`}>🌸</button>
              <button onClick={() => setSeason('summer')} title="Yaz" className={`p-1.5 rounded-lg text-xs ${season === 'summer' ? 'bg-amber-500/30 text-amber-300' : 'text-stone-400'}`}>☀️</button>
              <button onClick={() => setSeason('autumn')} title="Sonbahar" className={`p-1.5 rounded-lg text-xs ${season === 'autumn' ? 'bg-orange-500/30 text-orange-300' : 'text-stone-400'}`}>🍁</button>
              <button onClick={() => setSeason('winter')} title="Kış" className={`p-1.5 rounded-lg text-xs ${season === 'winter' ? 'bg-cyan-500/30 text-cyan-300' : 'text-stone-400'}`}>❄️</button>
            </div>

            {/* DİL SEÇİCİ */}
            <div className="flex items-center gap-1 bg-stone-900/90 border border-amber-500/30 rounded-xl px-2 py-1 text-xs text-amber-200 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-amber-200 focus:outline-none cursor-pointer"
              >
                <option value="tr" className="bg-stone-900 text-amber-100">TR</option>
                <option value="en" className="bg-stone-900 text-amber-100">EN</option>
                <option value="kr" className="bg-stone-900 text-amber-100">KR</option>
                <option value="de" className="bg-stone-900 text-amber-100">DE</option>
                <option value="es" className="bg-stone-900 text-amber-100">ES</option>
                <option value="ar" className="bg-stone-900 text-amber-100">AR</option>
              </select>
            </div>
          </div>
        </header>
      </div>

      {/* ANA SAYFA - SADECE KİŞİSEL KARŞILAMA KARTI (AŞAĞI KAYDIRMA YOK) */}
      <main className="max-w-4xl mx-auto px-6 my-auto py-12 w-full">
        <motion.div 
          key={season + lang}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full flex flex-col sm:flex-row items-center sm:items-start gap-8 border p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden ${currentSeason.cardBg}`}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* MEVSİME GÖRE DEĞİŞEN PROFİL FOTOĞRAFI */}
          <div className="relative shrink-0 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-stone-900 border border-amber-500/40 shadow-2xl">
              <img 
                src={currentSeason.profile} 
                alt="Bengisu Küçük" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left my-auto">
            <div className={`inline-flex items-center gap-2 self-center sm:self-start px-4 py-1.5 text-xs rounded-full border font-medium shadow-sm ${currentSeason.badgeBg}`}>
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </div>
            
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-amber-100">
                {t.name}
              </h1>
              <p className="text-xs sm:text-base text-amber-400 font-medium mt-1">
                {t.role}
              </p>
            </div>
            
            <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light max-w-lg">
              {t.bio}
            </p>

            {/* DOĞRU SOSYAL MEDYA LİNKLERİ */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
              <a 
                href="https://www.linkedin.com/in/bengisukucuk" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-11 h-11 bg-stone-900/80 border border-amber-500/30 hover:border-amber-400 hover:bg-stone-800/90 text-amber-200 hover:text-amber-300 rounded-2xl flex items-center justify-center transition-all shadow-md hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              
              <a 
                href="https://github.com/odin02" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="w-11 h-11 bg-stone-900/80 border border-amber-500/30 hover:border-amber-400 hover:bg-stone-800/90 text-amber-200 hover:text-amber-300 rounded-2xl flex items-center justify-center transition-all shadow-md hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                className="w-11 h-11 bg-stone-900/80 border border-amber-500/30 hover:border-amber-400 hover:bg-stone-800/90 text-amber-200 hover:text-amber-300 rounded-2xl flex items-center justify-center transition-all shadow-md hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-4 border-t border-amber-500/20 text-center text-xs text-stone-400 bg-stone-950/80">
        © 2026 Bengisu Küçük. Next.js & Tailwind CSS ile geliştirildi.
      </footer>

    </div>
  );
}