import { View } from "react-native";
import styled from "styled-components/native";
import Icons from "../../../../core/Icons";
import Typography from "../../../../core/Typography";

export const PaymentMethodContainer = styled(View)`
  padding: ${props => props.theme.sizes.xl};
`;

export const PaymentIconContainer = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: rgba(234, 60, 113, 0.2);
`;
export const PaymentMethodIcon = styled(Icons.Material).attrs(props => ({
  color: props.theme.colors.danger,
  size: 20,
}))``;

export const InfoContainer = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
`;

export const Title = styled(Typography)``;

export const SubTitle = styled(Typography)`
  flex-wrap: wrap;
  padding-top: ${props => props.theme.sizes.sm};
  padding-bottom: ${props => props.theme.sizes.sm};
`;

export const ChangeMethodTitle = styled(Typography)`
  padding-top: ${props => props.theme.sizes.sm};
  color: ${props => props.theme.colors.primary};
`;