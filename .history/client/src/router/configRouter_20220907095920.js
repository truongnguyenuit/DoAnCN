import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.login,
    page: <AuthLoginPage/>,
    private: true,
  },
  {
    path: pathName.register,
    page: <AuthRegisterPage/>,
    private: true,
  },
  {
    path: pathName.lo
  }
  
]