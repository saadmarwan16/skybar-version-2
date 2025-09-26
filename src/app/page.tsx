"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Add padding-top to account for fixed navigation */}
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

      <Footer />
    </div>
  );
}
