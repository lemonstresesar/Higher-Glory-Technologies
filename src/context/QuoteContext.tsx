import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ProductItem } from '../data/products';
import {
  addQuoteItem,
  getTotalQuoteUnits,
  removeQuoteItem,
  updateQuoteItemQuantity,
  type QuoteLineItem,
} from '../utils/quote';

const STORAGE_KEY = 'hgt_quote_bag_v1';

interface QuoteContextValue {
  items: QuoteLineItem[];
  totalUnits: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (
    product: ProductItem,
    quantity?: number,
    openDrawerOnAdd?: boolean
  ) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

function loadStoredItems(): QuoteLineItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteLineItem[]>(() => loadStoredItems());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  }, [items]);

  const addItem = (
    product: ProductItem,
    quantity = 1,
    openDrawerOnAdd = true
  ) => {
    setItems((prev) => addQuoteItem(prev, product, quantity));
    if (openDrawerOnAdd) {
      setIsDrawerOpen(true);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prev) => updateQuoteItemQuantity(prev, productId, quantity));
  };

  const removeItem = (productId: string) => {
    setItems((prev) => removeQuoteItem(prev, productId));
  };

  const clearQuote = () => {
    setItems([]);
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        totalUnits: getTotalQuoteUnits(items),
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        addItem,
        updateQuantity,
        removeItem,
        clearQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return ctx;
}
