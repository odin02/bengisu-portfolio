'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import { Sparkles, ArrowUp, BookOpen, Star } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

// Sunucudan gelen verileri (kitaplar ve oneCikanlar) props olarak karşılıyoruz
export default function CalismalarClient({ kitaplar, oneCikanlar }: { kitaplar: any[], oneCikanlar: any[] }) {
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
    tr: { title: 'Uygulamalı Çalışmalar', subtitle: 'Üniversite eğitimim kapsamında gerçekleştirdiğim veri analizi, modelleme ve sistem güvenliği incelemeleri.', work1Tag: 'Büyük Veri Analitiği', work1Title: 'Bir Veri Setini 5V ile Sınıflandırma', work1Desc: 'Kaggle veri seti seçimi, 5V eksenlerinde konumlandırma.', work2Tag: 'Siber Güvenlik', work2Title: 'Sanal Sistemler Üzerinde Port Analizi', work2Desc: 'Nmap ile port analizi ve Wireshark raporu.', readMore: 'Detaylı İncele ↗' },
    en: { title: 'Applied Works', subtitle: 'Data modeling and system security reviews.', work1Tag: 'Big Data', work1Title: 'Dataset Classification with 5V', work1Desc: 'Kaggle dataset analysis.', work2Tag: 'Cyber Security', work2Title: 'Port Analysis', work2Desc: 'Nmap and Wireshark report.', readMore: 'View Details ↗' },
    kr: { title: '응용 연구', subtitle: '데이터 분석 및 시스템 보안 연구.', work1Tag: '빅데이터', work1Title: '5V 분류', work1Desc: 'Kaggle 분석.', work2Tag: '보안', work2Title: '포트 분석', work2Desc: 'Nmap 분석.', readMore: '상세 보기 ↗' },
    de: { title: 'Praktische Arbeiten', subtitle: 'Datenanalyse und SystemSicherheitsprüfungen.', work1Tag: 'Big Data', work1Title: '5V Klassifizierung', work1Desc: 'Kaggle Analyse.', work2Tag: 'Sicherheit', work2Title: 'Port-Analyse', work2Desc: 'Nmap Analyse.', readMore: 'Ansehen ↗' },
    es: { title: 'Trabajos Aplicados', subtitle: 'Análisis prácticos y revisiones de seguridad.', work1Tag: 'Big Data', work1Title: 'Clasificación 5V', work1Desc: 'Análisis Kaggle.', work2Tag: 'Seguridad', work2Title: 'Análisis de Puertos', work2Desc: 'Análisis Nmap.', readMore: 'Ver Detalles ↗' },
    ar: { title: 'الأعمال التطبيقية', subtitle: 'تحليلات ومراجعات أمان الأنظمة.', work1Tag: 'البيانات الكبيرة', work1Title: 'تصنيف 5V', work1Desc: 'تحليل Kaggle.', work2Tag: 'الأمن السيبراني', work2Title: 'تحليل المنافذ', work2Desc: 'تحليل Nmap.', readMore: 'عرض التفاصيل ↗' },
  };

  const t = content[lang];

  return (
    <div className={`relative min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* ÇALIŞMALAR & PROJELER */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className={`text-3xl font-bold ${currentStyle.titleColor} flex items-center gap-2 transition-colors duration-500`}>
              <Sparkles className={`w-7 h-7 ${currentStyle.accentColor}`} /> {t.title}
            </h1>
            <p className="text-stone-300 text-sm font-light">{t.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/odevler/buyuk-veri-5v">
              <div className={`p-6 bg-stone-900/80 border ${currentStyle.border} rounded-2xl flex flex-col justify-between hover:border-stone-600 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer group duration-500`}>
                <div>
                  <span className={`text-[11px] ${currentStyle.accentColor} font-mono`}>{t.work1Tag}</span>
                  <h3 className={`font-semibold text-base mt-1 ${currentStyle.titleColor} group-hover:opacity-80 transition-opacity`}>{t.work1Title}</h3>
                  <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.work1Desc}</p>
                </div>
                <span className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} mt-6 font-medium`}>{t.readMore}</span>
              </div>
            </Link>

            <Link href="/odevler/siber-guvenlik-lab">
              <div className={`p-6 bg-stone-900/80 border ${currentStyle.border} rounded-2xl flex flex-col justify-between hover:border-stone-600 transition-all backdrop-blur-md shadow-lg h-full cursor-pointer group duration-500`}>
                <div>
                  <span className={`text-[11px] ${currentStyle.accentColor} font-mono`}>{t.work2Tag}</span>
                  <h3 className={`font-semibold text-base mt-1 ${currentStyle.titleColor} group-hover:opacity-80 transition-opacity`}>{t.work2Title}</h3>
                  <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">{t.work2Desc}</p>
                </div>
                <span className={`inline-flex items-center gap-1 text-xs ${currentStyle.accentColor} mt-6 font-medium`}>{t.readMore}</span>
              </div>
            </Link>
          </div>
        </section>

        {/* ÖNE ÇIKAN KİTAPLAR */}
        {oneCikanlar.length > 0 && (
          <section className="flex flex-col gap-6 pt-6 border-t border-stone-800">
            <h2 className={`text-2xl font-bold ${currentStyle.titleColor} flex items-center gap-2`}>
              <Star className={`w-6 h-6 ${currentStyle.accentColor}`} /> Öne Çıkanlar (Son Okuduklarım)
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {oneCikanlar.map(kitap => (
                <div key={kitap.id} className={`p-4 bg-stone-900/50 border ${currentStyle.border} rounded-xl`}>
                  <h4 className="text-stone-100 font-semibold text-sm truncate" title={kitap.kitap_adi}>{kitap.kitap_adi}</h4>
                  <p className="text-stone-400 text-xs mt-1 truncate">{kitap.yazar}</p>
                  <div className="mt-3 flex justify-between items-center text-xs">
                    <span className={`${currentStyle.accentColor} font-bold`}>{kitap.puan}/10</span>
                    <span className="text-stone-500">{new Date(kitap.bitirme_tarihi).toLocaleDateString('tr-TR')}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TÜM KİTAPLAR */}
        <section className="flex flex-col gap-6 pt-6 border-t border-stone-800">
          <h2 className={`text-2xl font-bold ${currentStyle.titleColor} flex items-center gap-2`}>
            <BookOpen className={`w-6 h-6 ${currentStyle.accentColor}`} /> Tüm Kitaplığım
          </h2>
          
          <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/30 backdrop-blur-md">
            <table className="w-full text-left text-sm text-stone-300">
              <thead className="bg-stone-900/80 text-xs uppercase border-b border-stone-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Kitap Adı</th>
                  <th className="px-6 py-4 font-semibold">Yazar</th>
                  <th className="px-6 py-4 font-semibold">Kategori</th>
                  <th className="px-6 py-4 font-semibold text-center">Puan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800">
                {kitaplar.map(kitap => (
                  <tr key={kitap.id} className="hover:bg-stone-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-stone-100">{kitap.kitap_adi}</td>
                    <td className="px-6 py-4">{kitap.yazar}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-full bg-stone-800 text-stone-300">
                        {kitap.kategori_adi || 'Diğer'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`${currentStyle.accentColor} font-bold`}>{kitap.puan}/10</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-stone-800 border border-stone-700 text-stone-200 rounded-full backdrop-blur-md hover:bg-stone-700 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}