import { useAuthContext } from '../contexts/AuthProvider';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext()
    return isAuthenticated? <Outlet/>:<Navigate to="/login" />;
}

