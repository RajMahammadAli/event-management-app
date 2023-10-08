import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Roots from "./components/Roots/Roots";
import Home from "./components/Pages/Home/Home";
import Features from "./components/Pages/Features/Features";

import Store from "./components/Pages/Store/Store";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import ServiceDetails from "./components/SerivceDetails/ServiceDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import StoreSection from "./components/storeSection/StoreSection";
import Error404 from "./404Error/Error404";
import { ToastContainer } from "react-toastify";
import ClassSchedule from "./components/ClassSchedule/ClassSchedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error404></Error404>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/features", element: <Features></Features> },
      {
        path: "/store",
        element: (
          <PrivateRoute>
            <Store></Store>
          </PrivateRoute>
        ),
      },
      {
        path: "/ClassSchedule",
        element: (
          <PrivateRoute>
            <ClassSchedule></ClassSchedule>
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch(`/yoga.json`),
      },
      { path: "/storeSection", element: <StoreSection></StoreSection> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
