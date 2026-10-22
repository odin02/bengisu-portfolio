import { sql } from '../../lib/db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link'; // Sayfalar arası geçiş için

export default async function AdminPaneli() {
  // 1. Güvenlik: Oturum Kontrolü
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_oturum')?.value;

  if (!token) redirect('/giris');

  const oturumSonucu = await sql`
    SELECT yonetici_id FROM oturumlar 
    WHERE token = ${token} AND bitis > NOW()
  `;

  if (oturumSonucu.length === 0) redirect('/giris');

  // 2. ÖDEV İSTERİ: İstatistikleri Çekme (COUNT)
  // Kitap sayısını buluyoruz
  const kitapSorgu = await sql`SELECT COUNT(*) as toplam FROM okunan_kitaplar`;
  const toplamKitap = kitapSorgu[0].toplam;

  // Okunmamış mesaj sayısını buluyoruz
  const mesajSorgu = await sql`SELECT COUNT(*) as okunmamis FROM iletisim_mesajlari WHERE okundu = false`;
  const okunmamisMesaj = mesajSorgu[0].okunmamis;

  // 3. Güvenli Çıkış İşlemi
  async function cikisYap() {
    'use server';
    const cookieStore = await cookies();
    const mevcutToken = cookieStore.get('admin_oturum')?.value;
    if (mevcutToken) {
      await sql`DELETE FROM oturumlar WHERE token = ${mevcutToken}`;
    }
    cookieStore.delete('admin_oturum');
    redirect('/giris');
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Üst Kısım: Başlık ve Çıkış Butonu */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '30px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', color: '#38bdf8' }}>Yönetim Paneli</h1>
            <p style={{ margin: '5px 0 0 0', color: '#94a3b8' }}>Öğrenci No: 2516016013 - Bengisu Küçük</p>
          </div>
          <form action={cikisYap}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              Güvenli Çıkış Yap
            </button>
          </form>
        </div>

        {/* Orta Kısım: İstatistik Kartları */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          
          <div style={{ flex: 1, backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>Toplam Kitap</h3>
            <p style={{ margin: 0, fontSize: '36px', fontWeight: 'bold', color: '#f8fafc' }}>{toplamKitap}</p>
          </div>

          <div style={{ flex: 1, backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>Okunmamış Mesajlar</h3>
            <p style={{ margin: 0, fontSize: '36px', fontWeight: 'bold', color: '#fbbf24' }}>{okunmamisMesaj}</p>
          </div>

        </div>

        {/* Alt Kısım: Menü Butonları */}
        <h2 style={{ fontSize: '20px', color: '#e2e8f0', marginBottom: '15px' }}>Panel Menüsü</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link href="/admin/okunan-kitaplar" style={{ textDecoration: 'none', padding: '15px 25px', backgroundColor: '#0284c7', color: 'white', borderRadius: '8px', fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
            📚 Kitapları Yönet
          </Link>
          <Link href="/admin/mesajlar" style={{ textDecoration: 'none', padding: '15px 25px', backgroundColor: '#059669', color: 'white', borderRadius: '8px', fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
            ✉️ Gelen Mesajlar
          </Link>
        </div>

      </div>
    </div>
  );
}