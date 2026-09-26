'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function VeriGorsellestirmePage() {
  return (
    <div className="relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30">
      
      {/* BOZULMAYAN SABİT ARKA PLAN */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105"
        style={{ backgroundImage: `url('/arkaplan.png')` }}
      />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <main className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors w-fit bg-stone-900/60 border border-amber-500/30 px-3.5 py-1.5 rounded-xl backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Ana Sayfaya Dön
        </Link>

        <article className="p-8 md:p-10 bg-stone-900/60 border border-amber-500/25 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-amber-400 font-mono">Ağustos 2026 • 6 dk okuma</span>
            <h1 className="text-2xl md:text-3xl font-bold text-amber-100 leading-tight">
              Büyük Veri Analitiğinde Görselleştirmenin Arayüz Tasarımına Etkisi
            </h1>
          </div>

          <div className="h-px bg-amber-500/20 w-full" />

          <div className="flex flex-col gap-5 text-stone-300 text-sm md:text-base font-light leading-relaxed">
            <p>
              Büyük veri dünyasında ham veriler tek başlarına karmaşık ve anlaşılması zor yapılardır. Veri analitiğini kullanıcı dostu dashboard'lar ve arayüzler ile buluşturmak, karar alma süreçlerini doğrudan hızlandırır.
            </p>

            <h2 className="text-lg font-semibold text-amber-200 mt-2">1. Karmaşıklıktan Sadeliğe</h2>
            <p>
              Doğru grafik türü seçimi ve renk kodlaması, binlerce satırlık veriyi tek bir bakışta anlaşılır kılar. Kullanıcıyı bilgi cümbüşü içinde boğmadan en kritik veri metriklerini vurgulamak UX tasarımının temel taşıdır.
            </p>

            <h2 className="text-lg font-semibold text-amber-200 mt-2">2. Etkileşimli Grafikler ve Arayüz Bütünlüğü</h2>
            <p>
              Statik grafikler yerine filtreleme, arama ve odaklanma imkanı sunan etkileşimli veri bileşenleri kullanmak, analistlerin ve kullanıcıların veriyi derinlemesine keşfetmesini sağlar.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}