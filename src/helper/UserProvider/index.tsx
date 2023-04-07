import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN, TOKEN_EXPIRATION_TIME } from '../../constants/user';
import useCallApi from '../../hook/useCallApi';
import { User } from '../../models/user';
import { BaseResponse } from '../../services/shared/types';
import { getInfoUser } from '../../services/user';
import { userActions } from '../../store/slices/user';
import Storage from '../../utils/storage';
import useLogout from './hook/useLogout';

const UserProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { onLogout } = useLogout();
  const dispatch = useDispatch();

  const onAutoLoginUser = () => {
    return getInfoUser();
  };

  const onAutoLoginError = () => {

  };

  const onAutoLoginSuccess = async (data: BaseResponse<User>) => {
    const user = data?.data;
    const token = await Storage.get(TOKEN);
    if (!user) {
      await onLogout();
    }
    dispatch(userActions.login({
      token,
      user,
    }));
  };

  const { send } = useCallApi({
    request: onAutoLoginUser,
    error: onAutoLoginError,
    success: onAutoLoginSuccess,
  });

  useEffect(() => {
    (async () => {
      const token = await Storage.get(TOKEN);
      const timeExpirationToken = await Storage.get(TOKEN_EXPIRATION_TIME);
      if (!token || !timeExpirationToken || Date.now() >= +timeExpirationToken) {
        await onLogout();
        return;
      }
      send(token);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLogout]);
  return (
    <>
      {children}
    </>
  );
};

export default UserProvider;
