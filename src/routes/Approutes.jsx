import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/buyer/error-page";
import HomePage from "../pages/buyer/home";
import Shop from "../pages/buyer/shop";
import ProductPage from "../pages/buyer/product-page";
import Cart from "../pages/buyer/cart";
import Account from "../pages/buyer/account";
import AccountInfo from "./account/accountInfo";
import Orders from "./account/orders";
import OrderDetails from "./account/orderDetails";
import Settings from "./account/settings";
import SignUp from "../pages/buyer/signup";
import SignIn from "../pages/buyer/signin";
// Seller
import SignUpSeller from "../pages/seller/signup";
import StoreSetup from "../pages/seller/storeSetup";
import SignInSeller from "../pages/seller/signin";
import AccountSeller from "../pages/seller/account";
import AccountInfoSeller from "./seller/accountInfo";
import OrdersSeller from "./seller/orders";
import Products from "./seller/products";
import CreateProduct from "../pages/seller/createProduct";
import EditProduct from "../pages/seller/editProduct";
import SettingsSeller from "./seller/settings";

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

    // Seller
    {
      path: "/signup/seller",
      element: <SignUpSeller />,
    },
    {
      path: "/signup/store/seller",
      element: <StoreSetup />,
    },
    {
      path: "/signin/seller",
      element: <SignInSeller />,
    },
    {
      path: "/account/seller",
      element: <AccountSeller />,
      children: [
        {
          path: "/account/seller",
          element: <AccountInfoSeller />,
        },
        {
          path: "/account/seller/orders",
          element: <OrdersSeller />,
        },
        {
          path: "/account/seller/products",
          element: <Products />,
        },
        {
          path: "/account/seller/settings",
          element: <SettingsSeller />
        },
      ],
    },
    {
      path: "/seller/products/create",
      element: <CreateProduct />,
    },
    {
      path: "/seller/products/:productId/edit",
      element: <EditProduct />,
    },
  ]);

  return <RouterProvider router={router} />;
}
