import { createHmac, timingSafeEqual } from 'node:crypto';

export const ADMIN_SESSION_COOKIE = 'hac_admin_session';
const SESSION_DURATION_SECONDS = 8 * 60 * 60;

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD;
}

function createSessionSignature(expiresAt) {
  const secret = process.env.ADMIN_SESSION_SECRET || getAdminPassword();
  if (!secret) return null;

  return createHmac('sha256', secret).update(expiresAt).digest('hex');
}

export function verifyAdminPassword(password) {
  const expectedPassword = getAdminPassword();
  if (!expectedPassword || typeof password !== 'string') return false;

  const provided = Buffer.from(password);
  const expected = Buffer.from(expectedPassword);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function createAdminSession() {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS);
  const signature = createSessionSignature(expiresAt);
  if (!signature) return null;

  return { value: `${expiresAt}.${signature}`, maxAge: SESSION_DURATION_SECONDS };
}

export function isAdminAuthenticated(request) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;

  const [expiresAt, providedSignature, ...extra] = token.split('.');
  if (!expiresAt || !providedSignature || extra.length > 0 || !/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

  const expectedSignature = createSessionSignature(expiresAt);
  if (!expectedSignature) return false;

  const provided = Buffer.from(providedSignature);
  const expected = Buffer.from(expectedSignature);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}
