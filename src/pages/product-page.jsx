import BreadCrumb from "../components/shop/breadcrumb";
import NavBar from "../components/home/navbar";

export default function ProductPage() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <BreadCrumb />
      <div className="md:flex justify-center md:space-x-9 md:space-y-0 space-y-5 text-dark-green">
        <div className="h-80 md:w-5/12 bg-light-grey">Image</div>
        <div className="flex flex-col justify-center space-y-3">
          <h1 className="text-2xl font-semibold">Visocin Stapeler</h1>
          <h2>Make holes like never before.</h2>
          <h2 className="font-bold">345 /=</h2>
          <button className="rounded-lg bg-dark-green px-6 py-2 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
