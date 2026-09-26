import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bengisu Küçük | Portfolyo & UI/UX Tasarım',
    template: '%s | Bengisu Küçük',
  },
  description: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analitiği öğrencisi Bengisu Küçük\'ün kişisel portfolyosu, UI/UX projeleri ve teknik yazıları.',
  keywords: [
    'Bengisu Küçük', 
    'Büyük Veri Analitiği', 
    'UI UX Tasarım', 
    'Next.js Portfolyo', 
    'Frontend', 
    'Veri Görselleştirme'
  ],
  authors: [{ name: 'Bengisu Küçük' }],
  creator: 'Bengisu Küçük',
  
  // Sosyal Medya Paylaşım Kartları (OpenGraph)
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bengisu-portfolio.vercel.app',
    title: 'Bengisu Küçük | Portfolyo & UI/UX Tasarım',
    description: 'Büyük Veri Analitiği projeleri, kullanıcı deneyimi tasarımları ve blog yazıları.',
    siteName: 'Bengisu Küçük Portfolio',
  },
  
  // Twitter / X Kart Ayarları
  twitter: {
    card: 'summary_large_image',
    title: 'Bengisu Küçük | Portfolyo',
    description: 'Büyük Veri Analitiği & UI/UX Tasarım Portfolyosu',
  },
  
  // Arama Motoru Bot Yönlendirmesi
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}