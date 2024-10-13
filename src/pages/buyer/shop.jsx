import NavBar from "../../components/home/navbar";
import BreadCrumb from "../../components/shop/breadcrumb";
import ProductCard from "../../components/home/productCard";

import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/productService";

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Shop() {
  const loaderData = useLoaderData();
  const products = loaderData.products.products;

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar /> <BreadCrumb />
      <div className="flex grid-cols-3 flex-col justify-items-center space-y-5 md:grid md:space-y-0">
        {products.map((product) => (
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
