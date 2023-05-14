import React from 'react';
import SafeArea from '../../core/SafeArea';
import BackgroundContainer from './ui/BackgroundContainer';
import { BoxActionsComposed } from './index.style';

const ProfileScreen = () => {
  return (
    <SafeArea>
      <>
        <BackgroundContainer />
        <BoxActionsComposed />
      </>
    </SafeArea>
  );
};
export default ProfileScreen;
