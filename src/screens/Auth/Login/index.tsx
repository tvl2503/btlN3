import React from 'react';
import SafeArea from '../../../core/SafeArea';
import Container from '../../../core/Container';
import { COLORS } from '../../../theme/colors';
import Header from '../ui/Header';
import FormLogin from './ui/FormLogin';
import { StatusBar } from 'react-native';
import { NAVIGATION } from '../../../navigators/constants';

const LoginScreen: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        {/* <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} /> */}
        <Header
          title="Đăng nhập"
          description="Bạn chưa có tài khoản?"
          action="Đăng ký"
          configAction={{
            screen: NAVIGATION.REGISTER
          }}
          />
        <FormLogin />
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;
