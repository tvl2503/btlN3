import { View } from "react-native";
import styled from "styled-components/native";
import Card from "../../core/Card";
import Address from "../CartScreen/ui/Address";
import PaymentMethod from "./ui/PaymentMethod";

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