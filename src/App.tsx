import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Items } from "./items";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "items", element: <Items /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
