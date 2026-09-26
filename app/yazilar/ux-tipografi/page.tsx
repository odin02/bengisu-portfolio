'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es';

export default function UxTipografiPage() {
  const [lang, setLang] = useState<Language>('tr');

  const articleContent: Record<Language, any> = {
    tr: {
      back: 'Ana Sayfaya Dön',
      readTime: 'Eylül 2026 • 3 dk okuma',
      title: 'Tasarıma Başlarken Öğrendiğim İpuçları: Tipografi ve Düzen Mantığı',
      p1: 'Büyük Veri Analitiği okurken projelerimin sunum ve arayüz aşamalarında en çok zorlandığım şey; bilginin karşı tarafa ne kadar hızlı ulaştığıydı. İlk başlarda her metni aynı büyüklükte yapıyordum ama zamanla tipografik hiyerarşinin önemini fark ettim.',
      h1: '1. Gözün Sayfayı Tarama Alışkanlığı',
      p2: 'Kendi deneyimlerimden gördüm ki insanlar bir sayfaya girdiğinde kelime kelime okumuyor, direkt göz gezdiriyor. Başlıkları belirgin yapmak ve satır aralıklarını ferah tutmak okuyucuyu yormuyor.',
      h2: '2. Doğru Renk Tonları Seçmek',
      p3: 'Karanlık temalı arayüzlerde bembeyaz yazılar kullanmak gözü çok çabuk yoruyor. Ana başlıkları hafif krem/altın tonlarında, alt açıklamaları ise daha yumuşak gri/gri-kahve tonlarında seçmek çok daha estetik hissettiriyor.',
    },
    en: {
      back: 'Back to Home',
      readTime: 'September 2026 • 3 min read',
      title: 'Tips I Learned Starting UI/UX: Typography & Layout Logic',
      p1: 'While studying Big Data Analytics, the biggest challenge during my project presentations was how fast information was conveyed. At first, I kept all text sizes the same, but over time I realized the importance of typographic hierarchy.',
      h1: '1. How People Scan Pages',
      p2: 'From my own experience, people do not read word-by-word when entering a webpage; they scan. Making headers clear and giving breathing room in line spacing prevents reader fatigue.',
      h2: '2. Choosing the Right Color Tones',
      p3: 'Using pure white text on dark interfaces strains the eyes quickly. Choosing warm cream/gold tones for headings and soft muted grays for descriptions feels much more aesthetic.',
    },
    kr: {
      back: '메인 페이지로 돌아가기',
      readTime: '2026년 9월 • 읽는 시간 3분',
      title: '디자인을 공부하며 배운 팁: 타이포그래피와 레이아웃',
      p1: '빅데이터 분석학을 전공하면서 프로젝트 발표 시 가장 큰 고민은 정보 전달 속도였습니다. 처음에는 모든 텍스트 크기를 비슷하게 만들었지만, 타이포그래피 계층 구조의 중요성을 깨닫게 되었습니다.',
      h1: '1. 사용자의 페이지 스캔 습관',
      p2: '웹페이지를 볼 때 사람들은 글자를 하나하나 읽기보다 먼저 훑어봅니다. 제목을 명확히 하고 줄 간격을 쾌적하게 유지하는 것이 읽는 이의 피로를 줄여줍니다.',
      h2: '2. 올바른 색상 톤 선택',
      p3: '어두운 테마에서 순백색 텍스트는 눈을 쉽게 피로하게 만듭니다. 제목은 따뜻한 크림/골드 톤으로, 설명은 부드러운 그레이 톤으로 설정하면 훨씬 안정감을 줍니다.',
    },
    de: {
      back: 'Zurück zur Startseite',
      readTime: 'September 2026 • 3 Min. Lesezeit',
      title: 'Tipps aus meiner Design-Lernreise: Typografie & Layout',
      p1: 'Während meines Studium der Big Data Analytics war die größte Herausforderung bei Projektpräsentationen, wie schnell Informationen vermittelt werden. Mit der Zeit erkannte ich die Bedeutung der typografischen Hierarchie.',
      h1: '1. Wie Menschen Seiten scannen',
      p2: 'Aus eigener Erfahrung lesen Menschen Webseiten nicht Wort für Wort, sondern scannen sie. Klare Überschriften und angenehme Zeilenabstände verhindern Ermüdung.',
      h2: '2. Die richtigen Farbtöne wählen',
      p3: 'Reines Weiß auf dunklen Oberflächen ermüdet die Augen schnell. Warme Cremetöne für Überschriften und weiche Grautöne für Beschreibungen wirken viel ästhetischer.',
    },
    es: {
      back: 'Volver al Inicio',
      readTime: 'Septiembre 2026 • 3 min de lectura',
      title: 'Consejos en mi viaje de diseño UI/UX: Tipografía y Diseño',
      p1: 'Mientras estudio Análisis de Big Data, el mayor desafío en mis presentaciones era la rapidez con la que se transmitía la información. Con el tiempo comprendí la importancia de la jerarquía tipográfica.',
      h1: '1. Cómo escanean las páginas los usuarios',
      p2: 'Por experiencia, las personas no leen palabra por palabra; escanean. Hacer los títulos claros y dar espacio entre líneas evita la fatiga visual.',
      h2: '2. Elección de los tonos de color adecuados',
      p3: 'El blanco puro en interfaces oscuras cansa la vista rápidamente. Usar tonos crema/dorado cálidos para encabezados y grises suaves para explicaciones resulta mucho más estético.',
    },
  };

  const t = articleContent[lang];

  return (
    <div className="relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30">
      
      {/* ARKA PLAN */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105"
        style={{ backgroundImage: `url('/arkaplan.png')` }}
      />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      {/* STICKY HEADER */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-stone-950/80 border-b border-amber-500/20 shadow-xl">
        <header className="max-w-3xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors bg-stone-900/80 border border-amber-500/30 px-3.5 py-1.5 rounded-xl backdrop-blur-md font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t.back}
          </Link>

          {/* DİL SEÇİCİ */}
          <div className="flex items-center gap-1 bg-stone-900/90 border border-amber-500/30 rounded-lg px-2 py-1 text-xs text-amber-200 backdrop-blur-md">
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
        </header>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-8">
        <article className="p-8 md:p-10 bg-stone-900/60 border border-amber-500/25 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-amber-400 font-mono">{t.readTime}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-amber-100 leading-tight">
              {t.title}
            </h1>
          </div>

          <div className="h-px bg-amber-500/20 w-full" />

          <div className="flex flex-col gap-5 text-stone-300 text-sm md:text-base font-light leading-relaxed">
            <p>{t.p1}</p>
            <h2 className="text-lg font-semibold text-amber-200 mt-2">{t.h1}</h2>
            <p>{t.p2}</p>
            <h2 className="text-lg font-semibold text-amber-200 mt-2">{t.h2}</h2>
            <p>{t.p3}</p>
          </div>
        </article>
      </main>
    </div>
  );
}