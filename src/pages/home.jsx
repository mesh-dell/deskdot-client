import NavBar from "../components/home/navbar";
import HeroesSection from "../components/home/heroes";
import ProductSection from "../components/home/productSection";
import CallToAction from "../components/home/cta";
import Footer from "../components/home/footer";

export default function HomePage() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar /> <HeroesSection /> <ProductSection /> <CallToAction />
      <Footer />
    </div>
  );
}
