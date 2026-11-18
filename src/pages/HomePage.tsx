import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CreditCard,
  ScanBarcode,
  ShoppingCart,
  ShieldCheck,
  Wrench,
  Headset,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SOLUTIONS } from '../data/solutions';
import { PRODUCTS } from '../data/products';
import { BRANDS } from '../data/brands';
import { CLIENT_REFERENCES, CLIENT_REFERENCES_CONFIG } from '../data/clients';
import { PageSeo } from '../components/PageSeo';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

export function HomePage() {
  const featuredSolutions = SOLUTIONS.filter((s) => s.enabled).slice(0, 6);
  const featuredProducts = PRODUCTS.filter((p) => p.enabled && !p.isHistorical).slice(0, 4);
  const activeClients = CLIENT_REFERENCES.filter((c) => c.enabled);

  const expertisePillars = [
    {
      index: '01',
      icon: CreditCard,
      title: 'Identification & Cartes PVC',
      description:
        'Imprimantes direct-to-card et retransfert, encodage magnétique ou sans contact, modules de lamination et rubans constructeurs.',
    },
    {
      index: '02',
      icon: ScanBarcode,
      title: 'Codes-barres, Étiquettes & RFID',
      description:
        'Systèmes de lecture, étiquetage thermique industriel et traçabilité RFID pour fiabiliser vos flux logistiques et inventaires.',
    },
    {
      index: '03',
      icon: ShoppingCart,
      title: 'Points de Vente (POS)',
      description:
        'Terminaux tactiles, imprimantes tickets, lecteurs de comptoir et équipements d’encaissement adaptés aux commerces et supermarchés.',
    },
    {
      index: '04',
      icon: ShieldCheck,
      title: 'Contrôle d’Accès & Vidéosurveillance',
      description:
        'Gestion électronique des flux piétons et véhicules, lecteurs de badges, biométrie et vidéoprotection IP ou analogique.',
    },
  ];

  return (
    <>
      <PageSeo
        title="Higher Glory Technologies – Identification, Traçabilité RFID & Solutions IT au Cameroun"
        description="Higher Glory Technologies à Douala, Cameroun : fournisseur et intégrateur de solutions matérielles et logicielles d'identification par cartes PVC, codes-barres, RFID, POS et sécurité."
      />

      {/* HERO SECTION (#2E1B1C + bannière originale Matica récupérée du site officiel) */}
      <section className="relative bg-[#2E1B1C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero/hero-banner-matica-full.jpg"
            alt="Équipements d'impression de cartes et identification sécurisée Higher Glory Technologies"
            className="w-full h-full object-cover object-right opacity-55 sm:opacity-65"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#151635]/95 via-[#2E1B1C]/82 to-[#2E1B1C]/25"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mb-4">
              {COMPANY_CONFIG.name} · {COMPANY_CONFIG.contact.city},{' '}
              {COMPANY_CONFIG.contact.country}
            </p>
            <h1 className="font-display font-extrabold text-[clamp(2rem,3.8vw,3.35rem)] leading-[1.1] tracking-tight text-white">
              {COMPANY_CONFIG.heroTitle}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              {COMPANY_CONFIG.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors whitespace-nowrap"
              >
                Découvrir nos solutions
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/30 bg-white/5 rounded-md hover:bg-white/15 transition-colors whitespace-nowrap"
              >
                Contacter notre équipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION DE L'ENTREPRISE */}
      <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D61523]">
              Intégrateur de solutions matérielles &amp; logicielles
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424] mt-2 leading-tight">
              <span className="text-[#3366FF]">Higher Glory Technologies</span> /
              L’expert de l’impression sur badge, étiquette, lecture par
              code-barres et RFID
            </h2>
            <p className="mt-5 text-base text-[#242424]/85 leading-relaxed">
              Basée à Douala au Cameroun, la société Higher Glory Technologies
              accompagne les entreprises, organisations et institutions dans
              l’acquisition et l’intégration de solutions matérielles et
              logicielles clés en main.
            </p>
            <p className="mt-4 text-base text-[#242424]/85 leading-relaxed">
              Spécialisée dans l’identification des personnes par cartes et
              badges, la traçabilité par codes-barres et RFID ainsi que la
              gestion des points de vente, notre équipe met en œuvre des
              équipements éprouvés appuyés par un accompagnement avant-vente et
              après-vente rigoureux.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6 text-sm font-semibold">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 text-[#3366FF] hover:text-[#151635] transition-colors"
              >
                À propos de l’entreprise
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 text-[#242424] hover:text-[#D61523] transition-colors"
              >
                Consulter le catalogue
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[260px] rounded-lg overflow-hidden border border-neutral-200 bg-[#F2F2F2]">
              <ResilientImage
                src="/assets/hero/evolis-consumables-hero.jpg"
                alt="Mise en place d'un ruban d'impression sur imprimante à cartes Evolis"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINES D'EXPERTISE */}
      <section className="py-16 md:py-20 bg-[#F2F2F2] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
              <span className="text-[#3366FF]">Domaines d’expertise</span> pour
              vos opérations critiques
            </h2>
            <p className="mt-3 text-base text-[#242424]/80 leading-relaxed">
              {COMPANY_CONFIG.positioningStatement}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertisePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.index}
                  className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-[#3366FF]">
                      {pillar.index}.
                    </span>
                    <Icon
                      className="w-5 h-5 text-[#151635]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#242424]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#242424]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS PRINCIPALES */}
      <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
                <span className="text-[#3366FF]">Solutions métiers</span> clés en
                main
              </h2>
              <p className="mt-3 text-base text-[#242424]/80">
                Des architectures matérielles et logicielles conçues pour les
                entreprises, banques, assurances, industries et institutions.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D61523] hover:text-[#151635] transition-colors whitespace-nowrap"
            >
              Voir toutes les solutions
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSolutions.map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-[#3366FF]/60 transition-colors flex flex-col"
              >
                <div className="h-44 bg-[#F2F2F2] border-b border-neutral-100 overflow-hidden flex items-center justify-center">
                  <ResilientImage
                    src={sol.imagePath}
                    alt={sol.imageAlt}
                    loading="eager"
                    className={`w-full h-full ${
                      sol.imagePath?.includes('videosurveillance') ||
                      sol.imagePath?.includes('evolis-primacy-banner')
                        ? 'object-contain bg-white p-4'
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-[#242424] group-hover:text-[#3366FF] transition-colors">
                    {sol.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm text-[#242424]/75 leading-relaxed flex-1">
                    {sol.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#151635] group-hover:text-[#D61523] transition-colors">
                    Explorer cette solution
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS SÉLECTIONNÉS */}
      <section className="py-16 md:py-20 bg-[#F2F2F2] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
                <span className="text-[#3366FF]">Équipements &amp; rubans</span>{' '}
                sélectionnés
              </h2>
              <p className="mt-3 text-base text-[#242424]/80">
                Extraits du catalogue officiel Higher Glory Technologies.
                Sélectionnez vos références pour établir une demande de devis
                regroupée.
              </p>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D61523] hover:text-[#151635] transition-colors whitespace-nowrap"
            >
              Ouvrir le catalogue complet
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUES DE RÉFÉRENCE (Logos originaux extraits du site) */}
      <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
                <span className="text-[#3366FF]">Fabricants</span> de référence
              </h2>
              <p className="mt-3 text-base text-[#242424]/80">
                Nous sélectionnons les équipements de constructeurs reconnus dans
                l’impression de badges, la traçabilité, le point de vente et
                l’infrastructure informatique.
              </p>
            </div>
            <Link
              to="/marques"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3366FF] hover:text-[#151635] transition-colors whitespace-nowrap"
            >
              Toutes les marques
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BRANDS.map((brand) => (
              <Link
                key={brand.id}
                to={`/marques?brand=${brand.id}`}
                className="bg-white border border-neutral-200 rounded-lg p-6 h-28 flex items-center justify-center hover:border-[#3366FF]/60 transition-colors"
                title={brand.name}
              >
                <ResilientImage
                  src={brand.logoPath}
                  alt={`Logo fabricant ${brand.name}`}
                  className="max-h-12 w-auto max-w-[140px] object-contain"
                  loading="eager"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & ACCOMPAGNEMENT */}
      <section className="py-16 md:py-20 bg-[#151635] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Un accompagnement avant-vente et après-vente dédié
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Chez Higher Glory Technologies, la fourniture d’équipements
              s’accompagne d’un suivi technique complet à Douala et sur
              l’ensemble du territoire camerounais.
            </p>
            <div className="pt-2 space-y-3 text-sm text-white/90">
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  Conseil avant-vente : audit de vos volumes d’impression, choix
                  d’encodeurs RFID et compatibilité logicielle.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Wrench
                  className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  Déploiement &amp; intégration : mise en service des
                  imprimantes, terminaux POS et systèmes de sécurité.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Headset
                  className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  Support après-vente : approvisionnement continu en rubans
                  certifiés et assistance technique réactive.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 shrink-0 bg-white rounded-lg p-3 flex items-center justify-center">
                <ResilientImage
                  src="/assets/brands/silver-2022-higher-glory-technologies.png"
                  alt="Badge historique Evolis Silver Reseller 2022 - Higher Glory Technologies CMR49705"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div>
                <p className="text-xs font-mono text-white/65">
                  Archive médiathèque officielle · Réf. CMR49705
                </p>
                <h3 className="font-display text-lg font-bold text-white mt-1">
                  Distinction Evolis Silver Reseller 2022
                </h3>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  Présente dans nos archives officielles pour l’expertise
                  d’intégration et de distribution des gammes Evolis au
                  Cameroun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉFÉRENCES CLIENTS VALIDÉES / CONFIGURABLES */}
      {CLIENT_REFERENCES_CONFIG.showHistoricalReferences &&
        activeClients.length > 0 && (
          <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
                    <span className="text-[#3366FF]">Ils nous ont</span> fait
                    confiance
                  </h2>
                  <p className="mt-2 text-sm text-[#242424]/70">
                    {COMPANY_CONFIG.legal.clientLogosValidationNotice}
                  </p>
                </div>
                <Link
                  to="/clients"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151635] hover:text-[#D61523] transition-colors whitespace-nowrap"
                >
                  Page Nos clients
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
                {activeClients.map((client) => (
                  <div
                    key={client.id}
                    className="bg-white border border-neutral-200 rounded-lg p-4 h-28 flex items-center justify-center"
                    title={client.name}
                  >
                    <ResilientImage
                      src={client.logoPath}
                      alt={`Logo client ${client.name}`}
                      className="max-h-16 w-auto max-w-full object-contain"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* APPEL À L'ACTION FINAL */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
            Un projet d’identification, de traçabilité ou d’équipement POS ?
          </h2>
          <p className="mt-3 text-base text-[#242424]/80 max-w-2xl mx-auto">
            Composez votre sélection d’équipements pour obtenir un devis
            personnalisé ou contactez directement nos conseillers à Douala.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
            >
              Constituer une demande de devis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#151635] bg-white border border-neutral-300 rounded-md hover:border-[#151635] transition-colors"
            >
              Contacter Higher Glory Technologies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
