import React, { useState } from 'react';
import {
  FormContainer,
  FormLoginContainer,
  InputComposed,
  LoginSocialContainer,
} from './index.style';
import Icons from '../../../../../core/Icons';
import {
  INPUT_SIZE,
  INPUT_VARIANT,
} from '../../../../../constants/theme/input';
import { IONICONS_NAME } from '../../../../../constants/icons/ionicons';
import { ButtonComposed } from './../../../Register/ui/FormRegister/index.style';
import { BUTTON_SIZE } from '../../../../../core/Button/index.types';
import { BUTTON_VARIANT } from '../../../../../constants/theme/button';
import { FormData } from '../../../../../core/Form/FormInstance';
import { email } from '../../../../../core/Input/rules/email';
import required from '../../../../../core/Input/rules/required';
import useLogin from '../../hook/useLogin';

interface FormLoginProps {}
const FormLogin: React.FC<FormLoginProps> = props => {
  const [active, setActive] = useState(false);
  const { isLoading, send } = useLogin();

  const onPressIcon = () => {
    setActive(prevState => !prevState);
  };

  const onSubmitForm = (data: FormData) => {
    send(data as any);
  };
  return (
    <FormContainer onSubmit={onSubmitForm}>
      {({ onSubmit, isValidForm }) => (
        <FormLoginContainer {...props}>
          <InputComposed
            variant={INPUT_VARIANT.FILL}
            name="email"
            rules={[email]}
            placeholder="Email"
          />
          <InputComposed
            placeholder="Mật khẩu"
            name="password"
            onPressIcon={onPressIcon}
            rules={[required]}
            variant={INPUT_VARIANT.FILL}
            icon={
              <Icons.Ionicons
                size={20}
                name={active ? IONICONS_NAME.EYE_OFF : IONICONS_NAME.EYE}
              />
            }
            size={INPUT_SIZE.md}
            secureTextEntry={!active}
          />
          <ButtonComposed
            onPress={onSubmit}
            disabled={!isValidForm}
            fullWidth
            loading={isLoading}
            size={BUTTON_SIZE.lg}
            variant={BUTTON_VARIANT.secondary}>
            Đăng nhập
          </ButtonComposed>
          <LoginSocialContainer />
        </FormLoginContainer>
      )}
    </FormContainer>
  );
};
export default FormLogin;
