import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./FireBase/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClientProvider } from "./Uitily/queryClient";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <AuthProvider>
  //     <RouterProvider router={router}></RouterProvider>
  //   </AuthProvider>
  //   {/* <RouterProvider router={router}></RouterProvider> */}
  // </React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </QueryClientProvider>
);
