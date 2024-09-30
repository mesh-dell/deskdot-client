import { Link } from "react-router-dom";

export default function HeroesSection() {
  return (
    <div className="text-dark-green flex-col text-center md:flex md:flex-row md:items-center md:justify-evenly md:text-left">
      <div>
        <h1 className="mb-3 text-2xl font-bold md:text-5xl">Deskdot</h1>
        <h3 className="text-light-grey mb-6 md:text-xl">
          Your One-Stop Shop for Smart Office Solutions
        </h3>
        <Link
          className="bg-dark-green text-white rounded-md px-4 py-2 md:px-4 md:py-2 md:text-xl"
          to={"/signup"}
        >
          Get Started
        </Link>
      </div>
      <img
        className="my-3 md:my-0 md:max-w-lg"
        src="/illustrationHero.png"
        alt="Heroes section image"
      />
    </div>
  );
}
