import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight, FileText } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { ResilientImage } from './ResilientImage';

export function QuoteDrawer() {
  const {
    items,
    totalUnits,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    clearQuote,
  } = useQuote();

  if (!isDrawerOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Sélection pour demande de devis"
    >
      <div
        className="absolute inset-0"
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col w-full max-w-md bg-white h-full border-l border-neutral-200 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-[#151635] text-white">
          <div>
            <h2 className="font-display text-lg font-bold tracking-tight">
              Votre demande de devis
            </h2>
            <p className="text-xs text-white/75 mt-0.5 tabular-nums">
              {items.length} référence{items.length > 1 ? 's' : ''} · {totalUnits}{' '}
              unité{totalUnits > 1 ? 's' : ''}
            </p>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Fermer le panneau de devis"
            className="p-2 text-white/80 hover:text-white rounded-md focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <FileText
                className="w-10 h-10 mx-auto text-[#151635]/30 mb-3"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-[#242424]">
                Aucun équipement sélectionné
              </p>
              <p className="text-sm text-[#242424]/70 mt-1 max-w-xs mx-auto">
                Parcourez le catalogue et ajoutez les imprimantes ou consommables
                souhaités pour recevoir une proposition chiffrée.
              </p>
              <Link
                to="/catalogue"
                onClick={closeDrawer}
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
              >
                Explorer le catalogue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.productId}
                className="flex gap-4 pb-4 border-b border-neutral-200 last:border-b-0"
              >
                <div className="w-16 h-16 shrink-0 bg-white border border-neutral-200 rounded-md p-1.5 flex items-center justify-center">
                  <ResilientImage
                    src={item.imagePath}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-[#3366FF] font-medium">
                    {item.reference} · {item.brand}
                  </p>
                  <p className="text-sm font-semibold text-[#242424] leading-snug line-clamp-2 mt-0.5">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="inline-flex items-center border border-neutral-300 rounded-md">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        aria-label={`Diminuer la quantité de ${item.name}`}
                        className="p-1.5 text-[#242424] hover:bg-[#F2F2F2]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-mono font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        aria-label={`Augmenter la quantité de ${item.name}`}
                        className="p-1.5 text-[#242424] hover:bg-[#F2F2F2]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      aria-label={`Retirer ${item.name} du devis`}
                      className="p-1.5 text-[#242424]/60 hover:text-[#D61523] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-neutral-200 bg-[#F2F2F2] space-y-3">
            <Link
              to="/devis"
              onClick={closeDrawer}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
            >
              Finaliser la demande de devis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={clearQuote}
              className="w-full py-2 text-xs font-medium text-[#242424]/70 hover:text-[#D61523] transition-colors"
            >
              Vider la sélection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
