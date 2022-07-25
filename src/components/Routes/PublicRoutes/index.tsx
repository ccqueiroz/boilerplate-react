import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthInterface } from '../../../services/models/Auth';
import { PUBLIC_ROUTES } from './routes';

const Home = lazy(() => import('../../../modules/Home'));
const NotFound = lazy(() => import('../../../modules/NotFound'));

const PublicRoutes: React.FC<Omit<AuthInterface, 'role' | 'user' | 'isAuthenticated' | 'token'>> = () => {
  return (
    <Routes>
      <Route path={PUBLIC_ROUTES.home} element={<Home />} />
      <Route path={PUBLIC_ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
