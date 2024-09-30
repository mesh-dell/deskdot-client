import ProductCard from "./productCard";

export default function ProductSection() {
  return (
    <div>
      <h1 className="text-center text-xl text-dark-green mb-5">Here are some of our products</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly space-y-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
