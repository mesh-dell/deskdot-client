import { clearCart } from "../../services/cartService";
import { create } from "../../services/orderService";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export default function OrderSummary({ total, handleCartClear }) {
  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await create(user);
      clearCart(user);
      handleCartClear();
      toast({
        title: "Success.",
        description: "Order made succesfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      if (error.status === 400) {
        toast({
          title: "Info.",
          description: "Cart is empty.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-center space-y-5 bg-light-white px-10 py-2 text-dark-green md:w-2/5">
      <h1 className="text-xl font-semibold">Order Summary</h1>
      <div className="flex space-x-10">
        <h2>Bag Subtotal</h2>
        <h2 className="font-semibold">Ksh. {total}</h2>
      </div>
      <button
        className="rounded-md bg-dark-green px-6 py-2 text-white"
        onClick={handleClick}
      >
        Make Order
      </button>
    </div>
  );
}
