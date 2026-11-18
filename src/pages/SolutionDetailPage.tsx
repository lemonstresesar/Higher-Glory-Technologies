import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS.find((s) => s.slug === slug && s.enabled);

  if (!solution) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-[#242424]">
          Solution introuvable
        </h1>
        <p className="mt-3 text-sm text-[#242424]/75">
          Cette rubrique n’est pas disponible ou a été déplacée.
        </p>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux solutions
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageSeo
        title={`${solution.shortTitle} – Higher Glory Technologies Cameroun`}
        description={solution.summary}
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Toutes nos solutions
          </Link>
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold mt-4 max-w-3xl">
            {solution.title}
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            {solution.summary}
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-[#242424]">
                <span className="text-[#3366FF]">Présentation</span> technique
              </h2>
              <p className="mt-3 text-base text-[#242424]/85 leading-relaxed">
                {solution.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-[#242424]">
                Points clés &amp; capacités
              </h2>
              <ul className="mt-4 space-y-3">
                {solution.keyBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#242424]/85"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-[#242424]">
                Applications courantes
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#242424]/80 list-disc pl-5">
                {solution.applications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg border border-neutral-200 overflow-hidden bg-[#F2F2F2]">
              <ResilientImage
                src={solution.imagePath}
                alt={solution.imageAlt}
                className={`w-full h-64 ${
                  solution.imagePath?.includes('videosurveillance') ||
                  solution.imagePath?.includes('evolis-primacy-banner')
                    ? 'object-contain bg-white p-6'
                    : 'object-cover'
                }`}
              />
            </div>

            <div className="bg-[#F2F2F2] border border-neutral-200 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-display text-sm font-bold text-[#151635]">
                  Fabricants associés
                </h3>
                <p className="mt-1.5 text-sm text-[#242424]/80 leading-relaxed">
                  {solution.relatedBrands.join(' · ')}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
                >
                  Contacter notre équipe pour cette solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {solution.catalogCategory && (
                  <Link
                    to={`/catalogue?category=${encodeURIComponent(
                      solution.catalogCategory
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#151635] bg-white border border-neutral-300 rounded-md hover:border-[#151635] transition-colors"
                  >
                    Voir les équipements au catalogue
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
