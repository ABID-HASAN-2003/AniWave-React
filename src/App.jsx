import React, { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import "./App.css";
import RouterLayout from "./RouteLayout";
import Home from "./Pages/Home";
import SpinnerColor from "./Components/GlobalComponents/loder";
import TopRated from "./Pages/TopRated";

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
        <Route index element={<Home />} />
        <Route path="/toprated" element  ={<TopRated />} />
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
