import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";

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