import { Form, redirect } from "react-router-dom";
import { Input, Textarea } from "@chakra-ui/react";
import { createProduct } from "../../services/productService";

export async function action({ request }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  const product = await createProduct(payload, user);
  return { product }, redirect("/account/seller/products");
}

export default function CreateProduct() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="mb-2 text-light-grey">Create Product</h2>
      <Form className="space-y-3" method="post">
        <div>
          <label htmlFor="productName">Product Name</label>
          <Input
            placeholder="Enter Product Name"
            id="productName"
            name="product_name"
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input
            placeholder="Enter Price"
            id="price"
            type="number"
            min={5}
            name="price"
            required
          ></Input>
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <Input
            placeholder="Enter quantity"
            id="quantity"
            name="quantity"
            required
          ></Input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            placeholder="Enter description"
            id="description"
            name="product_description"
            required
          ></Textarea>
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
