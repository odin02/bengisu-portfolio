'use client';

import { useState } from 'react';
import Navbar from '../../Navbar';
import { ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function VeriGorsellestirmePage() {
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
      date: 'Ağustos 2026 • 6 dk okuma',
      title: 'Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi',
      p1: 'Karmaşık veri kümelerini ham sayılar halinde sunmak kullanıcılar için hiçbir şey ifade etmez. Büyük veri analitiğinde asıl başarı, o veriyi anlaşılır grafikler ve sezgisel arayüzlerle sunabilmektir.',
      h1: '1. Karmaşık Veriyi Sadeleştirmek',
      desc1: 'Milyonlarca satırlık trafik veya enerji tüketim verisini doğru renk şemaları ve filtreleme bileşenleriyle kullanıcıya aktarmak, karar alma süreçlerini hızlandırır.',
      h2: '2. UI/UX Tasarım ile Veri Uyumu',
      desc2: 'Arayüz tasarlarken kullanılan panellerin (dashboard) kullanıcı dostu olması, analistin verideki anomalileri saniyeler içinde fark etmesini sağlar.',
    },
    en: {
      date: 'August 2026 • 6 min read',
      title: 'The Impact of Data Visualization on Interface Design in Big Data Analytics',
      p1: 'Presenting complex datasets as raw numbers means nothing to users. True success lies in delivering data through intuitive interfaces.',
      h1: '1. Simplifying Complex Data',
      desc1: 'Conveying millions of rows of data to users with correct color schemes speeds up decision-making.',
      h2: '2. UI/UX Design and Data Harmony',
      desc2: 'User-friendly dashboards ensure analysts spot anomalies within seconds.',
    },
    kr: {
      date: '2026년 8월 • 6분',
      title: '빅데이터 분석에서 시각화가 인터페이스 디자인에 미치는 영향',
      p1: '복잡한 데이터셋을 원시 숫자로 제공하는 것은 사용자에게 아무런 의미가 없습니다.',
      h1: '1. 복잡한 데이터의 단순화',
      desc1: '올바른 색상 체계로 데이터를 시각화합니다.',
      h2: '2. UI/UX 디자인과 데이터의 조화',
      desc2: '사용자 친화적인 대시보드 구축.',
    },
    de: {
      date: 'August 2026 • 6 Min.',
      title: 'Der Einfluss der Datenvisualisierung auf das Interface-Design',
      p1: 'Komplexe Datensätze als rohe Zahlen zu präsentieren bedeutet wenig.',
      h1: '1. Vereinfachung komplexer Daten',
      desc1: 'Vermittlung von Millionen Datenzeilen durch richtige Farbschemata.',
      h2: '2. UI/UX-Design und Datenharmonie',
      desc2: 'Benutzerfreundliche Dashboards für Analysen.',
    },
    es: {
      date: 'Agosto 2026 • 6 min',
      title: 'El Impacto de la Visualización de Datos en el Diseño de Interfaces',
      p1: 'Presentar conjuntos de datos complejos como números en bruto no tiene sentido.',
      h1: '1. Simplificación de datos complejos',
      desc1: 'Transmitir millones de filas de datos de forma clara.',
      h2: '2. Armonía entre diseño UI/UX y datos',
      desc2: 'Paneles amigables para los analistas.',
    },
    ar: {
      date: 'أغسطس 2026 • 6 دقائق قراءة',
      title: 'تأثير تصور البيانات على تصميم واجهة المستخدم في تحليل البيانات الكبيرة',
      p1: 'تقديم مجموعات البيانات المعقدة كأرقام خام لا يمثل أي قيمة للمستخدمين.',
      h1: '1. تبسيط البيانات المعقدة',
      desc1: 'نقل ملايين صفوف البيانات باستخدام نظام ألوان دقيق يسرع اتخاذ القرار.',
      h2: '2. تناغم تصميم واجهة المستخدم مع البيانات',
      desc2: 'لوحات المعلومات سهلة الاستخدام تمكن المحللين من اكتشاف الحالات الشاذة.',
    },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="p-8 sm:p-12 bg-stone-900/75 border border-stone-800 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <div>
            <span className="text-xs text-stone-400 font-mono">{t.date}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-2">{t.title}</h1>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light border-b border-stone-800 pb-6">{t.p1}</p>

          <div className="flex flex-col gap-6 mt-2">
            <div>
              <h3 className="font-semibold text-stone-200 text-base">{t.h1}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.desc1}</p>
            </div>

            <div>
              <h3 className="font-semibold text-stone-200 text-base">{t.h2}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.desc2}</p>
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