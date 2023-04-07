import React, { FC, useState } from 'react';
import { ViewProps } from 'react-native/types';
import { IONICONS_NAME } from '../../../../../constants/icons/ionicons';
import { BUTTON_VARIANT } from '../../../../../constants/theme/button';
import {
  INPUT_SIZE,
  INPUT_VARIANT,
} from '../../../../../constants/theme/input';
import { TYPOGRAPHY_VARIANT } from '../../../../../constants/theme/typography';
import { BUTTON_SIZE } from '../../../../../core/Button/index.types';
import CheckBox from '../../../../../core/CheckBox';
import Form from '../../../../../core/Form';
import { FormData } from '../../../../../core/Form/FormInstance';
import Icons from '../../../../../core/Icons';
import { email } from '../../../../../core/Input/rules/email';
import { password } from '../../../../../core/Input/rules/password';
import { phone } from '../../../../../core/Input/rules/phone';
import required from '../../../../../core/Input/rules/required';
import Link from '../../../../../core/Link';
import useCallApi from '../../../../../hook/useCallApi';
import { register } from '../../../../../services/auth';
import { RegisterRequest } from '../../../../../services/auth/index.types';
import {
  ButtonComposed,
  CenterWrapper,
  FormItemComposed,
  FormRegisterContainer,
  LoginSocialContainer,
  RowWrapper,
  TextWrapper,
} from './index.style';

interface FormRegisterProps extends ViewProps {}

const FormRegister: FC<FormRegisterProps> = props => {
  const [active, setActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onRegister = (data: RegisterRequest) => {
    return register(data);
  };

  const onCallbackSuccess = (data: any) => {
    console.log(data);
  };

  const onCallbackError = (err: any) => {
    console.log(err);
  };

  const { send, isLoading } = useCallApi({
    request: onRegister,
    success: onCallbackSuccess,
    error: onCallbackError,
  });
  const onPressIcon = () => {
    setActive(prevState => !prevState);
  };
  const onCheck = () => {
    setIsChecked(prevState => !prevState);
  };
  const onSubmitForm = (data: FormData) => {
    console.log(data);
    send(data);
  };
  console.log(isLoading);
  return (
    <Form onSubmit={onSubmitForm}>
      {({ onSubmit, isValidForm }) => {
        return (
          <FormRegisterContainer {...props}>
            <FormItemComposed
              variant={INPUT_VARIANT.FILL}
              rules={[required]}
              placeholder="Tên người dùng"
              name="username"
            />
            <FormItemComposed
              rules={[required, email]}
              variant={INPUT_VARIANT.FILL}
              placeholder="Email"
              name="email"
            />
            <FormItemComposed
              rules={[required, phone]}
              variant={INPUT_VARIANT.FILL}
              placeholder="Số điện thoại"
              name="phone_number"
            />
            <FormItemComposed
              rules={[required, password]}
              variant={INPUT_VARIANT.FILL}
              onPressIcon={onPressIcon}
              name="password"
              icon={
                <Icons.Ionicons
                  size={20}
                  name={active ? IONICONS_NAME.EYE_OFF : IONICONS_NAME.EYE}
                />
              }
              size={INPUT_SIZE.md}
              secureTextEntry={!active}
              placeholder="Mật khẩu"
            />
            <ButtonComposed
              fullWidth
              onPress={onSubmit}
              disabled={!isValidForm || !isChecked}
              size={BUTTON_SIZE.lg}
              variant={BUTTON_VARIANT.secondary}>
              Đăng ký
            </ButtonComposed>
            <RowWrapper>
              <CheckBox active={isChecked} onCheck={onCheck} />
              <CenterWrapper>
                <TextWrapper variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
                  Tôi đồng ý với
                </TextWrapper>
                <Link variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
                  {' '}
                  Điều khoản & Quy định của nhóm 3.
                </Link>
              </CenterWrapper>
            </RowWrapper>
            <LoginSocialContainer />
          </FormRegisterContainer>
        );
      }}
    </Form>
  );
};

export default FormRegister;
