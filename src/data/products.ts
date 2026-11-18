export type ProductCategory =
  | 'Imprimantes à cartes PVC'
  | 'Modules & Encodeurs'
  | 'Rubans & Consommables';

export interface ProductItem {
  id: string;
  reference: string;
  name: string;
  brand: 'Evolis' | 'Matica';
  category: ProductCategory;
  shortDescription: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  applications: string[];
  imagePath: string;
  imageAlt: string;
  sourcePage: string;
  /**
   * True pour les gammes anciennes présentes dans l'ancien catalogue (Pebble 4, Dualys, Quantum, Securion, Tattoo 2, etc.).
   * Permet de distinguer les références historiques et de les désactiver aisément.
   */
  isHistorical: boolean;
  /**
   * Interrupteur d'administration : passer à false pour masquer une référence qui n'est plus commercialisée.
   */
  enabled: boolean;
}

export const PRODUCTS: ProductItem[] = [
  // --- IMPRIMANTES EVOLIS RÉCENTES / ACTUELLES DU CATALOGUE (?page_id=142) ---
  {
    id: 'evolis-agilia-duplex-ag1-0011',
    reference: 'AG1-0011',
    name: 'Evolis Agilia Duplex Expert – Retransfert Recto/Verso',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante retransfert recto/verso sans option, connectivité USB & Ethernet, avec licence CardPresso XXS.',
    description:
      'Imprimante retransfert Evolis Agilia Duplex Expert conçue pour l’impression bord à bord en recto/verso sur une grande variété de cartes (PVC, composite, cartes à puce). Livrée avec connectivité USB et Ethernet ainsi que la licence logicielle CardPresso XXS.',
    specs: [
      { label: 'Technologie', value: 'Retransfert recto/verso' },
      { label: 'Connectivité', value: 'USB & Ethernet' },
      { label: 'Logiciel inclus', value: 'CardPresso XXS' },
      { label: 'Variantes catalogue', value: 'AG1-0012 (Mag ISO), AG1-0013 (Elyctis), AG1-0014 (OMNIKEY 5122), AG1-0015 (SpringCard)' },
    ],
    applications: [
      'Cartes d’identification institutionnelles haute définition',
      'Badges d’entreprise et cartes d’accès sécurisées',
      'Cartes universitaires et titres multi-services',
    ],
    imagePath: '/assets/products/printers/agilia-duplex.jpg',
    imageAlt: 'Imprimante retransfert recto verso Evolis Agilia Duplex Expert AG1-0011',
    sourcePage: '?page_id=142',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-agilia-simplex-ag1-0001',
    reference: 'AG1-0001',
    name: 'Evolis Agilia Simplex Expert – Retransfert Simple Face',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante retransfert simple face, USB & Ethernet, compatible options d’encodage RFID et magnétique, avec CardPresso XXS.',
    description:
      'Modèle simple face de la gamme retransfert Evolis Agilia. Adaptée aux besoins d’émission de cartes graphiquement exigeantes, avec déclinaisons catalogue pour encodage magnétique ISO HiCo/LoCo (AG1-0002) ou cartes à puce et sans contact RFID (AG1-0003, AG1-0004, AG1-0005, AG1-0007).',
    specs: [
      { label: 'Technologie', value: 'Retransfert simple face' },
      { label: 'Connectivité', value: 'USB & Ethernet' },
      { label: 'Logiciel inclus', value: 'CardPresso XXS' },
      { label: 'Encodeurs compatibles', value: 'Mag ISO, Evolis Elyctis, OMNIKEY 5122, SpringCard Crazy Writer HSP' },
    ],
    applications: [
      'Badges professionnels avec photo haute netteté',
      'Cartes à puce contact et sans contact nécessitant une impression plane parfaite',
    ],
    imagePath: '/assets/products/printers/agilia-simplex.jpg',
    imageAlt: 'Imprimante retransfert simple face Evolis Agilia Simplex Expert AG1-0001',
    sourcePage: '?page_id=142',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-primacy-2-duplex-pm2-0013-e',
    reference: 'PM2-0013-E',
    name: 'Evolis Primacy 2 Duplex (Écran, USB & Ethernet)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante Evolis Primacy 2 deux faces, résolution 300 dpi (12 pts/mm), USB, Ethernet et écran intégré.',
    description:
      'Équipement de haute performance pour l’émission de cartes recto/verso avec niveau de sécurité adaptable. La gamme Primacy 2 propose chargeur 200 cartes (selon version), impression rewrite, fonction Kineclipse®, verrouillage mécanique et déclinaisons Wireless ou encodeurs Smart & Contactless.',
    specs: [
      { label: 'Impression', value: 'Recto / Verso (Duplex), 12 pts/mm (300 dpi)' },
      { label: 'Interfaces', value: 'USB, Ethernet (versions Wi-Fi disponibles)' },
      { label: 'Affichage', value: 'Écran LCD intégré sur version PM2-0013-E' },
      { label: 'Logiciel inclus', value: 'CardPresso XXS (versions Expert)' },
    ],
    applications: [
      'Émission moyenne et grande série de badges d’entreprise',
      'Cartes bancaires, cartes santé et titres d’accès sécurisés',
      'Cartes avec piste magnétique, puce contact ou RFID sans contact',
    ],
    imagePath: '/assets/products/printers/evolis-primacy2-300.png',
    imageAlt: 'Imprimante à cartes Evolis Primacy 2 Duplex PM2-0013-E',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-primacy-2-simplex-pm2-0001-e',
    reference: 'PM2-0001-E',
    name: 'Evolis Primacy 2 Simplex',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante simple face Evolis Primacy 2 évolutive, déclinable en versions Wireless, Mag ISO, Smart & Contactless, Kineclipse ou Lock.',
    description:
      'Version simple face de l’imprimante Evolis Primacy 2, idéale pour créer des cartes et badges professionnels avec un niveau de sécurité évolutif (encodeurs Mag ISO 3 pistes, Elyctis, OMNIKEY 5122, SpringCard, Elatec TWN4 Legic® NFC, scanner ou verrouillage mécanique selon configuration).',
    specs: [
      { label: 'Impression', value: 'Simple face (Simplex), évolutive vers recto/verso' },
      { label: 'Connectivité', value: 'USB, Ethernet ou Wi-Fi selon version' },
      { label: 'Sécurité', value: 'Options Kineclipse®, verrouillage mécanique Lock, encodeurs RFID' },
    ],
    applications: [
      'Badges employés et cartes visiteurs',
      'Cartes scolaires, cartes de clubs et cartes de fidélité',
    ],
    imagePath: '/assets/products/printers/primacy-2.gif',
    imageAlt: 'Imprimante à cartes Evolis Primacy 2 Simplex PM2-0001-E',
    sourcePage: '?page_id=142',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-lamination-s10212',
    reference: 'S10212',
    name: 'Module de lamination Evolis (Primacy & Primacy 2)',
    brand: 'Evolis',
    category: 'Modules & Encodeurs',
    shortDescription:
      'Module de lamination (CLM) pour plastifier, vernir et protéger durablement vos cartes sur Primacy et Primacy 2.',
    description:
      'Module complémentaire permettant d’appliquer des films de lamination clairs ou holographiques sur les cartes imprimées par Primacy ou Primacy 2, renforçant leur résistance mécanique et leur protection contre la contrefaçon.',
    specs: [
      { label: 'Compatibilité', value: 'Evolis Primacy & Evolis Primacy 2' },
      { label: 'Fonction', value: 'Lamination / plastification (vernis ou patch)' },
      { label: 'Consommables associés', value: 'Films LVA036NAA, LVA038NAA, LPS028NAA, LPS029NAA, LPS033NAA' },
    ],
    applications: [
      'Cartes d’identité professionnelles à longue durée de vie',
      'Badges sécurisés avec hologramme contre la falsification',
    ],
    imagePath: '/assets/products/printers/evolis-primacy-lamination-300.png',
    imageAlt: 'Module de lamination Evolis S10212 pour Primacy et Primacy 2',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-zenius-zn1u0000rs',
    reference: 'ZN1U0000RS',
    name: 'Evolis Zenius',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante à cartes compacte simple face pour impression à l’unité ou en petite série, livrée avec Evolis Premium Suite.',
    description:
      'Solution compacte et silencieuse pour l’impression de badges en simple face à la demande ou en petites séries. Fonctionne avec les cartouches rubans Easy4Pro (R5F002EAA 200 faces et rubans monochromes Evolis High Trust®).',
    specs: [
      { label: 'Impression', value: 'Simple face couleur ou monochrome' },
      { label: 'Format', value: 'Compact de bureau, émission à l’unité ou petite série' },
      { label: 'Logiciel', value: 'Evolis Premium Suite' },
    ],
    applications: [
      'Accueil visiteurs et émission immédiate au guichet',
      'PME, associations, établissements scolaires et clubs',
    ],
    imagePath: '/assets/products/printers/imprimante-evolis-zenius-300.png',
    imageAlt: 'Imprimante à cartes compacte Evolis Zenius ZN1U0000RS',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-badgy-200',
    reference: 'BADGY-200',
    name: 'Evolis Badgy 200 (Pack tout-en-un)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Solution compacte tout-en-un pour imprimer instantanément des badges sur cartes plastiques PVC.',
    description:
      'L’offre Badgy 200 réunit l’imprimante compacte Evolis Badgy 200, des modèles de badges personnalisables et un kit de consommables (cartes PVC et ruban couleur CBGR0100C) pour démarrer immédiatement l’émission de badges en interne.',
    specs: [
      { label: 'Usage', value: 'Émission rapide en petite série' },
      { label: 'Contenu du pack', value: 'Imprimante Badgy 200 + cartes + ruban + modèles' },
      { label: 'Ruban dédié', value: 'CBGR0100C (100 impressions YMCKO)' },
    ],
    applications: [
      'Badges collaborateurs pour petites structures et commerces',
      'Cartes de membres, cartes cadeaux et badges événementiels',
    ],
    imagePath: '/assets/products/printers/imprimante-evolis-badgy-300.png',
    imageAlt: 'Imprimante à badges tout-en-un Evolis Badgy 200',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: false,
    enabled: true,
  },

  // --- RÉFÉRENCES HISTORIQUES DU CATALOGUE (?page_id=142) ---
  {
    id: 'evolis-primacy-1-classic',
    reference: 'PM1H0000RS',
    name: 'Evolis Primacy (Série 1 – Référence historique)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Ancienne génération Primacy Simplex / Duplex avec options Mag ISO, Wifi ou Smart selon configuration.',
    description:
      'Présente dans le catalogue historique d’Higher Glory Technologies en versions Simplex, Duplex, Mag ISO, Wifi et Smart. Pour les nouveaux déploiements, se reporter à la génération Evolis Primacy 2 ; consommables R5F008EAA toujours pris en charge.',
    specs: [
      { label: 'Statut catalogue', value: 'Référence historique (remplacée par Primacy 2)' },
      { label: 'Versions archivées', value: 'Simplex, Duplex, Mag ISO, Duplex Wifi, Duplex Smart' },
    ],
    applications: [
      'Support consommables et maintenance de parcs existants',
    ],
    imagePath: '/assets/products/printers/imprimante-evolis-primacy-300.png',
    imageAlt: 'Imprimante Evolis Primacy série historique',
    sourcePage: '?page_id=142',
    isHistorical: true,
    enabled: true,
  },
  {
    id: 'evolis-quantum',
    reference: 'QTM206GRH-BS',
    name: 'Evolis Quantum (Production industrielle)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Émission et encodage de badges en volume industriel : plus de 1000 cartes/h en monochrome et jusqu’à 150 cartes/h en couleur.',
    description:
      'Conçue pour les volumes industriels en simple face ou recto/verso avec chargeurs grande capacité et options d’encodage. Référence issue de l’ancien catalogue Evolis (disponibilité à vérifier auprès de nos équipes).',
    specs: [
      { label: 'Cadence monochrome', value: '> 1 000 cartes / heure' },
      { label: 'Cadence couleur', value: 'Jusqu’à 150 cartes / heure' },
      { label: 'Statut catalogue', value: 'Référence historique — disponibilité sur devis' },
    ],
    applications: [
      'Centres de personnalisation de cartes en grande série',
      'Cartes nationales, cartes de transport ou badges universitaires massifs',
    ],
    imagePath: '/assets/products/printers/imprimante-evolis-quantum-300.png',
    imageAlt: 'Imprimante industrielle Evolis Quantum',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: true,
    enabled: true,
  },
  {
    id: 'evolis-securion',
    reference: 'SEC101RBH',
    name: 'Evolis Securion (Avec station de plastification)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante sécurisée intégrant une station de lamination pour vernis ou patchs holographiques.',
    description:
      'Référence historique dédiée à la sécurisation et la durabilité des badges grâce à sa station de plastification intégrée. Remplacée dans l’offre récente par Primacy 2 avec module de lamination S10212.',
    specs: [
      { label: 'Sécurisation', value: 'Station de plastification vernis ou patch' },
      { label: 'Statut catalogue', value: 'Référence historique (substituée par Primacy 2 Lamination)' },
    ],
    applications: [
      'Badges haute sécurité et cartes durables',
    ],
    imagePath: '/assets/products/printers/securion.jpg',
    imageAlt: 'Imprimante à cartes sécurisée Evolis Securion',
    sourcePage: '?page_id=142',
    isHistorical: true,
    enabled: true,
  },
  {
    id: 'evolis-avansia',
    reference: 'AVANSIA-RT',
    name: 'Evolis Avansia (Retransfert haute cadence)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante retransfert robuste capable d’émettre plus de 140 cartes couleur simple face par heure.',
    description:
      'Imprimante retransfert issue du catalogue historique pour les moyennes et grandes séries nécessitant robustesse et émission sécurisée.',
    specs: [
      { label: 'Technologie', value: 'Retransfert thermique' },
      { label: 'Cadence', value: '> 140 cartes couleur simple face / heure' },
      { label: 'Statut catalogue', value: 'Référence historique — disponibilité sur demande' },
    ],
    applications: [
      'Cartes sécurisées à usage intensif',
    ],
    imagePath: '/assets/products/printers/avansia.jpg',
    imageAlt: 'Imprimante retransfert Evolis Avansia',
    sourcePage: '?page_id=142',
    isHistorical: true,
    enabled: true,
  },
  {
    id: 'evolis-tattoo-rw',
    reference: 'TTR201BBH',
    name: 'Evolis Tattoo 2 RW (Cartes réinscriptibles)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Impression sans ruban sur cartes thermosensibles effaçables et réinscriptibles jusqu’à 500 cycles.',
    description:
      'Solution économique et écologique pour les badges visiteurs ou cartes temporaires nécessitant une mise à jour fréquente des informations imprimées sans consommation de ruban.',
    specs: [
      { label: 'Technologie', value: 'Thermosensible réinscriptible (sans ruban)' },
      { label: 'Réutilisation', value: 'Jusqu’à 500 cycles par carte compatible' },
      { label: 'Statut catalogue', value: 'Référence historique — disponibilité sur demande' },
    ],
    applications: [
      'Badges visiteurs réutilisables et cartes temporaires',
    ],
    imagePath: '/assets/products/printers/evolis-tattoo-rewrite-300.png',
    imageAlt: 'Imprimante cartes réinscriptibles Evolis Tattoo 2 RW',
    sourcePage: '?page_id=142 & ?page_id=2',
    isHistorical: true,
    enabled: true,
  },
  {
    id: 'evolis-elypso',
    reference: 'ELYPSO',
    name: 'Evolis Elypso (Émission au guichet)',
    brand: 'Evolis',
    category: 'Imprimantes à cartes PVC',
    shortDescription:
      'Imprimante d’accueil équipée du moteur 300 dpi de la gamme Primacy pour l’impression bord à bord à l’unité.',
    description:
      'Conçue pour la délivrance immédiate de cartes en face à face client avec prise en main rapide et qualité photographique 300 dpi.',
    specs: [
      { label: 'Résolution', value: '300 dpi, bord à bord' },
      { label: 'Statut catalogue', value: 'Référence historique — disponibilité sur demande' },
    ],
    applications: [
      'Guichets bancaires, agences de transport et accueil client',
    ],
    imagePath: '/assets/products/printers/elypso.jpg',
    imageAlt: 'Imprimante guichet Evolis Elypso',
    sourcePage: '?page_id=142',
    isHistorical: true,
    enabled: true,
  },

  // --- RUBANS & CONSOMMABLES EXTRAITS DE LA BOUTIQUE & MÉDIATHÈQUE HGT ---
  {
    id: 'evolis-ruban-ymcko-r5f008eaa',
    reference: 'R5F008EAA',
    name: 'Ruban couleur YMCKO Evolis Primacy / Edikio – 300 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban 5 panneaux couleur YMCKO certifié Evolis High Trust® (300 impressions simple face), compatible Primacy 1, Primacy 2 et Edikio.',
    description:
      'Consommable couleur d’origine Evolis offrant une autonomie de 300 faces en couleur pleine face (ou 150 cartes recto/verso) avec couche de vernis de protection overlay (O). Compatible Evolis Primacy 1 Simplex, Primacy 2 Duplex, Edikio Flex et Edikio Duplex.',
    specs: [
      { label: 'Type de ruban', value: '5 panneaux YMCKO (Jaune, Magenta, Cyan, Noir, Overlay)' },
      { label: 'Capacité', value: '300 faces par rouleau' },
      { label: 'Imprimantes compatibles', value: 'Primacy 1, Primacy 2, Edikio Flex, Edikio Duplex' },
    ],
    applications: [
      'Impression couleur photo de badges employés, scolaires et cartes membres',
    ],
    imagePath: '/assets/products/ribbons/evolis-ymcko-ribbon-2.jpg',
    imageAlt: 'Ruban couleur YMCKO Evolis R5F008EAA 300 faces',
    sourcePage: 'Boutique (?product=194) & ?page_id=2',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-ruban-ymcko-r5f002eaa',
    reference: 'R5F002EAA',
    name: 'Ruban couleur YMCKO Evolis Zenius / Primacy – 200 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban couleur 5 panneaux YMCKO pour imprimantes Evolis Zenius et Primacy (autonomie 200 cartes).',
    description:
      'Cassette ruban couleur prête à insérer destinée aux impressions quadrichromies avec vernis protecteur sur Evolis Zenius et Evolis Primacy.',
    specs: [
      { label: 'Type', value: 'YMCKO 5 panneaux' },
      { label: 'Capacité', value: '200 impressions' },
      { label: 'Compatibilité', value: 'Evolis Zenius, Evolis Primacy' },
    ],
    applications: [
      'Badges couleur en petite et moyenne série',
    ],
    imagePath: '/assets/products/ribbons/evolis-ribbons-consumables-push.jpg',
    imageAlt: 'Ruban couleur YMCKO Evolis R5F002EAA 200 faces',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-ruban-ymckok-r6f003eaa',
    reference: 'R6F003EAA',
    name: 'Ruban couleur 6 panneaux YMCKO-K Evolis Primacy – 200 cartes',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban 6 panneaux YMCKO-K pour impression couleur recto et texte/code-barres noir au verso (200 cartes).',
    description:
      'Optimisé pour les imprimantes recto/verso Evolis Primacy : imprime le recto en couleur haute qualité avec vernis protecteur et ajoute un panneau noir résine dédié pour les textes, mentions légales ou codes-barres au verso.',
    specs: [
      { label: 'Type', value: '6 panneaux YMCKO-K' },
      { label: 'Capacité', value: '200 cartes recto/verso' },
      { label: 'Compatibilité', value: 'Evolis Primacy / Primacy 2' },
    ],
    applications: [
      'Badges recto couleur + verso conditions d’utilisation ou code-barres noir',
    ],
    imagePath: '/assets/products/ribbons/evolis-ymckok-ribbon.jpg',
    imageAlt: 'Ruban couleur 6 panneaux YMCKO-K Evolis R6F003EAA',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-ruban-demi-panneau-r5h004naa',
    reference: 'R5H004NAA',
    name: 'Ruban couleur demi-panneaux 1/2 YMCKO – 400 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban économique 1/2 YMCKO pour personnaliser une photo couleur sur cartes pré-imprimées tout en appliquant le vernis sur toute la carte.',
    description:
      'Idéal pour réduire le coût à la carte lorsque seule une zone (photo d’identité, logo) est imprimée en couleur tandis que les textes ou codes-barres noirs et le vernis couvrent l’ensemble de la surface PVC.',
    specs: [
      { label: 'Type', value: 'Demi-panneaux 1/2 YMCKO' },
      { label: 'Capacité', value: '400 faces' },
      { label: 'Compatibilité', value: 'Evolis Zenius, Evolis Primacy' },
    ],
    applications: [
      'Personnalisation sur fonds de cartes déjà pré-imprimés en offset',
    ],
    imagePath: '/assets/products/ribbons/evolis-half-ymcko-ribbon.jpg',
    imageAlt: 'Ruban couleur demi-panneaux Evolis R5H004NAA',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-ruban-blackflex-rct019naa',
    reference: 'RCT019NAA',
    name: 'Ruban monochrome noir BlackFlex (Zenius / Primacy) – 1000 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban résine noir BlackFlex haute adhérence pour cartes plastiques ou supports spéciaux (1000 faces).',
    description:
      'Formulé pour une impression nette et durable de textes, numérotations et codes-barres 1D/2D sur cartes PVC, ABS ou supports à surface exigeante.',
    specs: [
      { label: 'Type', value: 'Monochrome Noir BlackFlex' },
      { label: 'Capacité', value: '1 000 impressions' },
      { label: 'Compatibilité', value: 'Evolis Zenius, Evolis Primacy' },
    ],
    applications: [
      'Impression de codes-barres haute lisibilité et numéros de série',
    ],
    imagePath: '/assets/products/ribbons/evolis-blackflex-ribbon.jpg',
    imageAlt: 'Ruban monochrome noir BlackFlex Evolis RCT019NAA',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-ruban-noir-rct023naa',
    reference: 'RCT023NAA',
    name: 'Ruban monochrome noir standard – 2000 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban transfert thermique noir haute capacité (2000 impressions) pour textes et codes-barres sur Zenius et Primacy.',
    description:
      'Solution de personnalisation monochrome à haut rendement pour imprimer rapidement noms, fonctions, numérotations et QR codes sur cartes blanches ou pré-imprimées.',
    specs: [
      { label: 'Type', value: 'Monochrome Noir' },
      { label: 'Capacité', value: '2 000 impressions' },
      { label: 'Compatibilité', value: 'Evolis Zenius, Evolis Primacy' },
    ],
    applications: [
      'Personnalisation rapide de cartes pré-imprimées en volume',
    ],
    imagePath: '/assets/products/ribbons/evolis-black-mono-ribbon.jpg',
    imageAlt: 'Ruban monochrome noir Evolis RCT023NAA 2000 faces',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-rubans-couleurs-mono',
    reference: 'RCT012-017NAA',
    name: 'Rubans monochromes spéciaux (Rouge, Blanc, Or & Argent métallisés)',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Gamme monochrome High Trust® 1000 impressions pour cartes foncées ou finitions métalliques (Zenius / Primacy).',
    description:
      'Inclut notamment les références RCT013NAA (rouge), RCT015NAA (blanc pour cartes noires ou sombres), RCT016NAA (or métallisé) et RCT017NAA (argent métallisé), jusqu’à 1000 impressions par rouleau.',
    specs: [
      { label: 'Références', value: 'RCT013NAA (Rouge), RCT015NAA (Blanc), RCT016NAA (Or), RCT017NAA (Argent)' },
      { label: 'Capacité', value: '1 000 faces par ruban' },
      { label: 'Compatibilité', value: 'Evolis Zenius, Evolis Primacy' },
    ],
    applications: [
      'Cartes noires imprimées en blanc ou doré, cartes VIP et badges d’identification',
    ],
    imagePath: '/assets/products/ribbons/evolis-metallic-gold-mono-ribbon.jpg',
    imageAlt: 'Ruban monochrome or métallisé Evolis',
    sourcePage: '?page_id=2 & Médiathèque HGT',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-patch-hologramme-lps033naa',
    reference: 'LPS033NAA',
    name: 'Patch lamination Hologramme Générique 0,6 mil – 600 faces',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Patch de lamination holographique 0,6 mil (600 impressions/rouleau) pour Primacy et Primacy 2 avec module laminateur.',
    description:
      'Film de lamination appliquant une couche transparente avec dessin optique variable (hologramme) pour protéger vos cartes d’identification contre l’usure, la falsification et la duplication.',
    specs: [
      { label: 'Épaisseur', value: '0,6 mil avec hologramme générique' },
      { label: 'Capacité', value: '600 impressions / rouleau' },
      { label: 'Compatibilité', value: 'Primacy & Primacy 2 équipées d’un laminateur' },
    ],
    applications: [
      'Sécurisation de badges officiels, cartes bancaires ou titres d’accès sensibles',
    ],
    imagePath: '/assets/products/ribbons/evolis-lva036naa-holographic-varnish.jpg',
    imageAlt: 'Patch de lamination holographique LPS033NAA pour Primacy et Primacy 2',
    sourcePage: 'Boutique (?product=199)',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-films-lamination-lva-lps',
    reference: 'LVA038NAA / LPS028NAA',
    name: 'Films et vernis de lamination clairs (Primacy Lamination)',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Vernis de protection clair (LVA038NAA) et patchs transparents 1,0 mil (LPS028NAA) ou holographiques (LPS029NAA).',
    description:
      'Consommables de plastification dédiés aux modules de lamination Evolis pour prolonger la durée de vie des badges exposés aux frottements, UV et manipulations fréquentes.',
    specs: [
      { label: 'Références disponibles', value: 'LVA038NAA (Vernis clair), LPS028NAA (Patch clair 10 mil), LPS029NAA' },
      { label: 'Usage', value: 'Protection mécanique et anti-contrefaçon' },
    ],
    applications: [
      'Badges industriels, cartes de chantier et titres longue durée',
    ],
    imagePath: '/assets/products/ribbons/evolis-clear-patch-lps028naa.jpg',
    imageAlt: 'Film patch de lamination clair Evolis LPS028NAA',
    sourcePage: 'Médiathèque HGT (IDs 157, 159, 166, 167)',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'evolis-retransfert-ymck-rt',
    reference: 'YMCK-RT / CLEAR-RT',
    name: 'Consommables Retransfert (Rubans YMCK-RT, YMCKK-RT & Film clair)',
    brand: 'Evolis',
    category: 'Rubans & Consommables',
    shortDescription:
      'Rubans couleur retransfert simple/double face et film de transfert transparent pour imprimantes retransfert.',
    description:
      'Ensemble de consommables pour impression retransfert haute définition : ruban couleur YMCK-RT, ruban YMCKK-RT pour recto/verso et film de retransfert transparent assurant un rendu bord à bord impeccable.',
    specs: [
      { label: 'Références visuelles', value: 'YMCK-RT, YMCKK-RT, Clear Transfer Film' },
      { label: 'Technologie', value: 'Impression retransfert' },
    ],
    applications: [
      'Impression retransfert sur cartes à puce et cartes composites',
    ],
    imagePath: '/assets/products/ribbons/evolis-color-ribbon-ymck-rt.jpg',
    imageAlt: 'Ruban couleur retransfert YMCK-RT',
    sourcePage: 'Médiathèque HGT (IDs 158, 160, 164) & ?page_id=153',
    isHistorical: false,
    enabled: true,
  },
  {
    id: 'matica-film-srt-xid-8100',
    reference: 'DIC10539 / SRT-XID8100',
    name: 'Film Retransfert SRT Matica XID 8100 – 1000 faces',
    brand: 'Matica',
    category: 'Rubans & Consommables',
    shortDescription:
      'Ruban SRT film retransfert Matica d’une capacité de 1000 faces (remplace la référence DIC10539), pour imprimante Matica XID 8100.',
    description:
      'Film de retransfert transparent d’origine Matica pour imprimante XID 8100, d’une autonomie de 1000 faces. Remplace la référence DIC10539 et s’utilise conjointement avec le ruban couleur PR000809 (DIC10509).',
    specs: [
      { label: 'Compatibilité', value: 'Matica XID 8100' },
      { label: 'Autonomie', value: '1 000 faces' },
      { label: 'Références associées', value: 'Remplace DIC10539 · À utiliser avec PR000809 (DIC10509)' },
    ],
    applications: [
      'Maintien en production d’imprimantes retransfert Matica XID 8100',
    ],
    imagePath: '/assets/products/ribbons/film-retransfert-srt-matica-xid-8100.jpg',
    imageAlt: 'Film Retransfert SRT Matica XID 8100 1000 faces',
    sourcePage: 'Boutique (?product=197)',
    isHistorical: false,
    enabled: true,
  },
];
