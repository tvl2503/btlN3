import React from 'react';
import SafeArea from '../../core/SafeArea';
import BackgroundContainer from './ui/BackgroundContainer';
import { BoxActionsComposed, LogoutButton, LogoutContainer, TextButton } from './index.style';
import { useDispatch } from 'react-redux';
import { useAction } from '../../helper/ActionProvider';
import { userActions } from '../../store/slices/user';


const ProfileScreen = () => {
  const dispatch = useDispatch();

  const onHandleLogout = () => {
    dispatch(userActions.logout())
  }
  return (
    <SafeArea>
      <>
        <BackgroundContainer />
        <BoxActionsComposed />
        <LogoutContainer>

        <LogoutButton onPress={onHandleLogout} >
          <TextButton >Đăng xuất</TextButton>
        </LogoutButton>
        </LogoutContainer>
      </>
    </SafeArea>
  );
};
export default ProfileScreen;
