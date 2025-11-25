import { getPayload } from "payload";
import type { FunctionComponent } from "react";
import config from "@/payload.config";
import { LivePreviewListener } from "../LivePreviewListener";
import ProductsSuspense from "./components/ProductsSuspense";

interface ProductsPageProps {
  searchParams: Promise<{
    search: string;
    category: string;
    country: string;
    preview?: string;
  }>;
}

const Products: FunctionComponent<ProductsPageProps> = async (props) => {
  const { category, country, search, preview } = await props.searchParams;
  const draft = !!preview;
  const payload = await getPayload({ config });
  const page = await payload.findGlobal({
    slug: "products-page",
    draft,
  });

  return (
    <>
      {draft && <LivePreviewListener />}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/products-hero-bg.jpg)` }}
        />
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/80 via-primary-dark/80 to-accent/80" />
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
              {page.title.prefix}
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] block">
                {page.title.infix}
              </span>
              {page.title.suffix && <>{page.title.suffix}</>}
            </h1>

            <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md">
              {page.subtitle}
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

      <ProductsSuspense
        preview={preview}
        search={search}
        category={category}
        country={country}
        countries={page.countries}
        categories={page.categories}
      />
    </>
  );
};

export default Products;
