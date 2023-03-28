import React from 'react';
import Container from '../../../core/Container';
import SafeArea from '../../../core/SafeArea';
import Header from '../ui/Header';
import { Wrapper } from './index.style';
import FormRegister from './ui/FormRegister';
import { TextInput } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <Wrapper>
      <SafeArea>
        <Container>
          <Header
            title="Đăng ký"
            description="Bạn đã có tài khoản?"
            action="Đăng nhập"
          />
          <FormRegister />
        </Container>
      </SafeArea>
    </Wrapper>
  );
};
export default RegisterScreen;
