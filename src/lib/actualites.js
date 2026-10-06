import fs from 'fs/promises';
import path from 'path';
import { put, head, list } from '@vercel/blob';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'actualites.json');
const BLOB_FILENAME = 'actualites.json';

// Lire les données locales du fichier JSON
async function readLocalData() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Écrire les données locales
async function writeLocalData(data) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Impossible d’écrire les actualités localement:', err);
    throw new Error('Impossible d’enregistrer les actualités localement.');
  }
}

/**
 * Récupère la liste de toutes les actualités (Vercel Blob ou Local)
 */
export async function getActualites() {
  // Si le token Vercel Blob est configuré (sur Vercel)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: BLOB_FILENAME });
      const blob = blobs.find((b) => b.pathname === BLOB_FILENAME || b.pathname.endsWith(BLOB_FILENAME));

      if (blob && blob.downloadUrl) {
        const res = await fetch(blob.downloadUrl, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`Lecture du blob impossible (${res.status}).`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Le fichier des actualités dans Vercel Blob est invalide.');
        }
        return data;
      }
    } catch (err) {
      if (process.env.NODE_ENV === 'production') {
        console.error('Erreur lecture des actualités depuis Vercel Blob:', err);
        throw new Error('Impossible de lire les actualités depuis Vercel Blob.');
      }
      console.warn('Erreur lecture Vercel Blob, utilisation du fallback local:', err.message);
    }
  }

  // Fallback local
  return await readLocalData();
}

/**
 * Récupère un article par son identifiant ID
 */
export async function getActualiteById(id) {
  const actualites = await getActualites();
  return actualites.find((item) => item.id.toString() === id.toString()) || null;
}

/**
 * Sauvegarde la liste complète des actualités (Vercel Blob ou Local)
 */
export async function saveActualites(data) {
  // Sauvegarde sur Vercel Blob si disponible
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      await put(BLOB_FILENAME, JSON.stringify(data, null, 2), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
    } catch (err) {
      console.error('Erreur écriture Vercel Blob:', err);
      throw new Error('Impossible d’enregistrer les actualités dans Vercel Blob.');
    }
  } else if (process.env.NODE_ENV === 'production') {
    throw new Error('Le stockage Vercel Blob n’est pas configuré pour les actualités.');
  }

  if (process.env.NODE_ENV === 'production') return;

  // Toujours tenter la mise à jour locale (utile en dev)
  await writeLocalData(data);
}
