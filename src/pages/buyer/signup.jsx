import { Form } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey">SignUp</h2>
      <Form className="space-y-3">
        <div>
          <label htmlFor="first">First Name</label>
          <Input placeholder="Jane" id="first"></Input>
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <Input placeholder="Doe" id="last"></Input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input placeholder="janedoe@example.com" id="email"></Input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            placeholder="Enter password"
            type="password"
            id="password"
          ></Input>
        </div>

        <div>
          <label htmlFor="passwordRepeat">Re-enter Password</label>
          <Input type="password" id="passwordRepeat"></Input>
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
