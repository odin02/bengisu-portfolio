'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Code, Globe, Sparkles, ChevronDown, ArrowUp, Mail, Send } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es';

export default function Home() {
  const [lang, setLang] = useState<Language>('tr');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:bengisukucuk02@gmail.com?subject=Portfolyo Mesajı - ${formData.name}&body=Gönderen: ${formData.name} (${formData.email})%0D%0A%0D%0AMesaj:%0D%0A${formData.message}`;
    window.location.href = mailtoUrl;
  };

  const content: Record<Language, any> = {
    tr: {
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navArticles: 'Yazılarım',
      navContact: 'İletişim',
      badge: 'Büyük Veri Analitiği & UI/UX Tasarım',
      name: 'Bengisu Küçük',
      role: 'Veri Analisti & Arayüz Geliştirici',
      bio: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analitiği öğrencisiyim. Kullanıcı odaklı dijital deneyimler tasarlıyor, veri görselleştirme ve analitik modeller üzerine çalışıyorum.',
      scrollDown: 'Keşfetmek İçin Aşağı Kaydır',
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
      contactTitle: 'İletişim',
      contactSub: 'Bir projen mi var? Birlikte çalışmak ister misin? Bana ulaş!',
      formName: 'ADINIZ',
      formEmail: 'E-POSTA',
      formMsg: 'MESAJINIZ',
      formBtn: 'Mesaj Gönder',
      footer: '© 2026 Bengisu Küçük. Next.js & Tailwind CSS ile geliştirildi.',
    },
    en: {
      navAbout: 'About',
      navProjects: 'Projects',
      navArticles: 'Articles',
      navContact: 'Contact',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Data Analyst & Interface Developer',
      bio: 'Big Data Analytics student at Manisa Celal Bayar University. Crafting user-centric digital experiences and developing data visualization models.',
      scrollDown: 'Scroll Down to Explore',
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
      contactTitle: 'Contact',
      contactSub: 'Have a project in mind? Want to collaborate? Reach out to me!',
      formName: 'YOUR NAME',
      formEmail: 'YOUR EMAIL',
      formMsg: 'YOUR MESSAGE',
      formBtn: 'Send Message',
      footer: '© 2026 Bengisu Küçük. Built with Next.js & Tailwind CSS.',
    },
    kr: {
      navAbout: '소개',
      navProjects: '프로젝트',
      navArticles: '아티클',
      navContact: '연락처',
      badge: '빅데이터 분석학 & UI/UX 디자인',
      name: '벵기수 퀴취크',
      role: '데이터 분석가 & UI/UX 개발자',
      bio: '마니사 제랄 바야르 대학교 빅데이터 분석학 전공. 사용자 중심의 디지털 경험을 설계하고 데이터 시각화 모델을 개발합니다.',
      scrollDown: '아래로 스크롤하여 탐색',
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
      contactTitle: '연락처',
      contactSub: '함께 일하고 싶으신가요? 편하게 메시지를 남겨주세요!',
      formName: '이름',
      formEmail: '이메일',
      formMsg: '메시지',
      formBtn: '메시지 보내기',
      footer: '© 2026 Bengisu Küçük. Next.js 및 Tailwind CSS로 제작되었습니다.',
    },
    de: {
      navAbout: 'Über mich',
      navProjects: 'Projekte',
      navArticles: 'Artikel',
      navContact: 'Kontakt',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Datenanalystin & Frontend-Entwicklerin',
      bio: 'Studentin der Big Data Analytics an der Universität Manisa Celal Bayar. Entwicklung benutzerzentrierter digitaler Erlebnisse und Datenvisualisierungsmodelle.',
      scrollDown: 'Nach unten scrollen',
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
      contactTitle: 'Kontakt',
      contactSub: 'Haben Sie ein Projekt im Sinn? Kontaktieren Sie mich gerne!',
      formName: 'NAME',
      formEmail: 'E-MAIL',
      formMsg: 'NACHRICHT',
      formBtn: 'Nachricht Senden',
      footer: '© 2026 Bengisu Küçük. Erstellt mit Next.js & Tailwind CSS.',
    },
    es: {
      navAbout: 'Sobre mí',
      navProjects: 'Proyectos',
      navArticles: 'Artículos',
      navContact: 'Contacto',
      badge: 'Análisis de Big Data y Diseño UI/UX',
      name: 'Bengisu Küçük',
      role: 'Analista de Datos y Desarrolladora UI',
      bio: 'Estudiante de Análisis de Big Data en la Universidad Manisa Celal Bayar. Diseño experiencias digitales enfocadas en el usuario y modelos de visualización de datos.',
      scrollDown: 'Desplazarse hacia abajo',
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
      contactTitle: 'Contacto',
      contactSub: '¿Tienes un proyecto en mente? ¡Contáctame!',
      formName: 'NOMBRE',
      formEmail: 'CORREO ELECTRÓNICO',
      formMsg: 'MENSAJE',
      formBtn: 'Enviar Mensaje',
      footer: '© 2026 Bengisu Küçük. Creado con Next.js y Tailwind CSS.',
    },
  };

  const t = content[lang];

  // Sabit Yapraklar Listesi
  const leafData = [
    { icon: '🍁', size: 'text-2xl', left: '5%', duration: 12, delay: 0 },
    { icon: '🍂', size: 'text-3xl', left: '15%', duration: 16, delay: 2 },
    { icon: '🍁', size: 'text-xl', left: '25%', duration: 10, delay: 5 },
    { icon: '🍂', size: 'text-4xl', left: '38%', duration: 18, delay: 1 },
    { icon: '🍁', size: 'text-2xl', left: '48%', duration: 14, delay: 4 },
    { icon: '🍂', size: 'text-lg', left: '58%', duration: 11, delay: 6 },
    { icon: '🍁', size: 'text-3xl', left: '68%', duration: 15, delay: 2 },
    { icon: '🍂', size: 'text-2xl', left: '78%', duration: 13, delay: 0 },
    { icon: '🍁', size: 'text-4xl', left: '88%', duration: 17, delay: 3 },
    { icon: '🍂', size: 'text-xl', left: '95%', duration: 12, delay: 7 },
  ];

  // Sabit Altın/Beyaz Pırıltı Listesi
  const sparkData = [
    { icon: '✨', left: '10%', top: '20%', duration: 4, delay: 0 },
    { icon: '⭐', left: '22%', top: '65%', duration: 3, delay: 1 },
    { icon: '✨', left: '35%', top: '40%', duration: 5, delay: 2 },
    { icon: '⭐', left: '55%', top: '15%', duration: 4, delay: 0.5 },
    { icon: '✨', left: '72%', top: '75%', duration: 3.5, delay: 1.5 },
    { icon: '⭐', left: '85%', top: '30%', duration: 4.5, delay: 2.5 },
    { icon: '✨', left: '92%', top: '80%', duration: 3, delay: 0.8 },
  ];

  return (
    <div className="relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* BOZULMAYAN SABİT ARKA PLAN (`arkaplan.png`) */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105"
        style={{ backgroundImage: `url('/arkaplan.png')` }}
      />
      
      {/* Sıcak Karartma Overlay */}
      <div className="fixed inset-0 bg-stone-950/75 backdrop-blur-[1px] -z-20" />

      {/* DÜŞEN YAPRAKLAR VE ALTIN PIRILTILAR EFEKTİ */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden w-full h-full">
          {/* Düşen Yapraklar */}
          {leafData.map((leaf, i) => (
            <motion.div
              key={`leaf-${i}`}
              initial={{ y: -60, opacity: 0, rotate: 0 }}
              animate={{
                y: ['0vh', '108vh'],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
                x: [-10, 20, -10],
              }}
              transition={{
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'linear',
              }}
              style={{ left: leaf.left }}
              className={`absolute ${leaf.size} drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
            >
              {leaf.icon}
            </motion.div>
          ))}

          {/* Altın Sarısı Pırıltılar */}
          {sparkData.map((spark, i) => (
            <motion.div
              key={`spark-${i}`}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: spark.duration,
                repeat: Infinity,
                delay: spark.delay,
                ease: 'easeInOut',
              }}
              style={{ left: spark.left, top: spark.top }}
              className="absolute text-amber-300 text-lg sm:text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]"
            >
              {spark.icon}
            </motion.div>
          ))}
        </div>
      )}

      <main className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-16">
        
        {/* 1. ÜST MENÜ & ÇOKLU DİL SEÇİCİ */}
        <header className="flex justify-between items-center py-4 border-b border-amber-500/20 backdrop-blur-md sticky top-0 z-40 bg-stone-950/40 px-4 rounded-2xl shadow-lg">
          <span className="font-semibold text-base tracking-wide text-amber-200">
            Bengisu Küçük
          </span>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="flex gap-4 sm:gap-6 text-xs text-stone-300">
              <button onClick={() => scrollToSection('hakkimda')} className="hover:text-amber-300 transition-colors">{t.navAbout}</button>
              <button onClick={() => scrollToSection('projeler')} className="hover:text-amber-300 transition-colors">{t.navProjects}</button>
              <button onClick={() => scrollToSection('yazilarim')} className="hover:text-amber-300 transition-colors">{t.navArticles}</button>
              <button onClick={() => scrollToSection('iletisim')} className="hover:text-amber-300 transition-colors">{t.navContact}</button>
            </nav>

            {/* DİL SEÇİCİ */}
            <div className="flex items-center gap-1 bg-stone-900/80 border border-amber-500/30 rounded-lg px-2 py-1 text-xs text-amber-200 backdrop-blur-md">
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
              </select>
            </div>
          </div>
        </header>

        {/* 2. GİRİŞ (HERO) - TAM EKRANI DOLDURAN VE DOLGUNLAŞTIRILMIŞ AÇILIŞ */}
        <section id="hakkimda" className="min-h-[82vh] flex flex-col items-center justify-between py-6">
          <div className="my-auto w-full">
            <motion.div 
              key={lang}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-stone-900/65 border border-amber-500/30 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              {/* Kart İçi Işıltı */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* PROFİL FOTOĞRAFI (`profil.png`) */}
              <div className="relative shrink-0 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-stone-900 border border-amber-500/40 shadow-2xl">
                  <img 
                    src="/profil.png" 
                    alt="Bengisu Küçük" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* TANITIM METİNLERİ */}
              <div className="flex flex-col gap-4 text-center sm:text-left my-auto">
                <div className="inline-flex items-center gap-2 self-center sm:self-start px-4 py-1.5 text-xs rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium shadow-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
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

                {/* SOSYAL MEDYA BAĞLANTILARI */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-900/80 border border-amber-500/25 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 shadow-sm"
                  >
                    LinkedIn ↗
                  </a>
                  
                  <a 
                    href="https://github.com/odin02" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-900/80 border border-amber-500/25 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 shadow-sm"
                  >
                    GitHub ↗
                  </a>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-900/80 border border-amber-500/25 hover:border-amber-400/60 hover:text-amber-300 rounded-xl transition-all text-xs text-stone-200 shadow-sm"
                  >
                    Instagram ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* AŞAĞI KAYDIR BUTONU */}
          <motion.button 
            onClick={() => scrollToSection('projeler')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 flex flex-col items-center gap-2 text-xs text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group"
          >
            <span className="font-light tracking-wide">{t.scrollDown}</span>
            <div className="w-8 h-8 rounded-full border border-amber-500/40 flex items-center justify-center group-hover:border-amber-400 bg-stone-950/50 backdrop-blur-sm shadow-lg">
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </div>
          </motion.button>
        </section>

        {/* 3. PROJELERİM BÖLÜMÜ */}
        <section id="projeler" className="flex flex-col gap-6 pt-8">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
            <Code className="w-5 h-5 text-amber-400" /> {t.projectsTitle}
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Proje 1 */}
            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg">
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
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Proje 2 */}
            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg">
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
                className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium"
              >
                {t.githubLink} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. YAZILARIM BÖLÜMÜ */}
        <section id="yazilarim" className="flex flex-col gap-6 pt-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
            <BookOpen className="w-5 h-5 text-amber-400" /> {t.articlesTitle}
          </h2>

          <div className="flex flex-col gap-4">
            <Link href="/yazilar/ux-tipografi">
              <article className="p-5 bg-stone-900/50 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/70 hover:border-amber-400/50 transition-all cursor-pointer backdrop-blur-md shadow-md">
                <div>
                  <h3 className="font-medium text-sm sm:text-base text-amber-100">{t.art1Title}</h3>
                  <p className="text-[11px] text-stone-400 mt-1">{t.art1Date}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
              </article>
            </Link>

            <article className="p-5 bg-stone-900/50 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/70 hover:border-amber-400/50 transition-all cursor-pointer backdrop-blur-md shadow-md">
              <div>
                <h3 className="font-medium text-sm sm:text-base text-amber-100">{t.art2Title}</h3>
                <p className="text-[11px] text-stone-400 mt-1">{t.art2Date}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
            </article>
          </div>
        </section>

        {/* 5. İLETİŞİM BÖLÜMÜ (EMAIL FORM) */}
        <section id="iletisim" className="flex flex-col gap-6 pt-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
            <Mail className="w-5 h-5 text-amber-400" /> {t.contactTitle}
          </h2>

          <div className="p-6 md:p-8 bg-stone-900/60 border border-amber-500/25 rounded-3xl backdrop-blur-md shadow-xl flex flex-col gap-6">
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
              {t.contactSub}
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formName}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formEmail}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formMsg}</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazabilirsiniz..."
                />
              </div>

              <button 
                type="submit"
                className="mt-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                {t.formBtn}
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-6 border-t border-amber-500/20 text-center text-xs text-stone-400">
          {t.footer}
        </footer>

      </main>

      {/* YUKARI ÇIK BUTONU */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}

    </div>
  );
}