import NavBar from "../components/home/navbar";
import CartProduct from "../components/cart/cartProduct";
import OrderSummary from "../components/cart/orderSummary";

export default function Cart() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <div className="justify-around space-y-5 md:flex md:space-y-0">
        <div className="space-y-4 md:w-2/5">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
