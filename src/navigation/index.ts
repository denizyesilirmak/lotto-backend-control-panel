import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const Router = createBrowserRouter({
  path: "/",
  element: <div>Hello world!</div>,
});

const Navigator = () => <RouterProvider router={Router} />;

export default Navigator;
