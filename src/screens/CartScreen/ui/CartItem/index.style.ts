import { View } from "react-native";
import styled from "styled-components/native";
import Button from "../../../../core/Button";
import Card from "../../../../core/Card";
import Image from "../../../../core/Image";
import Typography from "../../../../core/Typography";
import QuantityButtonActions from "../QuantityButtonActions";

export const CartItemCard = styled(Card)`
  padding: ${props => props.theme.sizes.xl};
`;

export const CartItemImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: ${props => props.theme.sizes.md};
`;

export const CartBoxContent = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
  flex: 1;
`;
export const TextWrap = styled(Typography)`
  flex-wrap: wrap;
`;

export const TextDescription = styled(TextWrap)`
  padding-bottom: ${props => props.theme.sizes.sm};
  padding-top: ${props => props.theme.sizes.sm};
`;

export const TextOriginalPrice = styled(Typography)`
  text-decoration: line-through;
`;

export const TextPrice = styled(Typography)`
  color: ${props => props.theme.colors.danger};
`;

export const QuantityButtonComposed = styled(QuantityButtonActions)`
  padding-top: ${props => props.theme.sizes.lg};
`;

export const ButtonClose = styled(Button)`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  top: 5px;
  right: 5px;
  background: ${props => props.theme.colors.neutral_6};
  padding: 0;
`;