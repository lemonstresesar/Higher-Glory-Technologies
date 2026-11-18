import emailjs from '@emailjs/browser';
import { COMPANY_CONFIG } from '../config/company';
import {
  buildQuoteEmailParams,
  formatFrenchRequestDate,
  type QuoteLineItem,
} from '../utils/quote';
import type { ContactFormPayload } from '../utils/validation';

export interface SubmissionResult {
  ok: boolean;
  referenceId: string;
  receivedAt: string;
  requestDate?: string;
  deliveryChannel: string;
  recipientEmail?: string;
  message: string;
}

export interface EmailJsPublicConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function getEmailJsPublicConfig(): EmailJsPublicConfig {
  const env =
    ((import.meta as unknown as { env?: Record<string, string | undefined> })
      ?.env as Record<string, string | undefined> | undefined) ?? {};

  return {
    serviceId: String(env.VITE_EMAILJS_SERVICE_ID ?? '').trim(),
    templateId: String(env.VITE_EMAILJS_TEMPLATE_ID ?? '').trim(),
    publicKey: String(env.VITE_EMAILJS_PUBLIC_KEY ?? '').trim(),
  };
}

export function isEmailJsConfigured(
  config: EmailJsPublicConfig = getEmailJsPublicConfig()
): boolean {
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

export function generateQuoteReferenceId(now: Date = new Date()): string {
  const datePart = now.toISOString().slice(2, 10).replace(/-/g, '');
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `HGT-DEV-${datePart}-${randomPart}`;
}

export async function submitContactInquiry(
  payload: ContactFormPayload
): Promise<SubmissionResult> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      data.error ||
        'Impossible de transmettre votre message pour le moment. Veuillez réessayer.'
    );
  }
  return data as SubmissionResult;
}

export interface QuoteSubmissionPayload {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  sector: string;
  specialRequirements: string;
  message: string;
  items: QuoteLineItem[];
}

export async function submitQuoteRequest(
  payload: QuoteSubmissionPayload
): Promise<SubmissionResult> {
  const config = getEmailJsPublicConfig();

  if (!isEmailJsConfigured(config)) {
    throw new Error(
      'L’envoi automatique par e-mail n’est pas encore activé (identifiants EmailJS manquants). Veuillez réessayer une fois la configuration finalisée.'
    );
  }

  const now = new Date();
  const referenceId = generateQuoteReferenceId(now);
  const requestDate = formatFrenchRequestDate(now);
  const receivedAt = now.toISOString();

  const templateParams = buildQuoteEmailParams({
    ...payload,
    toEmail: COMPANY_CONFIG.contact.quoteEmail,
    referenceId,
    requestDate,
  });

  let emailStatus = 0;
  try {
    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams,
      { publicKey: config.publicKey }
    );
    emailStatus = response?.status ?? 0;
  } catch (err) {
    const detail =
      err && typeof err === 'object' && 'text' in err
        ? String((err as { text?: unknown }).text ?? '')
        : err instanceof Error
          ? err.message
          : '';
    throw new Error(
      detail
        ? `Échec de l’envoi de votre demande (${detail}). Veuillez réessayer.`
        : 'Une erreur est survenue lors de la connexion au service d’envoi d’e-mails. Veuillez réessayer.'
    );
  }

  if (emailStatus !== 200) {
    throw new Error(
      'Le service d’envoi n’a pas confirmé l’acceptation de votre e-mail. Veuillez réessayer.'
    );
  }

  // Enregistrement d'archive côté serveur uniquement après acceptation effective par EmailJS
  await fetch('/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      referenceId,
      requestDate,
      emailAccepted: true,
    }),
  }).catch(() => {});

  return {
    ok: true,
    referenceId,
    receivedAt,
    requestDate,
    deliveryChannel: 'emailjs',
    recipientEmail: COMPANY_CONFIG.contact.quoteEmail,
    message: `Votre demande de devis a bien été transmise par e-mail à notre service commercial (${COMPANY_CONFIG.contact.quoteEmail}).`,
  };
}
