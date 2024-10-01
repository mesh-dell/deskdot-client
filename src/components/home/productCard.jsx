import { Link } from "react-router-dom";

export default function ProductCard({ productId }) {
  return (
    <Link to={`/shop/${productId}`}>
      <div className="flex w-full flex-col items-center space-y-2 bg-light-white p-3 text-center text-dark-green md:w-fit">
        <div className="h-48 w-52 bg-light-grey">Image</div>
        <h1 className="text-xl">Visocin Stapeler</h1>
        <h1 className="font-semibold">Ksh. 450</h1>
        <button className="rounded-md bg-dark-green px-4 py-2 text-white">
          Add to cart
        </button>
      </div>
    </Link>
  );
}
