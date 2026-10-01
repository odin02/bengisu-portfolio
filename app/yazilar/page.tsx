'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import { BookOpen, ArrowUpRight, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function YazilarPage() {
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
      title: 'Yazılar & Çalışmalar',
      subtitle: 'Kullanıcı deneyimi, arayüz tasarımı ve veri analitiği üzerine kaleme aldığım makaleler.',
      art1Title: 'Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı',
      art1Date: 'Eylül 2026 • 4 dk okuma',
      art2Title: 'Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi',
      art2Date: 'Ağustos 2026 • 6 dk okuma',
    },
    en: {
      title: 'Articles & Studies',
      subtitle: 'Articles I wrote on user experience, interface design, and data analytics.',
      art1Title: 'Typography and Hierarchy Logic in User Experience (UX)',
      art1Date: 'September 2026 • 4 min read',
      art2Title: 'The Impact of Data Visualization on Interface Design',
      art2Date: 'August 2026 • 6 min read',
    },
    kr: {
      title: '아티클 및 연구',
      subtitle: '사용자 경험, UI 디자인 및 데이터 분석에 관한 아티클.',
      art1Title: '사용자 경험(UX)에서의 타이포그래피와 계층 구조',
      art1Date: '2026년 9월 • 4분',
      art2Title: '빅데이터 시각화가 인터페이스 디자인에 미치는 영향',
      art2Date: '2026년 8월 • 6분',
    },
    de: {
      title: 'Artikel & Studien',
      subtitle: 'Artikel über UX, Interface Design und Datenanalyse.',
      art1Title: 'Typografie und Hierarchie in der UX',
      art1Date: 'September 2026 • 4 Min.',
      art2Title: 'Einfluss der Datenvisualisierung auf das Design',
      art2Date: 'August 2026 • 6 Min.',
    },
    es: {
      title: 'Artículos y Estudios',
      subtitle: 'Artículos sobre experiencia de usuario, diseño de interfaz y análisis de datos.',
      art1Title: 'Tipografía y Jerarquía en UX',
      art1Date: 'Septiembre 2026 • 4 min',
      art2Title: 'Impacto de la Visualización de Datos en el Diseño',
      art2Date: 'Agosto 2026 • 6 min',
    },
    ar: {
      title: 'المقالات والدراسات',
      subtitle: 'مقالات كتبتها حول تجربة المستخدم، تصميم الواجهات، وتحليل البيانات.',
      art1Title: 'منطق الطباعة التسلسلية في تجربة المستخدم',
      art1Date: 'سبتمبر 2026 • 4 دقائق قراءة',
      art2Title: 'تأثير تصور البيانات على تصميم واجهة المستخدم',
      art2Date: 'أغسطس 2026 • 6 دقائق قراءة',
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
            <BookOpen className="w-7 h-7 text-stone-300" /> {t.title}
          </h1>
          <p className="text-stone-300 text-sm font-light">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/yazilar/ux-tipografi">
            <article className="p-6 bg-stone-900/75 border border-stone-800 rounded-2xl flex justify-between items-center hover:bg-stone-900/90 hover:border-stone-600 transition-all cursor-pointer backdrop-blur-md shadow-lg">
              <div>
                <h3 className="font-medium text-base text-stone-100">{t.art1Title}</h3>
                <p className="text-xs text-stone-400 mt-1">{t.art1Date}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-300" />
            </article>
          </Link>

          <Link href="/yazilar/veri-gorsellestirme">
            <article className="p-6 bg-stone-900/75 border border-stone-800 rounded-2xl flex justify-between items-center hover:bg-stone-900/90 hover:border-stone-600 transition-all cursor-pointer backdrop-blur-md shadow-lg">
              <div>
                <h3 className="font-medium text-base text-stone-100">{t.art2Title}</h3>
                <p className="text-xs text-stone-400 mt-1">{t.art2Date}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-300" />
            </article>
          </Link>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-stone-800 border border-stone-700 text-stone-200 rounded-full backdrop-blur-md hover:bg-stone-700 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}