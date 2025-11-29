import type { Metadata } from "next";
import { getPayload } from "payload";
import type { FunctionComponent } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Team from "@/components/Team";
import config from "@/payload.config";
import { LivePreviewListener } from "./LivePreviewListener";

export const metadata: Metadata = {
  title:
    "Skybar Dış Ticaret | International Trade Solutions Between Turkey & East Africa",
  description:
    "Leading international trade company connecting Turkish manufacturers with East African markets. We provide comprehensive import-export services, logistics solutions, and cargo shipping for agricultural machinery, construction materials, and industrial equipment across Kenya, Uganda, Tanzania, Rwanda, Burundi, and South Sudan.",
  keywords: [
    "international trade Turkey Africa",
    "Turkish import export services",
    "East Africa trade solutions",
    "cargo shipping Turkey Kenya",
    "agricultural machinery export",
    "construction materials Turkey",
    "Turkish manufacturers Africa",
    "logistics solutions East Africa",
    "import export Kenya Uganda Tanzania",
    "industrial equipment Turkey",
    "Skybar Dış Ticaret",
    "Turkish African trade",
    "international shipping services",
    "cross-border trade solutions",
    "trade partnership Turkey Africa",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://skybardisticaret.com",
  },
  openGraph: {
    title:
      "Skybar Dış Ticaret - Connecting Turkish Manufacturers to East African Markets",
    description:
      "Your trusted partner for seamless international trade between Turkey and East Africa. We handle everything from sourcing to delivery with expertise in agricultural machinery, construction materials, and industrial equipment.",
    url: "https://skybardisticaret.com",
    type: "website",
    siteName: "Skybar Dış Ticaret",
    locale: "en_US",
    images: [
      {
        url: "/navy-blue-logo.png",
        width: 1200,
        height: 630,
        alt: "Skybar Dış Ticaret - International Trade Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skybar Dış Ticaret | International Trade Solutions",
    description:
      "Leading international trade company connecting Turkish manufacturers with East African markets.",
    images: ["/navy-blue-logo.png"],
  },
};

interface HomePageProps {
  searchParams: Promise<{ preview?: string }>;
}

const HomePage: FunctionComponent<HomePageProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const draft = !!resolvedSearchParams.preview;
  const payload = await getPayload({ config });
  const page = await payload.findGlobal({
    slug: "home-page",
    draft,
  });

  return (
    <>
      {draft && <LivePreviewListener />}
      <main className="pt-0">
        <section id="home">
          <Hero hero={page.hero} />
        </section>

        <section id="about">
          <About
            about={page.about}
            values={page.core_values}
            stats={page.impact}
            why={page.why}
          />
        </section>

        <section id="services">
          <Services services={page.services} consultation={page.consultation} />
        </section>

        <section id="countries">
          <Countries markets={page.markets} partnerships={page.partnerships} />
        </section>

        <section id="team">
          <Team value={page.team} />
        </section>

        <section id="partners">
          <Partners value={page.partners} />
        </section>

        <section id="contact">
          <Contact contact={page.contact} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
