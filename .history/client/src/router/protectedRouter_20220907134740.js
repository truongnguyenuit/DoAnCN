import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ protect, children }) => {

  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

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