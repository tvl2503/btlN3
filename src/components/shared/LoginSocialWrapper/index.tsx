import React, { FC } from 'react';
import { ViewProps } from 'react-native/types';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import { AliasComponent } from '../../../types';
import {
  GradientItem,
  LoginSocialContainer,
  LoginSocialWrapperContainer,
  RowCenter,
  Title,
} from './index.style';

interface LoginSocialWrapperProps extends ViewProps, AliasComponent {}

const LoginSocialWrapper: FC<LoginSocialWrapperProps> = props => {
  const { ...rest } = props;

  return (
    <LoginSocialWrapperContainer {...rest}>
      <RowCenter>
        <GradientItem
          locations={[0.4375, 1]}
          colors={['#828282', '#E0E0E0']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
        />
        <Title variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>Hoặc</Title>
        <GradientItem
          locations={[0.4375, 1]}
          colors={['#828282', '#E0E0E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </RowCenter>
      <LoginSocialContainer/>
    </LoginSocialWrapperContainer>
  );
};

export default LoginSocialWrapper;
