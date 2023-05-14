import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
`;

export const ContainerLoading = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewList = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
  flex: 1;
`;

export const SeperatorComponent = styled(View)`
  height: ${props => props.theme.sizes.xl};
`;