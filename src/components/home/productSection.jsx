import ProductCard from "./productCard";

export default function ProductSection() {
  return (
    <div>
      <h1 className="mb-5 text-center text-xl text-dark-green">
        Here are some of our products
      </h1>
      <div className="flex flex-col justify-around space-y-5 md:flex-row md:space-y-0">
        <ProductCard productId={1} />
        <ProductCard productId={2} />
        <ProductCard productId={3} />
      </div>
    </div>
  );
}
