import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";
import Shop from "../pages/shop";

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
  ]);

  return <RouterProvider router={router} />;
}
