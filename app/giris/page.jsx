import { sql } from '../../lib/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function GirisSayfasi(props) {
  const searchParams = await props.searchParams;

  async function girisYap(formData) {
    'use server';
    const eposta = formData.get('eposta');
    const sifre = formData.get('sifre');

    const sonuc = await sql`SELECT id, sifre_hash FROM yoneticiler WHERE eposta = ${eposta}`;
    if (sonuc.length === 0) redirect('/giris?hata=1');
    
    const yonetici = sonuc[0];
    const sifreDogruMu = await bcrypt.compare(sifre, yonetici.sifre_hash);
    if (!sifreDogruMu) redirect('/giris?hata=1');

    const token = crypto.randomBytes(32).toString('hex');
    const bitisZamani = new Date(Date.now() + 2 * 60 * 60 * 1000);

    await sql`
      INSERT INTO oturumlar (token, yonetici_id, bitis) 
      VALUES (${token}, ${yonetici.id}, ${bitisZamani.toISOString()})
    `;

    const cookieStore = await cookies();
    cookieStore.set('admin_oturum', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: bitisZamani
    });

    redirect('/admin');
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '12px', border: '1px solid #334155', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <h2 style={{ color: '#38bdf8', marginTop: 0, textAlign: 'center', marginBottom: '25px', fontSize: '24px' }}>Yönetici Girişi</h2>
        
        {searchParams?.hata && (
          <div style={{ padding: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
            E-posta veya şifre hatalı
          </div>
        )}

        <form action={girisYap} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#94a3b8', marginBottom: '8px', fontSize: '14px' }}>E-posta Adresi</label>
            <input type="email" name="eposta" required style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', color: '#94a3b8', marginBottom: '8px', fontSize: '14px' }}>Şifre</label>
            <input type="password" name="sifre" required style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ padding: '14px', backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}