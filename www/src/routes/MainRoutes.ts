// import { lazy } from "react";

// // project imports
// import MainLayout from "../layouts/Admin";
// import Loadable from "../components/Loadable";
// import PrivateRoute from "./PrivateRoute";
// import { Navigate } from "react-router-dom";

// // dashboard routing
// const GlobalView = Loadable(lazy(() => import("../views/Admin/GlobalView")));
// const FileExplorerView = Loadable(
//   lazy(() => import("../views/Admin/FileExplorerView"))
// );
// const DriverManagementView = Loadable(
//   lazy(() => import("views/Admin/DriverManagementView"))
// );
// const DriverInfoView = Loadable(
//   lazy(() => import("views/Admin/DriverManagementView/DriverInfo"))
// );

// const AddOrUpdateDriverView = Loadable(
//   lazy(() => import("views/Admin/DriverManagementView/AddOrUpdateDriver"))
// );

// const ConnectionProfileView = Loadable(
//   lazy(() => import("views/Admin/ConnectionProfileView"))
// );

// const AddOrUpdateConnectionProfileView = Loadable(
//   lazy(() => import("views/Admin/ConnectionProfileView/AddOrUpdateConnection"))
// );

// const UserManagementView = Loadable(
//   lazy(() => import("../views/Admin/SettingsView/UserManagement"))
// );

// const EditProfileView = Loadable(
//   lazy(() =>
//     import(
//       "views/Admin/SettingsView/UserManagement/components/InfoSection/EditProfileView"
//     )
//   )
// );

// const AddOrUpdateUserView = Loadable(
//   lazy(() =>
//     import(
//       "views/Admin/SettingsView/UserManagement/components/UserView/AddOrUpdateUser"
//     )
//   )
// );

// const AddOrUpdateGroupView = Loadable(
//   lazy(() =>
//     import(
//       "views/Admin/SettingsView/UserManagement/components/GroupManagement/AddOrUpdateGroup"
//     )
//   )
// );

// const AddOrUpdatePermissionView = Loadable(
//   lazy(() =>
//     import(
//       "views/Admin/SettingsView/UserManagement/components/PermissionView/AddOrUpdatePermission"
//     )
//   )
// );

// const QueryView = Loadable(lazy(() => import("views/Admin/QueryView")));

// const LicenseManagementView = Loadable(
//   lazy(() => import("views/Admin/SettingsView/LicenseManagement"))
// );
// const ExtendLicenseManagementView = Loadable(
//   lazy(() =>
//     import("views/Admin/SettingsView/LicenseManagement/ExtendServerLicense")
//   )
// );

// const NotFoundPage = Loadable(lazy(() => import("views/Client/NotFound")));

// // ==============================|| MAIN ROUTING ||============================== //

// const MainRoutes = {
//   path: "/",
//   element: <PrivateRoute />,
//   children: [
//     {
//       element: <MainLayout />,
//       children: [
//         {
//           path: "/",
//           element: <Navigate to="/manage/global-view" replace />,
//         },
//         {
//           path: "/manage/global-view",
//           element: <GlobalView />,
//         },
//         {
//           path: "/manage/file-explorer",
//           element: <FileExplorerView />,
//         },
//         {
//           path: "/manage/driver",
//           element: <DriverManagementView />,
//         },
//         {
//           path: "/manage/driver/:id",
//           element: <DriverInfoView />,
//         },
//         {
//           path: "/manage/driver/:id/add",
//           element: <AddOrUpdateDriverView />,
//         },
//         {
//           path: "/manage/driver/:id/update/:driverId",
//           element: <AddOrUpdateDriverView />,
//         },
//         {
//           path: "/manage/connection",
//           element: <ConnectionProfileView />,
//         },
//         {
//           path: "/manage/connection/edit-profile/:connectionId",
//           element: <AddOrUpdateConnectionProfileView />,
//         },
//         {
//           path: "/manage/connection/add-profile",
//           element: <AddOrUpdateConnectionProfileView />,
//         },
//         {
//           path: "/manage/query",
//           element: <QueryView />,
//         },
//         {
//           path: "/manage/query/recent-queries",
//           element: <QueryView />,
//         },
//         {
//           path: "/manage/query/saved-queries",
//           element: <QueryView />,
//         },
//         {
//           path: "/manage/settings/user-management",
//           element: <UserManagementView />,
//         },
//         {
//           path: "/manage/settings/user-management/info-update",
//           element: <EditProfileView />,
//         },
//         {
//           path: "/manage/settings/user-management/user-add",
//           element: <AddOrUpdateUserView />,
//         },
//         {
//           path: "/manage/settings/user-management/user-edit/:userId",
//           element: <AddOrUpdateUserView />,
//         },
//         {
//           path: "/manage/settings/user-management/group-add",
//           element: <AddOrUpdateGroupView />,
//         },
//         {
//           path: "/manage/settings/user-management/group-edit/:groupId",
//           element: <AddOrUpdateGroupView />,
//         },
//         {
//           path: "/manage/settings/user-management/permission-add",
//           element: <AddOrUpdatePermissionView />,
//         },
//         {
//           path: "/manage/settings/user-management/permission-edit/:permissionId",
//           element: <AddOrUpdatePermissionView />,
//         },
//         {
//           path: "/manage/settings/license-management",
//           element: <LicenseManagementView />,
//         },
//         {
//           path: "/manage/settings/license-management/extend",
//           element: <ExtendLicenseManagementView />,
//         },
//         {
//           path: "*",
//           element: <NotFoundPage />,
//         },
//       ],
//     },
//   ],
// };

// export default MainRoutes;