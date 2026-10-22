import { sql } from '../../lib/db';
import CalismalarClient from './CalismalarClient';

export const dynamic = 'force-dynamic';

export default async function CalismalarPage() {
  const kitaplar = await sql`
    SELECT ok.id, ok.kitap_adi, ok.yazar, ok.puan, kt.ad as kategori_adi
    FROM okunan_kitaplar ok
    LEFT JOIN kitap_turleri kt ON ok.kategori_id = kt.id
    WHERE ok.yayinda = true
    ORDER BY ok.id DESC
  `;

  const oneCikanlar = await sql`
    SELECT id, kitap_adi, yazar, puan, bitirme_tarihi
    FROM okunan_kitaplar 
    WHERE bitirme_tarihi IS NOT NULL AND yayinda = true
    ORDER BY bitirme_tarihi DESC 
    LIMIT 4
  `;

  return <CalismalarClient kitaplar={kitaplar} oneCikanlar={oneCikanlar} />;
}