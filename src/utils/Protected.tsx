import { Navigate } from 'react-router';

interface ProtectedProps {
    isLoggedIn: boolean;
    children: any;
}

export const Protected = ({ isLoggedIn, children}: ProtectedProps) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
      }
      return children;
}
