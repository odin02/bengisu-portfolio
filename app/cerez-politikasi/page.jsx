import { sql } from '../../lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function CerezPolitikasi() {
  // Veritabanından çerezleri çekiyoruz
  const cerezler = await sql`SELECT * FROM cerezler ORDER BY id ASC`;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h1 style={{ margin: 0, color: '#38bdf8', fontSize: '28px' }}>Çerez Politikası ve Aydınlatma Metni</h1>
          <Link href="/iletisim" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>← İletişime Dön</Link>
        </div>

        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '25px' }}>
          Bu internet sitesi, kullanıcı deneyimini iyileştirmek, güvenli oturum yönetimi sağlamak ve site performansını analiz etmek amacıyla çerezler (cookies) kullanmaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kullanılan çerezler aşağıda listelenmiştir:
        </p>

        <h2 style={{ fontSize: '20px', color: '#e2e8f0', marginBottom: '15px' }}>Kullanılan Çerez Listesi</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {cerezler.map((cerez) => (
            <div key={cerez.id} style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '16px' }}>{cerez.ad}</h3>
                <span style={{ padding: '4px 10px', backgroundColor: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {cerez.tur}
                </span>
              </div>
              <p style={{ margin: '0 0 10px 0', color: '#94a3b8', fontSize: '14px' }}><strong>Amaç:</strong> {cerez.amac}</p>
              <p style={{ margin: 0, color: '#64748b', fontSize: '13px' }}><strong>Saklama Süresi:</strong> {cerez.sure}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#0f172a', borderRadius: '10px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#e2e8f0', fontSize: '16px' }}>Zorunlu Çerezler İçin Açık Rıza Gerekir mi?</h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
            KVKK ve ilgili rehberler gereğince, sitenin düzgün çalışabilmesi ve güvenliğin (örneğin yönetici oturumu) sağlanması için kullanılan <strong>zorunlu çerezler</strong>, kullanıcıdan açık rıza alınmaksızın kullanılabilir. Ancak analitik veya pazarlama çerezleri eklenseydi açık rıza (onay kutusu) zorunlu olurdu.
          </p>
        </div>

      </div>
    </div>
  );
}