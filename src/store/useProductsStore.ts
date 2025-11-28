import { create } from "zustand";
import type { Product } from "@/payload-types";

interface IQuery {
  search: string;
  category: string;
  country: string;
  products?: Product[];
}

interface ProductsState {
  results: Product[];
  initializeProducts: (products: Product[]) => void;
  selectedProduct: Product | null;
  updateResults: (query: IQuery) => void;
  updateSelectedProduct: (product: Product | null) => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  results: [],
  resultss: [],
  selectedProduct: null,
  initializeProducts: (products) => {
    return set(() => ({ results: products }));
  },
  updateResults: (_query) => {
    // const filteredProducts = mockProducts.filter((product) => {
    //   const matchesSearch =
    //     product.title.toLowerCase().includes(query.search.toLowerCase()) ||
    //     product.description.toLowerCase().includes(query.search.toLowerCase());
    //   const matchesCategory =
    //     query.category === "All Categories" ||
    //     product.category === query.category;
    //   const matchesCountry =
    //     query.country === "All Countries" ||
    //     product.exportFrom.includes(query.country);

    //   return matchesSearch && matchesCategory && matchesCountry;
    // });

    return set(() => ({ results: get().results }));
  },
  updateSelectedProduct: (product) => {
    return set(() => ({ selectedProduct: product }));
  },
}));
