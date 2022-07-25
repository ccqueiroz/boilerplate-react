import { createSlice } from '@reduxjs/toolkit';
import { ROLES } from '../../../constants/roles';
import { AuthInterface } from '../../../services/models/Auth';
import { Users } from '../../../services/models/Users/Users';

export const AUTH_REDUCER = 'auth';

const hasRole = (user: Users | undefined, role: string) => user?.role === role;

const initialState: AuthInterface = {
  user: undefined,
  isAuthenticated: false,
  role: undefined,
  token: null,
};

const auth = createSlice({
  name: AUTH_REDUCER,
  initialState: initialState,
  reducers: {
    signIn: (
      state,
      {
        payload,
      }: {
        payload: AuthInterface;
        type: string;
      },
    ) => {
      state.user = payload.user;
      state.isAuthenticated = true;
      state.token = payload.token;
      if (hasRole(payload?.user, ROLES.ROLE_ADMIN)) {
        state.role = ROLES.ROLE_ADMIN;
      }
    },
    signOut: (state) => {
      state.user = undefined;
      state.isAuthenticated = false;
      state.role = undefined;
      state.token = null;
    },
    setToken: (state, { payload }: { payload: Pick<AuthInterface, 'token'> }) => {
      state.token = payload.token;
    },
  },
});

export const authActions = auth.actions;
export default auth.reducer;
