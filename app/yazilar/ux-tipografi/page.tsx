'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function UxTipografiPage() {
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
            <span className="text-xs text-amber-400 font-mono">Eylül 2026 • 4 dk okuma</span>
            <h1 className="text-2xl md:text-3xl font-bold text-amber-100 leading-tight">
              Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı
            </h1>
          </div>

          <div className="h-px bg-amber-500/20 w-full" />

          <div className="flex flex-col gap-5 text-stone-300 text-sm md:text-base font-light leading-relaxed">
            <p>
              Bir web arayüzü tasarlarken kullanıcıların bilgiye ne kadar hızlı ulaştığı doğrudan tipografik hiyerarşi ile ilişkilidir. Doğru yazı tipi boyutu, ağırlığı ve satır aralığı seçimi, kullanıcının gözünü sayfa üzerinde yönlendirir.
            </p>

            <h2 className="text-lg font-semibold text-amber-200 mt-2">1. Görsel Hiyerarşi Neden Önemli?</h2>
            <p>
              Kullanıcılar web sayfalarını kelime kelime okumazlar; sayfayı tararlar (scan ederler). Başlıkların, alt başlıkların ve gövde metinlerinin belirgin bir düzen içinde olması bu tarama sürecini kolaylaştırır.
            </p>

            <h2 className="text-lg font-semibold text-amber-200 mt-2">2. Renk ve Kontrast Kullanımı</h2>
            <p>
              Arayüz tasarımında tüm metinleri aynı beyazlıkta sunmak okunabilirliği düşürür. Ana başlıkları parlak, açıklama metinlerini ise daha yumuşak tonlarda seçmek göz yorgunluğunu engeller.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}