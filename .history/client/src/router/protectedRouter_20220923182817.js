import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ protect, admin, children }) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const authLoading = useSelector((state) => state.auth.authLoading)

  console.log(isAuthenticated)
  // if (authLoading) {
  //   return (
  //     <div>
  //       loading...99%
  //     </div>
  //   )
  // }

  if (protect && !isAuthenticated) {
    alert("Bạn cần đăng nhập để vào ")
    return <Navigate to="/login" replace />
  }
  if (admin && ) {
    return <Navigate to="*" />
  }

  return children;
}

export default ProtectedRoute