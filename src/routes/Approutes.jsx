import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
