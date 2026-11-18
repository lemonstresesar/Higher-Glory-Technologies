import type { ProductItem } from '../data/products';

export interface QuoteLineItem {
  productId: string;
  reference: string;
  name: string;
  brand: string;
  quantity: number;
  imagePath: string;
}

export function addQuoteItem(
  items: QuoteLineItem[],
  product: ProductItem,
  quantityToAdd = 1
): QuoteLineItem[] {
  const safeQty = Math.max(1, Math.min(9999, Math.floor(quantityToAdd)));
  const existing = items.find((i) => i.productId === product.id);
  if (existing) {
    return items.map((i) =>
      i.productId === product.id
        ? { ...i, quantity: Math.min(9999, i.quantity + safeQty) }
        : i
    );
  }
  return [
    ...items,
    {
      productId: product.id,
      reference: product.reference,
      name: product.name,
      brand: product.brand,
      quantity: safeQty,
      imagePath: product.imagePath,
    },
  ];
}

export function updateQuoteItemQuantity(
  items: QuoteLineItem[],
  productId: string,
  nextQuantity: number
): QuoteLineItem[] {
  if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
    return items.filter((i) => i.productId !== productId);
  }
  const clamped = Math.max(1, Math.min(9999, Math.floor(nextQuantity)));
  return items.map((i) =>
    i.productId === productId ? { ...i, quantity: clamped } : i
  );
}

export function removeQuoteItem(
  items: QuoteLineItem[],
  productId: string
): QuoteLineItem[] {
  return items.filter((i) => i.productId !== productId);
}

export function getTotalQuoteUnits(items: QuoteLineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export interface QuoteSummaryInput {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  sector: string;
  specialRequirements: string;
  message: string;
  items: QuoteLineItem[];
  requestDate?: string;
}

export function formatFrenchRequestDate(date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

export function buildQuoteSummaryText(input: QuoteSummaryInput): string {
  const lines = [
    'DEMANDE DE DEVIS — HIGHER GLORY TECHNOLOGIES',
    `Date de la demande : ${input.requestDate || formatFrenchRequestDate()}`,
    `Nom et prénom : ${input.contactName}`,
    `Entreprise : ${input.organization}`,
    `Secteur d’activité : ${input.sector || 'Non précisé'}`,
    `Adresse e-mail : ${input.email}`,
    `Numéro de téléphone : ${input.phone}`,
    '',
    'Produits sélectionnés :',
    ...input.items.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.brand}) | Référence : ${
          item.reference || 'Non spécifiée'
        } | Quantité : ${item.quantity}`
    ),
    `Total unités demandées : ${getTotalQuoteUnits(input.items)}`,
    '',
    `Description du besoin : ${
      input.specialRequirements.trim() || 'Non précisée'
    }`,
    `Message complémentaire : ${
      input.message.trim() || 'Aucun message complémentaire'
    }`,
  ];

  return lines.join('\n');
}

export interface QuoteEmailTemplateParams extends Record<string, unknown> {
  to_email: string;
  reply_to: string;
  reference_id: string;
  customer_name: string;
  company: string;
  customer_email: string;
  customer_phone: string;
  business_sector: string;
  products: string;
  quantities: string;
  message: string;
  request_date: string;
}

export function buildQuoteEmailParams(
  input: QuoteSummaryInput & {
    toEmail: string;
    referenceId: string;
    requestDate: string;
  }
): QuoteEmailTemplateParams {
  const products = input.items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.brand})${
          item.reference ? ` — Réf. ${item.reference}` : ''
        }`
    )
    .join('\n');

  const quantitiesLines = input.items.map(
    (item, idx) =>
      `${idx + 1}. ${item.name} : ${item.quantity} unité${
        item.quantity > 1 ? 's' : ''
      }`
  );
  const totalUnits = getTotalQuoteUnits(input.items);
  const quantities = `${quantitiesLines.join('\n')}\nTotal : ${totalUnits} unité${
    totalUnits > 1 ? 's' : ''
  }`;

  const need = input.specialRequirements.trim();
  const extraMessage = input.message.trim();
  const combinedMessage =
    need && extraMessage
      ? `${extraMessage}\n\nDescription du besoin : ${need}`
      : extraMessage || (need ? `Description du besoin : ${need}` : '');

  return {
    to_email: input.toEmail,
    reply_to: input.email.trim(),
    reference_id: input.referenceId,
    customer_name: input.contactName.trim(),
    company: input.organization.trim(),
    customer_email: input.email.trim(),
    customer_phone: input.phone.trim(),
    business_sector: input.sector.trim(),
    products,
    quantities,
    message: combinedMessage,
    request_date: input.requestDate,
  };
}

export function buildWhatsAppUrl(phoneDigits: string, text: string): string {
  const cleanDigits = phoneDigits.replace(/[^\d]/g, '');
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(text)}`;
}
