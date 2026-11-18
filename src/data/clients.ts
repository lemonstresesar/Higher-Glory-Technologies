export interface ClientReference {
  id: string;
  name: string;
  sector: string;
  logoPath: string;
  sourcePage: string;
  /**
   * Contrôle la publication du logo. Permet à la direction de désactiver ou valider chaque référence.
   */
  enabled: boolean;
}

export const CLIENT_REFERENCES_CONFIG = {
  showHistoricalReferences: true,
  sectionTitle: 'Organisations nous ayant fait confiance',
  validationBannerText:
    'Ces logos proviennent de la page historique « Nos clients » du site officiel. Leur affichage reste configurable et soumis à validation périodique de la direction.',
};

export const CLIENT_REFERENCES: ClientReference[] = [
  {
    id: 'cicc',
    name: 'CICC',
    sector: 'Institution interprofessionnelle',
    logoPath: '/assets/clients/client-cicc.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'ubc-plc',
    name: 'UBC PLC',
    sector: 'Services financiers',
    logoPath: '/assets/clients/client-ubc-plc.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'pia-soft-box',
    name: 'Pia Soft Box',
    sector: 'Technologies & services',
    logoPath: '/assets/clients/client-pia-soft-box.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'jpg',
    name: 'J.P.G',
    sector: 'Entreprise',
    logoPath: '/assets/clients/client-jpg.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'g4s',
    name: 'G4S',
    sector: 'Sécurité',
    logoPath: '/assets/clients/client-g4s.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'axa',
    name: 'AXA',
    sector: 'Assurances',
    logoPath: '/assets/clients/client-axa.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'sic-cacaos',
    name: 'SIC Cacaos',
    sector: 'Agro-industrie',
    logoPath: '/assets/clients/client-sic-cacaos.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'zenithe-insurance',
    name: 'Zenithe Insurance',
    sector: 'Assurances',
    logoPath: '/assets/clients/client-zenithe-insurance.png',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'cimaf',
    name: 'CIMAF',
    sector: 'Industrie & matériaux',
    logoPath: '/assets/clients/client-cimaf.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
  {
    id: 'uba',
    name: 'UBA',
    sector: 'Secteur bancaire',
    logoPath: '/assets/clients/client-uba.jpg',
    sourcePage: '?page_id=28',
    enabled: true,
  },
];
