import SellerCard from "../../components/discover/sellerCard";
import NavBar from "../../components/home/navbar";

export default function DiscoverSellers() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <h1 className="text-xl font-semibold text-dark-green">
        Discover Sellers
      </h1>
      <div className="md:grid grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </div>
  );
}
