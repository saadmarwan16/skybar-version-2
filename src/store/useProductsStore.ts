import { create } from "zustand";
import { loadMore } from "@/app/(frontend)/products/loadMore";
import type { Product } from "@/payload-types";

interface IQuery {
  search?: string;
  category?: string;
  country?: string;
}

interface ProductsState {
  results: Product[];
  page: number;
  isLoadingMore: boolean;
  hasMore: boolean;
  initializeProducts: (
    products: Product[],
    hasMore: boolean,
    page: number
  ) => void;
  selectedProduct: Product | null;
  updateSelectedProduct: (product: Product | null) => void;
  loadMore: (query: IQuery) => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  results: [],
  page: 1,
  isLoadingMore: false,
  hasMore: true,
  selectedProduct: null,
  initializeProducts: (products, hasMore, page) => {
    return set(() => ({
      results: products,
      hasMore: hasMore,
      page: page,
    }));
  },
  updateSelectedProduct: (product) => {
    return set(() => ({ selectedProduct: product }));
  },
  loadMore: async ({ category, country, search }) => {
    const { results, page } = get();
    set({ isLoadingMore: true });
    const products = await loadMore(page + 1, search, category, country);
    const currentProducts = [...results, ...products.docs];

    set({
      results: currentProducts,
      page: page + 1,
      hasMore: products.hasNextPage,
      isLoadingMore: false,
    });
  },
}));
