import NavBar from "../components/navbar";
import HeroesSection from "../components/heroes";
import ProductSection from "../components/productSection";

export default function HomePage() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar /> <HeroesSection /> <ProductSection />
    </div>
  );
}
