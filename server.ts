import 'dotenv/config';
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  validateContactForm,
  validateQuoteForm,
  hasValidationErrors,
} from './src/utils/validation.ts';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.resolve(process.cwd(), '.data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

app.use(express.json({ limit: '256kb' }));

interface StoredRecord {
  referenceId: string;
  type: 'contact' | 'quote';
  receivedAt: string;
  payload: unknown;
}

async function persistRecord(record: StoredRecord): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: StoredRecord[] = [];
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    existing = [];
  }
  existing.push(record);
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

function makeReferenceId(prefix: string): string {
  const token = crypto.randomBytes(3).toString('hex').toUpperCase();
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  return `${prefix}-${datePart}-${token}`;
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'higher-glory-technologies' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const body = req.body ?? {};
    const payload = {
      lastName: String(body.lastName ?? ''),
      firstName: String(body.firstName ?? ''),
      company: String(body.company ?? ''),
      email: String(body.email ?? ''),
      phone: String(body.phone ?? ''),
      subject: String(body.subject ?? ''),
      message: String(body.message ?? ''),
    };

    const errors = validateContactForm(payload);
    if (hasValidationErrors(errors)) {
      return res.status(400).json({
        ok: false,
        error: 'Certains champs du formulaire sont invalides ou incomplets.',
        errors,
      });
    }

    const referenceId = makeReferenceId('HGT-MSG');
    const receivedAt = new Date().toISOString();

    await persistRecord({
      referenceId,
      type: 'contact',
      receivedAt,
      payload,
    });

    return res.status(201).json({
      ok: true,
      referenceId,
      receivedAt,
      deliveryChannel: 'server-inbox',
      message:
        'Votre message a bien été enregistré par notre serveur. Notre équipe à Douala vous répondra dans les meilleurs délais.',
    });
  } catch (err) {
    console.error('Error handling /api/contact:', err);
    return res.status(500).json({
      ok: false,
      error: 'Erreur interne lors de l’enregistrement de votre demande.',
    });
  }
});

app.post('/api/quote', async (req, res) => {
  try {
    const body = req.body ?? {};
    const items = Array.isArray(body.items) ? body.items : [];
    const payload = {
      contactName: String(body.contactName ?? ''),
      organization: String(body.organization ?? ''),
      email: String(body.email ?? ''),
      phone: String(body.phone ?? ''),
      sector: String(body.sector ?? ''),
      specialRequirements: String(body.specialRequirements ?? ''),
      message: String(body.message ?? ''),
      itemsCount: items.length,
    };

    const errors = validateQuoteForm(payload);
    if (hasValidationErrors(errors)) {
      return res.status(400).json({
        ok: false,
        error: 'Veuillez vérifier les informations de votre demande de devis.',
        errors,
      });
    }

    const sanitizedItems = items.map((item: Record<string, unknown>) => ({
      productId: String(item.productId ?? ''),
      reference: String(item.reference ?? ''),
      name: String(item.name ?? ''),
      brand: String(item.brand ?? ''),
      quantity: Math.max(1, Math.min(9999, Number(item.quantity) || 1)),
    }));

    const referenceId =
      typeof body.referenceId === 'string' && body.referenceId.trim()
        ? body.referenceId.trim()
        : makeReferenceId('HGT-DEV');
    const receivedAt = new Date().toISOString();

    await persistRecord({
      referenceId,
      type: 'quote',
      receivedAt,
      payload: {
        ...payload,
        requestDate: String(body.requestDate ?? receivedAt),
        emailAccepted: Boolean(body.emailAccepted),
        items: sanitizedItems,
      },
    });

    return res.status(201).json({
      ok: true,
      referenceId,
      receivedAt,
      deliveryChannel: body.emailAccepted ? 'emailjs-and-archive' : 'server-inbox',
      message:
        'Votre demande de devis regroupée a été enregistrée. Notre équipe commerciale à Douala vous répondra dans les meilleurs délais.',
    });
  } catch (err) {
    console.error('Error handling /api/quote:', err);
    return res.status(500).json({
      ok: false,
      error: 'Erreur interne lors de l’enregistrement de la demande de devis.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Higher Glory Technologies server listening on port ${PORT}`);
  });
}

startServer();
