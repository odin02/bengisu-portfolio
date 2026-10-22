import { sql } from './db';
import { cookies } from 'next/headers';

// Oturum açan yöneticinin bilgilerini ve rolünü döndüren fonksiyon
export async function getGirisYapanYonetici() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_oturum')?.value;
  if (!token) return null;

  const sonuc = await sql`
    SELECT y.id, y.eposta, y.rol 
    FROM oturumlar o
    JOIN yoneticiler y ON o.yonetici_id = y.id
    WHERE o.token = ${token} AND o.bitis > NOW()
  `;

  if (sonuc.length === 0) return null;
  return sonuc[0];
}