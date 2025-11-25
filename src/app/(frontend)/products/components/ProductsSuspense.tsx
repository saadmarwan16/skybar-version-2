"use client";

import { type FunctionComponent, useEffect, useMemo } from "react";
import type { ProductsPage } from "@/payload-types";
import { useProductsStore } from "@/store/useProductsStore";
import ProductsDialog from "./ProductsDialog";
import ProductsFilter from "./ProductsFilter";
import ProductsGrid from "./ProductsGrid";

type ProductsSuspenseProps = {
  preview: string | undefined;
  search: string | undefined;
  category: string | undefined;
  country: string | undefined;
  categories: ProductsPage["categories"];
  countries: ProductsPage["countries"];
};

const ProductsSuspense: FunctionComponent<ProductsSuspenseProps> = ({
  preview,
  search,
  category,
  country,
  categories,
  countries,
}) => {
  const searchTerm = useMemo(() => search ?? "", [search]);
  const selectedCategory = useMemo(
    () => category ?? "All Categories",
    [category]
  );
  const selectedCountry = useMemo(() => country ?? "All Countries", [country]);

  const { updateResults } = useProductsStore();

  useEffect(() => {
    updateResults({
      search: searchTerm,
      category: selectedCategory,
      country: selectedCountry,
    });
  }, [searchTerm, selectedCategory, selectedCountry, updateResults]);

  return (
    <>
      <ProductsFilter
        preview={preview}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedCountry={selectedCountry}
        categories={categories}
        countries={countries}
      />

      <ProductsGrid />

      <ProductsDialog />
    </>
  );
};

export default ProductsSuspense;
