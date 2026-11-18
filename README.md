# Refonte du Site Officiel — HIGHER GLORY TECHNOLOGIES

Site corporate et catalogue professionnel réalisé pour **HIGHER GLORY TECHNOLOGIES** (Douala, Cameroun) à partir des recherches et ressources authentiques extraites du site officiel `https://higherglorytechnologies.com/`.

---

## Technologies utilisées

- **Frontend** : React 19, TypeScript, Vite, Tailwind CSS v4, React Router DOM, Lucide React
- **Envoi de devis par e-mail** : intégration EmailJS (`@emailjs/browser`) configurée via variables publiques `VITE_EMAILJS_*` (destination `lmsesar03@gmail.com`, sans mot de passe SMTP côté frontend)
- **Backend léger (archives & formulaire de contact)** : Express (`server.ts`) avec validation partagée TypeScript et persistance locale `.data/inquiries.json`
- **Tests unitaires** : `node:test` + `tsx --test`

---

## Installation & Lancement

```bash
npm install
npm run dev
```

Le serveur Express + Vite démarre sur `http://localhost:3000`.

### Tests unitaires & vérifications

```bash
npx --yes tsx --test src/utils/catalog.test.ts src/utils/validation.test.ts src/utils/quote.test.ts
npm run lint
npm run build
```

---

## Structure du projet

```text
├── public/
│   ├── assets/               # Ressources authentiques extraites (logo, hero, marques, clients, produits)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config/
│   │   ├── company.ts        # Coordonnées vérifiées, horaires, textes institutionnels, champs configurables
│   │   └── navigation.ts     # Liens de navigation et pied de page
│   ├── context/
│   │   └── QuoteContext.tsx  # État persistant du panier de demande de devis
│   ├── data/
│   │   ├── brands.ts         # Marques avec logos extraits & marques citées
│   │   ├── clients.ts        # Références clients configurables (?page_id=28)
│   │   ├── events.ts         # Structure administrable des événements (?page_id=35)
│   │   ├── products.ts       # Catalogue structuré (Evolis, Matica, rubans, modules)
│   │   └── solutions.ts      # Pôles de solutions et fiches détaillées
│   ├── layouts/
│   │   └── MainLayout.tsx    # Bandeau supérieur #151635, header, menu mobile, footer, WhatsApp
│   ├── pages/                # Accueil, À propos, Solutions, Catalogue, Fiche produit, Marques, Clients, Événements, Contact, Devis
│   ├── services/
│   │   └── inquiryService.ts # Appels API /api/contact et /api/quote
│   └── utils/                # Logique pure filtrage, devis, validation + tests *.test.ts
├── server.ts                 # Serveur Express (API formulaires + Vite/dist)
├── COMPANY_RESEARCH.md       # Rapport documentaire complet & points à valider
└── ASSETS_MANIFEST.json      # Inventaire complet des 70 ressources extraites et provenance
```

---

## Configuration & Administration future

- **Coordonnées & adresse de rue** : modifier `src/config/company.ts` (`streetAddress`, `socialLinks`).
- **Activation / désactivation de produits ou références historiques** : modifier `enabled` et `isHistorical` dans `src/data/products.ts`.
- **Validation des logos clients** : modifier `enabled` ou `showHistoricalReferences` dans `src/data/clients.ts`.
- **Publication d'événements** : ajouter des objets `CompanyEvent` dans `src/data/events.ts`.
- **Envoi automatique des demandes de devis par e-mail (EmailJS)** : renseigner `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` et `VITE_EMAILJS_PUBLIC_KEY` dans `.env` (voir `.env.example`). Les demandes sont transmises directement à `lmsesar03@gmail.com`.

---

## Déploiement

```bash
npm run build
NODE_ENV=production npm start
```
