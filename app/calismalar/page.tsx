'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, ArrowUp, Sparkles, ArrowUpRight } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';

export default function CalismalarPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('autumn');

  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  const content: Record<Language, any> = {
    tr: {
      back: 'Ana Sayfaya Dön',
      title: 'Uygulamalı Çalışmalar & Lab Raporları',
      subtitle: 'Büyük veri analitiği, siber güvenlik ve sistem mimarisi üzerine gerçekleştirdiğim pratik çalışmalar.',
      assign1Title: 'Büyük Veri: Bir Veri Setini 5V ile Sınıflandır',
      assign1Desc: 'Kaggle veri seti seçimi, 5V (Volume, Velocity, Variety, Veracity, Value) analizi ve araç önerisi raporu.',
      assign2Title: 'Siber Güvenlik & Bilişim Hukuku: Nmap ve Wireshark Lab',
      assign2Desc: 'İzole sanal makine ortamında port tarama, trafik yakalama ve bulgu raporlama uygulaması.',
      viewDetail: 'Çalışmayı İncele ↗',
    },
    en: {
      back: 'Back to Home',
      title: 'Applied Works & Lab Reports',
      subtitle: 'Practical studies conducted on big data analytics, cybersecurity, and system architecture.',
      assign1Title: 'Big Data: Classify a Dataset with 5V',
      assign1Desc: 'Dataset selection, 5V analysis (Volume, Velocity, Variety, Veracity, Value) and tool recommendation.',
      assign2Title: 'Cyber Security & IT Law: Nmap & Wireshark Lab',
      assign2Desc: 'Port scanning, packet capturing, and incident reporting in an isolated virtual machine lab.',
      viewDetail: 'View Study ↗',
    },
    kr: {
      back: '메인으로 돌아가기',
      title: '응용 연구 및 실습 보고서',
      subtitle: '빅데이터 분석, 사이버 보안 및 시스템 아키텍처 실습.',
      assign1Title: '빅데이터: 5V로 데이터셋 분류',
      assign1Desc: '데이터셋 선정, 5V 분석 및 도구 추천 보고서.',
      assign2Title: '사이버 보안: Nmap 및 Wireshark 실습',
      assign2Desc: '격리된 가상 머신 환경에서의 포트 스캔 및 패킷 캡처 실습.',
      viewDetail: '연구 보기 ↗',
    },
    de: {
      back: 'Zur Startseite',
      title: 'Praktische Arbeiten & Lab-Berichte',
      subtitle: 'Praktische Studien zu Big Data Analytics, Cybersicherheit und Systemarchitektur.',
      assign1Title: 'Big Data: Datensatz mit 5V klassifizieren',
      assign1Desc: 'Auswahl eines Datensatzes, 5V-Analyse und Tool-Empfehlung.',
      assign2Title: 'Cybersicherheit: Nmap & Wireshark Lab',
      assign2Desc: 'Port-Scanning und Paketaufnahme in einer virtuellen Laborumgebung.',
      viewDetail: 'Studie ansehen ↗',
    },
    es: {
      back: 'Volver al Inicio',
      title: 'Trabajos Aplicados e Informes de Laboratorio',
      subtitle: 'Estudios prácticos realizados sobre análisis de big data, ciberseguridad y arquitectura.',
      assign1Title: 'Big Data: Clasificar conjunto de datos con 5V',
      assign1Desc: 'Selección de datos, análisis 5V y recomendación de herramientas.',
      assign2Title: 'Ciberseguridad: Laboratorio Nmap y Wireshark',
      assign2Desc: 'Escaneo de puertos y captura de tráfico en entorno virtual.',
      viewDetail: 'Ver Estudio ↗',
    },
    ar: {
      back: 'العودة للرئيسية',
      title: 'الأعمال التطبيقية وتقارير المختبر',
      subtitle: 'دراسات عمليّة أجريت حول تحليل البيانات الكبيرة، الأمن السيبراني، وهندسة الأنظمة.',
      assign1Title: 'البيانات الكبيرة: تصنيف مجموعة بيانات بـ 5V',
      assign1Desc: 'اختيار مجموعة بيانات وتحليل 5V وتوصيات الأدوات.',
      assign2Title: 'الأمن السيبراني وقانون تكنولوجيا المعلومات: مختبر Nmap و Wireshark',
      assign2Desc: 'فحص المنافذ والتقاط الحزم في بيئة افتراضية معزولة.',
      viewDetail: 'عرض الدراسة ↗',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30 pt-20 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-stone-950/85 border-b border-amber-500/20 shadow-xl">
        <header className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors bg-stone-900/80 border border-amber-500/30 px-3.5 py-1.5 rounded-xl font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.back}
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-stone-900/90 border border-amber-500/30 rounded-xl p-1 gap-1">
              <button onClick={() => setSeason('spring')} className="p-1.5 text-xs">🌸</button>
              <button onClick={() => setSeason('summer')} className="p-1.5 text-xs">☀️</button>
              <button onClick={() => setSeason('autumn')} className="p-1.5 text-xs">🍁</button>
              <button onClick={() => setSeason('winter')} className="p-1.5 text-xs">❄️</button>
            </div>

            <div className="flex items-center gap-1 bg-stone-900/90 border border-amber-500/30 rounded-lg px-2 py-1 text-xs text-amber-200">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <select value={lang} onChange={(e) => setLang(e.target.value as Language)} className="bg-transparent text-xs font-semibold text-amber-200 focus:outline-none cursor-pointer">
                <option value="tr" className="bg-stone-900">TR</option>
                <option value="en" className="bg-stone-900">EN</option>
                <option value="kr" className="bg-stone-900">KR</option>
                <option value="de" className="bg-stone-900">DE</option>
                <option value="es" className="bg-stone-900">ES</option>
                <option value="ar" className="bg-stone-900">AR</option>
              </select>
            </div>
          </div>
        </header>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-amber-100 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-amber-400" /> {t.title}
          </h1>
          <p className="text-stone-300 text-sm font-light">{t.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/odevler/buyuk-veri-5v">
            <div className="p-6 bg-stone-900/60 border border-amber-500/25 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">Büyük Veri Analitiği • Lab 2</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100">{t.assign1Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.assign1Desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 font-medium">
                {t.viewDetail}
              </span>
            </div>
          </Link>

          <Link href="/odevler/siber-guvenlik-lab">
            <div className="p-6 bg-stone-900/60 border border-amber-500/25 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer">
              <div>
                <span className="text-[11px] text-amber-400 font-mono">Siber Güvenlik & Hukuk • Lab 1</span>
                <h3 className="font-semibold text-base mt-1 text-amber-100">{t.assign2Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.assign2Desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-6 font-medium">
                {t.viewDetail}
              </span>
            </div>
          </Link>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}