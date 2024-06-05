// import { lazy } from "react";

// // project imports
// import Loadable from "../components/Loadable";
// import BlankLayout from "../layouts/Blank";
// import PublicRoute from "./PublicRoute";

// // auth routing
// const AuthLogin = Loadable(lazy(() => import("../views/Auth/Login")));
// const AuthRegister = Loadable(lazy(() => import("../views/Auth/Register")));
// const Recover = Loadable(lazy(() => import("../views/Auth/Recover")));
// const RecoverRedirect = Loadable(
//   lazy(() => import("../views/Auth/RecoverRedirect"))
// );

// // ==============================|| AUTHENTICATION ROUTING ||============================== //

// const AuthenticationRoutes = {
//   path: "/",
//   element: <PublicRoute />,
//   children: [
//     {
//       element: <BlankLayout />,
//       children: [
//         {
//           path: "/test",
//           element: <h3>sdfsdfsdf</h3>,
//         },
//         {
//           path: "/auth/login",
//           element: <AuthLogin />,
//         },
//         {
//           path: "/auth/register",
//           element: <AuthRegister />,
//         },
//         {
//           path: "/auth/recover-password",
//           element: <Recover />,
//         },
//         {
//           path: "/users/password-reset-confirm/:uidb64/:token",
//           element: <RecoverRedirect />,
//         },
//       ],
//     },
//   ],
// };

// export default AuthenticationRoutes;