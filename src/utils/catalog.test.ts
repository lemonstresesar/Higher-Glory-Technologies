import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS } from '../data/products';
import { filterProducts, getProductById, getDistinctBrands } from './catalog';
import {
  addQuoteItem,
  updateQuoteItemQuantity,
  removeQuoteItem,
  getTotalQuoteUnits,
  buildQuoteSummaryText,
  buildWhatsAppUrl,
} from './quote';

test('filterProducts filters by search query, brand, category and historical flag', () => {
  const primacyResults = filterProducts(PRODUCTS, {
    searchQuery: 'Primacy 2',
    category: 'all',
    brand: 'all',
    includeHistorical: false,
  });
  assert.ok(primacyResults.length >= 2);
  assert.ok(primacyResults.every((p) => !p.isHistorical));

  const maticaOnly = filterProducts(PRODUCTS, {
    searchQuery: '',
    category: 'all',
    brand: 'Matica',
    includeHistorical: true,
  });
  assert.equal(maticaOnly.length, 1);
  assert.equal(maticaOnly[0].reference, 'DIC10539 / SRT-XID8100');

  const withHistorical = filterProducts(PRODUCTS, {
    searchQuery: '',
    category: 'Imprimantes à cartes PVC',
    brand: 'Evolis',
    includeHistorical: true,
  });
  const withoutHistorical = filterProducts(PRODUCTS, {
    searchQuery: '',
    category: 'Imprimantes à cartes PVC',
    brand: 'Evolis',
    includeHistorical: false,
  });
  assert.ok(withHistorical.length > withoutHistorical.length);
});

test('getProductById and getDistinctBrands return accurate catalog metadata', () => {
  const found = getProductById(PRODUCTS, 'evolis-primacy-2-duplex-pm2-0013-e');
  assert.ok(found);
  assert.equal(found.reference, 'PM2-0013-E');
  assert.deepEqual(getDistinctBrands(PRODUCTS), ['Evolis', 'Matica']);
});

test('quote bag state transitions calculate units, add, update, remove, and format WhatsApp summary', () => {
  const p1 = PRODUCTS[0];
  const p2 = PRODUCTS[13]; // ribbon

  let bag = addQuoteItem([], p1, 2);
  bag = addQuoteItem(bag, p1, 1);
  bag = addQuoteItem(bag, p2, 5);

  assert.equal(bag.length, 2);
  assert.equal(getTotalQuoteUnits(bag), 8);

  bag = updateQuoteItemQuantity(bag, p1.id, 4);
  assert.equal(getTotalQuoteUnits(bag), 9);

  bag = removeQuoteItem(bag, p2.id);
  assert.equal(bag.length, 1);
  assert.equal(getTotalQuoteUnits(bag), 4);

  const summary = buildQuoteSummaryText({
    contactName: 'Jean Mbarga',
    organization: 'Banque Atlantique',
    email: 'j.mbarga@example.cm',
    phone: '+237 699 00 11 22',
    sector: 'Banque & Finance',
    specialRequirements: 'Encodeur sans contact requis',
    message: 'Livraison Douala',
    items: bag,
  });

  assert.ok(summary.includes(p1.reference));
  assert.ok(summary.includes('Quantité : 4'));
  const waUrl = buildWhatsAppUrl('+237 696 30 24 79', summary);
  assert.ok(waUrl.startsWith('https://wa.me/237696302479?text='));
});
