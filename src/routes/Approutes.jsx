import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error-page";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Page</div>,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
