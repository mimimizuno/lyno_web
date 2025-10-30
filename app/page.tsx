import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import NewsList from "@/components/NewsList";
import Gallery from "@/components/Gallery";

export default function Page() {
  return (
    <main className="space-y-8 md:space-y-12">
      <Hero />
      <Gallery />
      <Schedule />
      <NewsList />
    </main>
  );
}
