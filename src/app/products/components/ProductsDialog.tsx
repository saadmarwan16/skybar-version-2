import Image from "next/image";
import type { FunctionComponent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/native-dialog";
import { useProductsStore } from "@/store/useProductsStore";

const ProductsDialog: FunctionComponent = () => {
  const { selectedProduct, updateSelectedProduct } = useProductsStore();

  return (
    <Dialog
      open={!!selectedProduct}
      onOpenChange={(open) => !open && updateSelectedProduct(null)}
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
                        <Image
                          src={image}
                          alt={`${selectedProduct.title}`}
                          className="w-full h-80 object-cover"
                          width={320}
                          height={568}
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
  );
};

export default ProductsDialog;
