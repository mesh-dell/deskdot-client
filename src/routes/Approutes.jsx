import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";
import Shop from "../pages/shop";
import ProductPage from "../pages/product-page";

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
  ]);

  return <RouterProvider router={router} />;
}
