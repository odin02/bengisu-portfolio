'use client';

import { useState } from 'react';
import Navbar from '../../Navbar';
import { ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function SiberGuvenlikPage() {
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
    tr: {
      title: 'Siber Güvenlik ve Sistem Mimarisi: Ağ Analizi İncelemesi',
      date: 'Ekim 2026 • Teknik İnceleme ve Güvenlik Raporu',
      intro: 'Bu çalışmada, izole sanal test ortamında ağ güvenliği açıklarını tespit etmek amacıyla Nmap ile port tarama, Wireshark ile paket yakalama süreçleri yürütülmüş ve TCK 243-245 bilişim suçları mevzuatı çerçevesinde değerlendirilmiştir.',
      step1Title: '1. Sanal Test Ortamı ve Port Analizi (Nmap)',
      step1Desc: 'İzole ağ yapısı üzerinde açık portlar ve servis sürümleri tespit edildi. Ağ güvenliği zafiyetlerinin erken teşhisinde port tarama araçlarının rolü incelendi.',
      step2Title: '2. Ağ Trafiği İzleme ve Paket Yakalama (Wireshark)',
      step2Desc: 'Ağ paketleri ham formatta yakalanarak şifrelenmemiş veri iletimleri ve protokol analizleri gerçekleştirildi.',
      step3Title: '3. Edindiğim Deneyimler ve Hukuki Çerçeve',
      step3Desc: 'Sistem güvenliğini test ederken yasal sınırların ve etik kuralların (yetki dışı erişim yasakları) ne kadar hayati olduğunu kavradım. Teknik bilginin hukuki sorumlulukla harmanlanması gerektiğini bu çalışmayla bizzat öğrendim.',
    },
    en: {
      title: 'Cyber Security and System Architecture: Network Analysis Review',
      date: 'October 2026 • Technical Review & Security Report',
      intro: 'In this study, port scanning with Nmap and packet capturing with Wireshark were performed.',
      step1Title: '1. Virtual Test Environment and Port Analysis',
      step1Desc: 'Open ports and service versions were identified.',
      step2Title: '2. Network Traffic Monitoring and Packet Capture',
      step2Desc: 'Network packets were captured in raw format to analyze unencrypted data.',
      step3Title: '3. Experience Gained and Legal Framework',
      step3Desc: 'I realized how vital legal boundaries and ethical rules are when testing system security.',
    },
    kr: {
      title: '사이버 보안 및 시스템 아키텍처: 네트워크 분석 검토',
      date: '2026년 10월 • 기술 검토 및 보안 보고서',
      intro: '격리된 가상 테스트 환경에서 Nmap과 Wireshark를 활용한 네트워크 분석 연구.',
      step1Title: '1. 가상 환경 및 포트 분석',
      step1Desc: '네트워크 구조 내 개방된 포트 식별.',
      step2Title: '2. 트래픽 모니터링 및 패킷 캡처',
      step2Desc: '원시 형식의 패킷 캡처 및 분석.',
      step3Title: '3. 인사이트 및 법적 프레임워크',
      step3Desc: '시스템 보안 테스트 시 법적 규정 준수의 중요성 학습.',
    },
    de: {
      title: 'Cybersicherheit und Systemarchitektur: Netzwerk-Analyse',
      date: 'Oktober 2026 • Technischer Prüfbericht',
      intro: 'In dieser Studie wurden Port-Scanning und Paketerfassung durchgeführt.',
      step1Title: '1. Virtuelle Testumgebung',
      step1Desc: 'Identifizierung offener Ports.',
      step2Title: '2. Netzwerkverkehrsüberwachung',
      step2Desc: 'Erfassung von Netzwerkpaketen im Rohformat.',
      step3Title: '3. Erkenntnisse',
      step3Desc: 'Bedeutung rechtlicher Rahmenbedingungen bei Sicherheitstests.',
    },
    es: {
      title: 'Ciberseguridad y Arquitectura de Sistemas: Análisis de Red',
      date: 'Octubre 2026 • Informe Técnico',
      intro: 'En este estudio se realizaron análisis de puertos y captura de paquetes.',
      step1Title: '1. Entorno de Pruebas Virtual',
      step1Desc: 'Identificación de puertos abiertos.',
      step2Title: '2. Monitoreo de Tráfico',
      step2Desc: 'Captura de paquetes en formato sin procesar.',
      step3Title: '3. Experiencia y Marco Legal',
      step3Desc: 'Importancia de los límites legales al probar la seguridad.',
    },
    ar: {
      title: 'الأمن السيبراني وهندسة الأنظمة: مراجعة تحليل الشبكة',
      date: 'أكتوبر 2026 • مراجعة تقنية وتقرير أمان',
      intro: 'في هذه الدراسة، تم إجراء فحص المنافذ باستخدام Nmap والتقاط الحزم باستخدام Wireshark.',
      step1Title: '1. بيئة الاختبار الافتراضية وتحليل المنافذ',
      step1Desc: 'تحديد المنافذ المفتوحة وإصدارات الخدمات على هيكل شبكة معزول.',
      step2Title: '2. مراقبة حركة مرور الشبكة والتقاط الحزم',
      step2Desc: 'التقاط حزم الشبكة بتنسيق خام وتحليل عمليات نقل البيانات.',
      step3Title: '3. الخبرات المكتسبة والإطار القانوني',
      step3Desc: 'أهمية الالتزام بالحدود القانونية والقواعد الأخلاقية عند اختبار أمان الأنظمة.',
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

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">{t.intro}</p>

          <div className="flex flex-col gap-4 mt-4 border-t border-stone-800 pt-6">
            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step1Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step1Desc}</p>
            </div>

            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step2Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step2Desc}</p>
            </div>

            <div className="p-5 bg-stone-950/60 border border-stone-800 rounded-2xl">
              <h3 className={`font-semibold ${currentStyle.accentColor} text-sm`}>{t.step3Title}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-light leading-relaxed">{t.step3Desc}</p>
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