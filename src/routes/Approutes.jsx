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
import { action as sellerSignupAction } from "../pages/seller/signup";
import { action as sellerStoreAction } from "../pages/seller/storeSetup";
import { action as sellerSigninAction } from "../pages/seller/signin";
import { action as editProductAction } from "../pages/seller/editProduct";
import { action as sellerSettingsAction } from "./seller/settings";
import { action as productAction } from "../pages/seller/createProduct";

// loaders
import { loader as homeProductLoader } from "../components/home/productSection";
import { loader as shopProductLoader } from "../pages/buyer/shop";
import { loader as productPageLoader } from "../pages/buyer/product-page";
import { loader as cartLoader } from "../pages/buyer/cart";
import { loader as accountLoader } from "./account/accountInfo";
import { loader as orderDetailsLoader } from "./account/orderDetails";
import { loader as sellerAccountLoader } from "./seller/accountInfo";
import { loader as productLoader } from "./seller/products";
import { loader as editProductLoader } from "../pages/seller/editProduct";
import { loader as sellerLoader } from "../pages/buyer/discoverSellers";

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
    loader: sellerLoader,
  },
  {
    path: "/shop/seller/:sellerId",
    element: <Shop />,
    loader: shopProductLoader,
  },

  // Seller
  {
    path: "/signup/seller",
    element: <SignUpSeller />,
    action: sellerSignupAction,
  },
  {
    path: "/signup/store/seller",
    element: <StoreSetup />,
    action: sellerStoreAction,
  },
  {
    path: "/signin/seller",
    element: <SignInSeller />,
    action: sellerSigninAction,
  },
  {
    path: "/account/seller",
    element: <AccountSeller />,
    loader: sellerAccountLoader,
    children: [
      {
        path: "/account/seller",
        element: <AccountInfoSeller />,
        loader: sellerAccountLoader,
      },
      {
        path: "/account/seller/orders",
        element: <OrdersSeller />,
        loader: sellerAccountLoader,
      },
      {
        path: "/account/seller/products",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "/account/seller/settings",
        element: <SettingsSeller />,
        loader: sellerAccountLoader,
        action: sellerSettingsAction,
      },
    ],
  },
  {
    path: "/seller/products/create",
    element: <CreateProduct />,
    action: productAction,
  },
  {
    path: "/seller/products/:productId/edit",
    element: <EditProduct />,
    action: editProductAction,
    loader: editProductLoader,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
