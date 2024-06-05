// import React, { useEffect } from "react";
// import { useNavigate, Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Loader from "../components/Loader";

// const PublicRoute = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const authLoading = useSelector((state) => state.auth.authLoading);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // If the user is not authenticated and not loading, redirect them to the login page
//     if (isAuthenticated && !authLoading) {
//       navigate("/manage/global-view", {
//         replace: true,
//       });
//     }
//   }, [isAuthenticated, authLoading, navigate]);

//   if (authLoading) {
//     return <Loader />;
//   }

//   return !isAuthenticated ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/manage/global-view" replace />
//   );
// };

// export default PublicRoute;