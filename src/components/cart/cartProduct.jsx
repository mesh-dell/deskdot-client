import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

// Todo Set maximum quantity to maximum in stock
export default function CartProduct() {
  return (
    <div className="flex flex-col items-center space-y-5 bg-light-white py-3 text-dark-green md:w-2/5 md:flex-row md:space-y-0 md:py-0 *:space-y-2">
      <div className="h-40 w-40 bg-light-grey">image</div>
      <div className="md:ml-5 md:space-y-10">
        <h1 className="text-xl font-semibold">Visocin Stapeler</h1>
        <div className="flex flex-col items-center md:block">
          <h3>Quantity</h3>
          <NumberInput defaultValue={1} min={1} max={23} className="w-28">
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
        <h2 className="font-semibold">Ksh. 450</h2>
      </div>
    </div>
  );
}
