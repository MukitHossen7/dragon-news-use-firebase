import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import SignInPage from "../pages/SignInPage";
import RegisterPage from "../pages/RegisterPage";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";

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
      {
        path: "/auth/about",
        element: <About></About>,
      },
      {
        path: "/auth/career",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },

  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);

export default router;
