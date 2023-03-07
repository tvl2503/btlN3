import { View } from 'react-native';
import styled from 'styled-components/native';
import LoginSocialWrapper from '../../../../../components/shared/LoginSocialWrapper';
import Button from '../../../../../core/Button';
import Input from '../../../../../core/Input';
import Row from '../../../../../core/Row';
import Typography from '../../../../../core/Typography';

export const FormRegisterContainer = styled(View)`
  flex: 1;
`;

export const InputComposed = styled(Input)`
  margin-bottom: ${props => props.theme.space[4]};
  background: ${props => props.theme.colors.textfield};
`;

export const ButtonComposed = styled(Button)``;

export const TextWrapper = styled(Typography)`
  justify-content: center;
  align-items: center;
`;

export const CenterWrapper = styled(Row)`
  align-items: center;
  flex-wrap: wrap;
  padding-left: ${props => props.theme.space[2]};
`;

export const RowWrapper = styled(Row)`
  padding-top: ${props => props.theme.space[3]};
`;

export const LoginSocialContainer = styled(LoginSocialWrapper)`
  padding-top: ${props => props.theme.space[5]};
`;
