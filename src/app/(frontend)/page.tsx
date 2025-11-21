import { getPayload } from "payload";
import type { FunctionComponent } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import config from "@/payload.config";

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
    <main className="pt-0">
      <section id="home">
        <Hero hero={page.hero} />
      </section>

      <section id="about">
        <About
          about={page.about}
          values={page["core-values"]}
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

      <section id="contact">
        <Contact contact={page.contact} />
      </section>
    </main>
  );
};

export default HomePage;
