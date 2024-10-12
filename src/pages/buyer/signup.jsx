import { Form } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const digitRegex = /(?=.*\d)/;
const specialCharRegex = /(?=.*[@$!%*?&])/;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  // Validate form
  if (data.password !== data.passwordRepeat) {
    toast({
      title: "Sign up failed",
      description: "Passwords do not match",
      status: "error",
      isClosable: true,
    });
    return { error: "Passwords do not match" };
  }

  if (!data.password.match(lowercaseRegex)) {
    toast({
      title: "Sign up failed",
      description: "Password should have atleast one lowercase letter",
      status: "error",
      isClosable: true,
    });
    return { error: "Password should have atleast one lowercase letter" };
  }

  if (!data.password.match(uppercaseRegex)) {
    toast({
      title: "Sign up failed",
      description: "Password should have atleast one uppercase letter",
      status: "error",
      isClosable: true,
    });
    return { error: "Password should have atleast one uppercase letter" };
  }

  if (!data.password.match(digitRegex)) {
    toast({
      title: "Sign up failed",
      description: "Password should have atleast one digit",
      status: "error",
      isClosable: true,
    });
    return { error: "Password should have atleast one digit" };
  }

  if (!data.password.match(specialCharRegex)) {
    toast({
      title: "Sign up failed",
      description: "Password should have atleast one special character",
      status: "error",
      isClosable: true,
    });
    return { error: "Password should have atleast one special character" };
  }

  if (data.password.length < 8) {
    toast({
      title: "Sign up failed",
      description: "Password should have atleast 8 characters long",
      status: "error",
      isClosable: true,
    });
    return { error: "Password should have atleast 8 characters long" };
  }

  return { data };
}
export default function SignUp() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey">SignUp</h2>
      <Form className="space-y-3" id="signUpBuyer" method="post">
        <div>
          <label htmlFor="first">First Name</label>
          <Input
            placeholder="Jane"
            id="first"
            name="first_name"
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <Input placeholder="Doe" id="last" name="last_name" required></Input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            placeholder="janedoe@example.com"
            id="email"
            name="email"
            type="email"
            required
          ></Input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            placeholder="Enter password"
            type="password"
            id="password"
            name="password"
            required
          ></Input>
        </div>

        <div>
          <label htmlFor="passwordRepeat">Re-enter Password</label>
          <Input
            type="password"
            id="passwordRepeat"
            name="passwordRepeat"
            required
          ></Input>
        </div>

        <button
          className="w-full rounded-md bg-light-green py-2 font-semibold"
          type="submit"
        >
          Sign Up
        </button>

        <p className="text-center">
          Already have an account ?{" "}
          <Link className="font-bold" to={"/signin"}>
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  );
}
