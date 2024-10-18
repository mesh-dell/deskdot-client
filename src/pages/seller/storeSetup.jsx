import { Form } from "react-router-dom";
import { Input, Textarea } from "@chakra-ui/react";
import { Link, redirect } from "react-router-dom";
import { getProfile, updateProfile } from "../../services/userService";

export async function action({ request, params }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const profile = await getProfile(user);
    profile.store_name = data.store_name;
    profile.store_description = data.store_description;
    const updatedProfile = await updateProfile(user, profile);
    toast({
      title: "Signup successful.",
      description: "Welcome",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    return { updateProfile }, redirect("/");
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export default function StoreSetup() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey">SignUp</h2>
      <Form className="space-y-3" method="put">
        <div>
          <label htmlFor="storeName">Store Name</label>
          <Input
            placeholder="Enter store name"
            id="storeName"
            name="store_name"
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="storeDesc">Store Description</label>
          <Textarea
            placeholder="Enter store description"
            id="storeDesc"
            name="store_description"
            required
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
