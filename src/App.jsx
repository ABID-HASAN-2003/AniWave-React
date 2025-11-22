import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import RouterLayout from "./RouteLayout";
import Home from "./Pages/Home";
import SpinnerColor from "./Components/GlobalComponents/loder";
import TopRated from "./Pages/TopRated";
import ErrorPage from "./Components/GlobalComponents/ErrorPage";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/GlobalComponents/ProtectedRoute";  // ⬅️ ADD THIS

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate site loading (API load, assets load, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout />}>
        {/* PROTECTED ROUTES */}
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/toprated"
          element={
            <ProtectedRoute>
              <TopRated />
            </ProtectedRoute>
          }
        />

        {/* PUBLIC ROUTE */}
        <Route path="/login" element={<Login />} />

        {/* ERROR PAGE */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <SpinnerColor />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
