import ProductCard from "../home/productCard";
export default function ProductRow() {
  return (
    <div className="flex flex-col justify-around space-y-5 md:flex-row md:space-y-0">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
