import { View } from "react-native";
import styled from "styled-components/native";
import Gradient from "../../../core/Gradient";
import Row from "../../../core/Row";
import Typography from "../../../core/Typography";
import LoginSocial from "../LoginSocial";

export const LoginSocialWrapperContainer = styled(View)``;

export const RowCenter = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography)`
  padding-horizontal: ${props => props.theme.space[2]};
`;

export const GradientItem = styled(Gradient)`
  width: 48px;
  height: 1px;
`;

export const LoginSocialContainer = styled(LoginSocial)`
  padding-top: ${props => props.theme.space[4]};
`;
