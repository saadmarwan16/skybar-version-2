import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FunctionComponent } from "react";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import type { ProductsPage } from "@/payload-types";
import { useDebounce } from "../hooks/useDebounce";
import { GenerateSearchParams } from "../usecases/GenerateSearchParams";

interface ProductsFilterProps {
  searchTerm: string;
  selectedCategory: string;
  selectedCountry: string;
  categories: ProductsPage["categories"];
  countries: ProductsPage["countries"];
}

const ProductsFilter: FunctionComponent<ProductsFilterProps> = ({
  searchTerm,
  selectedCategory,
  selectedCountry,
  categories,
  countries,
}) => {
  const router = useRouter();
  const { debouncedValue: search, setDebouncedValue: updateSearch } =
    useDebounce(searchTerm, selectedCategory, selectedCountry);

  return (
    <section className="relative bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 border-b border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                updateSearch(e.target.value);
                router.push(
                  `/products?${new GenerateSearchParams().execute(
                    e.target.value,
                    selectedCategory,
                    selectedCountry
                  )}`,
                  {
                    scroll: false,
                  }
                );
              }}
              className="pl-10 h-12 text-base shadow-md border-2 hover:border-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-4 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm border border-border/50 z-50 bg-card/80">
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                Category:
              </span>
              <NativeSelect
                className="w-56 h-11 border-2 hover:border-primary/30 transition-colors"
                placeholder="Select category"
                value={selectedCategory}
                onChange={(value) =>
                  router.push(
                    `/products?${new GenerateSearchParams().execute(
                      searchTerm,
                      value,
                      selectedCountry
                    )}`,
                    {
                      scroll: false,
                    }
                  )
                }
                options={categories?.map((cat) => {
                  if (typeof cat === "number") {
                    return {
                      value: "All Categories",
                      label: "All Categories",
                    };
                  }

                  return {
                    value: cat.value,
                    label: cat.value,
                  };
                })}
              />
            </div>

            <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm border border-border/50 z-50">
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                Export From:
              </span>
              <NativeSelect
                className="w-56 h-11 border-2 hover:border-primary/30 transition-colors"
                placeholder="Select country"
                value={selectedCountry}
                onChange={(value) =>
                  router.push(
                    `/products?${new GenerateSearchParams().execute(
                      searchTerm,
                      selectedCategory,
                      value
                    )}`,
                    {
                      scroll: false,
                    }
                  )
                }
                options={countries?.map((country) => {
                  if (typeof country === "number") {
                    return {
                      value: "All Countries",
                      label: "All Countries",
                    };
                  }

                  return {
                    value: country.value,
                    label: country.value,
                  };
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsFilter;
