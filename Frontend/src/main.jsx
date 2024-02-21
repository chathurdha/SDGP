import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/PastEvents",
    element: <div></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
