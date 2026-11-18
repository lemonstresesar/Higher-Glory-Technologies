import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { CLIENT_REFERENCES, CLIENT_REFERENCES_CONFIG } from '../data/clients';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function ClientsPage() {
  const activeClients = CLIENT_REFERENCES.filter((c) => c.enabled);

  return (
    <>
      <PageSeo
        title="Nos Clients – Références | Higher Glory Technologies"
        description="Découvrez les organisations et entreprises ayant fait confiance à Higher Glory Technologies au Cameroun."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Références clients
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            {CLIENT_REFERENCES_CONFIG.sectionTitle}
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Organisations publiques, institutions financières, assurances et
            entreprises industrielles figurant dans nos références.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 p-4 mb-8 rounded-lg bg-[#F2F2F2] border border-neutral-200 text-xs sm:text-sm text-[#242424]/80">
            <Info
              className="w-4 h-4 text-[#3366FF] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p>{CLIENT_REFERENCES_CONFIG.validationBannerText}</p>
          </div>

          {CLIENT_REFERENCES_CONFIG.showHistoricalReferences &&
          activeClients.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {activeClients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col items-center justify-between text-center"
                >
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <ResilientImage
                      src={client.logoPath}
                      alt={`Logo ${client.name}`}
                      className="max-h-20 w-auto max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-sm font-bold text-[#242424]">
                      {client.name}
                    </h2>
                    <p className="text-xs text-[#242424]/65 mt-0.5">
                      {client.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-10 text-center bg-[#F2F2F2] rounded-lg border border-neutral-200">
              <p className="text-sm text-[#242424]/80">
                La liste des références clients est actuellement en cours de
                validation.
              </p>
            </div>
          )}

          <div className="mt-12 p-8 bg-[#F2F2F2] border border-neutral-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl font-bold text-[#151635]">
                Vous souhaitez équiper votre organisation ?
              </h2>
              <p className="text-sm text-[#242424]/80 mt-1">
                Échangez avec notre équipe technique à Douala pour étudier votre
                cahier des charges.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors whitespace-nowrap"
            >
              Contacter notre équipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
