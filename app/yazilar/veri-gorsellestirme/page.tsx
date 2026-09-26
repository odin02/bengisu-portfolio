'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es';

export default function VeriGorsellestirmePage() {
  const [lang, setLang] = useState<Language>('tr');

  const articleContent: Record<Language, any> = {
    tr: {
      back: 'Ana Sayfaya Dön',
      readTime: 'Ağustos 2026 • 4 dk okuma',
      title: 'Veri Projelerinde Derste Öğrendiklerim ve Arayüz Deneyimlerim',
      p1: 'Derslerimizde binlerce satırlık veri tablolarıyla çalışırken fark ettiğim en önemli şey; verinin analiz edilmesi kadar anlaşılır sunulmasının da kritik olduğu.',
      h1: '1. Tablolardan Grafiklere Geçiş',
      p2: 'Londra trafik verisi analizimde veya sosyal sorumluluk projemizde karmaşık verileri sade grafiklerle görselleştirmenin kullanıcıların ilgisini nasıl canlı tuttuğunu birebir deneyimledim.',
      h2: '2. Kullanıcı Dostu Yaklaşım',
      p3: 'Bir veri dashboard\'u veya arayüz tasarlarken kullanıcının tek tıkla aradığı cevaba ulaşmasını sağlamak, veri analistinin en büyük başarısı bence.',
    },
    en: {
      back: 'Back to Home',
      readTime: 'August 2026 • 4 min read',
      title: 'What I Learned Connecting Big Data with User Interface',
      p1: 'While working with large datasets in my courses, the most crucial thing I realized was that presenting data clearly is as important as analyzing it.',
      h1: '1. From Tables to Visual Graphs',
      p2: 'In my London traffic analysis and social project, I experienced firsthand how visualizing complex data into clean graphs keeps users engaged.',
      h2: '2. User-Centric Approach',
      p3: 'When designing a dashboard, allowing the user to find their answer with a single click is the greatest achievement for a data analyst.',
    },
    kr: {
      back: '메인 페이지로 돌아가기',
      readTime: '2026년 8월 • 읽는 시간 4분',
      title: '빅데이터 수업과 사용자 인터페이스 디자인 경험',
      p1: '수업 시간에 방대한 데이터 테이블을 다루면서 깨달은 가장 중요한 점은 데이터를 분석하는 것만큼 이해하기 쉽게 전달하는 것도 중요하다는 것이었습니다.',
      h1: '1. 테이블에서 시각적 그래프로',
      p2: '런던 교통 데이터 분석과 사회적 책임 프로젝트를 진행하며 복잡한 데이터를 깔끔한 그래프로 시각화하는 것이 사용자 몰입도를 높인다는 것을 체감했습니다.',
      h2: '2. 사용자 중심의 접근',
      p3: '대시보드를 설계할 때 사용자가 클릭 한 번으로 원하는 답을 찾을 수 있도록 돕는 것이 데이터 분석가의 가장 큰 성과라고 생각합니다.',
    },
    de: {
      back: 'Zurück zur Startseite',
      readTime: 'August 2026 • 4 Min. Lesezeit',
      title: 'Meine Erfahrungen mit Datenvisualisierung im Studium',
      p1: 'Bei der Arbeit mit großen Datensätzen im Studium habe ich gelernt, dass die verständliche Präsentation von Daten genauso wichtig ist wie deren Analyse.',
      h1: '1. Von Tabellen zu visuellen Grafiken',
      p2: 'Bei meiner Verkehrsdatenanalyse für London habe ich selbst erlebt, wie saubere Grafiken komplexe Daten für Nutzer greifbar machen.',
      h2: '2. Benutzerzentrierter Ansatz',
      p3: 'Beim Design eines Dashboards ist es der größte Erfolg für einen Datenanalysten, dem Nutzer die gewünschte Antwort mit einem Klick zu liefern.',
    },
    es: {
      back: 'Volver al Inicio',
      readTime: 'Agosto 2026 • 4 min de lectura',
      title: 'Lo que aprendí combinando Big Data e Interfaces',
      p1: 'Al trabajar con grandes conjuntos de datos en mis clases, lo más importante que aprendí fue que presentar los datos con claridad es tan crucial como analizarlos.',
      h1: '1. De Tablas a Gráficos Visuales',
      p2: 'En mi análisis de tráfico de Londres, experimenté de primera mano cómo la visualización de datos complejos mediante gráficos limpios mantiene el interés.',
      h2: '2. Enfoque centrado en el usuario',
      p3: 'Al diseñar un panel de control, permitir que el usuario encuentre su respuesta con un solo clic es el mayor logro para un analista de datos.',
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