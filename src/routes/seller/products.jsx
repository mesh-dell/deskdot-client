import ProductCard from "../../components/seller/productCard";
import { Link, useLoaderData } from "react-router-dom";
import { getStoreProducts } from "../../services/storeService";

export async function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const products = await getStoreProducts(user.user.id);

    return { products };
  } catch (error) {
    console.error(error);
  }
}

export default function Products() {
  const { products } = useLoaderData();

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
        {products.products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.product_name}
            quantity={product.quantity}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
