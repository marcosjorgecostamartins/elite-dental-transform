import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { TechBand } from "@/components/site/TechBand";
import { Testimonials } from "@/components/site/Testimonials";
import { Clinic } from "@/components/site/Clinic";
import { Faq, FinalCta } from "@/components/site/FaqCta";
import { Footer } from "@/components/site/Footer";
import { GlowCursor, WhatsAppFloat } from "@/components/site/extras";
import { ScrollProgress } from "@/components/site/primitives";

const TITLE = "Visual Odonto Integra Clínica | Implantes e Estética Dental em Vitória";
const DESCRIPTION =
  "Implantes dentários com tecnologia 3D, lentes de contato dental e harmonização orofacial na Praia do Canto, Vitória (ES). 45 anos de experiência com o Dr. Ismael Sidney.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Visual Odonto Integra Clínica",
  description: DESCRIPTION,
  telephone: "+5527993098190",
  email: "contato@visualodonto.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Nossa Sra. da Penha, 570 - Conj. 301/302, Centro da Praia Shopping",
    addressLocality: "Vitória",
    addressRegion: "ES",
    postalCode: "29055-131",
    addressCountry: "BR",
  },
  areaServed: "Grande Vitória, ES",
  medicalSpecialty: "Dentistry",
  sameAs: ["https://instagram.com/visualodonto"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <GlowCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechBand />
        <Testimonials />
        <Clinic />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
