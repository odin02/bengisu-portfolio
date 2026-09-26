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
      badge: 'Büyük Veri Analitiği Öğrencisi & UI/UX Meraklısı',
      heroGreeting: 'Merhaba, Ben',
      heroTitle1: 'Bengisu Küçük',
      heroTitle2: 'Veri Analitiği ve Arayüz Tasarımını',
      heroTitle3: 'Bir Araya Getiriyorum.',
      heroDesc: 'Manisa Celal Bayar Üniversitesi\'nde Büyük Veri Analitiği okuyorum. Kullanıcı deneyimi (UI/UX) odaklı modern web arayüzleri geliştiriyor, veri analizi ve görselleştirme projeleri üzerine çalışıyorum.',
      projectsTitle: 'Öne Çıkan Projelerim',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Londra trafik verilerini kullanarak yol segmentlerini sınıflandıran istatistiksel makine öğrenmesi modeli.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Dijital Okuryazarlık Destek Projesi',
      proj2Desc: 'Huzurevi sakinlerine yönelik dijital okuryazarlık eğitimi ve kullanıcı dostu arayüz rehberi tasarımı.',
      githubLink: 'GitHub\'da İncele',
      articlesTitle: 'Yazılarım & Makalelerim',
      art1Title: 'Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı',
      art1Date: 'Eylül 2026 • 4 dk okuma',
      art2Title: 'Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi',
      art2Date: 'Ağustos 2026 • 6 dk okuma',
      footer: '© 2026 Bengisu Küçük. Next.js & Tailwind CSS ile geliştirildi. Vercel üzerinde barındırılmaktadır.',
    },
    en: {
      navAbout: 'About',
      navProjects: 'Projects',
      navArticles: 'Articles',
      badge: 'Big Data Analytics Student & UI/UX Enthusiast',
      heroGreeting: 'Hello, I am',
      heroTitle1: 'Bengisu Küçük',
      heroTitle2: 'Combining Data Analytics and',
      heroTitle3: 'Interface Design.',
      heroDesc: 'I study Big Data Analytics at Manisa Celal Bayar University. I develop UI/UX-focused modern web interfaces and work on data visualization projects.',
      projectsTitle: 'Featured Projects',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Statistical machine learning model classifying road segments using London traffic data.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Digital Literacy Support Project',
      proj2Desc: 'Digital literacy training and user-friendly interface guide design for nursing home residents.',
      githubLink: 'View on GitHub',
      articlesTitle: 'My Articles & Essays',
      art1Title: 'Typography and Hierarchy Logic in User Experience (UX)',
      art1Date: 'September 2026 • 4 min read',
      art2Title: 'The Impact of Visualization in Big Data Analytics on Interface Design',
      art2Date: 'August 2026 • 6 min read',
      footer: '© 2026 Bengisu Küçük. Built with Next.js & Tailwind CSS. Hosted on Vercel.',
    },
    kr: {
      navAbout: '소개',
      navProjects: '프로젝트',
      navArticles: '아티클',
      badge: '빅데이터 분석학 전공 & UI/UX 디자이너',
      heroGreeting: '안녕하세요, 저는',
      heroTitle1: '벵기수 퀴취크입니다.',
      heroTitle2: '데이터 분석과 인터페이스 디자인의',
      heroTitle3: '조화를 만들어갑니다.',
      heroDesc: '마니사 제랄 바야르 대학교에서 빅데이터 분석학을 전공하고 있습니다. 사용자 경험(UI/UX) 중심의 웹 인터페이스를 개발합니다.',
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
      badge: 'Big Data Analytics Studentin & UI/UX Enthusiastin',
      heroGreeting: 'Hallo, ich bin',
      heroTitle1: 'Bengisu Küçük',
      heroTitle2: 'Verbindung von Datenanalyse und',
      heroTitle3: 'Interface-Design.',
      heroDesc: 'Ich studiere Big Data Analytics an der Manisa Celal Bayar Universität. Ich entwickle benutzerfreundliche Webseiten.',
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
      badge: 'Estudiante de Análisis de Big Data y Entusiasta de UI/UX',
      heroGreeting: 'Hola, soy',
      heroTitle1: 'Bengisu Küçük',
      heroTitle2: 'Combinando Análisis de Datos y',
      heroTitle3: 'Diseño de Interfaz.',
      heroDesc: 'Estudio Análisis de Big Data en la Universidad Manisa Celal Bayar. Desarrollo interfaces web enfocadas en la experiencia del usuario (UI/UX).',
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
      
      {/* BOZULMAYAN SABİT SONBAHAR HANOK ARKA PLANI & KARARTMA LAYER */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20 transition-all duration-700 scale-105"
        style={{ backgroundImage: `url('/arkaplan.jpg')` }}
      />
      {/* Okunabilirlik için Şık Sıcak Karartma (Overlay) */}
      <div className="fixed inset-0 bg-stone-950/75 backdrop-blur-[2px] -z-10" />

      <main className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-14">
        
        {/* 1. ÜST MENÜ & ÇOKLU DİL SEÇİCİ */}
        <header className="flex justify-between items-center py-4 border-b border-amber-500/20 backdrop-blur-md">
          <span className="font-semibold text-lg tracking-wide text-amber-200">
            Bengisu Küçük
          </span>
          
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm text-stone-300">
              <a href="#hakkimda" className="hover:text-amber-300 transition-colors">{t.navAbout}</a>
              <a href="#projeler" className="hover:text-amber-300 transition-colors">{t.navProjects}</a>
              <a href="#yazilarim" className="hover:text-amber-300 transition-colors">{t.navArticles}</a>
            </nav>

            {/* DİL SEÇİCİ */}
            <div className="flex items-center gap-1.5 bg-stone-900/80 border border-amber-500/30 rounded-xl px-3 py-1 text-xs text-amber-200 backdrop-blur-md">
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

        {/* 2. GİRİŞ (HERO) BÖLÜMÜ - DENGELİ KİŞİSEL KART DÜZENİ */}
        <section id="hakkimda" className="py-4">
          <motion.div 
            key={lang}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-stone-900/40 border border-amber-500/20 p-8 rounded-3xl backdrop-blur-md shadow-2xl"
          >
            {/* PROFİL FOTOĞRAFI KARTI */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative w-40 h-48 md:w-44 md:h-52 rounded-2xl overflow-hidden bg-stone-900 border border-amber-500/30">
                <img 
                  src="/profil.jpg" 
                  alt="Bengisu Küçük" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // png veya jpeg olma ihtimaline karşı yedek kontrol
                    e.currentTarget.src = "/profil.png";
                  }}
                />
              </div>
            </div>

            {/* TANITIM METİNLERİ */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 self-center md:self-start px-3.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t.badge}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-relaxed text-amber-50">
                {t.heroGreeting} <span className="text-amber-400">{t.heroTitle1}</span>. <br />
                <span className="text-stone-300 font-normal">{t.heroTitle2}</span> {t.heroTitle3}
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base max-w-xl leading-relaxed font-light">
                {t.heroDesc}
              </p>

              {/* SOSYAL MEDYA BUTONLARI */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 backdrop-blur-sm"
                >
                  LinkedIn ↗
                </a>
                
                <a 
                  href="https://github.com/odin02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 backdrop-blur-sm"
                >
                  GitHub ↗
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 backdrop-blur-sm"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. PROJELERİM BÖLÜMÜ */}
        <section id="projeler" className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-amber-100">
            <Code className="text-amber-400" /> {t.projectsTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Proje 1 */}
            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group">
              <div>
                <span className="text-xs text-amber-400 font-mono">{t.proj1Tag}</span>
                <h3 className="font-bold text-lg mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj1Title}</h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed font-light">
                  {t.proj1Desc}
                </p>
              </div>
              <a 
                href="https://github.com/odin02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Proje 2 */}
            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group">
              <div>
                <span className="text-xs text-amber-400 font-mono">{t.proj2Tag}</span>
                <h3 className="font-bold text-lg mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj2Title}</h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed font-light">
                  {t.proj2Desc}
                </p>
              </div>
              <a 
                href="https://github.com/odin02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. YAZILARIM BÖLÜMÜ */}
        <section id="yazilarim" className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-amber-100">
            <BookOpen className="text-amber-400" /> {t.articlesTitle}
          </h2>

          <div className="flex flex-col gap-4">
            <Link href="/yazilar/ux-tipografi">
              <article className="p-5 bg-stone-900/40 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/70 hover:border-amber-400/50 transition-all cursor-pointer backdrop-blur-md">
                <div>
                  <h3 className="font-semibold text-amber-100">{t.art1Title}</h3>
                  <p className="text-xs text-stone-400 mt-1">{t.art1Date}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-amber-400/70" />
              </article>
            </Link>

            <article className="p-5 bg-stone-900/40 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/70 hover:border-amber-400/50 transition-all cursor-pointer backdrop-blur-md">
              <div>
                <h3 className="font-semibold text-amber-100">{t.art2Title}</h3>
                <p className="text-xs text-stone-400 mt-1">{t.art2Date}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-amber-400/70" />
            </article>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-amber-500/20 text-center text-xs text-stone-400">
          {t.footer}
        </footer>

      </main>
    </div>
  );
}