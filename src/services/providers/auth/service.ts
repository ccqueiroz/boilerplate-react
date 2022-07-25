import { Axios } from '../../../config/http/axios';
import { StoreRedux } from '../../../config/store/store';
import { AuthInterfaceService } from '../../models/Auth';
import { Users } from '../../models/Users/Users';
import { AUTH_API } from './api';
import { Storage } from '../../../config/storage/storage';

type Constructor = {
  store: StoreRedux;
  storage: Storage;
  http: Axios;
};
export default class AuthServices implements AuthInterfaceService {
  private store: StoreRedux;
  private http: Axios;
  private storage: Storage;
  constructor({ store, http, storage }: Constructor) {
    this.store = store;
    this.http = http;
    this.storage = storage;
  }

  public async signIn({ email, password }: Users) {
    const data = { email, password };
    const user = await this.http.post<Users>(AUTH_API.SIGN_IN, { ...data });
    return user;
  }
}
