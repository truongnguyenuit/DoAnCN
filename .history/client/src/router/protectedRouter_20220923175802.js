import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ protect, children }) => {

  const { auth: { authLoading, isAuthenticated } } = useContext(AuthContext)

  if (authLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }

  if (protect && !isAuthenticated) {

    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectedRoute