import styled from "styled-components/native";
import Card from "../../../../core/Card";
import { View } from "react-native";
import Icons from "../../../../core/Icons";

export const AddressTransactionContainer = styled(Card)`
  border-radius: 0;
`;

export const IconContainer = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.colors.light_secondary};
  align-items: center;
  justify-content: center;
`;

export const IconComposed = styled(Icons.FontAwesome).attrs(props => ({
  color: props.theme.colors.secondary,
  size: 20,
}))`
`;

export const Content = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
`;