'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Code, Globe } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es';

export default function Home() {
  const [lang, setLang] = useState<Language>('tr');

  const content: Record<Language, any> = {
    tr: {
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navArticles: 'Yazılarım',
      badge: 'Büyük Veri Analitiği Öğrencisi & UI/UX Meraklısı',
      heroTitle1: 'Merhaba, Ben Bengisu Küçük.',
      heroTitle2: 'Veri ve Arayüz Tasarımını',
      heroTitle3: 'Bir Araya Getiriyorum.',
      heroDesc: 'Manisa Celal Bayar Üniversitesi\'nde Büyük Veri Analitiği okuyorum. Kullanıcı deneyimi (UI/UX) odaklı web arayüzleri geliştiriyor, veri analizi ve görselleştirme projeleri üzerinde çalışıyorum.',
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
      heroTitle1: 'Hello, I am Bengisu Küçük.',
      heroTitle2: 'Combining Data and',
      heroTitle3: 'Interface Design.',
      heroDesc: 'I study Big Data Analytics at Manisa Celal Bayar University. I develop user experience (UI/UX) focused web interfaces and work on data analysis and visualization projects.',
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
      heroTitle1: '안녕하세요, 벵기수 퀴취크입니다.',
      heroTitle2: '데이터와 인터페이스 디자인의',
      heroTitle3: '결합을 만들어갑니다.',
      heroDesc: '마니사 제랄 바야르 대학교에서 빅데이터 분석학을 전공하고 있습니다. 사용자 경험(UI/UX) 중심의 웹 인터페이스를 개발하고 데이터 분석 및 시각화 프로젝트를 진행합니다.',
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
      heroTitle1: 'Hallo, ich bin Bengisu Küçük.',
      heroTitle2: 'Verbindung von Daten und',
      heroTitle3: 'Interface-Design.',
      heroDesc: 'Ich studiere Big Data Analytics an der Manisa Celal Bayar Universität. Ich entwickle benutzerfreundliche Webseiten (UI/UX) und arbeite an Datenanalyseprojekten.',
      projectsTitle: 'Ausgewählte Projekte',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Verkehrsdatenanalyse',
      proj1Desc: 'Statistisches Modell für maschinelles Lernen zur Klassifizierung von Straßenabschnitten anhand von Londoner Verkehrsdaten.',
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
      heroTitle1: 'Hola, soy Bengisu Küçük.',
      heroTitle2: 'Combinando Datos y',
      heroTitle3: 'Diseño de Interfaz.',
      heroDesc: 'Estudio Análisis de Big Data en la Universidad Manisa Celal Bayar. Desarrollo interfaces web enfocadas en la experiencia del usuario (UI/UX) y proyectos de visualización de datos.',
      projectsTitle: 'Proyectos Destacados',
      proj1Tag: 'Python • Aprendizaje Automático',
      proj1Title: 'Análisis de Tráfico de Londres',
      proj1Desc: 'Modelo estadístico de aprendizaje automático para clasificar tramos de carretera utilizando datos de tráfico de Londres.',
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
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16 font-sans">
      
      {/* 1. ÜST MENÜ & ÇOKLU DİL SEÇİCİ */}
      <header className="flex justify-between items-center py-4 border-b border-slate-800">
        <span className="font-bold text-xl tracking-tight text-indigo-400">bengisu.dev</span>
        
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#hakkimda" className="hover:text-white transition-colors">{t.navAbout}</a>
            <a href="#projeler" className="hover:text-white transition-colors">{t.navProjects}</a>
            <a href="#yazilarim" className="hover:text-white transition-colors">{t.navArticles}</a>
          </nav>

          {/* DİL SEÇİM AÇILIR MENÜSÜ */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-indigo-300">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-indigo-300 focus:outline-none cursor-pointer"
            >
              <option value="tr" className="bg-slate-900 text-white">TR (Türkçe)</option>
              <option value="en" className="bg-slate-900 text-white">EN (English)</option>
              <option value="kr" className="bg-slate-900 text-white">KR (한국어)</option>
              <option value="de" className="bg-slate-900 text-white">DE (Deutsch)</option>
              <option value="es" className="bg-slate-900 text-white">ES (Español)</option>
            </select>
          </div>
        </div>
      </header>

      {/* 2. GİRİŞ (HERO) BÖLÜMÜ */}
      <section id="hakkimda" className="flex flex-col gap-6 py-6">
        <motion.div 
          key={lang}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-block w-fit px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
            {t.badge}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-100">
            {t.heroTitle1} <br />
            <span className="text-indigo-400">{t.heroTitle2}</span> {t.heroTitle3}
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {t.heroDesc}
          </p>

          {/* Sosyal Medya Bağlantıları */}
          <div className="flex gap-4 mt-2">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 hover:text-indigo-400 transition-all text-sm text-slate-300"
            >
              LinkedIn ↗
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 hover:text-indigo-400 transition-all text-sm text-slate-300"
            >
              GitHub ↗
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 hover:text-indigo-400 transition-all text-sm text-slate-300"
            >
              Instagram ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJELERİM BÖLÜMÜ */}
      <section id="projeler" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-100">
          <Code className="text-indigo-400" /> {t.projectsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Proje 1 */}
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
            <div>
              <span className="text-xs text-indigo-400 font-mono">{t.proj1Tag}</span>
              <h3 className="font-bold text-lg mt-1 text-slate-100 group-hover:text-indigo-300 transition-colors">{t.proj1Title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {t.proj1Desc}
              </p>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-indigo-400 mt-6 hover:underline font-medium"
            >
              {t.githubLink} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Proje 2 */}
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
            <div>
              <span className="text-xs text-indigo-400 font-mono">{t.proj2Tag}</span>
              <h3 className="font-bold text-lg mt-1 text-slate-100 group-hover:text-indigo-300 transition-colors">{t.proj2Title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {t.proj2Desc}
              </p>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-indigo-400 mt-6 hover:underline font-medium"
            >
              {t.githubLink} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. YAZILARIM BÖLÜMÜ */}
      <section id="yazilarim" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-100">
          <BookOpen className="text-indigo-400" /> {t.articlesTitle}
        </h2>

        <div className="flex flex-col gap-4">
          <Link href="/yazilar/ux-tipografi">
            <article className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl flex justify-between items-center hover:bg-slate-900/80 hover:border-indigo-500/50 transition-all cursor-pointer">
              <div>
                <h3 className="font-semibold text-slate-200">{t.art1Title}</h3>
                <p className="text-xs text-slate-500 mt-1">{t.art1Date}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500" />
            </article>
          </Link>

          <article className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl flex justify-between items-center hover:bg-slate-900/80 hover:border-slate-700 transition-all cursor-pointer">
            <div>
              <h3 className="font-semibold text-slate-200">{t.art2Title}</h3>
              <p className="text-xs text-slate-500 mt-1">{t.art2Date}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500" />
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        {t.footer}
      </footer>

    </main>
  );
}