import styled from "styled-components/native";
import { Pressable } from "react-native";
import Typography from "../../Typography";

export const TreeItemComposedComponent = styled(Pressable)`
  padding: ${props => props.theme.sizes.xl};
  background: ${props => props.theme.colors.white};
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  flex-direction: row;
  justify-content: space-between;
`;

export const TreeItemText = styled(Typography)`

`;
