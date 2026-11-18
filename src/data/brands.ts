export interface BrandItem {
  id: string;
  name: string;
  logoPath: string | null;
  categories: string[];
  hasCatalogProducts: boolean;
  note?: string;
}

export const BRANDS: BrandItem[] = [
  {
    id: 'evolis',
    name: 'Evolis',
    logoPath: '/assets/brands/evolis-logo.png',
    categories: ['Imprimantes à cartes PVC', 'Encodeurs RFID', 'Rubans & consommables'],
    hasCatalogProducts: true,
    note: 'Badge historique Evolis Silver Reseller 2022 (réf. CMR49705) conservé dans les archives officielles.',
  },
  {
    id: 'matica',
    name: 'Matica',
    logoPath: '/assets/brands/matica-logo.png',
    categories: ['Imprimantes retransfert & sécurité', 'Consommables SRT'],
    hasCatalogProducts: true,
  },
  {
    id: 'zebra',
    name: 'Zebra Technologies',
    logoPath: '/assets/brands/zebra-logo.png',
    categories: ['Impression d’étiquettes', 'Codes-barres & RFID', 'Imprimantes à cartes'],
    hasCatalogProducts: false,
  },
  {
    id: 'fargo-hid',
    name: 'Fargo by HID',
    logoPath: '/assets/brands/fargo-hid-logo.png',
    categories: ['Imprimantes à cartes sécurisées', 'Contrôle d’accès'],
    hasCatalogProducts: false,
  },
  {
    id: 'hiti',
    name: 'HiTi',
    logoPath: '/assets/brands/hiti-logo.png',
    categories: ['Impression de cartes & photo'],
    hasCatalogProducts: false,
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logoPath: '/assets/brands/lenovo-logo.png',
    categories: ['Serveurs & postes professionnels'],
    hasCatalogProducts: false,
  },
  {
    id: 'dell',
    name: 'Dell',
    logoPath: '/assets/brands/dell-logo.png',
    categories: ['Serveurs & infrastructures informatiques'],
    hasCatalogProducts: false,
  },
  {
    id: 'hp',
    name: 'HP',
    logoPath: '/assets/brands/hp-logo.png',
    categories: ['Serveurs, postes & impression'],
    hasCatalogProducts: false,
  },
];

export interface TextMentionedBrand {
  id: string;
  name: string;
  domain: string;
}

/**
 * Marques citées textuellement sur la page d'accueil officielle (?page_id=26)
 * sans fichier logo hébergé sur le domaine d'origine.
 */
export const TEXT_MENTIONED_BRANDS: TextMentionedBrand[] = [
  { id: 'datacard', name: 'Datacard', domain: 'Impression de cartes' },
  { id: 'magicard', name: 'Magicard', domain: 'Impression de cartes' },
  { id: 'cardpresso', name: 'CardPresso', domain: 'Logiciels de badges' },
  { id: 'sogedex', name: 'Sogedex', domain: 'Accessoires & badges' },
  { id: 'datalogic', name: 'Datalogic', domain: 'Lecture codes-barres' },
  { id: 'honeywell', name: 'Honeywell', domain: 'Codes-barres & mobilité' },
  { id: 'unitech', name: 'Unitech', domain: 'Terminaux & lecture' },
  { id: 'cipherlab', name: 'CipherLab', domain: 'Collecte de données' },
  { id: 'sato', name: 'Sato', domain: 'Impression d’étiquettes' },
  { id: 'tsc', name: 'TSC', domain: 'Imprimantes thermiques' },
  { id: 'star', name: 'Star', domain: 'Impression tickets POS' },
  { id: 'epson', name: 'Epson', domain: 'Équipements POS & impression' },
  { id: 'toshiba-tec', name: 'Toshiba Tec', domain: 'Étiquetage & POS' },
  { id: 'aures', name: 'Aures', domain: 'Terminaux point de vente' },
  { id: 'elo-touch', name: 'Elo Touch', domain: 'Écrans tactiles POS' },
];
