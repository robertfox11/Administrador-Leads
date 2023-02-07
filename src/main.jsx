import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Show, { loader as leadsIdLoader } from "./pages/Show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/lead/:leadId/show",
        element: <Show />,
        loader: leadsIdLoader,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
