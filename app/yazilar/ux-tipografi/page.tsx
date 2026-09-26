'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Yazidetay() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12 text-slate-100 font-sans">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
      </Link>

      <article className="flex flex-col gap-6">
        <span className="text-xs text-indigo-400 font-mono">Eylül 2026 • 4 dk okuma</span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Kullanıcı Deneyiminde (UX) Tipografi ve Hiyerarşi Mantığı
        </h1>
        <div className="border-b border-slate-800 my-2"></div>
        
        <div className="flex flex-col gap-4 text-slate-300 leading-relaxed text-base">
          <p>
            Bir web arayüzü tasarlarken kullanıcıların bilgiye ne kadar hızlı ulaştığı doğrudan tipografik hiyerarşi ile ilişkilidir. Doğru yazı tipi boyutu, ağırlığı ve satır aralığı seçimi, kullanıcının gözünü sayfa üzerinde yönlendirir.
          </p>
          <h2 className="text-xl font-bold text-slate-100 mt-4">1. Görsel Hiyerarşi Neden Önemli?</h2>
          <p>
            Kullanıcılar web sayfalarını kelime kelime okumazlar; sayfayı tararlar (scan ederler). Başlıkların, alt başlıkların ve gövde metinlerinin belirgin bir düzen içinde olması bu tarama sürecini kolaylaştırır.
          </p>
          <h2 className="text-xl font-bold text-slate-100 mt-4">2. Renk ve Kontrast Kullanımı</h2>
          <p>
            Arayüz tasarımında tüm metinleri aynı beyazlıkta sunmak okunabilirliği düşürür. Ana başlıkları `text-slate-100` gibi parlak, açıklama metinlerini ise `text-slate-400` gibi daha yumuşak tonlarda seçmek göz yorgunluğunu engeller.
          </p>
        </div>
      </article>
    </main>
  );
}