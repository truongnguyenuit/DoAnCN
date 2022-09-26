import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ protect, children }) => {

  // const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  const auth = useSelector((state)=>state.auth)

  if (authLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }

  if (protect && !auth.isAuthenticated) {

    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectedRoute