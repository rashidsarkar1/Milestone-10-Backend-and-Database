import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";

import NotFound from "../Pages/NotFound ";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import CarDetails from "../Pages/CarDetails/CarDetails";
import UpDateProduct from "../Pages/UpDateProduct/UpDateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        // element: ,
      },
      {
        path: "/myCart",
        // element:
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brandName",
        element: <SingleBrand></SingleBrand>,
      },
      {
        path: "/brand/:brandName/:carID",

        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/upDateProduct/:id",
        // element: <UpDateProduct></UpDateProduct>,
        element: (
          <PrivateRoute>
            <UpDateProduct></UpDateProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
