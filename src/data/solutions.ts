export type SolutionStatus = 'confirmed' | 'on_study';

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  keyBenefits: string[];
  applications: string[];
  relatedBrands: string[];
  catalogCategory?: string;
  imagePath?: string;
  imageAlt: string;
  sourceRef: string;
  status: SolutionStatus;
  enabled: boolean;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'impression-cartes-badges',
    slug: 'impression-cartes-badges',
    title: 'Identification & Impression de Cartes PVC et Badges',
    shortTitle: 'Impression de cartes & badges',
    summary:
      'Émission instantanée ou en volume de badges professionnels, cartes d’accès, cartes d’étudiants et cartes sécurisées avec encodage.',
    description:
      'Higher Glory Technologies déploie des systèmes complets d’impression et de personnalisation de cartes PVC : imprimantes direct-to-card et retransfert haute définition, modules de lamination holographique, encodeurs magnétiques ou sans contact RFID/NFC et logiciels de création de badges.',
    keyBenefits: [
      'Impression simple face ou recto-verso haute résolution (jusqu’à 300 ou 600 dpi selon modèle)',
      'Encodage intégré : piste magnétique ISO, carte à puce contact et sans contact RFID',
      'Protection contre la falsification via patchs et vernis holographiques de lamination',
      'Accompagnement avant-vente, mise en service et maintenance des têtes d’impression',
    ],
    applications: [
      'Badges employés et visiteurs pour entreprises et administrations',
      'Cartes étudiantes, cartes de membres et cartes de fidélité',
      'Titres sécurisés et badges multi-applications à puce RFID',
    ],
    relatedBrands: ['Evolis', 'Matica', 'Fargo by HID', 'Zebra Technologies', 'Magicard', 'Datacard', 'HiTi', 'CardPresso'],
    catalogCategory: 'Imprimantes à cartes PVC',
    imagePath: '/assets/hero/evolis-primacy-banner.png',
    imageAlt: 'Imprimantes à cartes PVC Evolis Primacy proposées par Higher Glory Technologies',
    sourceRef: 'Page officielle Accueil & ?page_id=42 / ?page_id=142',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'consommables-rubans',
    slug: 'consommables-rubans',
    title: 'Consommables, Rubans d’Impression & Films de Sécurité',
    shortTitle: 'Consommables & rubans',
    summary:
      'Fourniture de rubans couleur YMCKO / YMCKOK, monochromes, films de retransfert et patchs de lamination certifiés constructeurs.',
    description:
      'Pour garantir la longévité de vos têtes d’impression et la qualité graphique de vos badges, nous fournissons des consommables adaptés aux gammes actuelles et antérieures (Evolis High Trust, films de retransfert Matica XID).',
    keyBenefits: [
      'Rubans couleur YMCKO, YMCKOK, demi-panneau 1/2 YMCKO et UcYMCK',
      'Rubans monochromes (noir, BlackFlex, blanc, rouge, bleu, or et argent métallisés)',
      'Films de transfert clairs, vernis et patchs holographiques anti-contrefaçon',
      'Support de compatibilité selon le numéro de série de votre imprimante',
    ],
    applications: [
      'Renouvellement de consommables pour parcs d’imprimantes Evolis et Matica',
      'Impression économique en monochrome sur cartes pré-imprimées',
      'Sécurisation durable des cartes soumises à un usage intensif',
    ],
    relatedBrands: ['Evolis', 'Matica', 'Fargo by HID', 'Zebra Technologies'],
    catalogCategory: 'Rubans & Consommables',
    imagePath: '/assets/hero/evolis-consumables-hero.jpg',
    imageAlt: 'Insertion d’un ruban couleur dans une imprimante à cartes Evolis',
    sourceRef: 'Pages ?page_id=46, ?page_id=2, ?page_id=153 et Boutique WooCommerce',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'tracabilite-codes-barres-rfid',
    slug: 'tracabilite-codes-barres-rfid',
    title: 'Traçabilité par Codes-Barres, Étiquettes & RFID',
    shortTitle: 'Codes-barres, étiquettes & RFID',
    summary:
      'Solutions d’identification automatique, lecture de codes-barres 1D/2D, impression d’étiquettes industrielles et encodage RFID.',
    description:
      'Nous équipons les entrepôts, industries, laboratoires et chaînes logistiques avec des systèmes d’impression d’étiquettes thermiques, lecteurs de codes-barres filaires ou sans fil, terminaux portables professionnels et technologies d’identification par radiofréquence (RFID).',
    keyBenefits: [
      'Fiabilisation des inventaires, réceptions et expéditions sans erreur de saisie',
      'Impression d’étiquettes codes-barres, QR codes et étiquettes PVC',
      'Déploiement de lecteurs et encodeurs RFID pour suivi d’actifs et badges sans contact',
      'Intégration matérielle et logicielle avec vos outils de gestion existants',
    ],
    applications: [
      'Gestion des stocks, entrepôts et logistique industrielle',
      'Traçabilité des actifs, équipements et dossiers sensibles',
      'Étiquetage commercial et industriel haute cadence',
    ],
    relatedBrands: ['Zebra Technologies', 'Datalogic', 'Honeywell', 'Unitech', 'CipherLab', 'Sato', 'TSC'],
    catalogCategory: 'Modules & Encodeurs',
    imagePath: '/assets/hero/hero-banner-matica-full.jpg',
    imageAlt: 'Équipements professionnels d’identification et de traçabilité',
    sourceRef: 'Page d’accueil officielle (?page_id=26)',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'points-de-vente',
    slug: 'points-de-vente',
    title: 'Gestion des Points de Vente (POS) & Encaissement',
    shortTitle: 'Points de vente (POS)',
    summary:
      'Équipement complet de caisses, terminaux tactiles, imprimantes tickets, douchette codes-barres et compteuses de billets.',
    description:
      'Higher Glory Technologies accompagne les commerces, supermarchés, pharmacies et réseaux de distribution au Cameroun dans l’équipement complet de leurs points d’encaissement et la fiabilisation de leurs opérations de caisse.',
    keyBenefits: [
      'Terminaux points de vente tactiles robustes et périphériques d’encaissement',
      'Imprimantes tickets thermiques et lecteurs codes-barres de comptoir',
      'Solutions d’étiquetage en rayon et de comptage de billets en caisse',
      'Installation sur site et accompagnement après-vente à Douala et au Cameroun',
    ],
    applications: [
      'Supermarchés, commerces de détail et franchises',
      'Pharmacies, restaurants et hôtellerie',
      'Guichets d’accueil et comptoirs de services',
    ],
    relatedBrands: ['Epson', 'Star', 'Aures', 'Elo Touch', 'Toshiba Tec', 'Datalogic', 'Honeywell'],
    imagePath: '/assets/services/pos-supermarket.jpg',
    imageAlt: 'Poste d’encaissement point de vente équipé en supermarché',
    sourceRef: 'Page d’accueil (?page_id=26) & ?page_id=221',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'controle-acces',
    slug: 'controle-acces',
    title: 'Contrôle d’Accès & Gestion Électronique des Flux',
    shortTitle: 'Contrôle d’accès',
    summary:
      'Sécurisation des entrées piétons et véhicules via lecteurs de badges RFID, terminaux biométriques et pilotage centralisé des accès.',
    description:
      'Nous concevons et intégrons des dispositifs de contrôle d’accès pour maîtriser la circulation des collaborateurs, visiteurs et véhicules au sein de vos bâtiments et zones sensibles.',
    keyBenefits: [
      'Lecteurs de badges sans contact (RFID / NFC) et dispositifs biométriques',
      'Gestion des droits d’accès par profils horaires et zones autorisées',
      'Couplage direct avec l’émission de badges d’identification en interne',
      'Traçabilité des entrées et sorties pour les sites d’entreprise',
    ],
    applications: [
      'Sièges sociaux, banques, assurances et sites industriels',
      'Zones techniques, salles serveurs et locaux d’archives',
      'Enrôlement et contrôle des flux visiteurs',
    ],
    relatedBrands: ['Fargo by HID', 'Evolis'],
    imagePath: '/assets/hero/hero-banner-matica-cropped.jpg',
    imageAlt: 'Solutions de badges sécurisés pour le contrôle d’accès',
    sourceRef: 'Page officielle ?page_id=48',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'videosurveillance',
    slug: 'videosurveillance',
    title: 'Vidéosurveillance Professionnelle (IP & Analogique)',
    shortTitle: 'Vidéosurveillance',
    summary:
      'Étude, fourniture et déploiement de systèmes de vidéoprotection IP, filaires ou Wi-Fi avec enregistrement et supervision.',
    description:
      'Higher Glory Technologies propose des architectures de vidéosurveillance adaptées à la taille et aux contraintes réseau de chaque site : des installations analogiques simples aux systèmes IP numériques haute définition reliés à votre infrastructure informatique.',
    keyBenefits: [
      'Choix adapté entre architecture analogique économique et caméras IP évolutives',
      'Enregistreurs NVR/DVR, moniteurs de contrôle et stockage sécurisé des séquences',
      'Supervision locale ou à distance selon les besoins de l’exploitation',
      'Intégration coordonnée avec les dispositifs de contrôle d’accès',
    ],
    applications: [
      'Entrepôts, commerces, agences et enceintes industrielles',
      'Bâtiments administratifs et parkings d’entreprise',
    ],
    relatedBrands: ['Dell', 'HP', 'Lenovo'],
    imagePath: '/assets/services/videosurveillance.jpg',
    imageAlt: 'Pictogramme officiel Vidéosurveillance Higher Glory Technologies',
    sourceRef: 'Page officielle ?page_id=49',
    status: 'confirmed',
    enabled: true,
  },
  {
    id: 'infrastructures-it-reseaux',
    slug: 'infrastructures-it-reseaux',
    title: 'Serveurs, Matériels Réseaux & Équipements Informatiques',
    shortTitle: 'Serveurs & matériels réseaux',
    summary:
      'Fourniture d’infrastructures serveurs, postes professionnels, équipements réseaux et accessoires de connectivité d’entreprise.',
    description:
      'En cohérence avec notre métier historique d’équipementier informatique et réseau, nous accompagnons les organisations dans l’acquisition et l’intégration de serveurs, postes de travail, commutateurs, câblage et équipements électriques associés.',
    keyBenefits: [
      'Serveurs et stations de travail issus de constructeurs majeurs (Dell, HP, Lenovo)',
      'Équipements actifs et passifs de réseau d’entreprise',
      'Accompagnement au dimensionnement matériel avant acquisition',
    ],
    applications: [
      'Déploiement ou renouvellement de parc informatique professionnel',
      'Hébergement applicatif local pour solutions de badges, POS et sécurité',
    ],
    relatedBrands: ['Dell', 'HP', 'Lenovo'],
    imagePath: '/assets/hero/hero-banner-matica-full.jpg',
    imageAlt: 'Infrastructures serveurs et équipements informatiques pour entreprises',
    sourceRef: 'Pages ?page_id=50, ?page_id=51, ?page_id=52 du menu officiel',
    status: 'on_study',
    enabled: true,
  },
  {
    id: 'logiciels-projets-personnalises',
    slug: 'logiciels-projets-personnalises',
    title: 'Logiciels, Applications & Projets Technologiques Personnalisés',
    shortTitle: 'Logiciels & projets sur mesure',
    summary:
      'Licences logicielles d’édition de badges, gestion documentaire et intégration de projets matériels-logiciels sur cahier des charges.',
    description:
      'Au-delà de la fourniture d’équipements, notre équipe intervient sur des projets technologiques personnalisés associant matériel spécialisé, logiciels métiers (tels que CardPresso pour la personnalisation de cartes) et accompagnement technique sur mesure.',
    keyBenefits: [
      'Fourniture de licences logicielles de création et d’encodage de badges',
      'Étude personnalisée pour besoins spécifiques (sécurisation documentaire, GED, enrôlement)',
      'Interlocuteur unique matériel + logiciel + support technique',
    ],
    applications: [
      'Projets multi-sites d’identification ou de traçabilité',
      'Intégration de systèmes clés en main selon cahier des charges',
    ],
    relatedBrands: ['CardPresso', 'Evolis', 'Matica'],
    imagePath: '/assets/hero/evolis-consumables-hero.jpg',
    imageAlt: 'Intégration logicielle et projets technologiques sur mesure',
    sourceRef: 'Pages ?page_id=53 et ?page_id=54 du menu officiel',
    status: 'on_study',
    enabled: true,
  },
];
