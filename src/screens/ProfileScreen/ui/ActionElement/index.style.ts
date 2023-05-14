import { View } from "react-native";
import styled from "styled-components/native";
import Typography from "../../../../core/Typography";

export const ActionElementContainer = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Typography)`
  padding-top: ${props => props.theme.sizes.md};
`;