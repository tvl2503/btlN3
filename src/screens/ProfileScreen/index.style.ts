import styled from "styled-components/native";
import BoxActions from "./ui/BoxActions";
import { Text, TouchableOpacity, View } from "react-native";

export const BoxActionsComposed = styled(BoxActions)` 
  margin-top: ${props => props.theme.sizes.xl};
`;

export const LogoutContainer = styled(View)`
  flex: 1;
  justifyContent: flex-end;
  margin: 16px;
`
export const LogoutButton = styled(TouchableOpacity)`
  borderColor: ${props => props.theme.colors.danger};
  borderWidth: 1px;
  alignItems: center;
  padding: 8px 16px;
  borderRadius: 8px;
`
export const TextButton = styled(Text)`
  color: ${props => props.theme.colors.danger};
`