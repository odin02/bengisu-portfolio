'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, Code, Globe, Sparkles, ChevronDown, ArrowUp, Mail, Send, Sun, Snowflake, Trees, Flower2 } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function Home() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('autumn');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    setMounted(true);
    // Otomatik mevsim tespiti (Şu an Ekim = Sonbahar, aylara göre otomatik ayarlanır)
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) setSeason('spring');
    else if (month >= 5 && month <= 7) setSeason('summer');
    else if (month >= 8 && month <= 10) setSeason('autumn');
    else setSeason('winter');

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

  // Mevsime göre görseller ve ikonlar
  const seasonConfig = {
    spring: {
      bg: '/ilkbahararkaplan.png',
      profile: '/ilkbaharprofil.png',
      icon: '🌸',
      accentColor: 'text-pink-300',
      borderAccent: 'border-pink-500/30',
      particles: ['🌸', '🍃', '✨', '🌸'],
    },
    summer: {
      bg: '/yazarkaplan.png',
      profile: '/yazprofil.png',
      icon: '☀️',
      accentColor: 'text-amber-300',
      borderAccent: 'border-amber-500/30',
      particles: ['☀️', '✨', '⭐', '🌊'],
    },
    autumn: {
      bg: '/sonbahararkaplan.png',
      profile: '/sonbaharprofil.png',
      icon: '🍁',
      accentColor: 'text-amber-300',
      borderAccent: 'border-amber-500/30',
      particles: ['🍁', '🍂', '✨', '⭐'],
    },
    winter: {
      bg: '/kisarkaplan.png',
      profile: '/kisprofil.png',
      icon: '❄️',
      accentColor: 'text-cyan-200',
      borderAccent: 'border-cyan-500/30',
      particles: ['❄️', '🌨️', '✨', '⭐'],
    },
  };

  const currentSeason = seasonConfig[season];

  const content: Record<Language, any> = {
    tr: {
      navAbout: 'Hakkımda',
      navProjects: 'Projeler',
      navArticles: 'Yazılarım',
      navAssignments: 'Ödevler & Lab',
      navContact: 'İletişim',
      badge: 'Büyük Veri Analitiği & UI/UX Tasarım',
      name: 'Bengisu Küçük',
      role: 'Veri Analisti & Arayüz Geliştirici',
      bio: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analitiği 2. sınıf öğrencisiyim. Veri analizi ve makine öğrenmesi süreçlerini kullanıcı odaklı arayüz (UI/UX) tasarımıyla buluşturuyor; karmaşık verileri anlaşılır, estetik ve işlevsel dijital deneyimlere dönüştürüyorum.',
      scrollDown: 'Keşfetmek İçin Aşağı Kaydır',
      projectsTitle: 'Öne Çıkan Projeler',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Londra trafik verilerini kullanarak yol segmentlerini sınıflandıran istatistiksel makine öğrenmesi modeli.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Dijital Okuryazarlık Destek Projesi',
      proj2Desc: 'Huzurevi sakinlerine yönelik dijital okuryazarlık eğitimi ve kullanıcı dostu arayüz rehberi tasarımı.',
      projectLink: 'LinkedIn\'de İncele ↗',
      articlesTitle: 'Yazılar & Çalışmalar',
      art1Title: 'Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı',
      art1Date: 'Eylül 2026 • 4 dk okuma',
      art2Title: 'Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi',
      art2Date: 'Ağustos 2026 • 6 dk okuma',
      assignmentsTitle: 'Dönem Ödevleri & Lab Çalışmaları',
      assign1Title: 'Büyük Veri: Bir Veri Setini 5V ile Sınıflandır',
      assign1Desc: 'Kaggle veri seti seçimi, 5V (Volume, Velocity, Variety, Veracity, Value) analizi ve araç önerisi raporu.',
      assign2Title: 'Siber Güvenlik & Bilişim Hukuku: Nmap ve Wireshark Lab',
      assign2Desc: 'İzole sanal makine ortamında port tarama, trafik yakalama ve bulgu raporlama uygulaması.',
      viewAssignment: 'Ödev Detayına Git ↗',
      contactTitle: 'İletişim',
      contactSub: 'Bir projeniz mi var ya da birlikte çalışmak mı istersiniz? Bana dilediğiniz zaman ulaşabilirsiniz.',
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
      navAssignments: 'Assignments',
      navContact: 'Contact',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Data Analyst & Interface Developer',
      bio: '2nd-year Big Data Analytics student at Manisa Celal Bayar University. Combining data analysis and machine learning with user-centered UI/UX design.',
      scrollDown: 'Scroll Down to Explore',
      projectsTitle: 'Featured Projects',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Statistical machine learning model classifying road segments using London traffic data.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Digital Literacy Support Project',
      proj2Desc: 'Digital literacy training and user-friendly interface guide design for nursing home residents.',
      projectLink: 'View on LinkedIn ↗',
      articlesTitle: 'Articles & Studies',
      art1Title: 'Typography and Hierarchy Logic in User Experience (UX)',
      art1Date: 'September 2026 • 4 min read',
      art2Title: 'The Impact of Data Visualization on Interface Design',
      art2Date: 'August 2026 • 6 min read',
      assignmentsTitle: 'Assignments & Lab Work',
      assign1Title: 'Big Data: Classify a Dataset with 5V',
      assign1Desc: 'Dataset selection, 5V analysis (Volume, Velocity, Variety, Veracity, Value) and tool recommendation.',
      assign2Title: 'Cyber Security & IT Law: Nmap & Wireshark Lab',
      assign2Desc: 'Port scanning, packet capturing, and incident reporting in an isolated virtual machine lab.',
      viewAssignment: 'View Assignment ↗',
      contactTitle: 'Contact',
      contactSub: 'Have a project or want to collaborate? Feel free to reach out anytime.',
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
      navAssignments: '과제 및 실습',
      navContact: '연락처',
      badge: '빅데이터 분석학 & UI/UX 디자인',
      name: '벵기수 퀴취크',
      role: '데이터 분석가 & UI/UX 개발자',
      bio: '마니사 제랄 바야르 대학교 빅데이터 분석학 2학년. 데이터 분석과 사용자 중심 UI/UX 디자인을 결합합니다.',
      scrollDown: '아래로 스크롤하여 탐색',
      projectsTitle: '주요 프로젝트',
      proj1Tag: 'Python • 머신러닝',
      proj1Title: '런던 교통 데이터 분석 모델',
      proj1Desc: '런던 교통 데이터를 활용한 도로 구간 분류 통계 모델.',
      proj2Tag: 'UI/UX • 사회적 책임',
      proj2Title: '디지털 리터러시 지원 프로젝트',
      proj2Desc: '요양원 입소자를 위한 디지털 리터러시 교육 및 인터페이스 가이드.',
      projectLink: 'LinkedIn에서 보기 ↗',
      articlesTitle: '작성한 아티클',
      art1Title: '사용자 경험(UX) 타이포그래피와 계층 구조',
      art1Date: '2026년 9월 • 4분',
      art2Title: '빅데이터 시각화가 인터페이스 디자인에 미치는 영향',
      art2Date: '2026년 8월 • 6분',
      assignmentsTitle: '과제 및 실습 과제',
      assign1Title: '빅데이터: 5V로 데이터셋 분류',
      assign1Desc: '데이터셋 선정, 5V 분석 및 도구 추천 보고서.',
      assign2Title: '사이버 보안: Nmap 및 Wireshark 실습',
      assign2Desc: '격리된 가상 머신 환경에서의 포트 스캔 및 패킷 캡처 실습.',
      viewAssignment: '과제 보기 ↗',
      contactTitle: '연락처',
      contactSub: '협업이나 문의 사항이 있으시다면 언제든 메시지를 남겨주세요.',
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
      navAssignments: 'Aufgaben',
      navContact: 'Kontakt',
      badge: 'Big Data Analytics & UI/UX Design',
      name: 'Bengisu Küçük',
      role: 'Datenanalystin & Frontend-Entwicklerin',
      bio: 'Studentin im 2. Jahr der Big Data Analytics an der Manisa Celal Bayar Universität.',
      scrollDown: 'Nach unten scrollen',
      projectsTitle: 'Ausgewählte Projekte',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Verkehrsdatenanalyse',
      proj1Desc: 'Statistisches Modell zur Klassifizierung von Straßenabschnitten.',
      proj2Tag: 'UI/UX • Soziale Verantwortung',
      proj2Title: 'Digitale Alphabetisierung Projekt',
      proj2Desc: 'Schulung zur digitalen Alphabetisierung für Seniorenheimbewohner.',
      projectLink: 'Auf LinkedIn ansehen ↗',
      articlesTitle: 'Artikel & Studien',
      art1Title: 'Typografie und Hierarchie in der UX',
      art1Date: 'September 2026 • 4 Min.',
      art2Title: 'Einfluss der Datenvisualisierung auf das Design',
      art2Date: 'August 2026 • 6 Min.',
      assignmentsTitle: 'Aufgaben & Labore',
      assign1Title: 'Big Data: Datensatz mit 5V klassifizieren',
      assign1Desc: 'Auswahl eines Datensatzes, 5V-Analyse und Tool-Empfehlung.',
      assign2Title: 'Cybersicherheit: Nmap & Wireshark Lab',
      assign2Desc: 'Port-Scanning und Paketaufnahme in einer virtuellen Laborumgebung.',
      viewAssignment: 'Aufgabe ansehen ↗',
      contactTitle: 'Kontakt',
      contactSub: 'Haben Sie ein Projekt oder möchten Sie zusammenarbeiten?',
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
      navAssignments: 'Tareas',
      navContact: 'Contacto',
      badge: 'Análisis de Big Data y Diseño UI/UX',
      name: 'Bengisu Küçük',
      role: 'Analista de Datos y Desarrolladora UI',
      bio: 'Estudiante de 2.º año de Análisis de Big Data en la Universidad Manisa Celal Bayar.',
      scrollDown: 'Desplazarse hacia abajo',
      projectsTitle: 'Proyectos Destacados',
      proj1Tag: 'Python • Aprendizaje Automático',
      proj1Title: 'Análisis de Tráfico de Londres',
      proj1Desc: 'Modelo estadístico para clasificar tramos de carretera.',
      proj2Tag: 'UI/UX • Responsabilidad Social',
      proj2Title: 'Proyecto de Alfabetización Digital',
      proj2Desc: 'Capacitación en alfabetización digital para residentes.',
      projectLink: 'Ver en LinkedIn ↗',
      articlesTitle: 'Artículos y Estudios',
      art1Title: 'Tipografía y Jerarquía en UX',
      art1Date: 'Septiembre 2026 • 4 min',
      art2Title: 'Impacto de la Visualización de Datos en el Diseño',
      art2Date: 'Agosto 2026 • 6 min',
      assignmentsTitle: 'Tareas y Laboratorios',
      assign1Title: 'Big Data: Clasificar conjunto de datos con 5V',
      assign1Desc: 'Selección de datos, análisis 5V y recomendación de herramientas.',
      assign2Title: 'Ciberseguridad: Laboratorio Nmap y Wireshark',
      assign2Desc: 'Escaneo de puertos y captura de tráfico en entorno virtual.',
      viewAssignment: 'Ver Tarea ↗',
      contactTitle: 'Contacto',
      contactSub: '¿Tiene algún proyecto o desea colaborar?',
      formName: 'NOMBRE',
      formEmail: 'CORREO ELECTRÓNICO',
      formMsg: 'MENSAJE',
      formBtn: 'Enviar Mensaje',
      footer: '© 2026 Bengisu Küçük. Creado con Next.js y Tailwind CSS.',
    },
    ar: {
      navAbout: 'معلومات عني',
      navProjects: 'المشاريع',
      navArticles: 'المقالات',
      navAssignments: 'الواجبات والمختبرات',
      navContact: 'اتصل بي',
      badge: 'تحليل البيانات الكبيرة وتصميم واجهة المستخدم',
      name: 'بنقيسو كوتشوك',
      role: 'محللة بيانات ومطورة واجهات',
      bio: 'طالبة سنة ثانية في تحليل البيانات الكبيرة بجامعة مانسا جلال بايار. أجمع بين تحليل البيانات وتصميم واجهات المستخدم.',
      scrollDown: 'انزل لأسفل للاستكشاف',
      projectsTitle: 'المشاريع المميزة',
      proj1Tag: 'بايثون • تعلم الآلة',
      proj1Title: 'تحليل بيانات حركة المرور في لندن',
      proj1Desc: 'نموذج إحصائي لتصنيف مقاطع الطرق باستخدام بيانات المرور.',
      proj2Tag: 'واجهة المستخدم • المسؤولية الاجتماعية',
      proj2Title: 'مشروع دعم محو الأمية الرقمية',
      proj2Desc: 'تدريب على محو الأمية الرقمية لكبار السن.',
      projectLink: 'عرض على لينكد إن ↗',
      articlesTitle: 'المقالات والدراسات',
      art1Title: 'منطق الطباعة التسلسلية في تجربة المستخدم',
      art1Date: 'سبتمبر 2026 • 4 دقائق قراءة',
      art2Title: 'تأثير تصور البيانات على تصميم واجهة المستخدم',
      art2Date: 'أغسطس 2026 • 6 دقائق قراءة',
      assignmentsTitle: 'الواجبات وأعمال المختبرات',
      assign1Title: 'البيانات الكبيرة: تصنيف مجموعة بيانات بـ 5V',
      assign1Desc: 'اختيار مجموعة بيانات وتحليل 5V.',
      assign2Title: 'الأمن السيبراني: مختبر Nmap و Wireshark',
      assign2Desc: 'فحص المنافذ التقنية والتقاط الحزم في بيئة افتراضية.',
      viewAssignment: 'عرض الواجب ↗',
      contactTitle: 'اتصل بي',
      contactSub: 'هل لديك مشروع أو ترغب في التعاون؟ تواصل معي في أي وقت.',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formMsg: 'رسالتك',
      formBtn: 'إرسال الرسالة',
      footer: '© 2026 بنقيسو كوتشوك. تم البناء باستخدام Next.js و Tailwind CSS.',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30 overflow-x-hidden pt-20 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {/* MEVSİME GÖRE DİNAMİK ARKA PLAN */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000"
        style={{ backgroundImage: `url('${currentSeason.bg}')` }}
      />
      
      <div className="fixed inset-0 bg-stone-950/75 backdrop-blur-[1px] -z-20" />

      {/* MEVSİME ÖZEL UÇUŞAN ANİMASYONLAR (KİRAZ ÇİÇEĞİ / YAPRAK / KAR / IŞIK) */}
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

      {/* FIXED HEADER (ÜST MENÜ + MEVSİM DEĞİŞTİRME BUTONU + DİL SEÇİCİ) */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-stone-950/85 border-b border-amber-500/20 shadow-2xl">
        <header className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-base tracking-wide text-amber-200 flex items-center gap-2">
            <span>{currentSeason.icon}</span> Bengisu Küçük
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="hidden md:flex gap-5 text-xs text-stone-300">
              <button onClick={() => scrollToSection('hakkimda')} className="hover:text-amber-300 transition-colors">{t.navAbout}</button>
              <button onClick={() => scrollToSection('projeler')} className="hover:text-amber-300 transition-colors">{t.navProjects}</button>
              <button onClick={() => scrollToSection('yazilarim')} className="hover:text-amber-300 transition-colors">{t.navArticles}</button>
              <button onClick={() => scrollToSection('odevler')} className="hover:text-amber-300 transition-colors">{t.navAssignments}</button>
              <button onClick={() => scrollToSection('iletisim')} className="hover:text-amber-300 transition-colors">{t.navContact}</button>
            </nav>

            {/* MEVSİM DEĞİŞTİRME BUTONU */}
            <div className="flex items-center bg-stone-900/90 border border-amber-500/30 rounded-xl p-1 gap-1">
              <button onClick={() => setSeason('spring')} title="İlkbahar" className={`p-1.5 rounded-lg text-xs ${season === 'spring' ? 'bg-pink-500/30 text-pink-300' : 'text-stone-400'}`}>🌸</button>
              <button onClick={() => setSeason('summer')} title="Yaz" className={`p-1.5 rounded-lg text-xs ${season === 'summer' ? 'bg-amber-500/30 text-amber-300' : 'text-stone-400'}`}>☀️</button>
              <button onClick={() => setSeason('autumn')} title="Sonbahar" className={`p-1.5 rounded-lg text-xs ${season === 'autumn' ? 'bg-orange-500/30 text-orange-300' : 'text-stone-400'}`}>🍁</button>
              <button onClick={() => setSeason('winter')} title="Kış" className={`p-1.5 rounded-lg text-xs ${season === 'winter' ? 'bg-cyan-500/30 text-cyan-300' : 'text-stone-400'}`}>❄️</button>
            </div>

            {/* DİL SEÇİCİ (ARAPÇA DAHİL) */}
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

      <main className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-16">
        
        {/* HERO */}
        <section id="hakkimda" className="min-h-[78vh] flex flex-col items-center justify-between py-4">
          <div className="my-auto w-full">
            <motion.div 
              key={season + lang}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-stone-900/65 border border-amber-500/30 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden"
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

                {/* DOĞRU SOSYAL MEDYA LİNKLERİ (KENDİ HESAPLARIN) */}
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
          </div>

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

        {/* ÖNE ÇIKAN PROJELER (BAŞKA SAYFADA AÇILMASI İÇİN LİNK VEYA BÖLÜM) */}
        <section id="projeler" className="flex flex-col gap-6 pt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
              <Code className="w-5 h-5 text-amber-400" /> {t.projectsTitle}
            </h2>
            <Link href="/projeler" className="text-xs text-amber-400 hover:underline flex items-center gap-1">
              Tümünü Gör ↗
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">{t.proj1Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj1Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.proj1Desc}</p>
              </div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium">
                {t.projectLink}
              </a>
            </div>

            <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">{t.proj2Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.proj2Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.proj2Desc}</p>
              </div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 hover:underline font-medium">
                {t.projectLink}
              </a>
            </div>
          </div>
        </section>

        {/* YAZILARIM */}
        <section id="yazilarim" className="flex flex-col gap-6 pt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
              <BookOpen className="w-5 h-5 text-amber-400" /> {t.articlesTitle}
            </h2>
            <Link href="/yazilar" className="text-xs text-amber-400 hover:underline flex items-center gap-1">
              Tüm Yazılar ↗
            </Link>
          </div>

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

            <Link href="/yazilar/veri-gorsellestirme">
              <article className="p-5 bg-stone-900/50 border border-amber-500/20 rounded-xl flex justify-between items-center hover:bg-stone-900/70 hover:border-amber-400/50 transition-all cursor-pointer backdrop-blur-md shadow-md">
                <div>
                  <h3 className="font-medium text-sm sm:text-base text-amber-100">{t.art2Title}</h3>
                  <p className="text-[11px] text-stone-400 mt-1">{t.art2Date}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
              </article>
            </Link>
          </div>
        </section>

        {/* HOCANIN İSTEDİĞİ 2 ÖDEV / LAB BÖLÜMÜ */}
        <section id="odevler" className="flex flex-col gap-6 pt-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
            <Sparkles className="w-5 h-5 text-amber-400" /> {t.assignmentsTitle}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/odevler/buyuk-veri-5v">
              <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg h-full cursor-pointer">
                <div>
                  <span className="text-[11px] text-amber-400 font-mono">Büyük Veri Analitiği • Lab 2</span>
                  <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.assign1Title}</h3>
                  <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.assign1Desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 font-medium">
                  {t.viewAssignment}
                </span>
              </div>
            </Link>

            <Link href="/odevler/siber-guvenlik-lab">
              <div className="p-6 bg-stone-900/50 border border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md group shadow-lg h-full cursor-pointer">
                <div>
                  <span className="text-[11px] text-amber-400 font-mono">Siber Güvenlik & Hukuk • Lab 1</span>
                  <h3 className="font-semibold text-base mt-1 text-amber-100 group-hover:text-amber-300 transition-colors">{t.assign2Title}</h3>
                  <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.assign2Desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 font-medium">
                  {t.viewAssignment}
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="flex flex-col gap-6 pt-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-100">
            <Mail className="w-5 h-5 text-amber-400" /> {t.contactTitle}
          </h2>

          <div className="p-6 md:p-8 bg-stone-900/60 border border-amber-500/25 rounded-3xl backdrop-blur-md shadow-xl flex flex-col gap-6">
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">{t.contactSub}</p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formName}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors" placeholder="Adınız Soyadınız" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formEmail}</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors" placeholder="ornek@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formMsg}</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors resize-none" placeholder="Mesajınızı buraya yazabilirsiniz..." />
              </div>
              <button type="submit" className="mt-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer">
                <Send className="w-3.5 h-3.5" /> {t.formBtn}
              </button>
            </form>
          </div>
        </section>

        <footer className="py-6 border-t border-amber-500/20 text-center text-xs text-stone-400">
          {t.footer}
        </footer>

      </main>

      {showTopBtn && (
        <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50">
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}

    </div>
  );
}