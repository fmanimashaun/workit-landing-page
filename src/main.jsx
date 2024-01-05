/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import './assets/scss/main.scss';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <p>Error page</p>,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        }
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
