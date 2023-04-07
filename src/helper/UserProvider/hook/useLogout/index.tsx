import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN, TOKEN_EXPIRATION_TIME } from '../../../../constants/user';
import { userActions } from '../../../../store/slices/user';
import Storage from '../../../../utils/storage';

const useLogout = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(async () => {
    await Storage.removeItem(TOKEN);
    await Storage.removeItem(TOKEN_EXPIRATION_TIME);
    dispatch(userActions.logout());
  }, [dispatch]);

  return {
    onLogout,
  };
};

export default useLogout;
