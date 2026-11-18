import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getProductById } from '../utils/catalog';
import { useQuote } from '../context/QuoteContext';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(PRODUCTS, id) : undefined;
  const { addItem } = useQuote();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-[#242424]">
          Produit introuvable
        </h1>
        <p className="mt-2 text-sm text-[#242424]/75">
          Cette référence n’est plus disponible ou n’existe pas dans le
          catalogue.
        </p>
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageSeo
        title={`${product.name} (${product.reference}) – Higher Glory Technologies`}
        description={product.shortDescription}
      />

      <section className="bg-[#F2F2F2] border-b border-neutral-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#151635] hover:text-[#D61523] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour au catalogue
          </Link>
          <p className="text-xs text-[#242424]/70">
            {product.category} · {product.brand} ·{' '}
            <span className="font-mono">{product.reference}</span>
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-200 rounded-lg p-8 h-80 sm:h-96 flex items-center justify-center">
              <ResilientImage
                src={product.imagePath}
                alt={product.imageAlt}
                loading="eager"
                className="max-h-72 w-auto max-w-full object-contain"
              />
            </div>
            <p className="mt-2.5 text-xs text-[#242424]/60">
              Source catalogue officiel : {product.sourcePage}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#3366FF]">
                {product.brand} · Réf. {product.reference}
              </p>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#242424] mt-1.5">
                {product.name}
              </h1>
            </div>

            {product.isHistorical && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F2F2F2] border border-neutral-300 text-sm text-[#242424]/85">
                <AlertCircle
                  className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p>
                  <strong>Référence issue de l’ancien catalogue :</strong> la
                  disponibilité actuelle de cet équipement ou de son successeur
                  (ex. Primacy 2) est à confirmer sur devis avec notre équipe à
                  Douala.
                </p>
              </div>
            )}

            <p className="text-base text-[#242424]/85 leading-relaxed">
              {product.description}
            </p>

            {/* Sélecteur quantité + Demande de devis */}
            <div className="p-5 bg-[#F2F2F2] border border-neutral-200 rounded-lg flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="product-qty"
                  className="text-xs font-semibold text-[#242424]"
                >
                  Quantité souhaitée
                </label>
                <div className="inline-flex items-center bg-white border border-neutral-300 rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Diminuer la quantité"
                    className="p-2 text-[#242424] hover:bg-[#F2F2F2]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    id="product-qty"
                    type="number"
                    min={1}
                    max={9999}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value) || 1))
                    }
                    className="w-14 text-center text-sm font-mono font-semibold tabular-nums focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(9999, q + 1))}
                    aria-label="Augmenter la quantité"
                    className="p-2 text-[#242424] hover:bg-[#F2F2F2]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, quantity)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                Ajouter à la demande de devis
              </button>
            </div>

            {/* Caractéristiques techniques vérifiées */}
            <div>
              <h2 className="font-display text-lg font-bold text-[#242424] mb-3">
                Caractéristiques vérifiées
              </h2>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <dl className="divide-y divide-neutral-200">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3 text-sm"
                    >
                      <dt className="font-semibold text-[#151635]">
                        {spec.label}
                      </dt>
                      <dd className="sm:col-span-2 text-[#242424]/85">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="font-display text-lg font-bold text-[#242424] mb-3">
                Applications
              </h2>
              <ul className="space-y-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2.5 text-sm text-[#242424]/85"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#3366FF] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
