export default function OrderSummary() {
  return (
    <div className="md:w-2/5 space-y-5 bg-light-white text-dark-green flex flex-col justify-center px-10 py-2">
      <h1 className="text-xl font-semibold">Order Summary</h1>
      <div className="flex space-x-10">
        <h2>Bag Subtotal</h2>
        <h2 className="font-semibold">Ksh. 450</h2>
      </div>
      <button className="rounded-md bg-dark-green px-6 py-2 text-white">
        Make Order
      </button>
    </div>
  );
}
