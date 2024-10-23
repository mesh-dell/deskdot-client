import { useLoaderData } from "react-router-dom";
import SellerCard from "../../components/discover/sellerCard";
import NavBar from "../../components/home/navbar";

import { getStores } from "../../services/storeService";

export async function loader() {
  const sellers = await getStores();
  return { sellers };
}

export default function DiscoverSellers() {
  const { sellers } = useLoaderData();

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <h1 className="text-xl font-semibold text-dark-green">
        Discover Sellers
      </h1>
      <div className="grid-cols-3 gap-5 space-y-4 md:grid md:space-y-0">
        {sellers.stores.map((seller) => (
          <SellerCard
            key={seller.seller_id}
            id={seller.seller_id}
            name={seller.store_name}
            description={seller.store_description}
          />
        ))}
      </div>
    </div>
  );
}
