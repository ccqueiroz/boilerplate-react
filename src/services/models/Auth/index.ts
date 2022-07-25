import { ROLES } from '../../../constants/roles';
import { Users } from '../Users/Users';

export interface AuthInterface {
  isAuthenticated?: boolean;
  user?: Users | undefined;
  role?: ROLES | undefined;
  token?: string | null;
}

export interface AuthInterfaceUseCase {
  handleGetAuth: () => AuthInterface;
  signOut: () => void;
}

export interface AuthInterfaceService {
  signIn: ({ email, password }: Users) => Promise<Users>;
}
