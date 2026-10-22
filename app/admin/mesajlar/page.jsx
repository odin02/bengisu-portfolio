import { sql } from '../../../lib/db';
import { getGirisYapanYonetici } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Mesajlar() {
  // 1. GİRİŞ YAPAN YÖNETİCİYİ VE ROLÜNÜ KONTROL ET
  const yonetici = await getGirisYapanYonetici();
  if (!yonetici) redirect('/giris');

  // ÖDEV İSTERİ: Sadece 'admin' rolündekiler mesajlar sayfasına erişebilir
  if (yonetici.rol !== 'admin') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#ef4444' }}>Yetkisiz Erişim (403)</h1>
        <p style={{ color: '#94a3b8', margin: '20px 0' }}>Bu sayfayı (Kişisel Veriler / Mesajlar) yalnızca <strong>Admin</strong> rolündeki yöneticiler görebilir.</p>
        <Link href="/admin" style={{ padding: '10px 20px', backgroundColor: '#0284c7', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          Panele Geri Dön
        </Link>
      </div>
    );
  }

  // 2. MESAJLARI ÇEKME
  const mesajlar = await sql`SELECT * FROM iletisim_mesajlari ORDER BY gonderim_zamani DESC`;

  // 3. SUNUCU İŞLEMLERİ
  async function durumDegistir(formData) {
    'use server';
    const mesajId = formData.get('mesajId');
    await sql`UPDATE iletisim_mesajlari SET okundu = NOT okundu WHERE id = ${mesajId}`;
    redirect('/admin/mesajlar');
  }

  async function mesajSil(formData) {
    'use server';
    const mesajId = formData.get('mesajId');
    await sql`DELETE FROM iletisim_mesajlari WHERE id = ${mesajId}`;
    redirect('/admin/mesajlar');
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#38bdf8', margin: 0 }}>✉️ Gelen Mesajlar</h1>
          <Link href="/admin" style={{ padding: '10px 20px', backgroundColor: '#334155', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
            🔙 Panele Dön
          </Link>
        </div>

        {mesajlar.length === 0 ? (
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', fontSize: '18px' }}>Henüz hiç iletişim mesajınız yok.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {mesajlar.map((mesaj) => (
              <div key={mesaj.id} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: `1px solid ${mesaj.okundu ? '#334155' : '#0284c7'}`, position: 'relative' }}>
                
                {!mesaj.okundu && (
                  <span style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#0284c7', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Yeni</span>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#e2e8f0' }}>{mesaj.ad_soyad}</h3>
                    <a href={`mailto:${mesaj.eposta}`} style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '14px' }}>{mesaj.eposta}</a>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '12px', color: '#94a3b8' }}>
                    {new Date(mesaj.gonderim_zamani).toLocaleString('tr-TR')}
                    <br/>
                    <span style={{ color: mesaj.kvkk_onay ? '#10b981' : '#ef4444' }}>
                      KVKK Onayı: {mesaj.kvkk_onay ? 'Verildi' : 'Yok'}
                    </span>
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                  {mesaj.mesaj}
                </p>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <form action={durumDegistir}>
                    <input type="hidden" name="mesajId" value={mesaj.id} />
                    <button type="submit" style={{ padding: '8px 15px', backgroundColor: mesaj.okundu ? 'rgba(100, 116, 139, 0.2)' : 'rgba(2, 132, 199, 0.2)', color: mesaj.okundu ? '#94a3b8' : '#38bdf8', border: `1px solid ${mesaj.okundu ? '#64748b' : '#0284c7'}`, borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      {mesaj.okundu ? 'Okunmadı İşaretle' : 'Okundu İşaretle'}
                    </button>
                  </form>
                  
                  <form action={mesajSil}>
                    <input type="hidden" name="mesajId" value={mesaj.id} />
                    <button type="submit" style={{ padding: '8px 15px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Sil
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}