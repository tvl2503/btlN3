import { RouteProps } from '..';
import { NAVIGATION } from '../../../navigators/constants';
import LoginScreen from '../../../screens/Auth/Login';
import RegisterScreen from '../../../screens/Auth/Register';

export const AUTHENTICATION_STACKS: Array<RouteProps> = [
  {
    name: NAVIGATION.LOGIN,
    component: LoginScreen,
  },
  {
    name: NAVIGATION.REGISTER,
    component: RegisterScreen,
  },
];
