import { lazy } from "react";
import { Navigate } from "react-router-dom";

// project imports
import LandingLayout from "../layouts/landing";
import Loadable from "../components/Loadable";

// dashboard routing
const HomePageView = Loadable(lazy(() => import("../views/home")));
// const NotFoundPage = Loadable(lazy(() => import("../views/Client/NotFound")));

// ==============================|| LANDING ROUTING ||============================== //

const LandingRoute = {
  path: "/",
  element: <LandingLayout />,
  children: [
    {
      index: true,
      element: <HomePageView />,
    },
    // {
    //     path: "404",
    //     element: <NotFoundPage />
    // },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ],
};

export default LandingRoute;
