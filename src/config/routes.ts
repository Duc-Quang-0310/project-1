import iRoute from "../interfaces/route";
import { LandingPage } from "../pages/LandingPage";
import { Logging } from "../pages/Logging";
import { TestRedux } from "../pages/TestRedux";
import { UserProfile } from "../pages/UserProfile";

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
        path: "/testRedux",
        name:"testRedux",
        exact: true,
        component: TestRedux
    },
    {
        path: "/ThongTinTaiKhoan",
        name:"UserProfile",
        exact: true,
        component: UserProfile
    },
 
   
]

export default routes;