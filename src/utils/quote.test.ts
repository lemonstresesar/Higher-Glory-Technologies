import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildQuoteEmailParams,
  buildQuoteSummaryText,
  formatFrenchRequestDate,
  type QuoteLineItem,
} from './quote';

const SAMPLE_ITEMS: QuoteLineItem[] = [
  {
    productId: 'evolis-primacy-2',
    reference: 'PM2-001',
    name: 'Evolis Primacy 2',
    brand: 'Evolis',
    quantity: 2,
    imagePath: '/assets/products/printers/primacy-2.png',
  },
  {
    productId: 'ruban-r5f008eaa',
    reference: 'R5F008EAA',
    name: 'Ruban couleur YMCKO',
    brand: 'Evolis',
    quantity: 5,
    imagePath: '/assets/products/ribbons/r5f008eaa.jpg',
  },
];

test('buildQuoteEmailParams maps exact EmailJS template variables and destination email', () => {
  const formattedDate = formatFrenchRequestDate(new Date('2026-11-13T12:35:00Z'));
  const params = buildQuoteEmailParams({
    toEmail: 'lmsesar03@gmail.com',
    referenceId: 'HGT-DEV-261113-TEST01',
    requestDate: formattedDate,
    contactName: 'Claire Ndongo',
    organization: 'Banque Atlantique Cameroun',
    email: 'c.ndongo@banque.cm',
    phone: '+237 699 12 34 56',
    sector: 'Banque & Finance',
    specialRequirements: 'Encodage sans contact MIFARE et formation opérateurs',
    message: 'Livraison souhaitée à Akwa Douala.',
    items: SAMPLE_ITEMS,
  });

  assert.equal(params.to_email, 'lmsesar03@gmail.com');
  assert.equal(params.reply_to, 'c.ndongo@banque.cm');
  assert.equal(params.customer_name, 'Claire Ndongo');
  assert.equal(params.company, 'Banque Atlantique Cameroun');
  assert.equal(params.customer_email, 'c.ndongo@banque.cm');
  assert.equal(params.customer_phone, '+237 699 12 34 56');
  assert.equal(params.business_sector, 'Banque & Finance');
  assert.equal(params.request_date, formattedDate);

  assert.match(params.products, /1\. Evolis Primacy 2 \(Evolis\) — Réf\. PM2-001/);
  assert.match(params.products, /2\. Ruban couleur YMCKO \(Evolis\) — Réf\. R5F008EAA/);

  assert.match(params.quantities, /1\. Evolis Primacy 2 : 2 unités/);
  assert.match(params.quantities, /2\. Ruban couleur YMCKO : 5 unités/);
  assert.match(params.quantities, /Total : 7 unités/);

  assert.match(params.message, /Livraison souhaitée à Akwa Douala\./);
  assert.match(params.message, /Encodage sans contact MIFARE/);

  const summary = buildQuoteSummaryText({
    contactName: 'Claire Ndongo',
    organization: 'Banque Atlantique Cameroun',
    email: 'c.ndongo@banque.cm',
    phone: '+237 699 12 34 56',
    sector: 'Banque & Finance',
    specialRequirements: 'Encodage sans contact MIFARE et formation opérateurs',
    message: 'Livraison souhaitée à Akwa Douala.',
    items: SAMPLE_ITEMS,
    requestDate: formattedDate,
  });

  assert.match(summary, /Banque & Finance/);
  assert.match(summary, /Total unités demandées : 7/);
});
