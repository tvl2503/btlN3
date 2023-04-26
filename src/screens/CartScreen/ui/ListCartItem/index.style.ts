import styled from "styled-components/native";
import CartItem from "../CartItem";
import { View } from "react-native";
import Image from "../../../../core/Image";
import Typography from "../../../../core/Typography";

export const CartItemComposed = styled(CartItem)`
`;

export const Wrapper = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
  padding-right: ${props => props.theme.sizes.xl};
`;

export const ContainerComposed = styled.View`
  flex: 1;
`;

export const CenterContainer = styled.View`
height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageEmpty = styled(Image)`
  width: 72px;
  height: 72px;
`;

export const TitleEmpty = styled(Typography)`
  padding-top: ${props => props.theme.sizes.md};
`;