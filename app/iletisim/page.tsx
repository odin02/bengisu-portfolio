'use client';

import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Mail, Send, ArrowUp, CheckCircle, X } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function IletisimPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('winter');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Gönderiliyor durumu için

  // Başarı mesajını 5 saniye sonra otomatik kapatmak için
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // 5000 milisaniye = 5 saniye
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);
  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  const seasonStyles = {
    spring: { titleColor: 'text-pink-100', accentColor: 'text-pink-300', border: 'border-pink-500/30', btnBg: 'bg-pink-500 hover:bg-pink-400 text-stone-950' },
    summer: { titleColor: 'text-amber-100', accentColor: 'text-amber-300', border: 'border-amber-500/30', btnBg: 'bg-amber-500 hover:bg-amber-400 text-stone-950' },
    autumn: { titleColor: 'text-orange-100', accentColor: 'text-orange-300', border: 'border-orange-500/30', btnBg: 'bg-orange-500 hover:bg-orange-400 text-stone-950' },
    winter: { titleColor: 'text-cyan-100', accentColor: 'text-cyan-300', border: 'border-cyan-500/30', btnBg: 'bg-cyan-500 hover:bg-cyan-400 text-stone-950' },
  };

  const currentStyle = seasonStyles[season];

  const content: Record<Language, any> = {
    tr: {
      title: 'İletişim',
      sub: 'Bir projeniz mi var ya da birlikte çalışmak mı istersiniz? Bana dilediğiniz zaman ulaşabilirsiniz.',
      formName: 'ADINIZ',
      formEmail: 'E-POSTA',
      formMsg: 'MESAJINIZ',
      formBtn: isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder',
      successTitle: 'Mesajınız İletildi!',
      successDesc: 'En kısa sürede size geri dönüş yapacağım.',
    },
    en: {
      title: 'Contact',
      sub: 'Have a project or want to collaborate? Feel free to reach out anytime.',
      formName: 'YOUR NAME',
      formEmail: 'YOUR EMAIL',
      formMsg: 'YOUR MESSAGE',
      formBtn: isSubmitting ? 'Sending...' : 'Send Message',
      successTitle: 'Message Sent!',
      successDesc: 'I will get back to you as soon as possible.',
    },
    kr: {
      title: '연락처',
      sub: '협업이나 문의 사항이 있으시다면 언제든 메시지를 남겨주세요.',
      formName: '이름',
      formEmail: '이메일',
      formMsg: '메시지',
      formBtn: isSubmitting ? '보내는 중...' : '메시지 보내기',
      successTitle: '메시지 전송 완료!',
      successDesc: '최대한 빨리 연락드리겠습니다.',
    },
    de: {
      title: 'Kontakt',
      sub: 'Haben Sie ein Projekt oder möchten Sie zusammenarbeiten?',
      formName: 'NAME',
      formEmail: 'E-MAIL',
      formMsg: 'NACHRICHT',
      formBtn: isSubmitting ? 'Senden...' : 'Nachricht Senden',
      successTitle: 'Nachricht Gesendet!',
      successDesc: 'Ich werde mich so schnell wie möglich bei Ihnen melden.',
    },
    es: {
      title: 'Contacto',
      sub: '¿Tiene algún proyecto o desea colaborar?',
      formName: 'NOMBRE',
      formEmail: 'CORREO ELECTRÓNICO',
      formMsg: 'MENSAJE',
      formBtn: isSubmitting ? 'Enviando...' : 'Enviar Mensaje',
      successTitle: '¡Mensaje Enviado!',
      successDesc: 'Me pondré en contacto contigo lo antes posible.',
    },
    ar: {
      title: 'اتصل بي',
      sub: 'هل لديك مشروع أو ترغب في التعاون؟ تواصل معي في أي وقت.',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formMsg: 'رسالتك',
      formBtn: isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة',
      successTitle: 'تم إرسال الرسالة!',
      successDesc: 'سأرد عليك في أقرب وقت ممكن.',
    },
  };

  const t = content[lang];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mkjojyor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
       alert('Mesaj gönderilirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      {/* BAŞARI BİLDİRİMİ (TOAST) */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500/90 text-emerald-50 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.3)] flex items-center gap-3 sm:gap-4 backdrop-blur-md border border-emerald-400 transition-all animate-bounce">
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base">{t.successTitle}</span>
            <span className="text-xs sm:text-sm font-medium opacity-90">{t.successDesc}</span>
          </div>
          <button 
            onClick={() => setShowSuccess(false)} 
            className="ml-2 sm:ml-4 p-1.5 hover:bg-emerald-600 rounded-xl transition-colors cursor-pointer shrink-0"
            title="Kapat"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <h1 className={`text-3xl font-bold ${currentStyle.titleColor} flex items-center gap-2 transition-colors duration-500`}>
          <Mail className={`w-7 h-7 ${currentStyle.accentColor}`} /> {t.title}
        </h1>

        <div className={`p-8 bg-stone-900/80 border ${currentStyle.border} rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6 transition-all duration-500`}>
          <p className="text-stone-300 text-sm font-light">{t.sub}</p>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={`text-[11px] font-semibold ${currentStyle.accentColor} tracking-wider`}>{t.formName}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-stone-600 transition-colors" placeholder="Adınız Soyadınız" disabled={isSubmitting} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={`text-[11px] font-semibold ${currentStyle.accentColor} tracking-wider`}>{t.formEmail}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-stone-600 transition-colors" placeholder="ornek@email.com" disabled={isSubmitting} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={`text-[11px] font-semibold ${currentStyle.accentColor} tracking-wider`}>{t.formMsg}</label>
              <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-stone-600 transition-colors resize-none" placeholder="Mesajınızı buraya yazabilirsiniz..." disabled={isSubmitting} />
            </div>
            <button type="submit" disabled={isSubmitting} className={`mt-2 py-3 px-6 ${currentStyle.btnBg} font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}>
              <Send className="w-3.5 h-3.5" /> {t.formBtn}
            </button>
          </form>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-stone-800 border border-stone-700 text-stone-200 rounded-full backdrop-blur-md hover:bg-stone-700 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}