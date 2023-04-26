import { View } from "react-native";
import styled from "styled-components/native";
import Icons from "../../../../core/Icons";
import Link from "../../../../core/Link";
import Typography from "../../../../core/Typography";

export const AddressContainer = styled(View)`
  padding: ${props => props.theme.sizes.xl};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.sizes.md};
`;

export const AddressIcon = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.colors.light_secondary};
  align-items: center;
  justify-content: center;
`;

export const IconMarker = styled(Icons.FontAwesome).attrs(props => ({
  size: 20,
  color: props.theme.colors.secondary,
}))``;

export const AddressDetailContainer = styled(View)`
  flex-grow: 1;
  padding-left: ${props => props.theme.sizes.xl};
`;

export const TitleDetailAddress = styled(Typography)`
  padding-bottom: ${props => props.theme.sizes.sm};
`;

export const AddressDetail = styled(Typography)`
  flex-wrap: wrap;
`;

export const LinkText = styled(Link)`
  padding-top: ${props => props.theme.sizes.sm};
`;

export const LoadingContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;