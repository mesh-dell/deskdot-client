import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";
import Shop from "../pages/shop";
import ProductPage from "../pages/product-page";
import Cart from "../pages/cart";
import Account from "../pages/account";
import AccountInfo from "./account/accountInfo";
import Orders from "./account/orders";
import OrderDetails from "./account/orderDetails";
import Settings from "./account/settings";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
// Seller
import SignUpSeller from "../pages/seller/signup";
import StoreSetup from "../pages/seller/storeSetup";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/shop/:productId",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/account",
      element: <Account />,
      children: [
        {
          path: "/account",
          element: <AccountInfo />,
        },
        {
          path: "/account/orders",
          element: <Orders />,
        },
        {
          path: "/account/orders/:orderId",
          element: <OrderDetails />,
        },
        {
          path: "/account/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup/seller",
      element: <SignUpSeller />,
    },
    {
      path: "/signup/store/seller",
      element: <StoreSetup />,
    },
  ]);

  return <RouterProvider router={router} />;
}
