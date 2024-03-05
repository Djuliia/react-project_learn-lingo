import { Navigate } from 'react-router-dom';
import { auth } from '../components/firebase';

export const PrivateRoute = ({ children }) => {
  return !auth ? <Navigate to="/" /> : children;
};
