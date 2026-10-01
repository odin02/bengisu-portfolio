'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import { Sparkles, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function CalismalarPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('winter');

  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  const content: Record<Language, any> = {
    tr: {
      title: 'Uygulamalı Çalışmalar & Araştırma Raporları',
      subtitle: 'Üniversite eğitimim kapsamında gerçekleştirdiğim veri analizi, modelleme ve sistem güvenliği incelemeleri.',
      work1Tag: 'Büyük Veri Analitiği • Geliştirme Raporu',
      work1Title: 'Bir Veri Setini 5V ile Sınıflandırma ve Mimari Tasarımı',
      work1Desc: 'Kaggle veri seti seçimi, Volume/Velocity/Variety/Veracity/Value eksenlerinde konumlandırma ve ölçeklenebilir araç önerisi raporu.',
      work2Tag: 'Siber Güvenlik & Hukuk • Teknik İnceleme',
      work2Title: 'Sanal Sistemler Üzerinde Port Analizi ve Ağ Trafiği İzleme',
      work2Desc: 'İzole test ortamında Nmap ile port analizi, Wireshark ile paket yakalama aşamaları ve hukuki değerlendirme raporu.',
      readMore: 'Detaylı Raporu İncele ↗',
    },
    en: {
      title: 'Applied Works & Research Reports',
      subtitle: 'Practical analysis, data modeling, and system security reviews conducted during my university studies.',
      work1Tag: 'Big Data Analytics • Development Report',
      work1Title: 'Classifying a Dataset with 5V and Architectural Design',
      work1Desc: 'Kaggle dataset selection, positioning across 5V axes, and scalable tool recommendation report.',
      work2Tag: 'Cyber Security & Law • Technical Review',
      work2Title: 'Port Analysis and Network Traffic Monitoring on Virtual Systems',
      work2Desc: 'Port analysis with Nmap in an isolated test environment, packet capture steps, and legal evaluation.',
      readMore: 'View Detailed Report ↗',
    },
    kr: {
      title: '응용 연구 및 보고서',
      subtitle: '대학 과정 중 진행한 데이터 분석 및 시스템 보안 연구.',
      work1Tag: '빅데이터 분석 • 개발 보고서',
      work1Title: '5V를 활용한 데이터셋 분류 및 아키텍처 설계',
      work1Desc: 'Kaggle 데이터셋 선정 및 5V 기준 분석 보고서.',
      work2Tag: '사이버 보안 • 기술 검토',
      work2Title: '가상 시스템 기반 포트 분석 및 트래픽 모니터링',
      work2Desc: '테스트 환경에서의 Nmap 및 Wireshark 분석 보고서.',
      readMore: '상세 보고서 보기 ↗',
    },
    de: {
      title: 'Praktische Arbeiten & Forschungsberichte',
      subtitle: 'Praktische Analysen und SystemSicherheitsprüfungen.',
      work1Tag: 'Big Data Analytics • Entwicklungsbericht',
      work1Title: 'Klassifizierung eines Datensatzes mit 5V',
      work1Desc: 'Auswahl eines Datensatzes, 5V-Analyse und Tool-Empfehlung.',
      work2Tag: 'Cybersicherheit • Technische Prüfung',
      work2Title: 'Port-Analyse und Netzwerkverkehrsüberwachung',
      work2Desc: 'Port-Analyse mit Nmap und Paketerfassung.',
      readMore: 'Bericht ansehen ↗',
    },
    es: {
      title: 'Trabajos Aplicados e Informes de Investigación',
      subtitle: 'Análisis prácticos y revisiones de seguridad.',
      work1Tag: 'Análisis de Big Data • Informe',
      work1Title: 'Clasificación de Conjunto de Datos con 5V',
      work1Desc: 'Selección de datos, análisis 5V y recomendación de herramientas.',
      work2Tag: 'Ciberseguridad • Revisión Técnica',
      work2Title: 'Análisis de Puertos y Monitoreo de Tráfico',
      work2Desc: 'Análisis de puertos con Nmap y captura de paquetes.',
      readMore: 'Ver Informe ↗',
    },
    ar: {
      title: 'الأعمال التطبيقية وتقارير الأبحاث',
      subtitle: 'تحليلات عمليّة ومراجعات أمان الأنظمة التي تم تطويرها أثناء دراستي.',
      work1Tag: 'تحليل البيانات الكبيرة • تقرير التطوير',
      work1Title: 'تصنيف مجموعة بيانات باستخدام 5V وتصميم البنية',
      work1Desc: 'اختيار مجموعة بيانات وتحليل 5V وتوصيات الأدوات.',
      work2Tag: 'الأمن السيبراني والقانون • مراجعة تقنية',
      work2Title: 'تحليل المنافذ ومراقبة حركة مرور الشبكة على الأنظمة الافتراضية',
      work2Desc: 'تحليل المنافذ باستخدام Nmap وخطوات التقاط الحزم وتقييمها قانونياً.',
      readMore: 'عرض التقرير المفصل ↗',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-stone-100 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-stone-300" /> {t.title}
          </h1>
          <p className="text-stone-300 text-sm font-light">{t.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/odevler/buyuk-veri-5v">
            <div className="p-6 bg-stone-900/75 border border-stone-800 rounded-2xl flex flex-col justify-between hover:border-stone-600 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer group">
              <div>
                <span className="text-[11px] text-stone-400 font-mono">{t.work1Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-stone-100 group-hover:text-stone-300 transition-colors">{t.work1Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.work1Desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-stone-300 mt-6 font-medium">
                {t.readMore}
              </span>
            </div>
          </Link>

          <Link href="/odevler/siber-guvenlik-lab">
            <div className="p-6 bg-stone-900/75 border border-stone-800 rounded-2xl flex flex-col justify-between hover:border-stone-600 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer group">
              <div>
                <span className="text-[11px] text-stone-400 font-mono">{t.work2Tag}</span>
                <h3 className="font-semibold text-base mt-1 text-stone-100 group-hover:text-stone-300 transition-colors">{t.work2Title}</h3>
                <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.work2Desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-stone-300 mt-6 font-medium">
                {t.readMore}
              </span>
            </div>
          </Link>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-stone-800 border border-stone-700 text-stone-200 rounded-full backdrop-blur-md hover:bg-stone-700 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}