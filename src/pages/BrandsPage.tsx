import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRANDS, TEXT_MENTIONED_BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';
import { ProductCard } from '../components/ProductCard';

export function BrandsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrandId = searchParams.get('brand') || 'evolis';
  const [selectedBrandId, setSelectedBrandId] = useState(initialBrandId);

  useEffect(() => {
    const param = searchParams.get('brand');
    if (param) setSelectedBrandId(param);
  }, [searchParams]);

  const activeBrand =
    BRANDS.find((b) => b.id === selectedBrandId) || BRANDS[0];

  const matchingProducts = PRODUCTS.filter(
    (p) =>
      p.enabled &&
      (p.brand.toLowerCase() === activeBrand.name.toLowerCase() ||
        (activeBrand.id === 'matica' && p.brand === 'Matica'))
  );

  const handleSelectBrand = (id: string) => {
    setSelectedBrandId(id);
    setSearchParams({ brand: id });
  };

  return (
    <>
      <PageSeo
        title="Marques de référence – Evolis, Matica, Zebra, HID Fargo | Higher Glory Technologies"
        description="Découvrez les constructeurs référencés par Higher Glory Technologies au Cameroun : Evolis, Matica, Zebra, Fargo by HID, HiTi, Lenovo, Dell, HP, Datalogic, Honeywell et plus."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Constructeurs &amp; fabricants
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 max-w-3xl">
            Des marques leaders et challengers de l’identification et de l’IT
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Cliquez sur une marque pour consulter ses catégories d’équipements
            et les références associées dans notre catalogue.
          </p>
        </div>
      </section>

      {/* Grille des logos extraits du site officiel */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-[#242424] mb-6">
            <span className="text-[#3366FF]">Marques</span> avec logos officiels
            référencés
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BRANDS.map((brand) => {
              const isSelected = brand.id === activeBrand.id;
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => handleSelectBrand(brand.id)}
                  aria-pressed={isSelected}
                  className={`bg-white border rounded-lg p-6 h-32 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#D61523] ring-2 ring-[#D61523]/15'
                      : 'border-neutral-200 hover:border-[#3366FF]'
                  }`}
                >
                  <ResilientImage
                    src={brand.logoPath}
                    alt={`Logo ${brand.name}`}
                    className="max-h-12 w-auto max-w-[140px] object-contain"
                  />
                  <span className="text-xs font-semibold text-[#242424]/75">
                    {brand.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Détail de la marque sélectionnée */}
          <div className="mt-10 bg-[#F2F2F2] border border-neutral-200 rounded-lg p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#151635]">
                  {activeBrand.name}
                </h3>
                <p className="text-sm text-[#242424]/80 mt-1">
                  Domaines : {activeBrand.categories.join(' · ')}
                </p>
                {activeBrand.note && (
                  <p className="text-xs text-[#242424]/70 mt-2">
                    {activeBrand.note}
                  </p>
                )}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors whitespace-nowrap self-start"
              >
                Demander une cotation {activeBrand.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {matchingProducts.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingProducts.slice(0, 6).map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="mt-6 bg-white border border-neutral-200 rounded-md p-5 text-sm text-[#242424]/80">
                Les équipements {activeBrand.name} sont fournis sur commande et
                devis personnalisé selon vos spécifications techniques.{' '}
                <Link
                  to="/contact"
                  className="text-[#3366FF] font-semibold hover:underline"
                >
                  Contacter l’équipe commerciale
                </Link>
                .
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Marques citées textuellement sur l'ancien site */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-[#242424]">
            Autres fabricants cités dans l’offre Higher Glory Technologies
          </h2>
          <p className="text-sm text-[#242424]/75 mt-1.5">
            Références mentionnées sur la page d’accueil officielle pour les
            secteurs badge, code-barres, RFID et point de vente.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TEXT_MENTIONED_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-neutral-200 rounded-md px-4 py-3.5"
              >
                <p className="font-display text-sm font-bold text-[#151635]">
                  {brand.name}
                </p>
                <p className="text-xs text-[#242424]/70 mt-0.5">
                  {brand.domain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
