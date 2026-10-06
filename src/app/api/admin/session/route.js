import { NextResponse } from 'next/server';
import {
  ADMIN_SESSION_COOKIE,
  createAdminSession,
  verifyAdminPassword,
} from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Le mot de passe administrateur n’est pas configuré sur le serveur.' },
      { status: 503 }
    );
  }

  try {
    const { password } = await request.json();
    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: 'Code d’accès incorrect.' }, { status: 401 });
    }

    const session = createAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'La session administrateur ne peut pas être créée.' }, { status: 503 });
    }

    const response = NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } });
    response.cookies.set(ADMIN_SESSION_COOKIE, session.value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/api',
      maxAge: session.maxAge,
    });
    return response;
  } catch (error) {
    console.error('Erreur lors de la connexion administrateur:', error);
    return NextResponse.json({ error: 'Requête de connexion invalide.' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } });
  response.cookies.set(ADMIN_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/api',
    maxAge: 0,
  });
  return response;
}
