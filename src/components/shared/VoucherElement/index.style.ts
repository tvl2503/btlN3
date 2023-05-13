import { View } from "react-native";
import styled from "styled-components/native";
import Card from "../../../core/Card";
import Icons from "../../../core/Icons";
import Typography from "../../../core/Typography";

export const VoucherContainer = styled(Card)`
  padding: 0;
`;

export const Element = styled(View)`
  flex: 1;
  background: ${props => props.theme.colors.light_secondary};
  min-height: 120px;
  align-items: center;
  justify-content: center;
`;

export const IconCore = styled(Icons.Feather).attrs(props => ({
  color: props.theme.colors.secondary,
  size: 20,
}))`
`;

export const Content = styled(View)`
  flex: 2;
  padding-left: ${props => props.theme.sizes.lg};
  justify-content: center;
`;

export const Description = styled(Typography)`
  padding-top: ${props => props.theme.sizes.md};
  padding-bottom: ${props => props.theme.sizes.md};
`;