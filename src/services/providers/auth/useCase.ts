import { StoreRedux } from './../../../config/store/store';
import { AuthInterfaceUseCase } from '../../models/Auth';
import { authActions } from '../../../config/store/slices/auth.slice';
import { Storage } from '../../../config/storage/storage';
import AuthServices from './service';

type Constructor = {
  store: StoreRedux;
  storage: Storage;
  authService: AuthServices;
};

export default class AuthUseCases implements AuthInterfaceUseCase {
  private store: StoreRedux;
  private storage: Storage;
  private authService: AuthServices;
  constructor({ store, storage, authService }: Constructor) {
    this.store = store;
    this.storage = storage;
    this.authService = authService;
  }

  public handleGetAuth() {
    const data = this.store.getState().auth;
    return data;
  }
  public async signIn(email: string, password: string) {
    const user = await this.authService.signIn({ email, password });
    const payload = {
      user,
      token: user?.token,
      isAuthenticated: true,
    };
    if (user) {
      this.store.dispatch(authActions.signIn({ ...payload }));
    }
  }

  public signOut() {
    this.store.dispatch(authActions.signOut());
  }

  public getTokenStorage() {
    const key = process.env.REACT_APP_KEY_TOKEN;
    const token = this.storage.get(String(key));
    if (!token) {
      return null;
    }
    this.store.dispatch(authActions.setToken({ token }));
    return token;
  }
}
