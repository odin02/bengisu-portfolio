'use client';

import { useState } from 'react';
import Navbar from '../../Navbar';
import { ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function BuyukVeriPage() {
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
      title: 'Büyük Veri Analitiği: Veri Seti ve 5V Sınıflandırma Süreci',
      date: 'Ekim 2026 • Araştırma ve Geliştirme Raporu',
      intro: 'Bu çalışmada, Kaggle üzerinden seçilen gerçek dünya veri seti kullanılarak büyük verinin temel taşları olan 5V (Volume, Velocity, Variety, Veracity, Value) bileşenleri incelenmiş ve sistemin mimari tasarımı çıkarılmıştır.',
      step1Title: '1. Veri Seti Seçimi ve Kaggle Entegrasyonu',
      step1Desc: 'Analiz sürecine başlarken verinin hacmini ve çeşitliliğini doğru ölçeklendirmek kritik önem taşıdı. Seçilen veri setinin depolama ve işleme maliyetleri önceden hesaplandı.',
      step2Title: '2. 5V Analiz Matrisinin Oluşturulması',
      step2Desc: 'Verinin boyutu (Volume), akış hızı (Velocity), veri tiplerinin çeşitliliği (Variety), güvenilirliği (Veracity) ve nihai iş değeri (Value) detaylı metriklerle raporlandı.',
      step3Title: '3. Geliştirme Sürecinde Edindiğim Deneyimler',
      step3Desc: 'Bu çalışmayı yaparken ham verinin temizlenmesinin ve doğru araç seçiminin analiz başarısını doğrudan etkilediğini bizzat deneyimledim. Sadece veri toplamak yetmiyor; veriyi anlamlı bir değere dönüştürmek gerçek mühendislik becerisi gerektiriyor.',
    },
    en: {
      title: 'Big Data Analytics: Dataset and 5V Classification Process',
      date: 'October 2026 • Research & Development Report',
      intro: 'In this study, using a real-world dataset selected via Kaggle, the 5V components were examined.',
      step1Title: '1. Dataset Selection and Kaggle Integration',
      step1Desc: 'Scaling data volume and variety correctly was critical.',
      step2Title: '2. Creation of the 5V Analysis Matrix',
      step2Desc: 'Volume, velocity, variety, veracity, and business value were reported.',
      step3Title: '3. Experience Gained During Development',
      step3Desc: 'I experienced firsthand that cleaning raw data directly impacts analysis success.',
    },
    kr: {
      title: '빅데이터 분석: 5V 데이터셋 분류 프로세스',
      date: '2026년 10월 • 연구 개발 보고서',
      intro: 'Kaggle 데이터셋을 활용하여 빅데이터의 5V 요소를 분석했습니다.',
      step1Title: '1. 데이터셋 선정 및 연동',
      step1Desc: '데이터 볼륨과 다양성 분석.',
      step2Title: '2. 5V 분석 매트릭스 구축',
      step2Desc: 'Volume, Velocity, Variety, Veracity, Value 분석.',
      step3Title: '3. 개발 소감 및 인사이트',
      step3Desc: '데이터 정제의 중요성을 깨달았습니다.',
    },
    de: {
      title: 'Big Data Analytics: Datensatz- und 5V-Klassifizierung',
      date: 'Oktober 2026 • Forschungsbericht',
      intro: 'In dieser Studie wurden die 5V-Komponenten anhand eines Kaggle-Datensatzes untersucht.',
      step1Title: '1. Datenauswahl',
      step1Desc: 'Skalierung von Volumen und Vielfalt.',
      step2Title: '2. 5V-Analyse',
      step2Desc: 'Detaillierte Metriken zu Volumen, Geschwindigkeit und Wert.',
      step3Title: '3. Erkenntnisse',
      step3Desc: 'Die Bedeutung der Datenbereinigung.',
    },
    es: {
      title: 'Análisis de Big Data: Proceso de Clasificación 5V',
      date: 'Octubre 2026 • Informe de Investigación',
      intro: 'En este estudio se examinaron los componentes 5V utilizando un conjunto de datos.',
      step1Title: '1. Selección de Datos',
      step1Desc: 'Cálculo de costos de almacenamiento.',
      step2Title: '2. Matriz de Análisis 5V',
      step2Desc: 'Métricas de volumen, velocidad y valor.',
      step3Title: '3. Experiencia Adquirida',
      step3Desc: 'Importancia de la limpieza de datos.',
    },
    ar: {
      title: 'تحليل البيانات الكبيرة: عملية تصنيف 5V ومجموعة البيانات',
      date: 'أكتوبر 2026 • تقرير البحث والتطوير',
      intro: 'في هذه الدراسة، تم فحص مكونات 5V باستخدام مجموعة بيانات حقيقية.',
      step1Title: '1. اختيار مجموعة البيانات',
      step1Desc: 'حساب تكاليف التخزين والمعالجة.',
      step2Title: '2. إنشاء مصفوفة تحليل 5V',
      step2Desc: 'تقييم الحجم والسرعة والتنوع والموثوقية والقيمة.',
      step3Title: '3. الخبرات المكتسبة',
      step3Desc: 'أهمية تنظيف البيانات الخام قبل التحليل.',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className={`p-8 sm:p-12 bg-stone-900/80 border ${currentStyle.border} rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6 transition-all duration-500`}>
          <div>
            <span className={`text-xs ${currentStyle.accentColor} font-mono`}>{t.date}</span>
            <h1 className={`text-2xl sm:text-3xl font-bold ${currentStyle.titleColor} mt-2`}>{t.title}</h1>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">{t.intro}</p>

          <div className="flex flex-col gap-4 mt-4 border-t border-stone-800 pt-6">
            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step1Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step1Desc}</p>
            </div>

            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step2Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step2Desc}</p>
            </div>

            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step3Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step3Desc}</p>
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