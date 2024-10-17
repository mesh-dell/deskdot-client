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
import DiscoverSellers from "../pages/buyer/discoverSellers";
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

// Actions
import { action as signinAction } from "../pages/buyer/signin";
import { action as signupAction } from "../pages/buyer/signup";
import { action as settingsAction } from "./account/settings";

// loaders
import { loader as homeProductLoader } from "../components/home/productSection";
import { loader as shopProductLoader } from "../pages/buyer/shop";
import { loader as productPageLoader } from "../pages/buyer/product-page";
import { loader as cartLoader } from "../pages/buyer/cart";
import { loader as accountLoader } from "./account/accountInfo";
import { loader as orderDetailsLoader } from "./account/orderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: homeProductLoader,
  },
  {
    path: "/shop",
    element: <Shop />,
    loader: shopProductLoader,
  },
  {
    path: "/shop/:productId",
    element: <ProductPage />,
    loader: productPageLoader,
  },
  {
    path: "/cart",
    element: <Cart />,
    loader: cartLoader,
  },
  {
    path: "/account",
    element: <Account />,
    loader: accountLoader,
    children: [
      {
        path: "/account",
        element: <AccountInfo />,
        loader: accountLoader,
      },
      {
        path: "/account/orders",
        element: <Orders />,
        loader: accountLoader,
      },
      {
        path: "/account/orders/:orderId",
        element: <OrderDetails />,
        loader: orderDetailsLoader,
      },
      {
        path: "/account/settings",
        element: <Settings />,
        loader: accountLoader,
        action: settingsAction,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    action: signupAction,
  },
  {
    path: "/signin",
    element: <SignIn />,
    action: signinAction,
  },

  {
    path: "/sellers",
    element: <DiscoverSellers />,
  },
  {
    path: "/shop/seller/:sellerId",
    element: <Shop />,
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
        element: <SettingsSeller />,
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

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
