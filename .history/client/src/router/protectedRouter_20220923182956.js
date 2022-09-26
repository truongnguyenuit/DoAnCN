import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ protect, admin, children }) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const role = useSelector((state)

  console.log(isAuthenticated)
  // if (authLoading) {
  //   return (
  //     <div>
  //       loading...99%
  //     </div>
  //   )
  // }

  if (protect && !isAuthenticated) {
    alert("Bạn cần đăng nhập để vào trang này")
    return <Navigate to="/login" replace />
  }
  if (admin  ) {
    alert("trang này chỉ dành cho admin, bạn không có quyền truy cập")
    return <Navigate to="*" />
  }

  return children;
}

export default ProtectedRoute