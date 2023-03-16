import React from "react";
import Navbar from "./Componenets/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Componenets/Footer";
import Home from "./Pages/Home";
import Gigs from "./Pages/Gigs";
import Gig from "./Pages/Gig";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Mygigs from "./Pages/Mygigs";
import AddGigs from "./Pages/AddGigs";
import Message from "./Pages/Message";
import Singlemessage from "./Pages/Singlemessage";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/gig/:id", element: <Gig /> },
        { path: "/orders", element: <Orders /> },
        { path: "/mygigs", element: <Mygigs /> },
        { path: "/add", element: <AddGigs /> },
        { path: "/messages", element: <Message /> },
        { path: "/message/:id", element: <Singlemessage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
