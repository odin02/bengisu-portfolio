'use client';

import { useState } from 'react';
import Navbar from '../Navbar';
import { Mail, Send, ArrowUp } from 'lucide-react';

type Language = 'tr' | 'en' | 'kr' | 'de' | 'es' | 'ar';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function IletisimPage() {
  const [lang, setLang] = useState<Language>('tr');
  const [season, setSeason] = useState<Season>('autumn');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const bgImages = {
    spring: '/ilkbahararkaplan.png',
    summer: '/yazarkaplan.png',
    autumn: '/sonbahararkaplan.png',
    winter: '/kisarkaplan.png',
  };

  const content: Record<Language, any> = {
    tr: {
      title: 'İletişim',
      sub: 'Bir projeniz mi var ya da birlikte çalışmak mı istersiniz? Bana dilediğiniz zaman ulaşabilirsiniz.',
      formName: 'ADINIZ',
      formEmail: 'E-POSTA',
      formMsg: 'MESAJINIZ',
      formBtn: 'Mesaj Gönder',
    },
    en: {
      title: 'Contact',
      sub: 'Have a project or want to collaborate? Feel free to reach out anytime.',
      formName: 'YOUR NAME',
      formEmail: 'YOUR EMAIL',
      formMsg: 'YOUR MESSAGE',
      formBtn: 'Send Message',
    },
    kr: {
      title: '연락처',
      sub: '협업이나 문의 사항이 있으시다면 언제든 메시지를 남겨주세요.',
      formName: '이름',
      formEmail: '이메일',
      formMsg: '메시지',
      formBtn: '메시지 보내기',
    },
    de: {
      title: 'Kontakt',
      sub: 'Haben Sie ein Projekt oder möchten Sie zusammenarbeiten?',
      formName: 'NAME',
      formEmail: 'E-MAIL',
      formMsg: 'NACHRICHT',
      formBtn: 'Nachricht Senden',
    },
    es: {
      title: 'Contacto',
      sub: '¿Tiene algún proyecto o desea colaborar?',
      formName: 'NOMBRE',
      formEmail: 'CORREO ELECTRÓNICO',
      formMsg: 'MENSAJE',
      formBtn: 'Enviar Mensaje',
    },
    ar: {
      title: 'اتصل بي',
      sub: 'هل لديك مشروع أو ترغب في التعاون؟ تواصل معي في أي وقت.',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formMsg: 'رسالتك',
      formBtn: 'إرسال الرسالة',
    },
  };

  const t = content[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:bengisukucuk02@gmail.com?subject=Portfolyo Mesajı - ${formData.name}&body=Gönderen: ${formData.name} (${formData.email})%0D%0A%0D%0AMesaj:%0D%0A${formData.message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className={`relative min-h-screen text-amber-50 font-sans selection:bg-amber-500/30 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105 transition-all duration-1000" style={{ backgroundImage: `url('${bgImages[season]}')` }} />
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] -z-20" />

      <Navbar lang={lang} setLang={setLang} season={season} setSeason={setSeason} />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-amber-100 flex items-center gap-2">
          <Mail className="w-7 h-7 text-amber-400" /> {t.title}
        </h1>

        <div className="p-8 bg-stone-900/70 border border-amber-500/30 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <p className="text-stone-300 text-sm font-light">{t.sub}</p>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formName}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors" placeholder="Adınız Soyadınız" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formEmail}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors" placeholder="ornek@email.com" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-amber-300 tracking-wider">{t.formMsg}</label>
              <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-stone-950/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 transition-colors resize-none" placeholder="Mesajınızı buraya yazabilirsiniz..." />
            </div>
            <button type="submit" className="mt-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer">
              <Send className="w-3.5 h-3.5" /> {t.formBtn}
            </button>
          </form>
        </div>
      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 rounded-full backdrop-blur-md hover:bg-amber-500/40 transition-all shadow-xl cursor-pointer z-50">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}