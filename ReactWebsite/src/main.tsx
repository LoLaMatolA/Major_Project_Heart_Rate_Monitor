import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import '../index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Comparison from "./componenets/Comparison";

import Contact from "./componenets/Contact";
import Developer from "./componenets/Developer";
import Relax from "./componenets/Relax";

import "bootstrap/dist/css/bootstrap.css";
import SignIn from "./componenets/SignIn.tsx";
import SignUp from "./componenets/SignUp.tsx";
import UserDashBoard from "./componenets/UserDashBoard.tsx";
import { UserProvider } from "./componenets/UserContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Comparison",
    element: <Comparison />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/Developer",
    element: <Developer />,
  },
  {
    path: "/Relax",
    element: <Relax />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/UserDashBoard",
    element: <UserDashBoard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} ></RouterProvider>
      {/* <App /> */}
    </UserProvider>
  </React.StrictMode>
);
