import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { COMPANY_EVENTS } from '../data/events';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function EventsPage() {
  const publishedEvents = COMPANY_EVENTS.filter((e) => e.published);

  return (
    <>
      <PageSeo
        title="Événements & Actualités – Higher Glory Technologies"
        description="Retrouvez les actualités, présentations techniques et événements de Higher Glory Technologies à Douala, Cameroun."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Événements &amp; actualités
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Vie de l’entreprise &amp; actualités
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Suivez les annonces officielles, démonstrations produits et
            participations professionnelles de Higher Glory Technologies.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {publishedEvents.length === 0 ? (
            <div className="bg-[#F2F2F2] border border-neutral-200 rounded-lg p-10 sm:p-14 text-center">
              <Calendar
                className="w-10 h-10 mx-auto text-[#151635]/40 mb-4"
                aria-hidden="true"
              />
              <h2 className="font-display text-xl font-bold text-[#242424]">
                Aucun événement publié pour le moment
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#242424]/75 max-w-lg mx-auto leading-relaxed">
                Les prochains événements, lancements d’équipements et actualités
                de Higher Glory Technologies seront prochainement publiés dans
                cet espace.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
                >
                  Consulter le catalogue
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#151635] bg-white border border-neutral-300 rounded-md hover:border-[#151635] transition-colors"
                >
                  Contacter l’équipe
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedEvents.map((evt) => (
                <article
                  key={evt.id}
                  className="border border-neutral-200 rounded-lg overflow-hidden bg-white"
                >
                  {evt.imagePath && (
                    <ResilientImage
                      src={evt.imagePath}
                      alt={evt.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs font-medium text-[#3366FF]">
                      {evt.date} · {evt.location}
                    </p>
                    <h2 className="font-display text-lg font-bold text-[#242424] mt-1.5">
                      {evt.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#242424]/75 leading-relaxed">
                      {evt.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
