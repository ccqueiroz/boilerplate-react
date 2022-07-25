import React, { useEffect } from 'react';
import * as Styles from './styles';
import { authUseCases } from '../../services/providers/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomRoutes from '../../components/Routes';
import { AuthProvider } from '../Auth/context';
import { RootStore } from '../../config/store/store';
import { connect } from 'react-redux';

const App: React.FC = () => {
  const { token, isAuthenticated } = authUseCases.handleGetAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const routesCannotBeAccess = ['/', 'signin', 'signup'];
    if (!!routesCannotBeAccess.find((route) => location.pathname === route) && token && isAuthenticated) navigate('/home');
  }, [location.pathname, token, isAuthenticated, navigate]);

  return (
    <AuthProvider>
      <Styles.ContainerApp>
        <CustomRoutes />
      </Styles.ContainerApp>
    </AuthProvider>
  );
};
const mapState = (state: RootStore) => state;
export default connect(mapState)(App);
