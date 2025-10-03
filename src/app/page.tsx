import About from "@/components/About";
import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="pt-0">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="countries">
        <Countries />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
