import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token } = useAuth();
  return !token ? <Navigate to={redirectTo} /> : Component;
};
