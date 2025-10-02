"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/native-dialog";
import { NativeSelect } from "@/components/ui/native-select";
import ProductsGrid from "./components/ProductsGrid";
import { categories, countries, type mockProducts } from "./data";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof mockProducts)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/products-hero-bg.jpg)` }}
        />
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/80 to-accent/80" />
        <div className="absolute inset-0 bg-gradient-overlay opacity-60" />

        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-100" />
          <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/20 rounded-full animate-pulse delay-200" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Global Product
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] block">
                Marketplace
              </span>
            </h1>

            <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md">
              Discover premium industrial products and machinery from trusted
              international suppliers
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Starting point*/}
      <section className="relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-b border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base shadow-md border-2 hover:border-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm border border-border/50">
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  Category:
                </span>
                <NativeSelect
                  className="w-56 h-11 border-2 hover:border-primary/30 transition-colors"
                  placeholder="Select category"
                  value={selectedCategory}
                  onChange={(value) => setSelectedCategory(value)}
                  options={categories.map((cat) => ({
                    value: cat,
                    label: cat,
                  }))}
                />
              </div>

              <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm border border-border/50">
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  Export From:
                </span>
                <NativeSelect
                  className="w-56 h-11 border-2 hover:border-primary/30 transition-colors"
                  placeholder="Select country"
                  value={selectedCountry}
                  onChange={(value) => setSelectedCountry(value)}
                  options={countries.map((country) => ({
                    value: country,
                    label: country,
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ending point */}

      <ProductsGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedCountry={selectedCountry}
        setSelectedProduct={setSelectedProduct}
      />

      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading font-bold text-foreground pr-8">
                  {selectedProduct.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 p-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProduct.images.map((image) => (
                      <CarouselItem key={image}>
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${selectedProduct.title}`}
                            className="w-full h-80 object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Description
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 p-6 bg-muted/30 rounded-lg border border-border">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-2">
                      Price Range
                    </span>
                    <p className="text-2xl font-bold text-primary">
                      {selectedProduct.price}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-2">
                      Minimum Order
                    </span>
                    <p className="text-2xl font-semibold text-foreground">
                      {selectedProduct.minOrder}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Available for Export From
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.exportFrom.map((country) => (
                      <Badge
                        key={country}
                        variant="secondary"
                        className="text-sm font-medium px-4 py-2 bg-secondary/20 text-secondary-dark border border-secondary/30 hover:bg-secondary/30 transition-colors"
                      >
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full h-14 bg-gradient-primary hover:shadow-lg text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02]">
                  Import Product
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
