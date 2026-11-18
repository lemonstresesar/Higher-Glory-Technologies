import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, RotateCcw } from 'lucide-react';
import { PRODUCTS, type ProductCategory } from '../data/products';
import {
  filterProducts,
  getDistinctBrands,
  getDistinctCategories,
} from '../utils/catalog';
import { COMPANY_CONFIG } from '../config/company';
import { PageSeo } from '../components/PageSeo';
import { ProductCard } from '../components/ProductCard';

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory =
    (searchParams.get('category') as ProductCategory | null) || 'all';
  const initialBrand = searchParams.get('brand') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | 'all'
  >(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [includeHistorical, setIncludeHistorical] = useState(true);

  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory | null;
    const br = searchParams.get('brand');
    if (cat) setSelectedCategory(cat);
    if (br) setSelectedBrand(br);
  }, [searchParams]);

  const brands = useMemo(() => getDistinctBrands(PRODUCTS), []);
  const categories = useMemo(() => getDistinctCategories(PRODUCTS), []);

  const filtered = useMemo(
    () =>
      filterProducts(PRODUCTS, {
        searchQuery,
        category: selectedCategory,
        brand: selectedBrand,
        includeHistorical,
      }),
    [searchQuery, selectedCategory, selectedBrand, includeHistorical]
  );

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setIncludeHistorical(true);
    setSearchParams({});
  };

  return (
    <>
      <PageSeo
        title="Catalogue Équipements & Consommables – Higher Glory Technologies"
        description="Catalogue de référence d'Higher Glory Technologies : imprimantes à cartes PVC Evolis, modules de lamination, rubans couleur et monochromes, films Matica XID 8100. Demandez un devis en ligne."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Catalogue matériel &amp; consommables
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Imprimantes à cartes PVC, modules &amp; rubans
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Références issues du catalogue et de la boutique Higher Glory
            Technologies. {COMPANY_CONFIG.legal.catalogAvailabilityNotice}
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#F2F2F2] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <label
                htmlFor="catalog-search"
                className="block text-xs font-semibold text-[#242424] mb-1.5"
              >
                Rechercher un modèle ou une référence
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#242424]/50 absolute left-3.5 top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                />
                <input
                  id="catalog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ex. Primacy 2, Agilia, R5F008EAA, Matica..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label
                htmlFor="catalog-category"
                className="block text-xs font-semibold text-[#242424] mb-1.5"
              >
                Catégorie
              </label>
              <select
                id="catalog-category"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as ProductCategory | 'all')
                }
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="catalog-brand"
                className="block text-xs font-semibold text-[#242424] mb-1.5"
              >
                Marque
              </label>
              <select
                id="catalog-brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
              >
                <option value="all">Toutes les marques</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <label className="inline-flex items-center gap-2.5 text-xs font-medium text-[#242424]/85 cursor-pointer">
              <input
                type="checkbox"
                checked={includeHistorical}
                onChange={(e) => setIncludeHistorical(e.target.checked)}
                className="rounded border-neutral-300 text-[#3366FF] focus:ring-[#3366FF]"
              />
              Afficher également les références historiques de l’ancien catalogue
            </label>

            <div className="flex items-center gap-4 text-xs text-[#242424]/75">
              <span className="tabular-nums font-medium">
                {filtered.length} référence{filtered.length > 1 ? 's' : ''}{' '}
                affichée{filtered.length > 1 ? 's' : ''}
              </span>
              {(searchQuery ||
                selectedCategory !== 'all' ||
                selectedBrand !== 'all' ||
                !includeHistorical) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-[#D61523] font-semibold hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="py-16 text-center border border-neutral-200 rounded-lg bg-[#F2F2F2]/60 px-6">
              <h2 className="font-display text-lg font-bold text-[#242424]">
                Aucune référence ne correspond à votre recherche
              </h2>
              <p className="text-sm text-[#242424]/75 mt-2 max-w-md mx-auto">
                Essayez un autre mot-clé, élargissez les filtres ou contactez
                directement notre équipe pour une référence spécifique (Zebra,
                HID Fargo, Datalogic, POS, Serveurs).
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors cursor-pointer"
              >
                Afficher tout le catalogue
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
