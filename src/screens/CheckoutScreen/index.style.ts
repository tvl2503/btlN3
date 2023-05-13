import { View } from "react-native";
import styled from "styled-components/native";
import Card from "../../core/Card";
import Address from "../CartScreen/ui/Address";
import PaymentMethod from "./ui/PaymentMethod";
import CartItemElement from "./ui/CartItemElement";
import Typography from "../../core/Typography";
import Row from "../../core/Row";
import Icons from "../../core/Icons";

export const CheckoutContainer = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
`;

export const AddressComposed = styled(Address)`
  border-radius: 0px;
`;

export const CardCustom = styled(Card)`
  border-radius: 0;
  padding: 0;
`;

export const PaymentMethodComposed = styled(PaymentMethod)`
  
`;

export const CardPaymnetComposed = styled(CardCustom)`
  margin-top: ${props => props.theme.sizes.xl};
`

export const CartItemComposed = styled(CartItemElement)`
  margin-bottom: ${props => props.theme.sizes.md};
`;

export const ContainerList = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
`;

export const Title = styled(Typography)`
  padding-bottom: ${props => props.theme.sizes.lg};
  padding-left: ${props => props.theme.sizes.xl};
`;

export const BoxTotal = styled(Card)`
`;

export const ViewSize = styled(View)`
  flex: 1;
`;

export const RowEnd = styled(Row)`
  padding-bottom: ${props => props.theme.sizes.md};
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled(Typography)`
  color: ${props => props.theme.colors.danger};
`;

export const BoxVoucher = styled(Card)`
  margin-bottom: ${props => props.theme.sizes.xl};
`;

export const Icon = styled(Icons.Ionicons).attrs(props => ({
  color: props.theme.colors.neutral_1,
  size: 16
}))``;

export const RowCenter = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

export const Badge = styled(View)`
  padding: ${props => props.theme.sizes.sm};
  background: ${props => props.theme.colors.light_secondary};
  border-radius: ${props => props.theme.sizes.sm};
`;

export const TextDiscount = styled(Typography)`
  color: ${props => props.theme.colors.secondary};
`;

export const ErrorMessage = styled(Typography)`
  padding-bottom: ${props => props.theme.sizes.xl};
  color: ${props => props.theme.colors.danger};
  text-align: center;
`;