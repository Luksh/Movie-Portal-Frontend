import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import GuestRoutes from "./routes/GuestRoutes.jsx";
import MainRoutes from "./routes/MainRoutes.jsx";

// Create client
const queryClient = new QueryClient();

// Create router
const router = createBrowserRouter([...GuestRoutes, ...MainRoutes]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
