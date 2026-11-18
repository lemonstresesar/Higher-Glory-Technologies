import type { ProductCategory, ProductItem } from '../data/products';

export interface CatalogFilterOptions {
  searchQuery: string;
  category: ProductCategory | 'all';
  brand: string | 'all';
  includeHistorical: boolean;
}

export function filterProducts(
  products: ProductItem[],
  options: CatalogFilterOptions
): ProductItem[] {
  const q = options.searchQuery.trim().toLowerCase();

  return products.filter((product) => {
    if (!product.enabled) return false;
    if (!options.includeHistorical && product.isHistorical) return false;
    if (options.category !== 'all' && product.category !== options.category) return false;
    if (
      options.brand !== 'all' &&
      product.brand.toLowerCase() !== options.brand.toLowerCase()
    ) {
      return false;
    }

    if (!q) return true;

    const haystack = [
      product.name,
      product.reference,
      product.brand,
      product.category,
      product.shortDescription,
      product.description,
      ...product.applications,
      ...product.specs.map((s) => `${s.label} ${s.value}`),
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(q);
  });
}

export function getProductById(
  products: ProductItem[],
  id: string
): ProductItem | undefined {
  return products.find((p) => p.id === id && p.enabled);
}

export function getDistinctBrands(products: ProductItem[]): string[] {
  return Array.from(
    new Set(products.filter((p) => p.enabled).map((p) => p.brand))
  ).sort();
}

export function getDistinctCategories(products: ProductItem[]): ProductCategory[] {
  return Array.from(
    new Set(products.filter((p) => p.enabled).map((p) => p.category))
  ) as ProductCategory[];
}
