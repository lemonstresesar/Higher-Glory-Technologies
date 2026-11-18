import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Clock, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function AboutPage() {
  const expertiseDomains = [
    'Impression de cartes PVC et badges d’identification professionnelle',
    'Fourniture de rubans certifiés, films de retransfert et patchs de lamination',
    'Traçabilité par codes-barres, étiquetage et identification RFID',
    'Équipement et gestion des points de vente (POS) et caisse',
    'Contrôle d’accès électronique et vidéosurveillance IP / analogique',
    'Serveurs, matériels réseaux et intégration de projets personnalisés',
  ];

  const approachSteps = [
    {
      index: '01',
      title: 'Analyse du besoin métier',
      detail:
        'Étude des volumes d’émission, du niveau de sécurité requis (RFID, hologramme, encodage puce) et de votre environnement logiciel.',
    },
    {
      index: '02',
      title: 'Préconisation constructeurs',
      detail:
        'Sélection transparente d’équipements adaptés parmi des fabricants reconnus (Evolis, Matica, Zebra, HID Fargo, Dell, HP, Lenovo).',
    },
    {
      index: '03',
      title: 'Déploiement & prise en main',
      detail:
        'Livraison, installation, paramétrage des logiciels d’édition de badges ou de gestion et formation des utilisateurs.',
    },
    {
      index: '04',
      title: 'Accompagnement après-vente',
      detail:
        'Suivi technique réactif, fourniture continue des consommables et maintenance préventive de vos équipements.',
    },
  ];

  return (
    <>
      <PageSeo
        title="À propos – Higher Glory Technologies Douala, Cameroun"
        description="Découvrez le positionnement, les domaines d'expertise et l'accompagnement avant-vente et après-vente de Higher Glory Technologies à Douala, Cameroun."
      />

      <section className="bg-[#151635] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            À propos · {COMPANY_CONFIG.contact.city},{' '}
            {COMPANY_CONFIG.contact.country}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 max-w-3xl">
            Fournisseur et intégrateur de solutions technologiques clés en main
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            {COMPANY_CONFIG.positioningStatement}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#242424]">
              <span className="text-[#3366FF]">Notre positionnement</span>{' '}
              professionnel
            </h2>
            <p className="text-base text-[#242424]/85 leading-relaxed">
              Basée à Douala au Cameroun, Higher Glory Technologies accompagne
              les entreprises privées, établissements financiers, assurances,
              industries, établissements scolaires et institutions publiques dans
              l’acquisition et l’intégration de solutions matérielles et
              logicielles adaptées à leurs contraintes opérationnelles.
            </p>
            <p className="text-base text-[#242424]/85 leading-relaxed">
              Au-delà de la simple fourniture de matériel, nous intervenons sur
              l’ensemble de la chaîne : choix des équipements d’identification ou
              de traçabilité, fourniture de consommables certifiés et service
              avant-vente et après-vente dédié.
            </p>

            <div className="pt-4">
              <h3 className="font-display text-lg font-bold text-[#242424] mb-3">
                Domaines d’expertise couverts
              </h3>
              <ul className="space-y-2.5 text-sm text-[#242424]/85">
                {expertiseDomains.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-[#F2F2F2] flex-1 min-h-[240px]">
              <ResilientImage
                src="/assets/services/pos-supermarket.jpg"
                alt="Déploiement d'équipement point de vente Higher Glory Technologies"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#F2F2F2] border border-neutral-200 rounded-lg p-6 space-y-2.5 text-sm">
              <p className="font-display font-bold text-[#151635]">
                Implantation &amp; disponibilité
              </p>
              <p className="flex items-start gap-2 text-[#242424]/80">
                <MapPin className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_CONFIG.contact.streetAddress ||
                    COMPANY_CONFIG.contact.addressPendingConfirmationNote}
                </span>
              </p>
              <p className="flex items-center gap-2 text-[#242424]/80">
                <Clock className="w-4 h-4 text-[#D61523] shrink-0" />
                <span>{COMPANY_CONFIG.contact.hours}</span>
              </p>
              <p className="flex items-center gap-2 text-[#242424]/80 tabular-nums">
                <Phone className="w-4 h-4 text-[#D61523] shrink-0" />
                <span>{COMPANY_CONFIG.contact.phones.join(' / ')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
              <span className="text-[#3366FF]">Notre approche</span> avant-vente
              &amp; après-vente
            </h2>
            <p className="mt-3 text-base text-[#242424]/80">
              Un accompagnement structuré pour sécuriser vos investissements
              matériels et logiciels dans la durée.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.index}
                className="bg-white border border-neutral-200 rounded-lg p-6"
              >
                <span className="font-mono text-xs font-semibold text-[#3366FF]">
                  {step.index}.
                </span>
                <h3 className="font-display text-lg font-bold text-[#242424] mt-3">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#242424]/75 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
            >
              Découvrir nos solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#151635] bg-white border border-neutral-300 rounded-md hover:border-[#151635] transition-colors"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
