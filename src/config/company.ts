export interface CompanyConfig {
  name: string;
  legalSubtitle: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  positioningStatement: string;
  domain: string;
  locale: 'fr' | 'en';
  supportedLocales: Array<'fr' | 'en'>;
  contact: {
    phones: string[];
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    quoteEmail: string;
    hours: string;
    city: string;
    country: string;
    /**
     * Adresse détaillée à confirmer avec la direction (sources annuaires : Akwa BP 1526 ; autres mentions : Bépanda).
     * Laisser null tant que non confirmée officiellement.
     */
    streetAddress: string | null;
    addressPendingConfirmationNote: string;
  };
  socialLinks: Array<{
    platform: 'linkedin' | 'facebook' | 'x';
    label: string;
    url: string | null;
  }>;
  legal: {
    copyrightYear: number;
    clientLogosValidationNotice: string;
    catalogAvailabilityNotice: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: 'HIGHER GLORY TECHNOLOGIES',
  legalSubtitle: 'Technologies & Network Accessories',
  tagline: 'The technology for the next generation',
  heroTitle: 'L’INNOVATION TECHNOLOGIQUE AU SERVICE DE VOTRE PERFORMANCE',
  heroSubtitle:
    'Découvrez des solutions professionnelles d’identification, de traçabilité, de gestion et de sécurité adaptées aux exigences de votre organisation.',
  positioningStatement:
    'Des solutions technologiques pour identifier, tracer, sécuriser et optimiser vos activités.',
  domain: 'https://higherglorytechnologies.com',
  locale: 'fr',
  supportedLocales: ['fr'],
  contact: {
    phones: ['+237 696 30 24 79', '+237 670 72 41 59'],
    whatsappNumber: '237696302479',
    whatsappDisplay: '+237 696 30 24 79',
    email: 'infos@higherglorytechnologies.com',
    quoteEmail: 'lmsesar03@gmail.com',
    hours: 'Lundi au samedi : 08h00 – 18h00',
    city: 'Douala',
    country: 'Cameroun',
    streetAddress: null,
    addressPendingConfirmationNote:
      'Douala, Cameroun (adresse physique exacte en cours de confirmation administrative — Akwa / Bépanda).',
  },
  socialLinks: [
    { platform: 'linkedin', label: 'LinkedIn', url: null },
    { platform: 'facebook', label: 'Facebook', url: null },
    { platform: 'x', label: 'X', url: null },
  ],
  legal: {
    copyrightYear: new Date().getFullYear(),
    clientLogosValidationNotice:
      'Références issues des archives du site officiel — affichage soumis à validation commerciale en cours.',
    catalogAvailabilityNotice:
      'Les caractéristiques et disponibilités sont confirmées sur devis par notre équipe technique à Douala.',
  },
};
