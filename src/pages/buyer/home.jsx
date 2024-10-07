import NavBar from "../../components/home/navbar";
import NavBarSeller from "../../components/seller/navbar";
import HeroesSection from "../../components/home/heroes";
import ProductSection from "../../components/home/productSection";
import CallToAction from "../../components/home/cta";
import Footer from "../../components/home/footer";

export default function HomePage() {
  const isSeller = true;
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      {isSeller ? <NavBarSeller /> : <NavBar />} <HeroesSection />
      {!isSeller ? <ProductSection /> : <></>}
      <CallToAction />
      <Footer isSeller = {isSeller}/>
    </div>
  );
}
