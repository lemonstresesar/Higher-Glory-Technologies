import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowUpRight } from 'lucide-react';
import type { ProductItem } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { ResilientImage } from './ResilientImage';

export function ProductCard({ product }: { product: ProductItem }) {
  const { addItem } = useQuote();

  return (
    <article className="flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-[#3366FF]/50 transition-colors">
      <Link
        to={`/catalogue/${product.id}`}
        className="block bg-white border-b border-neutral-100 p-6 h-52 flex items-center justify-center"
      >
        <ResilientImage
          src={product.imagePath}
          alt={product.imageAlt}
          className="max-h-40 w-auto max-w-full object-contain"
        />
      </Link>

      <div className="flex-1 p-5 flex flex-col">
        <div className="text-xs text-[#242424]/70 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-[#3366FF] font-semibold">{product.brand}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono">{product.reference}</span>
          {product.isHistorical && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-[#D61523]">Référence historique</span>
            </>
          )}
        </div>

        <h3 className="font-display text-base font-bold text-[#242424] mt-2 leading-snug">
          <Link
            to={`/catalogue/${product.id}`}
            className="hover:text-[#3366FF] transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-sm text-[#242424]/75 mt-2 line-clamp-3 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            Ajouter au devis
          </button>

          <Link
            to={`/catalogue/${product.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#151635] hover:text-[#3366FF] transition-colors whitespace-nowrap"
          >
            Fiche détaillée
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
