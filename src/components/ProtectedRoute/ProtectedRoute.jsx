import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth-store';

export const ProtectedRoute = ({ children }) => {
    const isAuth = useAuthStore(state => state.isAuth);
    
    if (!isAuth) {
        return <Navigate to="/auth" replace />;
    }
    
    return children;
};