import { useRoutes } from "react-router-dom";

// routes
// import MainRoutes from "./MainRoutes";
// import AuthenticationRoutes from "./AuthenticationRoutes";
import LandingRoute from "./LandingRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LandingRoute]);
}