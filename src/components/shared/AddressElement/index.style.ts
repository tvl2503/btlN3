import { View } from "react-native";
import styled from "styled-components/native";
import Button from "../../../core/Button";
import Card from "../../../core/Card";
import Icons from "../../../core/Icons";
import Typography from "../../../core/Typography";

export const AddressContainer = styled(Card)`
  padding: ${props => props.theme.sizes.xl};
  position: relative;
`;

export const IconAddressComposed = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.colors.light_secondary};
  justify-content: center;
  align-items: center;
`;

export const Marker = styled(Icons.FontAwesome).attrs(props => ({
  color: props.theme.colors.secondary,
  size: 20,
}))`
`;

export const Col = styled(View)`
  flex-grow: 1;
  padding-left: ${props => props.theme.sizes.xl};
`;

export const AddressDetail = styled(Typography)`
  flex-wrap: wrap;
`;

export const AddressDetailContainer = styled(View)`
padding-top: ${props => props.theme.sizes.sm};
padding-bottom: ${props => props.theme.sizes.sm};

`;

export const RemoveButtonContainer = styled(Button)`  
  position: absolute;
  top: ${props => props.theme.sizes.md};
  right: ${props => props.theme.sizes.md};
  z-index: 10;
  background: ${props => props.theme.colors.background};
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 12px;
`;

export const IconWrapper = styled(Icons.Ionicons).attrs(props => ({
  color: props.theme.colors.neutral_1,
  size: 16
}))``