'use client';

import { useState } from 'react';
import Navbar from '../Navbar';
import { Code, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function ProjelerPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('winter');

  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  const seasonStyles = {
    spring: { titleColor: 'text-pink-100', accentColor: 'text-pink-300', border: 'border-pink-500/30' },
    summer: { titleColor: 'text-amber-100', accentColor: 'text-amber-300', border: 'border-amber-500/30' },
    autumn: { titleColor: 'text-orange-100', accentColor: 'text-orange-300', border: 'border-orange-500/30' },
    winter: { titleColor: 'text-cyan-100', accentColor: 'text-cyan-300', border: 'border-cyan-500/30' },
  };

  const currentStyle = seasonStyles[season];

  const content: Record<Language, any> = {
    tr: {
      title: 'Projelerim',
      subtitle: 'Veri analitiği, makine öğrenmesi ve kullanıcı arayüzü odaklı geliştirdiğim çalışmalar.',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Londra trafik verilerini kullanarak yol segmentlerini sınıflandıran istatistiksel makine öğrenmesi modeli.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Dijital Okuryazarlık Destek Projesi',
      proj2Desc: 'Huzurevi sakinlerine yönelik dijital okuryazarlık eğitimi ve kullanıcı dostu arayüz rehberi tasarımı.',
      proj3Tag: 'Python • Chart.js • Scrollama.js',
      proj3Title: 'Uzayın Yeni Sahipleri: Veri Hikayesi',
      proj3Desc: 'Ticari şirketlerin uzay yarışına katılmasıyla yörüngedeki uydu yoğunluğunun son 20 yıldaki artışını ve uzay çöplüğü tehlikesini anlatan etkileşimli veri hikayesi.',
      linkText: "LinkedIn'de İncele ↗",
      liveSite: "Canlı Site 🚀",
      github: "GitHub ↗",
    },
    en: {
      title: 'My Projects',
      subtitle: 'Works focused on data analytics, machine learning, and user interface design.',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Traffic Data Analysis',
      proj1Desc: 'Statistical machine learning model classifying road segments using London traffic data.',
      proj2Tag: 'UI/UX • Social Responsibility',
      proj2Title: 'Digital Literacy Support Project',
      proj2Desc: 'Digital literacy training and user-friendly interface guide design for nursing home residents.',
      proj3Tag: 'Python • Chart.js • Scrollama.js',
      proj3Title: "Space's New Owners: A Data Story",
      proj3Desc: 'Interactive data story explaining the increase in satellite density and the danger of space debris over the last 20 years.',
      linkText: 'View on LinkedIn ↗',
      liveSite: 'Live Site 🚀',
      github: 'GitHub ↗',
    },
    kr: {
      title: '프로젝트',
      subtitle: '데이터 분석, 머신러닝, UI/UX 디자인 프로젝트.',
      proj1Tag: 'Python • 머신러닝',
      proj1Title: '런던 교통 데이터 분석 모델',
      proj1Desc: '런던 교통 데이터를 활용한 도로 구간 분류 모델.',
      proj2Tag: 'UI/UX • 사회적 책임',
      proj2Title: '디지털 리터러시 지원 프로젝트',
      proj2Desc: '요양원 입소자를 위한 디지털 리터러시 교육 가이드.',
      proj3Tag: 'Python • Chart.js • Scrollama.js',
      proj3Title: '우주의 새로운 주인들: 데이터 스토리',
      proj3Desc: '지난 20년간 우주 쓰레기 위험과 인공위성 밀도 증가를 설명하는 인터랙티브 데이터 스토리.',
      linkText: 'LinkedIn에서 보기 ↗',
      liveSite: '라이브 사이트 🚀',
      github: 'GitHub ↗',
    },
    de: {
      title: 'Meine Projekte',
      subtitle: 'Arbeiten zu Datenanalyse, Machine Learning und UI/UX Design.',
      proj1Tag: 'Python • Machine Learning',
      proj1Title: 'London Verkehrsdatenanalyse',
      proj1Desc: 'Statistisches Modell zur Klassifizierung von Straßenabschnitten.',
      proj2Tag: 'UI/UX • Soziale Verantwortung',
      proj2Title: 'Digitale Alphabetisierung Projekt',
      proj2Desc: 'Schulung zur digitalen Alphabetisierung für Seniorenheimbewohner.',
      proj3Tag: 'Python • Chart.js • Scrollama.js',
      proj3Title: 'Die neuen Besitzer des Weltraums: Datengeschichte',
      proj3Desc: 'Interaktive Datengeschichte, die die Zunahme der Satellitendichte und die Gefahr von Weltraummüll erklärt.',
      linkText: 'Auf LinkedIn ansehen ↗',
      liveSite: 'Live-Seite 🚀',
      github: 'GitHub ↗',
    },
    es: {
      title: 'Mis Proyectos',
      subtitle: 'Trabajos enfocados en análisis de datos, aprendizaje automático y diseño UI/UX.',
      proj1Tag: 'Python • Aprendizaje Automático',
      proj1Title: 'Análisis de Tráfico de Londres',
      proj1Desc: 'Modelo estadístico para clasificar tramos de carretera.',
      proj2Tag: 'UI/UX • Responsabilidad Social',
      proj2Title: 'Proyecto de Alfabetización Digital',
      proj2Desc: 'Capacitación en alfabetización digital para residentes.',
      proj3Tag: 'Python • Chart.js • Scrollama.js',
      proj3Title: 'Nuevos Dueños del Espacio: Historia de Datos',
      proj3Desc: 'Historia de datos interactiva que explica el aumento de la densidad de satélites y el peligro de la basura espacial.',
      linkText: 'Ver en LinkedIn ↗',
      liveSite: 'Sitio en Vivo 🚀',
      github: 'GitHub ↗',
    },
    ar: {
      title: 'مشاريعي',
      subtitle: 'أعمال تركز على تحليل البيانات، تعلم الآلة، وتصميم واجهات المستخدم.',
      proj1Tag: 'بايثون • تعلم الآلة',
      proj1Title: 'تحليل بيانات حركة المرور في لندن',
      proj1Desc: 'نموذج إحصائي لتصنيف مقاطع الطرق باستخدام بيانات المرور.',
      proj2Tag: 'واجهة المستخدم • المسؤولية الاجتماعية',
      proj2Title: 'مشروع دعم محو الأمية الرقمية',
      proj2Desc: 'تدريب على محو الأمية الرقمية لكبار السن.',
      proj3Tag: 'بايثون • Chart.js • Scrollama.js',
      proj3Title: 'ملاك الفضاء الجدد: قصة بيانات',
      proj3Desc: 'قصة بيانات تفاعلية تشرح الزيادة في كثافة الأقمار الصناعية وخطر الحطام الفضائي خلال العشرين عامًا الماضية.',
      linkText: 'عرض على لينكد إن ↗',
      liveSite: 'الموقع المباشر 🚀',
      github: 'جيت هاب ↗',
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
          <h1 className={`text-3xl font-bold ${currentStyle.titleColor} flex items-center gap-2 transition-colors duration-500`}>
            <Code className={`w-7 h-7 ${currentStyle.accentColor}`} /> {t.title}
          </h1>
          <p className="text-stone-300 text-sm font-light">{t.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Proje 1 */}
          <div className={`p-6 bg-stone-900/80 border ${currentStyle.border} rounded-2xl flex flex-col justify-between backdrop-blur-md shadow-lg duration-500`}>
            <div>
              <span className={`text-[11px] ${currentStyle.accentColor} font-mono`}>{t.proj1Tag}</span>
              <h3 className={`font-semibold text-base mt-1 ${currentStyle.titleColor}`}>{t.proj1Title}</h3>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.proj1Desc}</p>
            </div>
            <a href="https://www.linkedin.com/in/bengisukucuk" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} mt-6 hover:underline font-medium`}>
              {t.linkText}
            </a>
          </div>

          {/* Proje 2 */}
          <div className={`p-6 bg-stone-900/80 border ${currentStyle.border} rounded-2xl flex flex-col justify-between backdrop-blur-md shadow-lg duration-500`}>
            <div>
              <span className={`text-[11px] ${currentStyle.accentColor} font-mono`}>{t.proj2Tag}</span>
              <h3 className={`font-semibold text-base mt-1 ${currentStyle.titleColor}`}>{t.proj2Title}</h3>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.proj2Desc}</p>
            </div>
            <a href="https://www.linkedin.com/in/bengisukucuk" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} mt-6 hover:underline font-medium`}>
              {t.linkText}
            </a>
          </div>

          {/* Proje 3 - Yeni Eklenen Uzay Çöplüğü Projesi */}
          <div className={`p-6 bg-stone-900/80 border ${currentStyle.border} rounded-2xl flex flex-col justify-between backdrop-blur-md shadow-lg duration-500`}>
            <div>
              <span className={`text-[11px] ${currentStyle.accentColor} font-mono`}>{t.proj3Tag}</span>
              <h3 className={`font-semibold text-base mt-1 ${currentStyle.titleColor}`}>{t.proj3Title}</h3>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.proj3Desc}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://uzay-coplugu-veri-hikayesi-site.vercel.app/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} hover:underline font-medium`}>
                {t.liveSite}
              </a>
              <a href="https://github.com/odin02/uzay-coplugu-veri-hikayesi" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} hover:underline font-medium`}>
                {t.github}
              </a>
            </div>
          </div>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-stone-800 border border-stone-700 text-stone-200 rounded-full backdrop-blur-md hover:bg-stone-700 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}