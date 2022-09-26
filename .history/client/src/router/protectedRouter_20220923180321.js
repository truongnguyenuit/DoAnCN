import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({ protect, children }) => {

  // const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  const authLoading = useSelector((state)=>state.auth.authLoading)
  
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