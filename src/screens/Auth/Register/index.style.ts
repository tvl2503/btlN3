import { View } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(View)`
  background: ${props => props.theme.colors.white};
  flex: 1;
`;