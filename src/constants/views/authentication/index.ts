import { RouteProps } from '..';
import { NAVIGATION } from '../../navigation';
import LoginScreen from '../../../screens/Auth/Login';
import RegisterScreen from '../../../screens/Auth/Register';
import VerifyAccount from '../../../screens/Auth/VerifyAccount';

export const AUTHENTICATION_STACKS: Array<RouteProps> = [
  {
    name: NAVIGATION.LOGIN,
    component: LoginScreen,
  },
  {
    name: NAVIGATION.REGISTER,
    component: RegisterScreen,
  },
  {
    name: NAVIGATION.VERIFYACCOUNT,
    component: VerifyAccount,
  },
];
