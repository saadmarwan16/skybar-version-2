import { create } from "zustand";
import { mockProducts } from "@/app/(frontend)/products/data";

interface IQuery {
  search: string;
  category: string;
  country: string;
}

interface ProductsState {
  results: typeof mockProducts;
  selectedProduct: (typeof mockProducts)[0] | null;
  updateResults: (query: IQuery) => void;
  updateSelectedProduct: (product: (typeof mockProducts)[0] | null) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  results: [],
  selectedProduct: null,
  updateResults: (query) => {
    const filteredProducts = mockProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(query.search.toLowerCase()) ||
        product.description.toLowerCase().includes(query.search.toLowerCase());
      const matchesCategory =
        query.category === "All Categories" ||
        product.category === query.category;
      const matchesCountry =
        query.country === "All Countries" ||
        product.exportFrom.includes(query.country);

      return matchesSearch && matchesCategory && matchesCountry;
    });

    return set(() => ({ results: filteredProducts }));
  },
  updateSelectedProduct: (product) => {
    return set(() => ({ selectedProduct: product }));
  },
}));
