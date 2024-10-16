import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { updateQuantity } from "../../services/cartService";
import { useState } from "react";

// Todo Set maximum quantity to maximum in stock
export default function CartProduct({
  id,
  quantity,
  price,
  name,
  stock,
  onSubtotalChange,
}) {
  const [currentQuantity, setCurrentQuantity] = useState(parseInt(quantity));

  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = async (value) => {
    const newQuantity = parseInt(value);

    if (newQuantity <= stock) {
      const previousSubtotal = currentQuantity * parseFloat(price);
      const newSubtotal = newQuantity * parseFloat(price);

      setCurrentQuantity(newQuantity);

      const payload = {
        quantity: newQuantity,
      };

      try {
        await updateQuantity(user, payload, id);

        if (onSubtotalChange) {
          onSubtotalChange(newSubtotal - previousSubtotal);
        }
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-5 bg-light-white py-3 text-dark-green *:space-y-2 md:flex-row md:space-y-0 md:py-0">
      <div className="h-40 w-40 bg-light-grey">image</div>
      <div className="md:ml-5 md:space-y-10">
        <h1 className="text-xl font-semibold">{name}</h1>
        <div className="flex flex-col items-center md:block">
          <h3>Quantity</h3>
          <NumberInput
            value={currentQuantity}
            min={1}
            max={stock}
            className="w-28"
            onChange={handleChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </div>
      <div className="flex space-x-3 md:ml-24 md:block md:space-x-0 md:space-y-20">
        <button className="text-light-grey">
          <FontAwesomeIcon icon={faX} />
        </button>
        <h2 className="font-semibold">Ksh. {price * currentQuantity}</h2>
      </div>
    </div>
  );
}
