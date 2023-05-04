import { View } from "react-native";
import styled from "styled-components/native";
import Card from "../../../../core/Card";

export const Seperator = styled(View)`
  height: ${props => props.theme.sizes.xl};
`;

export const CardButton = styled(Card)`
  padding: ${props => props.theme.sizes.xl};
`;

export const AddressElementComposed = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
  padding-right: ${props => props.theme.sizes.xl};
`;

export const ContainerAddress = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
  padding-bottom: ${props => props.theme.sizes.xl};
  flex: 1;
`;

export const LoadingCenterSpinner = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;