export interface NavItem {
  label: string;
  path: string;
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Catalogue', path: '/catalogue' },
  { label: 'Marques', path: '/marques' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_NAV_COMPANY: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Nos clients', path: '/clients' },
  { label: 'Événements', path: '/evenements' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_NAV_SOLUTIONS: NavItem[] = [
  { label: 'Impression de cartes & badges', path: '/solutions/impression-cartes-badges' },
  { label: 'Consommables & rubans', path: '/solutions/consommables-rubans' },
  { label: 'Traçabilité codes-barres & RFID', path: '/solutions/tracabilite-codes-barres-rfid' },
  { label: 'Points de vente (POS)', path: '/solutions/points-de-vente' },
  { label: 'Contrôle d’accès', path: '/solutions/controle-acces' },
  { label: 'Vidéosurveillance', path: '/solutions/videosurveillance' },
];
