import { sql } from '../../../lib/db';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, kvkkOnay } = body;

    const ad_soyad = name?.trim();
    const eposta = email?.trim();
    const mesaj = message?.trim();

    // Alan Doğrulamaları
    if (!ad_soyad || !eposta || !mesaj) {
      return NextResponse.json({ error: 'Lütfen tüm alanları doldurun.' }, { status: 400 });
    }

    if (!kvkkOnay) {
      return NextResponse.json({ error: 'Lütfen KVKK onay kutusunu işaretleyin.' }, { status: 400 });
    }

    if (ad_soyad.length > 100 || eposta.length > 100 || mesaj.length > 2000) {
      return NextResponse.json({ error: 'Karakter sınırını aştınız.' }, { status: 400 });
    }

    // Veritabanına Kayıt
    await sql`
      INSERT INTO iletisim_mesajlari (ad_soyad, eposta, mesaj, kvkk_onay)
      VALUES (${ad_soyad}, ${eposta}, ${mesaj}, ${kvkkOnay})
    `;

    // Sayfa Önbelleklerini Temizleme
    revalidatePath('/admin');
    revalidatePath('/admin/mesajlar');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mesaj kaydetme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
  }
}