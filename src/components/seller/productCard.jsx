import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="flex flex-col items-center space-y-3 bg-light-white py-2 text-center text-dark-green md:flex md:flex-row md:py-0 md:text-left">
      <div className="h-40 w-40 bg-light-grey">Image</div>
      <div className="space-y-3 md:ml-5">
        <h1 className="font-semibold">Visocin Stapeler</h1>
        <div className="flex justify-center space-x-3 md:justify-start">
          <h2>Quantity</h2>
          <h2>3</h2>
        </div>
        <h2>Ksh 450</h2>
      </div>
      <div className="space-x-3 underline md:mx-16">
        <Link>Edit</Link>
        <Link className="text-light-grey">Delete</Link>
      </div>
    </div>
  );
}
