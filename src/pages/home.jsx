import NavBar from "../components/navbar";
import HeroesSection from "../components/heroes";
import ProductSection from "../components/productSection";
import CallToAction from "../components/cta";

export default function HomePage() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar /> <HeroesSection /> <ProductSection /> <CallToAction />
    </div>
  );
}
