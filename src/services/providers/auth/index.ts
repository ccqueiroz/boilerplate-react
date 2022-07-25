import { http } from '../../../config/http/http';
import { storage } from '../../../config/storage';
import { store } from '../../../config/store/store';
import AuthServices from './service';
import AuthUseCases from './useCase';

const authService = new AuthServices({ store, storage, http });
export const authUseCases = new AuthUseCases({ store, storage, authService });
