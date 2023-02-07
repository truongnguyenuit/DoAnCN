import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";

import CartPage from "../pages/CartPage/CartPage";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/settingPage";
import OrderPage from "../pages/OrderPage";
import SearchPage from "../pages/SearchPage";

import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";

import AdminBookControlPage from "../pages/AdminBookControlPage/AdminBookControlPage";
import AdminConfirmPage from "../pages/AdminConfirmPage/AdminConfirmPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminUserPage from "../pages/AdminUserPage";
import AdminVoucherPage from "../pages/AdminVoucherPage";
import AdminAuthorPage from "../pages/AdminAuthorPage/AdminAuthorPage";
import AdminCategoryPage from "../pages/AdminCategoryPage/AdminCategoryPage";

import { pathName } from "./pathName";

export const configRouter = [
  {
    path: pathName.login,
    page: <AuthLoginPage />,
    private: false,
    admin: false,
  },
  {
    path: pathName.register,
    page: <AuthRegisterPage />,
    private: false,
    admin: false,
  },
  {
    path: pathName.logout,
    page: <AuthLogoutPage />,
    private: true,
    admin: false,
  },
  {
    path: pathName.cart,
    page: <CartPage />,
    private: true,
    admin: false,
  },
  {
    path: pathName.dashboard,
    page: <DashboardPage />,
    private: true,
    admin: false,
  },
  {
    path: pathName.order,
    page: <OrderPage />,
    private: true,
    admin: false,
  },
  {
    path: pathName.search,
    page: <SearchPage />,
    private: true,
    admin: false,
  },
  {
    path: pathName.setting,
    page: <SettingPage />,
    private: true,
    admin: false
  },
  {
    path: pathName.bookDetail,
    page: <BookDetailPage />,
    private: true,
    admin: false
  },
  {
    path: pathName.adminBookControl,
    page: <AdminBookControlPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminConfirm,
    page: <AdminConfirmPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminDashboard,
    page: <AdminDashboardPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminUser,
    page: <AdminUserPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminVoucher,
    page: <AdminVoucherPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminAuthor,
    page: <AdminAuthorPage />,
    private: true,
    admin: true,
  },
  {
    path: pathName.adminCategory,
    page: <AdminCategoryPage />,
    private: true,
    admin: true,
  }

]