"use client";

import { type FunctionComponent, useEffect, useMemo } from "react";
import { useProductsStore } from "@/store/useProductsStore";
import ProductsDialog from "./ProductsDialog";
import ProductsFilter from "./ProductsFilter";
import ProductsGrid from "./ProductsGrid";

type ProductsSuspenseProps = {
  search: string | undefined;
  category: string | undefined;
  country: string | undefined;
};

const ProductsSuspense: FunctionComponent<ProductsSuspenseProps> = ({
  search,
  category,
  country,
}) => {
  const searchTerm = useMemo(() => search ?? "", [search]);
  const selectedCategory = useMemo(
    () => category ?? "All Categories",
    [category],
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
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedCountry={selectedCountry}
      />

      <ProductsGrid />

      <ProductsDialog />
    </>
  );
};

export default ProductsSuspense;
