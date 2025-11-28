"use client";

import type { PaginatedDocs } from "payload";
import { type FunctionComponent, useEffect, useMemo } from "react";
import type { Product, ProductsPage } from "@/payload-types";
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
  products: PaginatedDocs<Product>;
};

const ProductsSuspense: FunctionComponent<ProductsSuspenseProps> = ({
  preview,
  search,
  category,
  country,
  categories,
  countries,
  products,
}) => {
  const searchTerm = useMemo(() => search ?? "", [search]);
  const selectedCategory = useMemo(
    () => category ?? "All Categories",
    [category]
  );
  const selectedCountry = useMemo(() => country ?? "All Countries", [country]);

  const { initializeProducts } = useProductsStore();

  useEffect(() => {
    initializeProducts(products.docs, products.hasNextPage, 1);
  }, [products.docs, products.hasNextPage, initializeProducts]);

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

      <ProductsGrid search={search} category={category} country={country} />

      <ProductsDialog />
    </>
  );
};

export default ProductsSuspense;
