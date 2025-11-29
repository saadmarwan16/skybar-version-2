import Image from "next/image";
import { Fragment, type FunctionComponent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Country, Media } from "@/payload-types";
import { useCartStore } from "@/store/useCartStore";
import { useProductsStore } from "@/store/useProductsStore";

interface ProductsGridProps {
  search?: string;
  category?: string;
  country?: string;
}

const ProductsGrid: FunctionComponent<ProductsGridProps> = ({
  search,
  category,
  country,
}) => {
  const {
    results: products,
    updateSelectedProduct,
    loadMore,
    isLoadingMore,
    hasMore,
  } = useProductsStore();
  const { addItem } = useCartStore();

  const handleAddToCart = (
    e: React.MouseEvent,
    product: (typeof products)[0]
  ) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section className="py-16 bg-linear-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const images = product.images as Media[];

            return (
              <Card
                key={product.id}
                onClick={() => updateSelectedProduct(product)}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all gap-0 duration-300 border py-0 border-border hover:border-primary/30 bg-card overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  {images.length > 0 && images[0].url && (
                    <Image
                      src={images[0].url}
                      alt={images[0].alt}
                      width={370}
                      height={208}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 space-y-4 pt-2">
                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors min-h-14 flex items-center mb-0">
                    {product.title}
                  </h3>

                  {/* Description - Truncated after 3 lines */}
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed min-h-16">
                    {product.description}
                  </p>

                  {/* Price and Min Order */}
                  <div className="flex justify-between items-center py-4 border-y border-border/50">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Price
                      </span>
                      <p className="text-xl font-bold text-primary mt-1">
                        ${product.price_range.min_price} - $
                        {product.price_range.max_price}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Min. Order
                      </span>
                      <p className="text-base font-semibold text-foreground mt-1">
                        {product.min_order}
                      </p>
                    </div>
                  </div>

                  {/* Export From Countries */}
                  <div className="flex flex-wrap gap-2">
                    {product.export_from?.map((country) => {
                      return (
                        <Fragment key={(country as Country).value}>
                          {typeof country === "object" && (
                            <Badge
                              key={country.value}
                              variant="secondary"
                              className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary-dark border border-secondary/30 hover:bg-secondary/30 transition-colors"
                            >
                              {country.value}
                            </Badge>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full h-12 bg-gradient-primary hover:shadow-lg text-primary-foreground font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {products.length > 0 && hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() =>
                loadMore({
                  search,
                  category,
                  country,
                })
              }
              disabled={isLoadingMore}
              className="px-8 h-12 bg-gradient-primary hover:shadow-lg text-primary-foreground font-semibold text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoadingMore ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <title>Loading</title>
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
