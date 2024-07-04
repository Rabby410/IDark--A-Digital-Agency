import Image from "next/image";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Services from "./components/home/services";
import OurWorks from "./components/home/ourWorks";
import OurFunFacts from "./components/home/ourFunFacts";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <OurWorks/>
    <OurFunFacts/>
    </>
  );
}
