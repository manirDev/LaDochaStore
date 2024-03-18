import React, { useState } from "react";
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from "react-router-dom";
import AdminLayout from "./layouts/admin/AdminLayout";
import Home from "./pages/admin/home/Home"
import Products from "./pages/admin/products/Products"
import Users from "./pages/admin/users/Users"
import Login from "./pages/admin/login/Login"
import AddProduct from "./pages/admin/addproduct/AddProduct";
import { useSelector } from "react-redux";
import SideBar from "./components/admin/sidebar/SideBar";



function App() {

  const {darkMode} = useSelector((state) => state.adminDarkMode)



  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/addProduct",
          element: <AddProduct />
        },
        {
          path: "/users/:id",
          element: <Login />
        },
        {
          path: "/products/:id",
          element: <Login />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
