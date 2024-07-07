import Image from "next/image";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Services from "./components/home/services";
import OurWorks from "./components/home/ourWorks";
import OurFunFacts from "./components/home/ourFunFacts";
import Testimonials from "./components/home/testimonials";
import LatestNews from "./components/home/latestNews";
import BrandsSection from "./components/home/brands";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <OurWorks/>
    <OurFunFacts/>
    <Testimonials/>
    <LatestNews/>
    <BrandsSection />
    </>
  );
}
