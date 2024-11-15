import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import SignInPage from "../pages/SignInPage";
import RegisterPage from "../pages/RegisterPage";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
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
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/auth/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
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
