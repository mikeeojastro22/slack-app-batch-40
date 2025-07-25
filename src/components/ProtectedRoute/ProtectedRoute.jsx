import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute; 