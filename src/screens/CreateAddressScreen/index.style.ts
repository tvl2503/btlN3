import { View } from "react-native";
import styled from "styled-components/native";
import FormAddress from "./ui/FormAddress";

export const WrapperComposedAddress = styled(FormAddress).attrs(_ => ({
  styleFooter: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}))`
  padding-left: ${props => props.theme.sizes.xl};
  padding-right: ${props => props.theme.sizes.xl};
  padding-top: ${props => props.theme.sizes.xl};
`;

export const Title = styled(View)`
  padding: ${props => props.theme.sizes.xl};
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  
`;
