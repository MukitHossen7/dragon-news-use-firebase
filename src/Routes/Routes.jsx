import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news/:id",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/login",
    element: <h1>This is Login page</h1>,
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);

export default router;
