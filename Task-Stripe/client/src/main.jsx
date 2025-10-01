import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Plans from "./pages/Plans.jsx";
import Pay from "./pages/Pay.jsx";
import Post from "./pages/Post.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/plans", element: <Plans /> },
  { path: "/pay", element: <Pay /> },
  { path: "/post", element: <Post /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
