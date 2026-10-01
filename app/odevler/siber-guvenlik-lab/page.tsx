'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';

export default function SiberGuvenlikLabPage() {
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
      badge: 'Siber Güvenlik & Bilişim Hukuku • Uygulamalı Lab',
      title: 'Kendi Sanal Makinenizde Dört Adım Lab',
      desc: 'Lab tamamen kendi izole ağında (Kali + bir hedef VM, host-only ağ). Sonraki derse bu dördünü yapmış ve ekran görüntüsünü almış gelmen bekleniyor.',
      step1Title: '1. Hedef VM\'ini Nmap ile tara',
      step1Desc: 'sudo nmap -sV -p- ile açık portları ve sürümleri listele. Çıktıyı kaydet.',
      step2Title: '2. Wireshark ile yakala',
      step2Desc: 'eth0/host-only arayüzünde yakalamayı başlat; hedefe bir ping ve HTTP isteği at.',
      step3Title: '3. Bir display filter yaz',
      step3Desc: 'Önce http, sonra tcp.flags.syn==1 filtresini uygula; el sıkışmayı bul.',
      step4Title: '4. Bir bulgu raporla',
      step4Desc: 'Şifresiz bir alan (örn. HTTP gövdesi) yakala, ekran görüntüsüyle 3 cümlede açıkla.',
      warning: 'Yalnızca kendi laboratuvarında. Sana ait olmayan bir ağı veya sistemi izinsiz taramak/dinlemek TCK 243-245 kapsamında suçtur. İzin = sınırı çizen tek şey.',
    },
    en: {
      back: 'Back to Home',
      badge: 'Cyber Security & IT Law • Practical Lab',
      title: 'Four-Step Lab on Your Virtual Machine',
      desc: 'The lab is in an isolated network (Kali + Target VM). You are expected to complete these four steps before the next class.',
      step1Title: '1. Scan Target VM with Nmap',
      step1Desc: 'List open ports and versions using sudo nmap -sV -p-. Save the output.',
      step2Title: '2. Capture with Wireshark',
      step2Desc: 'Start capture on eth0/host-only interface; send a ping and HTTP request.',
      step3Title: '3. Write a display filter',
      step3Desc: 'Apply http filter, then tcp.flags.syn==1; find the handshake.',
      step4Title: '4. Report a finding',
      step4Desc: 'Capture unencrypted fields (HTTP body) and explain in 3 sentences.',
      warning: 'Only in your own laboratory. Unauthorized scanning or sniffing is illegal.',
    },
    kr: {
      back: '메인으로 돌아가기',
      badge: '사이버 보안 및 IT 법률 • 실습',
      title: '가상 머신 4단계 실습',
      desc: '격리된 가상 네트워크 환경에서 진행되는 실습 과정입니다.',
      step1Title: '1. Nmap으로 타겟 스캔',
      step1Desc: 'sudo nmap 명령어로 열린 포트와 버전을 확인하세요.',
      step2Title: '2. Wireshark로 패킷 캡처',
      step2Desc: '인터페이스에서 패킷 캡처를 시작하고 트래픽을 분석하세요.',
      step3Title: '3. 디스플레이 필터 작성',
      step3Desc: 'http 및 tcp.flags.syn==1 필터를 적용해 핸드셰이크를 찾으세요.',
      step4Title: '4. 취약점 보고서 작성',
      step4Desc: '암호화되지 않은 필드를 캡처하고 보고하세요.',
      warning: '허가되지 않은 네트워크 스캔은 불법입니다.',
    },
    de: {
      back: 'Zur Startseite',
      badge: 'Cybersicherheit & IT-Recht • Praktisches Lab',
      title: 'Vier-Schritte-Lab auf Ihrer VM',
      desc: 'Das Lab findet in einem isolierten Netzwerk statt.',
      step1Title: '1. Ziel-VM mit Nmap scannen',
      step1Desc: 'Offene Ports und Versionen mit sudo nmap auflisten.',
      step2Title: '2. Mit Wireshark erfassen',
      step2Desc: 'Erfassung auf der eth0-Schnittstelle starten.',
      step3Title: '3. Display-Filter schreiben',
      step3Desc: 'http und tcp.flags.syn==1 Filter anwenden.',
      step4Title: '4. Einen Fund melden',
      step4Desc: 'Unverschlüsselte Felder erfassen und erklären.',
      warning: 'Nur im eigenen Labor. Unbefugtes Scannen ist illegal.',
    },
    es: {
      back: 'Volver al Inicio',
      badge: 'Ciberseguridad y Derecho IT • Laboratorio',
      title: 'Laboratorio de Cuatro Pasos en tu Máquina Virtual',
      desc: 'El laboratorio se realiza en una red aislada.',
      step1Title: '1. Escanear la VM objetivo con Nmap',
      step1Desc: 'Listar puertos abiertos y versiones con sudo nmap.',
      step2Title: '2. Capturar con Wireshark',
      step2Desc: 'Iniciar captura en la interfaz y enviar una solicitud HTTP.',
      step3Title: '3. Escribir un filtro de pantalla',
      step3Desc: 'Aplicar filtro http y tcp.flags.syn==1.',
      step4Title: '4. Reportar un hallazgo',
      step4Desc: 'Capturar campos sin cifrar y explicar en 3 oraciones.',
      warning: 'Solo en su propio laboratorio. El escaneo no autorizado es ilegal.',
    },
    ar: {
      back: 'العودة للرئيسية',
      badge: 'الأمن السيبراني وقانون تكنولوجيا المعلومات • مختبر عملي',
      title: 'مختبر من أربع خطوات على جهازك الافتراضي',
      desc: 'المختبر في شبكة معزولة تماماً.',
      step1Title: '1. فحص الجهاز المستهدف بـ Nmap',
      step1Desc: 'سرد المنافذ المفتوحة باستخدام sudo nmap.',
      step2Title: '2. التقاط الحزم بـ Wireshark',
      step2Desc: 'بدء الالتقاط على واجهة eth0 وإرسال طلب HTTP.',
      step3Title: '3. كتابة عامل تصفية (Filter)',
      step3Desc: 'تطبيق فلتر http ثم tcp.flags.syn==1.',
      step4Title: '4. الإبلاغ عن نتيجة',
      step4Desc: 'التقاط حقول غير مشفرة وشرحها في 3 جمل.',
      warning: 'فقط في مختبرك الخاص. الفحص غير الماح به غير قانوني.',
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

          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-200 mt-4">
            ⚠️ {t.warning}
          </div>
        </article>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}