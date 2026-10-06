import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export const runtime = 'nodejs';

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const IMAGE_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

export async function POST(request) {
  if (!isAdminAuthenticated(request)) {
    return NextResponse.json({ error: 'Authentification administrateur requise.' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const image = formData.get('image');

    if (!image || typeof image === 'string' || typeof image.arrayBuffer !== 'function') {
      return NextResponse.json({ error: 'Aucune photo valide n’a été fournie.' }, { status: 400 });
    }

    const extension = IMAGE_TYPES[image.type];
    if (!extension) {
      return NextResponse.json({ error: 'Format non pris en charge. Utilisez JPG, PNG ou WebP.' }, { status: 400 });
    }

    if (image.size === 0 || image.size > MAX_IMAGE_SIZE) {
      return NextResponse.json({ error: 'La photo doit peser entre 1 octet et 5 Mo.' }, { status: 400 });
    }

    const filename = `${randomUUID()}.${extension}`;
    let url;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`actualites/${filename}`, image, {
        access: 'public',
        addRandomSuffix: true,
        contentType: image.type,
      });
      url = blob.url;
    } else if (process.env.NODE_ENV === 'development') {
      const uploadDirectory = path.join(process.cwd(), 'public', 'uploads', 'actualites');
      await fs.mkdir(uploadDirectory, { recursive: true });
      await fs.writeFile(path.join(uploadDirectory, filename), Buffer.from(await image.arrayBuffer()));
      url = `/uploads/actualites/${filename}`;
    } else {
      return NextResponse.json(
        { error: 'Le stockage des photos n’est pas configuré. Ajoutez BLOB_READ_WRITE_TOKEN pour activer les imports.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l’import de la photo d’actualité:', error);
    return NextResponse.json({ error: 'Erreur lors de l’enregistrement de la photo.' }, { status: 500 });
  }
}
