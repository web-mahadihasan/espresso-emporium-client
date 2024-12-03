import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Users from "../pages/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const coffeeRes = await fetch(
            "https://espresso-emporium-server-1.onrender.com/coffees"
          );
          const coffeeData = await coffeeRes.json();

          const res = await fetch("/InstagramPhoto.json");
          const instagramPhoto = await res.json();

          return { coffeeData, instagramPhoto };
        },
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-1.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/auth/sign-up",
        element: <Signup />,
      },
      {
        path: "/auth/sign-in",
        element: <Signin />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () =>
          fetch("https://espresso-emporium-server-1.onrender.com/users"),
      },
    ],
  },
]);

export default Router;
