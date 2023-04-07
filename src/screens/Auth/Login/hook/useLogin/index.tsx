import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isObject } from 'lodash';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NAVIGATION } from '../../../../../constants/navigation';
import { EXPIRATION_TIME, TOKEN, TOKEN_EXPIRATION_TIME } from '../../../../../constants/user';
import useCallApi from '../../../../../hook/useCallApi';
import { login } from '../../../../../services/auth';
import { LoginResponse } from '../../../../../services/auth/index.types';
import { BaseError } from '../../../../../services/shared/types';
import { userActions } from '../../../../../store/slices/user';
import Storage from '../../../../../utils/storage';

interface OnLoginParams {
  email: string;
  password: string;
}
const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [error, setError] = useState<BaseError | null>(null);
  const info = useRef<OnLoginParams | null>(null);
  const onLogin = (params: OnLoginParams) => {
    const { password, email } = params;
    info.current = params;
    return login({
      email,
      password,
    });
  };

  const onLoginError = (err: BaseError) => {
    if (err?.code === 403) {
      navigation.navigate(NAVIGATION.VERIFYACCOUNT, {
        info: info.current,
      });
    }
    setError(err);
  };

  const onLoginSuccess = async (data: LoginResponse) => {
    const payload = data?.data;
    if (!isObject(payload)) {
      return;
    }
    const token = payload?.token;

    await Storage.setItem(TOKEN, token);
    await Storage.setItem(TOKEN_EXPIRATION_TIME, (Date.now() + EXPIRATION_TIME).toString());
    dispatch(userActions.login(payload));
  };
  const { isLoading, send } = useCallApi({
    request: onLogin,
    error: onLoginError,
    success: onLoginSuccess,
  });

  const onLoginRequest = (params: OnLoginParams) => {
    send(params);
    setError(null);
  };

  return {
    isLoading,
    send: onLoginRequest,
    error,
  };
};

export default useLogin;
