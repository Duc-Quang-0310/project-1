import Navbar from "../components/Navbar";
import iRoute from "../interfaces/route";
import { LandingPage } from "../pages/LandingPage";
import { Logging } from "../pages/Logging";

const routes: iRoute[] = [
    {
        path: "/",
        name:"Landing Page",
        exact: true,
        component: LandingPage
    },
    {
        path: "/DangNhap",
        name:"Logging",
        exact: true,
        component: Logging
    },
    {
        path:"/navbar",
        name:"Navbar",
        exact: true,
        component: Navbar
    }
]

export default routes;