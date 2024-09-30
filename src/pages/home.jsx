import NavBar from "../components/navbar";
import HeroesSection from "../components/heroes";

export default function HomePage() {
  return (
    <div className="mx-6 md:mx-10 *:mb-10">
      <NavBar /> <HeroesSection />
    </div>
  );
}
