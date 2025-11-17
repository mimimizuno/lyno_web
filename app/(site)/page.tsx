import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Beans from "@/components/sections/Beans";
import News from "@/components/sections/News";
import Access from "@/components/sections/Access";
import Footer from "@/components/Footer";
import { getNews } from "@/lib/data/news";

export default async function Page() {
  const news = await getNews();
  
  return (
    <>
      <Header />
      <main className="pt-16 space-y-24 md:space-y-32">
        <Hero />
        <About />
        <News items={news}/>
        <Menu />
        <Beans />
        <Access />
      </main>
      <Footer />
    </>
  );
}
