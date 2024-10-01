import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="text-dark-green bg-light-white space-y-2 p-3 text-center w-full flex flex-col items-center md:w-fit">
      <div className="bg-light-grey h-48 w-52">Image</div>
      <h1 className="text-xl">Visocin Stapeler</h1>
      <h1 className="font-semibold">Ksh. 450</h1>
      <button className="bg-dark-green text-white rounded-md px-4 py-2">
        Add to cart
      </button>
    </div>
  );
}
