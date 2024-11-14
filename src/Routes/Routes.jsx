import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.categoryId}`
          ),
      },
    ],
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
