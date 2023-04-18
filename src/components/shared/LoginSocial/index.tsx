import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  Circle,
  ImageFacebook,
  ImageIcon,
  LoginSocialContainer,
} from './index.style';
import { LoginSocialProps } from './index.types';
import {LoginManager, AccessToken } from 'react-native-fbsdk-next';
const LoginSocial: FC<LoginSocialProps> = props => {

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile'])
    .then((result) => {
      if (result.isCancelled) {
        console.log('Login cancelled')
      } else {
        AccessToken.getCurrentAccessToken().then(token => {
          console.log('Login success with permissions: ' + token)
        })
      }
    }, function (error) {
      console.log('Login fail with error: ' + error)
    })
  }
  return (
    <LoginSocialContainer {...props}>
      <Circle onPress={handleFacebookLogin} style={styles.item}>
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
