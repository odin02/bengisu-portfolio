import { sql } from '../../../lib/db';
import { getGirisYapanYonetici } from '../../../lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function KitaplariYonet(props) {
  const searchParams = await props.searchParams;
  const editId = searchParams?.edit;

  // 1. GÜVENLİK VE ROL KONTROLÜ
  const yonetici = await getGirisYapanYonetici();
  if (!yonetici) redirect('/giris');

  // 2. VERİLERİ ÇEKME
  const kitaplar = await sql`
    SELECT ok.id, ok.kitap_adi, ok.yazar, ok.puan, kt.ad as kategori_adi, ok.yayinda 
    FROM okunan_kitaplar ok
    LEFT JOIN kitap_turleri kt ON ok.kategori_id = kt.id
    ORDER BY ok.id DESC
  `;
  const kategoriler = await sql`SELECT * FROM kitap_turleri`;

  let duzenlenecekKitap = null;
  if (editId) {
    const sonuc = await sql`SELECT * FROM okunan_kitaplar WHERE id = ${editId}`;
    if (sonuc.length > 0) duzenlenecekKitap = sonuc[0];
  }

  // 3. SUNUCU İŞLEMLERİ (Server Actions)
  async function kitapEkle(formData) {
    'use server';
    const kitapAdi = formData.get('kitapAdi');
    const yazar = formData.get('yazar').toLocaleUpperCase('tr-TR');
    const kategoriId = formData.get('kategoriId');
    const puan = formData.get('puan');

    await sql`
      INSERT INTO okunan_kitaplar (kitap_adi, yazar, kategori_id, puan, yayinda) 
      VALUES (${kitapAdi}, ${yazar}, ${kategoriId}, ${puan}, true)
    `;
    redirect('/admin/okunan-kitaplar');
  }

  async function kitapGuncelle(formData) {
    'use server';
    const id = formData.get('id');
    const kitapAdi = formData.get('kitapAdi');
    const yazar = formData.get('yazar').toLocaleUpperCase('tr-TR');
    const kategoriId = formData.get('kategoriId');
    const puan = formData.get('puan');

    await sql`
      UPDATE okunan_kitaplar 
      SET kitap_adi = ${kitapAdi}, yazar = ${yazar}, kategori_id = ${kategoriId}, puan = ${puan}
      WHERE id = ${id}
    `;
    redirect('/admin/okunan-kitaplar');
  }

  // ÖDEV İSTERİ: Sadece 'admin' rolündekiler silebilir (Sunucu tarafı koruma)
  async function kitapSil(formData) {
    'use server';
    const aktifYonetici = await getGirisYapanYonetici();
    if (!aktifYonetici || aktifYonetici.rol !== 'admin') {
      throw new Error('Yetkisiz işlem: Editörler kayıt silemez!');
    }

    const kitapId = formData.get('kitapId');
    await sql`DELETE FROM okunan_kitaplar WHERE id = ${kitapId}`;
    redirect('/admin/okunan-kitaplar');
  }

  async function yayindaDurumuDegistir(formData) {
    'use server';
    const kitapId = formData.get('kitapId');
    await sql`UPDATE okunan_kitaplar SET yayinda = NOT yayinda WHERE id = ${kitapId}`;
    redirect('/admin/okunan-kitaplar');
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Üst Menü */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#38bdf8', margin: 0 }}>📚 Kitapları Yönet</h1>
            <p style={{ color: '#94a3b8', margin: '5px 0 0 0', fontSize: '14px' }}>
              Giriş Yapan Rol: <strong style={{ color: '#f59e0b' }}>{yonetici.rol.toUpperCase()}</strong>
            </p>
          </div>
          <Link href="/admin" style={{ padding: '10px 20px', backgroundColor: '#334155', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
            🔙 Panele Dön
          </Link>
        </div>

        {/* Ekleme / Düzenleme Formu */}
        <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #334155' }}>
          <h2 style={{ marginTop: 0, color: '#e2e8f0', fontSize: '20px' }}>
            {duzenlenecekKitap ? 'Kitabı Düzenle' : 'Yeni Kitap Ekle'}
          </h2>
          
          <form action={duzenlenecekKitap ? kitapGuncelle : kitapEkle} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {duzenlenecekKitap && <input type="hidden" name="id" value={duzenlenecekKitap.id} />}
            
            <input type="text" name="kitapAdi" placeholder="Kitap Adı" defaultValue={duzenlenecekKitap?.kitap_adi || ''} required style={{ flex: 1, minWidth: '200px', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }} />
            <input type="text" name="yazar" placeholder="Yazar" defaultValue={duzenlenecekKitap?.yazar || ''} required style={{ flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }} />
            
            <select name="kategoriId" defaultValue={duzenlenecekKitap?.kategori_id || ''} required style={{ flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }}>
              <option value="">Kategori Seçin</option>
              {kategoriler.map(k => (
                <option key={k.id} value={k.id}>{k.ad}</option>
              ))}
            </select>
            
            <input type="number" name="puan" placeholder="Puan (1-10)" min="1" max="10" defaultValue={duzenlenecekKitap?.puan || ''} required style={{ width: '120px', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' }} />
            
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: duzenlenecekKitap ? '#f59e0b' : '#0284c7', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              {duzenlenecekKitap ? 'Güncelle' : 'Ekle'}
            </button>

            {duzenlenecekKitap && (
              <Link href="/admin/okunan-kitaplar" style={{ padding: '10px 20px', backgroundColor: '#475569', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                İptal
              </Link>
            )}
          </form>
        </div>

        {/* Kitaplar Tablosu */}
        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#334155' }}>
              <tr>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>Kitap Adı</th>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>Yazar</th>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>Kategori</th>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>Puan</th>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>Durum</th>
                <th style={{ padding: '15px', color: '#cbd5e1' }}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {kitaplar.map((kitap) => (
                <tr key={kitap.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '15px' }}>{kitap.kitap_adi}</td>
                  <td style={{ padding: '15px' }}>{kitap.yazar}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ backgroundColor: '#0f172a', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', border: '1px solid #475569' }}>
                      {kitap.kategori_adi || 'Kategorisiz'}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>{kitap.puan}/10</td>
                  
                  <td style={{ padding: '15px' }}>
                    <form action={yayindaDurumuDegistir}>
                      <input type="hidden" name="kitapId" value={kitap.id} />
                      <button type="submit" style={{ padding: '6px 12px', backgroundColor: kitap.yayinda ? 'rgba(16, 185, 129, 0.1)' : 'rgba(100, 116, 139, 0.1)', color: kitap.yayinda ? '#10b981' : '#94a3b8', border: `1px solid ${kitap.yayinda ? '#10b981' : '#64748b'}`, borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                        {kitap.yayinda ? '🟢 Yayında' : '⚫ Gizli'}
                      </button>
                    </form>
                  </td>

                  <td style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                    <Link href={`/admin/okunan-kitaplar?edit=${kitap.id}`} style={{ padding: '6px 12px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid #f59e0b', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}>
                      Düzenle
                    </Link>

                    {/* ÖDEV İSTERİ: Sil Butonu YALNIZCA 'admin' rolüne görünür! */}
                    {yonetici.rol === 'admin' && (
                      <form action={kitapSil}>
                        <input type="hidden" name="kitapId" value={kitap.id} />
                        <button type="submit" style={{ padding: '6px 12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                          Sil
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}