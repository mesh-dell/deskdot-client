import BreadCrumb from "../../components/shop/breadcrumb";
import NavBar from "../../components/home/navbar";

import { getProduct } from "../../services/productService";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return { product };
}

export default function ProductPage() {
  const { product } = useLoaderData();

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <BreadCrumb />
      <div className="justify-center space-y-5 text-dark-green md:flex md:space-x-9 md:space-y-0">
        <div className="h-80 bg-light-grey md:w-5/12">Image</div>
        <div className="flex flex-col justify-center space-y-3">
          <h1 className="text-2xl font-semibold">{product.product_name}</h1>
          <h2>{product.product_description}</h2>
          <h2 className="font-bold">Ksh. {product.price}</h2>
          <button className="rounded-lg bg-dark-green px-6 py-2 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
