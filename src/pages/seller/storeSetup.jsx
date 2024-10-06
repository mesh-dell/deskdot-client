import { Form } from "react-router-dom";
import { Input, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function StoreSetup() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey">SignUp</h2>
      <Form className="space-y-3">
        <div>
          <label htmlFor="storeName">Store Name</label>
          <Input placeholder="Enter store name" id="storeName"></Input>
        </div>
        <div>
          <label htmlFor="storeDesc">Store Description</label>
          <Textarea
            placeholder="Enter store description"
            id="storeDesc"
          ></Textarea>
        </div>

        <div className="flex flex-col text-center">
          <button
            className="rounded-md bg-light-green py-2 font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center">
          Already have an account ?{" "}
          <Link className="font-bold" to={"/signin/seller"}>
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  );
}
