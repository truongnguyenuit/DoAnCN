import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
    private: true,
  },
  {
    path: pathName.admin,
    page: <AdminPage/>,
    private: true,
  }
  
]