import ProductCard from "../../components/seller/productCard";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="space-y-10 text-dark-green">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Your Products</h1>
        <Link
          to={"/seller/products/create"}
          className="rounded-md bg-light-green px-6 py-2 font-semibold"
        >
          Add Product
        </Link>
      </div>

      <div className="grid-cols-2 gap-5 space-y-3 md:grid md:space-y-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
