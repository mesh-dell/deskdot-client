import { Form, redirect, useLoaderData } from "react-router-dom";
import { Input, Textarea } from "@chakra-ui/react";
import { getProduct } from "../../services/productService";
import { editProduct } from "../../services/productService";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export async function loader({ request, params }) {
  const product = await getProduct(params.productId);
  return { product };
}
export async function action({ request, params }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const product = Object.fromEntries(formData);
  await editProduct(params.productId, product, user);
  toast({
    title: "Success.",
    description: "Edited product succesfully!",
    status: "success",
    duration: 5000,
    isClosable: true,
  });
  return redirect("/account/seller/products");
}

export default function EditProduct() {
  const { product } = useLoaderData();
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="mb-2 text-light-grey">Create Product</h2>
      <Form className="space-y-3" method="put">
        <div>
          <label htmlFor="productName">Product Name</label>
          <Input
            placeholder="Enter Product Name"
            id="productName"
            defaultValue={product.product_name}
            required
            name="product_name"
          ></Input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input
            placeholder="Enter Price"
            id="price"
            type="number"
            min={5}
            defaultValue={product.price}
            required
            name="price"
          ></Input>
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <Input
            placeholder="Enter quantity"
            id="quantity"
            defaultValue={product.quantity}
            required
            name="quantity"
          ></Input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            placeholder="Enter description"
            id="description"
            defaultValue={product.product_description}
            required
            name="product_description"
          ></Textarea>
        </div>

        <div className="flex flex-col text-center">
          <button
            className="rounded-md bg-light-green py-2 font-semibold"
            type="submit"
          >
            Edit Product
          </button>
        </div>
      </Form>
    </div>
  );
}
