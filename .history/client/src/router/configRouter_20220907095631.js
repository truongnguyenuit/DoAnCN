import AuthLoginPage from "../pages/AuthLoginPage";
import Auth

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