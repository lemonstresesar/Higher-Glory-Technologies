import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function SolutionsPage() {
  const confirmedSolutions = SOLUTIONS.filter(
    (s) => s.enabled && s.status === 'confirmed'
  );
  const projectStudySolutions = SOLUTIONS.filter(
    (s) => s.enabled && s.status === 'on_study'
  );

  return (
    <>
      <PageSeo
        title="Nos Solutions – Impression badges, RFID, POS & Sécurité | Higher Glory Technologies"
        description="Explorez les solutions professionnelles d'Higher Glory Technologies à Douala : imprimantes à cartes PVC, consommables, traçabilité codes-barres et RFID, POS, contrôle d'accès et vidéosurveillance."
      />

      <section className="bg-[#151635] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Nos Solutions
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 max-w-3xl">
            Des solutions technologiques structurées pour identifier, tracer et
            sécuriser
          </h1>
          <p className="mt-4 text-base text-white/85 max-w-2xl leading-relaxed">
            Chaque pôle associe équipements constructeurs, consommables adaptés
            et accompagnement technique avant-vente et après-vente.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#242424]">
            <span className="text-[#3366FF]">Pôles d’activité</span> principaux
          </h2>
          <p className="mt-2 text-sm text-[#242424]/75">
            Offres documentées sur la plateforme officielle d’Higher Glory
            Technologies.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmedSolutions.map((sol) => (
              <article
                key={sol.id}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden flex flex-col hover:border-[#3366FF]/60 transition-colors"
              >
                <div className="h-48 bg-[#F2F2F2] border-b border-neutral-100 overflow-hidden flex items-center justify-center">
                  <ResilientImage
                    src={sol.imagePath}
                    alt={sol.imageAlt}
                    className={`w-full h-full ${
                      sol.imagePath?.includes('videosurveillance') ||
                      sol.imagePath?.includes('evolis-primacy-banner')
                        ? 'object-contain bg-white p-4'
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-[#242424]">
                    {sol.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#242424]/75 leading-relaxed flex-1">
                    {sol.summary}
                  </p>
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D61523] hover:text-[#151635] transition-colors"
                    >
                      Voir la solution
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#242424]">
            <span className="text-[#3366FF]">Infrastructures IT</span> &amp;
            projets sur étude
          </h2>
          <p className="mt-2 text-sm text-[#242424]/75 max-w-2xl">
            Pôles complémentaires figurant dans l’arborescence officielle et
            traités sur cahier des charges par notre équipe technique.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectStudySolutions.map((sol) => (
              <article
                key={sol.id}
                className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-[#3366FF]">
                    Sur étude technique
                  </p>
                  <h3 className="font-display text-xl font-bold text-[#242424] mt-1">
                    {sol.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#242424]/75 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#151635] hover:text-[#D61523] transition-colors"
                  >
                    Détails &amp; accompagnement
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
