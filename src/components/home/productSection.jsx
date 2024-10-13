import ProductCard from "./productCard";
import { getProducts } from "../../services/productService";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function ProductSection() {
  const { products } = useLoaderData();

  return (
    <div>
      <h1 className="mb-5 text-center text-xl text-dark-green">
        Here are some of our products
      </h1>
      <div className="flex flex-col justify-around space-y-5 md:flex-row md:space-y-0">
        {products.products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id}
            product_name={product.product_name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
