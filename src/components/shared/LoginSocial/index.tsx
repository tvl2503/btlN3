import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  Circle,
  ImageFacebook,
  ImageIcon,
  LoginSocialContainer,
} from './index.style';
import { LoginSocialProps } from './index.types';

const LoginSocial: FC<LoginSocialProps> = props => {
  return (
    <LoginSocialContainer {...props}>
      <Circle style={styles.item}>
        <ImageFacebook source={require('../../../assets/facebook.png')} />
      </Circle>
      <Circle>
        <ImageIcon source={require('../../../assets/google.png')} />
      </Circle>
    </LoginSocialContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 24,
  },
});

export default LoginSocial;
