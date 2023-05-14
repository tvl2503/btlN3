import { View } from "react-native";
import styled from "styled-components/native";
import Row from "../../../../core/Row";
import TransactionElementBasic from "../../../AllTransactionScreen/ui/TransactionElementBasic";
import Typography from "../../../../core/Typography";

export const TransactionItemContainer = styled(View)`

`;

export const CardShop = styled(View)`
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  padding-bottom: ${props => props.theme.sizes.md};
`;

export const RowCenter = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

export const TransactionElementComposed = styled(TransactionElementBasic)`
  margin-top: ${props => props.theme.sizes.xl};
`;

export const TotalComposed = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
`;

export const Total = styled(Typography)`
  text-align: right;
`;

export const TotalValue = styled(Typography)`
  color: ${props => props.theme.colors.danger};
`;