'use client';

import { useState } from 'react';
import Navbar from '../../Navbar';
import { ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function UxTipografiPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('winter');

  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  // Mevsime göre dinamik yazı başlık renkleri
  const seasonStyles = {
    spring: { titleColor: 'text-pink-100', accentColor: 'text-pink-300', border: 'border-pink-500/30' },
    summer: { titleColor: 'text-amber-100', accentColor: 'text-amber-300', border: 'border-amber-500/30' },
    autumn: { titleColor: 'text-orange-100', accentColor: 'text-orange-300', border: 'border-orange-500/30' },
    winter: { titleColor: 'text-cyan-100', accentColor: 'text-cyan-300', border: 'border-cyan-500/30' },
  };

  const currentStyle = seasonStyles[season];

  const content: Record<Language, any> = {
    tr: {
      date: 'Eylül 2026 • 3 dk okuma',
      title: 'Tasarımda Başlarken Öğrendiğim İpuçları: Tipografi ve Düzen Mantığı',
      p1: 'Büyük Veri Analitiği okurken projelerimin sunum ve arayüz aşamalarında en çok zorlandığım şey; bilginin karşı tarafa ne kadar hızlı ulaştığıydı. İlk başlarda her metni aynı büyüklükte yapıyordum ama zamanla tipografik hiyerarşinin önemini fark ettim.',
      h1: '1. Gözün Sayfayı Tarama Alışkanlığı',
      desc1: 'Kendi deneyimlerimden gördüm ki insanlar bir sayfaya girdiğinde kelime kelime okumuyor, direkt göz gezdiriyor. Başlıkları belirgin yapmak ve satır aralıklarını ferah tutmak okuyucuyu yormuyor.',
      h2: '2. Doğru Renk Tonları Seçmek',
      desc2: 'Karanlık temalı arayüzlerde bembeyaz yazılar kullanmak gözü çok çabuk yoruyor. Ana başlıkları mevsime uygun tonlarda, alt açıklamaları ise daha yumuşak gri tonlarında seçmek çok daha estetik hissettiriyor.',
    },
    en: {
      date: 'September 2026 • 3 min read',
      title: 'Tips I Learned When Starting Design: Typography and Layout Logic',
      p1: 'While studying Big Data Analytics, the hardest part of presenting projects was how fast information reached the other party.',
      h1: '1. The Eye Scanning Habit',
      desc1: 'People do not read word for word; they scan. Making titles prominent prevents fatigue.',
      h2: '2. Choosing the Right Color Tones',
      desc2: 'Using pure white text on dark themes tires the eyes quickly.',
    },
    kr: {
      date: '2026년 9월 • 3분',
      title: '디자인을 시작하며 배운 팁: 타이포그래피와 레이아웃',
      p1: '빅데이터 분석을 공부하며 프로젝트 시각화 과정에서 느낀 점들을 정리했습니다.',
      h1: '1. 사용자의 시선 스캔 습관',
      desc1: '사용자는 단어 하나하나 읽지 않고 훑어봅니다.',
      h2: '2. 올바른 색상 선택',
      desc2: '어두운 테마에서 순백색 텍스트는 눈을 피로하게 합니다.',
    },
    de: {
      date: 'September 2026 • 3 Min.',
      title: 'Tipps beim Designstart: Typografie und Layout-Logik',
      p1: 'Wichtige Erkenntnisse über visuelle Hierarchie und Lesbarkeit.',
      h1: '1. Das Scan-Verhalten des Auges',
      desc1: 'Menschen lesen Webseiten nicht Wort für Wort, sie überfliegen sie.',
      h2: '2. Die richtigen Farbnuancen wählen',
      desc2: 'Reines Weiß auf dunklem Hintergrund ermüdet die Augen schnell.',
    },
    es: {
      date: 'Septiembre 2026 • 3 min',
      title: 'Consejos de Diseño: Tipografía y Maquetación',
      p1: 'Lecciones aprendidas sobre jerarquía tipográfica y legibilidad.',
      h1: '1. El hábito de escaneo visual',
      desc1: 'Los usuarios no leen palabra por palabra, escanean la página.',
      h2: '2. Selección de tonos de color adecuados',
      desc2: 'Usar texto blanco puro fatiga la vista rápidamente.',
    },
    ar: {
      date: 'سبتمبر 2026 • 3 دقائق قراءة',
      title: 'نصائح تعلمتها عند بدء التصميم: الطباعة ومنطق تخطيط الصفحات',
      p1: 'أثناء دراسة تحليل البيانات الكبيرة، كانت صعوبتي تكمن في سرعة وصول المعلومات للمستلم.',
      h1: '1. عادات مسح العين للصفحة',
      desc1: 'الناس لا يقرؤون كلمة بكلمة بل يمسحون الصفحة بصرياً.',
      h2: '2. اختيار درجات الألوان المناسبة',
      desc2: 'استخدام النص الأبيض الصافي على الخلفيات الداكنة يرهق العين بسرعة.',
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

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light border-b border-stone-800 pb-6">{t.p1}</p>

          <div className="flex flex-col gap-6 mt-2">
            <div>
              <h3 className={`font-semibold ${currentStyle.accentColor} text-base`}>{t.h1}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.desc1}</p>
            </div>

            <div>
              <h3 className={`font-semibold ${currentStyle.accentColor} text-base`}>{t.h2}</h3>
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