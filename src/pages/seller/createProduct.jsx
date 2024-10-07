import { Form } from "react-router-dom";
import { Input, Textarea } from "@chakra-ui/react";

export default function CreateProduct() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey mb-2">Create Product</h2>
      <Form className="space-y-3">
        <div>
          <label htmlFor="productName">Product Name</label>
          <Input placeholder="Enter Product Name" id="productName"></Input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input
            placeholder="Enter Price"
            id="price"
            type="number"
            min={5}
          ></Input>
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <Input placeholder="Enter quantity" id="quantity"></Input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Textarea placeholder="Enter description" id="description"></Textarea>
        </div>

        <div className="flex flex-col text-center">
          <button
            className="rounded-md bg-light-green py-2 font-semibold"
            type="submit"
          >
            Create Product
          </button>
        </div>
      </Form>
    </div>
  );
}
