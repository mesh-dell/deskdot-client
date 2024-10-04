export default function OrderItem() {
  return (
    <div className="block bg-light-white py-2 text-center text-dark-green *:space-y-3 md:flex md:py-0 md:text-left">
      <div className="mx-auto h-40 w-40 bg-light-grey md:mx-0">image</div>
      <div className="flex flex-col justify-evenly md:ml-3">
        <h1 className="text-xl font-semibold">Visocin Stapeler</h1>
        <div className="flex justify-center space-x-6 md:justify-start">
          <h2>Quantity</h2>
          <h2>3</h2>
        </div>
        <h2 className="font-semibold">Ksh. 450</h2>
      </div>
      <h2 className="mt-4 font-semibold text-light-grey md:ml-20">Pending</h2>
    </div>
  );
}
