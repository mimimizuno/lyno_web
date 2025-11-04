import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCards from "@/components/MenuCards";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ClosingVisual from "@/components/ClosingVisual";
import ContactFooter from "@/components/ContactFooter";

export default function Page() {
  return (
    <main className="space-y-20 md:space-y-32">
      <Hero />
      <About />
      <MenuCards />
      <Services />
      <Gallery />
      <ClosingVisual />
      <ContactFooter />
    </main>
  );
}
