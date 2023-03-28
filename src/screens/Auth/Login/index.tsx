import React from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import SafeArea from '../../../core/SafeArea';
import Container from '../../../core/Container';
import { COLORS } from '../../../theme/colors';
import Header from '../ui/Header';
import FormLogin from './ui/FormLogin';

const LoginScreen: React.FC = () => {
  return (
    <SafeArea>
      <Container
        // paddingHorizontal={40}
        // paddingVertical={16}
        backgroundColor={COLORS.white}>
        {/* <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} /> */}
        <Header
          title="Đăng nhập"
          description="Bạn chưa có tài khoản?"
          action="Đăng ký"
          />
        <FormLogin />
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;
