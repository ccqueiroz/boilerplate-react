import React, { useEffect, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthInterface } from '../../../services/models/Auth';
import { PRIVATE_ROUTES } from './routes';

const NotFound = lazy(() => import('../../../modules/NotFound'));

const PrivatesRoutes: React.FC<Omit<AuthInterface, 'role' | 'user'>> = ({ isAuthenticated, token }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated || !token) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate, token]);
  return (
    <Routes>
      <div></div>
      <Route path={PRIVATE_ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default PrivatesRoutes;
