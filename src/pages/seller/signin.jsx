import { Form } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { createStandaloneToast } from "@chakra-ui/react";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect } from "react";
import { useActionData } from "react-router-dom";

const { toast } = createStandaloneToast();

export async function action({ request, params }) {
  const formData = await request.formData();
  let credentials = Object.fromEntries(formData);
  credentials = { ...credentials, role: "seller" };
  try {
    const userData = await login(credentials);
    toast({
      title: "Login successful.",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    return { userData };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast({
        title: "Login failed.",
        description: "Invalid username or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return { error: "Invalid username or password" };
    }
    toast({
      title: "Error.",
      description: "Something went wrong. Please try again later.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    console.error(error);
    return { error: "Something went wrong. Please try again later." };
  }
}

export default function SignInSeller() {
  const { setLogin } = useContext(AuthContext);
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.userData) {
      setLogin(actionData.userData);
      navigate("/");
    }
  }, [actionData, setLogin]);

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-8 text-dark-green md:w-2/5">
      <h1 className="mb-2 text-lg font-semibold">Deskdot</h1>
      <h2 className="text-light-grey">SignIn</h2>
      <Form className="space-y-3" method="post">
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
            required
            name="password"
          ></Input>
        </div>

        <button
          className="w-full rounded-md bg-light-green py-2 font-semibold"
          type="submit"
        >
          Sign In
        </button>

        <p className="text-center">
          Don't have an account ?{" "}
          <Link className="font-bold" to={"/signup/seller"}>
            Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
}
