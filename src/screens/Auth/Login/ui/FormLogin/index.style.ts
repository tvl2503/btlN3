import styled from "styled-components/native";
import { View } from 'react-native';
import LoginSocialWrapper from './../../../../../components/shared/LoginSocialWrapper/index';
import Row from './../../../../../core/Row/index';
import Typography from './../../../../../core/Typography/index';
import Button from './../../../../../core/Button/index';
import Form from "../../../../../core/Form";

export const FormContainer = styled(Form)``;

export const FormLoginContainer = styled(View)`
    flex : 1;
`
export const InputComposed = styled(Form.Input)`
  margin-bottom: ${props => props.theme.space[4]};
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
