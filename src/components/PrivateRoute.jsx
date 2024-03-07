import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export const PrivateRoute = ({ children }) => {
  return !auth ? <Navigate to="/" /> : children;
};
