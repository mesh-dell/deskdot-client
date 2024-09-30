import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="bg-dark-green text-white flex h-72 flex-col items-center justify-center space-y-4 md:px-0 px-6 text-center">
      <h1 className="text-2xl font-semibold">Become a Seller with Deskdot</h1>
      <h3 className="text-light-grey">
        Join our marketplace and start selling your products today!
      </h3>
      <Link
        to={"/signup/seller"}
        className="bg-light-green text-dark-green rounded-md px-4 py-2 font-semibold"
      >
        Register as Seller
      </Link>
    </div>
  );
}
