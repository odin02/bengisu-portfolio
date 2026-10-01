'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';

export default function BuyukVeriOdevPage() {
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
      badge: 'Büyük Veri Analitiği • Uygulamalı Görev (Hafta 2)',
      title: 'Bir Veri Setini 5V ile Sınıflandır',
      desc: 'Açık bir veri seti seç (örn. data.gov.tr veya Kaggle\'dan herkese açık bir set) ve aşağıdaki dört adımı rapora dönüştür.',
      step1Title: '1. Veri setini seç ve indir',
      step1Desc: 'Tercihen birden çok tip içeren bir set (örn. CSV + metin yorum alanı).',
      step2Title: '2. Tipini belirle',
      step2Desc: 'Yapılandırılmış / yarı yapılandırılmış / yapılandırılmamış mı? Sütun ve örnek satırlarla gerekçelendir.',
      step3Title: '3. 5V üzerinden değerlendir',
      step3Desc: 'Volume, Velocity, Variety, Veracity, Value eksenlerinde 1-2 cümle ile konumlandır.',
      step4Title: '4. Uygun araç öner',
      step4Desc: 'Pandas mı, yoksa Spark/Data Lake mi? Neden? Ölçek tablosuna referans ver.',
      tip: 'İpucu: İndirdiğin seti geçen hafta oluşturduğun S3 bucket\'ına yüklersen, sonraki haftalarda bulutta işleyebilirsin.',
    },
    en: {
      back: 'Back to Home',
      badge: 'Big Data Analytics • Applied Task (Week 2)',
      title: 'Classify a Dataset with 5V',
      desc: 'Choose an open dataset (e.g., from Kaggle or data.gov.tr) and apply the following four steps.',
      step1Title: '1. Select and download dataset',
      step1Desc: 'Preferably a set containing multiple data types (CSV + text comments).',
      step2Title: '2. Determine its type',
      step2Desc: 'Structured / semi-structured / unstructured? Justify with columns and sample rows.',
      step3Title: '3. Evaluate via 5V',
      step3Desc: 'Position in terms of Volume, Velocity, Variety, Veracity, and Value.',
      step4Title: '4. Recommend a tool',
      step4Desc: 'Pandas or Spark/Data Lake? Why? Reference the scaling table.',
      tip: 'Tip: If you upload the dataset to your S3 bucket from last week, you can process it in the cloud.',
    },
    kr: {
      back: '메인으로 돌아가기',
      badge: '빅데이터 분석 • 실습 과제 (2주차)',
      title: '5V로 데이터셋 분류하기',
      desc: '공개 데이터셋을 선택하고 다음 4가지 단계를 수행하세요.',
      step1Title: '1. 데이터셋 선택 및 다운로드',
      step1Desc: '다양한 데이터 유형(CSV + 텍스트)을 포함하는 세트 권장.',
      step2Title: '2. 유형 결정',
      step2Desc: '정형 / 반정형 / 비정형 여부 분석.',
      step3Title: '3. 5V 평가',
      step3Desc: 'Volume, Velocity, Variety, Veracity, Value 기준 분석.',
      step4Title: '4. 도구 추천',
      step4Desc: 'Pandas 혹은 Spark/Data Lake 중 선택 이유 설명.',
      tip: '팁: 지난주 생성한 S3 버킷에 업로드하면 클라우드에서 처리할 수 있습니다.',
    },
    de: {
      back: 'Zur Startseite',
      badge: 'Big Data Analytics • Praktische Aufgabe (Woche 2)',
      title: 'Klassifizierung eines Datensatzes mit 5V',
      desc: 'Wählen Sie einen offenen Datensatz und führen Sie die folgenden vier Schritte aus.',
      step1Title: '1. Datensatz auswählen und herunterladen',
      step1Desc: 'Vorzugsweise ein Set mit mehreren Datentypen (CSV + Text).',
      step2Title: '2. Typ bestimmen',
      step2Desc: 'Strukturiert, semi-strukturiert oder unstrukturiert?',
      step3Title: '3. Über 5V bewerten',
      step3Desc: 'Positionierung in den Achsen Volume, Velocity, Variety, Veracity, Value.',
      step4Title: '4. Tool empfehlen',
      step4Desc: 'Pandas oder Spark/Data Lake? Begründung.',
      tip: 'Tipp: In den S3-Bucket hochladen, um es in der Cloud zu verarbeiten.',
    },
    es: {
      back: 'Volver al Inicio',
      badge: 'Análisis de Big Data • Tarea Práctica (Semana 2)',
      title: 'Clasificar un conjunto de datos con 5V',
      desc: 'Elija un conjunto de datos abierto y complete los siguientes cuatro pasos.',
      step1Title: '1. Seleccionar y descargar',
      step1Desc: 'Preferiblemente un conjunto con múltiples tipos de datos (CSV + texto).',
      step2Title: '2. Determinar el tipo',
      step2Desc: '¿Estructurado, semiestructurado o no estructurado?',
      step3Title: '3. Evaluar mediante 5V',
      step3Desc: 'Posicionar en Volumen, Velocidad, Variedad, Veracidad y Valor.',
      step4Title: '4. Recomendar herramienta',
      step4Desc: '¿Pandas o Spark/Data Lake? ¿Por qué?',
      tip: 'Consejo: Súbelo a tu bucket S3 para procesarlo en la nube.',
    },
    ar: {
      back: 'العودة للرئيسية',
      badge: 'تحليل البيانات الكبيرة • مهمة تطبيقية (الأسبوع 2)',
      title: 'تصنيف مجموعة بيانات باستخدام 5V',
      desc: 'اختر مجموعة بيانات مفتوحة وطبق الخطوات الأربع التالية.',
      step1Title: '1. اختيار وتنزيل البيانات',
      step1Desc: 'يفضل مجموعة تحتوي على أنواع متعددة (CSV + تعليقات نصية).',
      step2Title: '2. تحديد النوع',
      step2Desc: 'هل هي مهيكلة / شبه مهيكلة / غير مهيكلة؟',
      step3Title: '3. التقييم عبر 5V',
      step3Desc: 'تحديد الحجم، السرعة، التنوع، المصداقية، والقيمة.',
      step4Title: '4. اقتراح الأداة',
      step4Desc: 'Pandas أم Spark/Data Lake؟ ولماذا؟',
      tip: 'نصيحة: إذا قمت بتحميل المجموعة إلى S3 bucket الخاصة بك، يمكنك معالجتها سحابياً.',
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
              <button onClick={() => setSeason('spring')} title="İlkbahar" className="p-1.5 text-xs">🌸</button>
              <button onClick={() => setSeason('summer')} title="Yaz" className="p-1.5 text-xs">☀️</button>
              <button onClick={() => setSeason('autumn')} title="Sonbahar" className="p-1.5 text-xs">🍁</button>
              <button onClick={() => setSeason('winter')} title="Kış" className="p-1.5 text-xs">❄️</button>
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
        <article className="p-8 md:p-12 bg-stone-900/70 border border-amber-500/30 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <span className="text-xs text-amber-400 font-mono">{t.badge}</span>
          <h1 className="text-2xl md:text-4xl font-bold text-amber-100">{t.title}</h1>
          <p className="text-stone-300 text-sm md:text-base font-light">{t.desc}</p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="p-5 bg-stone-950/60 border border-amber-500/20 rounded-2xl">
              <h3 className="font-semibold text-amber-200 text-sm">{t.step1Title}</h3>
              <p className="text-stone-300 text-xs mt-2">{t.step1Desc}</p>
            </div>
            <div className="p-5 bg-stone-950/60 border border-amber-500/20 rounded-2xl">
              <h3 className="font-semibold text-amber-200 text-sm">{t.step2Title}</h3>
              <p className="text-stone-300 text-xs mt-2">{t.step2Desc}</p>
            </div>
            <div className="p-5 bg-stone-950/60 border border-amber-500/20 rounded-2xl">
              <h3 className="font-semibold text-amber-200 text-sm">{t.step3Title}</h3>
              <p className="text-stone-300 text-xs mt-2">{t.step3Desc}</p>
            </div>
            <div className="p-5 bg-stone-950/60 border border-amber-500/20 rounded-2xl">
              <h3 className="font-semibold text-amber-200 text-sm">{t.step4Title}</h3>
              <p className="text-stone-300 text-xs mt-2">{t.step4Desc}</p>
            </div>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 mt-4">
            {t.tip}
          </div>
        </article>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}