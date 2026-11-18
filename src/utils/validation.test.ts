import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  validateQuoteForm,
  hasValidationErrors,
} from './validation';

test('validateContactForm rejects empty or invalid inputs and accepts valid data', () => {
  const invalidErrors = validateContactForm({
    lastName: 'A',
    firstName: '',
    company: '',
    email: 'not-an-email',
    phone: 'abc',
    subject: 'Hi',
    message: 'Court',
  });

  assert.equal(hasValidationErrors(invalidErrors), true);
  assert.ok(invalidErrors.lastName);
  assert.ok(invalidErrors.firstName);
  assert.ok(invalidErrors.email);
  assert.ok(invalidErrors.phone);
  assert.ok(invalidErrors.subject);
  assert.ok(invalidErrors.message);

  const validErrors = validateContactForm({
    lastName: 'Ndongo',
    firstName: 'Claire',
    company: 'Société Industrielle',
    email: 'c.ndongo@entreprise.cm',
    phone: '+237 699 12 34 56',
    subject: 'Devis imprimante à badges',
    message: 'Nous souhaitons équiper notre siège à Douala de deux imprimantes recto/verso.',
  });

  assert.equal(hasValidationErrors(validErrors), false);
});

test('validateQuoteForm requires selected items, sector, need description, and valid contact details', () => {
  const emptyQuote = validateQuoteForm({
    contactName: '',
    organization: '',
    email: 'bad',
    phone: '12',
    sector: '',
    specialRequirements: '',
    message: '',
    itemsCount: 0,
  });

  assert.equal(hasValidationErrors(emptyQuote), true);
  assert.ok(emptyQuote.itemsCount);
  assert.ok(emptyQuote.contactName);
  assert.ok(emptyQuote.organization);
  assert.ok(emptyQuote.email);
  assert.ok(emptyQuote.phone);
  assert.ok(emptyQuote.sector);
  assert.ok(emptyQuote.specialRequirements);

  const validQuote = validateQuoteForm({
    contactName: 'Paul Fotso',
    organization: 'Clinique du Littoral',
    email: 'p.fotso@clinique.cm',
    phone: '+237 677 44 55 66',
    sector: 'Santé & Cliniques',
    specialRequirements: 'Impression de 300 badges RFID avec installation',
    message: '',
    itemsCount: 2,
  });

  assert.equal(hasValidationErrors(validQuote), false);
});
