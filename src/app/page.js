
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/NewsLetter";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main >
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Pricing />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
