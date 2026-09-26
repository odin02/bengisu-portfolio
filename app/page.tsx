'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Code, Globe, Sparkles } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es';

export default function Home() {
  const [lang, setLang] = useState<Language>('tr');

  const content: Record<Language, any> = {
    tr: {
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navArticles: 'Yazılarım',
      badge: 'Büyük Veri Analitiği & UI/UX Tasarım',
      name: 'Bengisu Küçük',
      role: 'Veri Analisti & Arayüz Geliştirici',
      bio: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analitiği öğrencisiyim. Kullanıcı odaklı dijital deneyimler tasarlıyor, veri görselleştirme ve analitik modeller üzerine çalışıyorum.',
      projectsTitle: 'Öne Çıkan Projeler',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Londra trafik verilerini kullanarak yol segmentlerini sınıflandıran istatistiksel makine öğrenmesi modeli.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Dijital Okuryazarlık Destek Projesi',
      proj2Desc: 'Huzurevi sakinlerine yönelik dijital okuryazarlık eğitimi ve kullanıcı dostu arayüz rehberi tasarımı.',
      githubLink: 'GitHub\'da İncele',
      articlesTitle: 'Yazılar & Çalışmalar',
      art1Title: 'Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı',
      art1Date: 'Eylül 2026 • 4 dk okuma',
      art2Title: 'Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi',
      art2Date: 'Ağustos 2026 • 6 dk okuma',
      footer: '© 2026 Bengisu Küçük. Next.js & Tailwind CSS ile geliştirildi.',
    },
    en: {
      navAbout: 'About',
      navProjects: 'Projects',
      navArticles: 'Articles',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Data Analyst & Interface Developer',
      bio: 'Big Data Analytics student at Manisa Celal Bayar University. Crafting user-centric digital experiences and developing data visualization models.',
      projectsTitle: 'Featured Projects',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Statistical machine learning model classifying road segments using London traffic data.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Digital Literacy Support Project',
      proj2Desc: 'Digital literacy training and user-friendly interface guide design for nursing home residents.',
      githubLink: 'View on GitHub',
      articlesTitle: 'Articles & Essays',
      art1Title: 'Typography and Hierarchy Logic in User Experience (UX)',
      art1Date: 'September 2026 • 4 min read',
      art2Title: 'The Impact of Visualization in Big Data Analytics on Interface Design',
      art2Date: 'August 2026 • 6 min read',
      footer: '© 2026 Bengisu Küçük. Built with Next.js & Tailwind CSS.',
    },
    kr: {
      navAbout: '소개',
      navProjects: '프로젝트',
      navArticles: '아티클',
      badge: '빅데이터 분석학 & UI/UX 디자인',
      name: '벵기수 퀴취크',
      role: '데이터 분석가 & UI/UX 개발자',
      bio: '마니사 제랄 바야르 대학교 빅데이터 분석학 전공. 사용자 중심의 디지털 경험을 설계하고 데이터 시각화 모델을 개발합니다.',
      projectsTitle: '주요 프로젝트',
      proj1Tag: 'Python • 머신러닝',
      proj1Title: '런던 교통 데이터 분석 모델',
      proj1Desc: '런던 교통 데이터를 활용하여 도로 구간을 분류하는 통계적 머신러닝 모델.',
      proj2Tag: 'UI/UX • 사회적 책임',
      proj2Title: '디지털 리터러시 지원 프로젝트',
      proj2Desc: '요양원 입소자를 위한 디지털 리터러시 교육 및 사용자 친화적 인터페이스 가이드 디자인.',
      githubLink: 'GitHub에서 보기',
      articlesTitle: '작성한 아티클',
      art1Title: '사용자 경험(UX)에서의 타이포그래피와 계층 구조',
      art1Date: '2026년 9월 • 읽는 시간 4분',
      art2Title: '빅데이터 시각화가 인터페이스 디자인에 미치는 영향',
      art2Date: '2026년 8월 • 읽는 시간 6분',
      footer: '© 2026 Bengisu Küçük. Next.js 및 Tailwind CSS로 제작되었습니다.',
    },
    de: {
      navAbout: 'Über mich',
      navProjects: 'Projekte',
      navArticles: 'Artikel',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Datenanalystin & Frontend-Entwicklerin',
      bio: 'Studentin der Big Data Analytics an der Universität Manisa Celal Bayar. Entwicklung benutzerzentrierter digitaler Erlebnisse und Datenvisualisierungsmodelle.',
      projectsTitle: 'Ausgewählte Projekte',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Verkehrsdatenanalyse',
      proj1Desc: 'Statistisches Modell für maschinelles Lernen zur Klassifizierung von Straßenabschnitten.',
      proj2Tag: 'UI/UX • Soziale Verantwortung',
      proj2Title: 'Digitale Alphabetisierung Projekt',
      proj2Desc: 'Schulung zur digitalen Alphabetisierung und benutzerfreundliches Interface-Design für Seniorenheimbewohner.',
      githubLink: 'Auf GitHub ansehen',
      articlesTitle: 'Meine Artikel',
      art1Title: 'Typografie und Hierarchie in der Benutzererfahrung (UX)',
      art1Date: 'September 2026 • 4 Min. Lesezeit',
      art2Title: 'Der Einfluss der Datenvisualisierung auf das Interface-Design',
      art2Date: 'August 2026 • 6 Min. Lesezeit',
      footer: '© 2026 Bengisu Küçük. Erstellt mit Next.js & Tailwind CSS.',
    },
    es: {
      navAbout: 'Sobre mí',
      navProjects: 'Proyectos',
      navArticles: 'Artículos',
      badge: 'Análisis de Big Data y Diseño UI/UX',
      name: 'Bengisu Küçük',
      role: 'Analista de Datos y Desarrolladora UI',
      bio: 'Estudiante de Análisis de Big Data en la Universidad Manisa Celal Bayar. Diseño experiencias digitales enfocadas en el usuario y modelos de visualización de datos.',
      projectsTitle: 'Proyectos Destacados',
      proj1Tag: 'Python • Aprendizaje Automático',
      proj1Title: 'Análisis de Tráfico de Londres',
      proj1Desc: 'Modelo estadístico de aprendizaje automático para clasificar tramos de carretera utilizando datos de tráfico.',
      proj2Tag: 'UI/UX • Responsabilidad Social',
      proj2Title: 'Proyecto de Alfabetización Digital',
      proj2Desc: 'Capacitación en alfabetización digital y diseño de guía de interfaz fácil de usar para residentes de hogares de ancianos.',
      githubLink: 'Ver en GitHub',
      articlesTitle: 'Mis Artículos',
      art1Title: 'Tipografía y Lógica de Jerarquía en la Experiencia de Usuario (UX)',
      art1Date: 'Septiembre 2026 • 4 min de lectura',
      art2Title: 'El Impacto de la Visualización de Datos en el Diseño de Interfaz',
      art2Date: 'Agosto 2026 • 6 min de lectura',
      footer: '© 2026 Bengisu Küçük. Creado con Next.js y Tailwind CSS.',
    },
  };

  const t = content[lang];

  return (
    <div className="relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30">
      
      {/* BOZULMAYAN SABİT SONBAHAR ARKA PLANI (`arkaplan.jpg`) */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20 scale-105"
        style={{ backgroundImage: `url('/arkaplan.jpg')` }}
      />
      {/* Şık Sıcak Karartma (Overlay) */}
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-10" />

      <main className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-12">
        
        {/* 1. ÜST MENÜ & ÇOKLU DİL SEÇİCİ */}
        <header className="flex justify-between items-center py-4 border-b border-amber-500/20 backdrop-blur-md">
          <span className="font-medium text-base tracking-wide text-amber-200">
            Bengisu Küçük
          </span>
          
          <div className="flex items-center gap-5">
            <nav className="flex gap-5 text-xs text-stone-300">
              <a href="#hakkimda" className="hover:text-amber-300 transition-colors">{t.navAbout}</a>
              <a href="#projeler" className="hover:text-amber-300 transition-colors">{t.navProjects}</a>
              <a href="#yazilarim" className="hover:text-amber-300 transition-colors">{t.navArticles}</a>
            </nav>

            {/* DİL SEÇİCİ */}
            <div className="flex items-center gap-1.5 bg-stone-900/80 border border-amber-500/30 rounded-lg px-2.5 py-1 text-xs text-amber-200 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-amber-200 focus:outline-none cursor-pointer"
              >
                <option value="tr" className="bg-stone-900 text-amber-100">TR (Türkçe)</option>
                <option value="en" className="bg-stone-900 text-amber-100">EN (English)</option>
                <option value="kr" className="bg-stone-900 text-amber-100">KR (한국어)</option>
                <option value="de" className="bg-stone-900 text-amber-100">DE (Deutsch)</option>
                <option value="es" className="bg-stone-900 text-amber-100">ES (Español)</option>
              </select>
            </div>
          </div>
        </header>

        {/* 2. GİRİŞ (HERO) - MINIMAL & MODERN KİŞİSEL KART */}
        <section id="hakkimda" className="py-2">
          <motion.div 
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-stone-900/50 border border-amber-500/20 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-xl"
          >
            {/* PROFİL FOTOĞRAFI (PNG) */}
            <div className="relative shrink-0">
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-stone-900 border border-amber-500/30 shadow-md">
                <img 
                  src="/profil.png" 
                  alt="Bengisu Küçük" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* TANITIM METİNLERİ */}
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 self-center sm:self-start px-2.5 py-0.5 text-xs rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {t.badge}
              </div>
              
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
                  {t.name}
                </h1>
                <p className="text-xs sm:text-sm text-amber-400 font-medium mt-0.5">
                  {t.role}
                </p>
              </div>
              
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light max-w-lg">
                {t.bio}
              </p>

              {/* SOSYAL MEDYA BAGLANTILARI */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mt-1">
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:text-amber-300 rounded-lg transition-all text-xs text-stone-200"
                >
                  LinkedIn ↗
                </a>
                
                <a 
                  href="https://github.com/odin02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:text-amber-300 rounded-lg transition-all text-xs text-stone-200"
                >
                  GitHub ↗
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:text-amber-300 rounded-lg transition-all text-xs text-stone-200"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. PROJELERİM BÖLÜMÜ */}
        <section id="projeler" className="flex flex-col gap-5">
          <h2 className="text-lg font-bold flex items-center gap-2 text-amber-100">
            <Code className="w-4 h-4 text-amber-400" /> {t.projectsTitle}
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Proje 1 */}
            <div className="p-5 bg-stone-900/40 border border-amber-500/20 rounded-xl flex flex-col justify-between hover:border-amber-400/40 transition-all backdrop-blur-md group">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">{t.proj1Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj1Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">
                  {t.proj1Desc}
                </p>
              </div>
              <a 
                href="https://github.com/odin02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-5 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Proje 2 */}
            <div className="p-5 bg-stone-900/40 border border-amber-500/20 rounded-xl flex flex-col justify-between hover:border-amber-400/40 transition-all backdrop-blur-md group">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">{t.proj2Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj2Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">
                  {t.proj2Desc}
                </p>
              </div>
              <a 
                href="https://github.com/odin02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-5 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. YAZILARIM BÖLÜMÜ */}
        <section id="yazilarim" className="flex flex-col gap-5">
          <h2 className="text-lg font-bold flex items-center gap-2 text-amber-100">
            <BookOpen className="w-4 h-4 text-amber-400" /> {t.articlesTitle}
          </h2>

          <div className="flex flex-col gap-3">
            <Link href="/yazilar/ux-tipografi">
              <article className="p-4 bg-stone-900/40 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/60 hover:border-amber-400/40 transition-all cursor-pointer backdrop-blur-md">
                <div>
                  <h3 className="font-medium text-sm text-amber-100">{t.art1Title}</h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">{t.art1Date}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
              </article>
            </Link>

            <article className="p-4 bg-stone-900/40 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/60 hover:border-amber-400/40 transition-all cursor-pointer backdrop-blur-md">
              <div>
                <h3 className="font-medium text-sm text-amber-100">{t.art2Title}</h3>
                <p className="text-[11px] text-stone-400 mt-0.5">{t.art2Date}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
            </article>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-6 border-t border-amber-500/20 text-center text-xs text-stone-400">
          {t.footer}
        </footer>

      </main>
    </div>
  );
}