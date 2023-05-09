import styled from "styled-components/native";
import Card from "../../../../core/Card";
import Image from "../../../../core/Image";
import { View } from "react-native";
import Typography from "../../../../core/Typography";

export const CartItemContainer = styled(Card)`

`;

export const CartImage = styled(Image)`
  width: ${props => props.theme.sizes.xxl};
  height: ${props => props.theme.sizes.xxl};
  border-radius: 8px;
`;

export const CartItemContent = styled(View)`
  padding-left: ${props => props.theme.sizes.lg};
  flex: 1;
`;

export const TitleWrapper = styled(Typography)`
  padding-right: 16px;
`;

export const QuantityWrapper = styled(Typography)`
  text-align: right;
  padding-left: ${props => props.theme.sizes.xxl};
`;

export const Price = styled(Typography)`
  padding-top: ${props => props.theme.sizes.sm};
  color: ${props => props.theme.colors.danger};
`;

export const DiscountPrice = styled(Typography)`
  text-decoration: line-through;
  padding-right: ${props => props.theme.sizes.md};
`;