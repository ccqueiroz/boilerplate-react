import React, { useMemo, memo } from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../config/store/store';
import { AuthInterface } from '../../services/models/Auth';
import PrivatesRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

type CustomRoutesProps = Omit<AuthInterface, 'user'>;

const CustomRoutes: React.FC<CustomRoutesProps> = ({ isAuthenticated, token }) => {
  const Routes = useMemo(() => {
    const authentication = !!token && isAuthenticated;
    return authentication ? <PrivatesRoutes isAuthenticated={isAuthenticated} token={token} /> : <PublicRoutes />;
  }, [isAuthenticated, token]);

  return Routes;
};

const mapState = (state: RootStore) => ({ auth: state.auth });
export default connect(mapState)(memo(CustomRoutes));
