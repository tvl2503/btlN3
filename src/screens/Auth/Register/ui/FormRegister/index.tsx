import React, { FC, useState } from 'react';
import { ViewProps } from 'react-native/types';
import { IONICONS_NAME } from '../../../../../constants/icons/ionicons';
import { BUTTON_VARIANT } from '../../../../../constants/theme/button';
import { INPUT_SIZE } from '../../../../../constants/theme/input';
import { TYPOGRAPHY_VARIANT } from '../../../../../constants/theme/typography';
import { BUTTON_SIZE } from '../../../../../core/Button/index.types';
import CheckBox from '../../../../../core/CheckBox';
import Icons from '../../../../../core/Icons';
import Link from '../../../../../core/Link';
import {
  ButtonComposed,
  CenterWrapper,
  FormRegisterContainer,
  InputComposed,
  LoginSocialContainer,
  RowWrapper,
  TextWrapper,
} from './index.style';

interface FormRegisterProps extends ViewProps {}

const FormRegister: FC<FormRegisterProps> = props => {
  const [active, setActive] = useState(false);

  const onPressIcon = () => {
    setActive(prevState => !prevState);
  };
  return (
    <FormRegisterContainer {...props}>
      <InputComposed placeholder="Tên người dùng" />
      <InputComposed placeholder="Email" />
      <InputComposed placeholder="Số điện thoại" />
      <InputComposed
        onPressIcon={onPressIcon}
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
        size={BUTTON_SIZE.lg}
        variant={BUTTON_VARIANT.secondary}>
        Đăng ký
      </ButtonComposed>
      <RowWrapper>
        <CheckBox />
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
      <LoginSocialContainer/>
    </FormRegisterContainer>
  );
};

export default FormRegister;
