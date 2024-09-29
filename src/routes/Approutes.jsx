import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Page</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
