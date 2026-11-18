export interface ContactFormPayload {
  lastName: string;
  firstName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface QuoteFormPayload {
  contactName: string;
  organization: string;
  email: string;
  phone: string;
  sector: string;
  specialRequirements: string;
  message: string;
  itemsCount: number;
}

export type ValidationErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d\s().-]{7,24}$/;

export function validateContactForm(
  data: ContactFormPayload
): ValidationErrors<keyof ContactFormPayload> {
  const errors: ValidationErrors<keyof ContactFormPayload> = {};

  if (data.lastName.trim().length < 2) {
    errors.lastName = 'Veuillez saisir votre nom (au moins 2 caractères).';
  }
  if (data.firstName.trim().length < 2) {
    errors.firstName = 'Veuillez saisir votre prénom (au moins 2 caractères).';
  }
  if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Veuillez saisir une adresse e-mail professionnelle valide.';
  }
  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) {
    errors.phone = 'Format de numéro de téléphone invalide.';
  }
  if (data.subject.trim().length < 3) {
    errors.subject = 'Veuillez préciser l’objet de votre demande.';
  }
  if (data.message.trim().length < 10) {
    errors.message =
      'Veuillez détailler votre besoin (au moins 10 caractères).';
  }

  return errors;
}

export function validateQuoteForm(
  data: QuoteFormPayload
): ValidationErrors<keyof QuoteFormPayload> {
  const errors: ValidationErrors<keyof QuoteFormPayload> = {};

  if (data.contactName.trim().length < 2) {
    errors.contactName = 'Veuillez indiquer votre nom et prénom.';
  }
  if (data.organization.trim().length < 2) {
    errors.organization =
      'Veuillez indiquer le nom de votre entreprise ou institution.';
  }
  if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Veuillez saisir une adresse e-mail valide.';
  }
  if (!PHONE_RE.test(data.phone.trim())) {
    errors.phone =
      'Veuillez saisir un numéro de téléphone joignable (ex. +237 6XX XX XX XX).';
  }
  if (data.sector.trim().length < 2) {
    errors.sector = 'Veuillez préciser votre secteur d’activité.';
  }
  if (data.specialRequirements.trim().length < 5) {
    errors.specialRequirements =
      'Veuillez décrire brièvement votre besoin (au moins 5 caractères).';
  }
  if (data.itemsCount < 1) {
    errors.itemsCount =
      'Veuillez sélectionner au moins un équipement ou consommable pour votre devis.';
  }

  return errors;
}

export function hasValidationErrors<T extends string>(
  errors: ValidationErrors<T>
): boolean {
  return Object.keys(errors).length > 0;
}
