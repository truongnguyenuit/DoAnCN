import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";

import CartPage from "../pages/CartPage";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/settingPage";
import OderPage from "../pages/OderPage";
import SearchPage from "../pages/SearchPage";

import AdminAddBookPage from "../pages/AdminAddBookPage";
import AdminBookControlPage from "../pages/AdminBookControlPage";
import AdminConfirmPage from "../pages/AdminConfirmPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminUserPage from "../pages/AdminUserPage";
import AdminVoucherPage from "../pages/AdminVoucherPage";

import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.login,
    page: <AuthLoginPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.register,
    page: <AuthRegisterPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.logout,
    page: <AuthLogoutPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.cart,
    page: <CartPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.dashboard,
    page: <DashboardPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.oder,
    page: <OderPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.search,
    page: <SearchPage/>,
    private: false,
    admin: false,
  },
  {
    path: pathName.setting,
    page: <SettingPage/>,
    private: false,
    admin: true,
  },

  {
    path: pathName.adminAddBook,
    page: <AdminAddBookPage/>,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminBookControl,
    page: <AdminBookControlPage/>,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminConfirm,
    page: <AdminConfirmPage/>,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminDashboard,
    page: <AdminDashboardPage/>,
    private: false,
    admin: true,
  },
  {
    path: pathName.adminUser,
    page: <AdminUserPage/>,
    private: false,
    admin: true,
  },
  {
    path: pathName.adminVoucher,
    page: <AdminVoucherPage/>,
    private: false,
    admin: true,
  },
  
]