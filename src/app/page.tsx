import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Events from "@/components/Events";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Events />
        <Testimonies />
      </main>
      <Footer />
    </>
  );
}
