import { NextResponse } from 'next/server';
import { getActualites, saveActualites } from '@/lib/actualites';

export const dynamic = 'force-dynamic';

export async function GET() {
  const actualites = await getActualites();
  return NextResponse.json(actualites);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, category, date, desc, content, author, image, readTime, link } = body;

    if (!title || !desc) {
      return NextResponse.json({ error: 'Le titre et la description sont obligatoires.' }, { status: 400 });
    }

    const currentActualites = await getActualites();
    const newId = Date.now().toString();

    const newActualite = {
      id: newId,
      title: title.trim(),
      category: category?.trim() || 'Actualité',
      date: date?.trim() || new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      desc: desc.trim(),
      content: content?.trim() || desc.trim(),
      author: author?.trim() || 'Communication HAC Group',
      image: image?.trim() || '/images/cooperation.jpg',
      readTime: readTime?.trim() || '3 min de lecture',
      link: link?.trim() || `/actualites/${newId}`,
    };

    // Ajouter en début de liste (la plus récente d'abord)
    const updated = [newActualite, ...currentActualites];
    await saveActualites(updated);

    return NextResponse.json({ success: true, item: newActualite }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'enregistrement.' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    const currentActualites = await getActualites();
    const updated = currentActualites.filter((item) => item.id.toString() !== id.toString());

    await saveActualites(updated);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete Error:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression.' }, { status: 500 });
  }
}
