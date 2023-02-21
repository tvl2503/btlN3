import { Modalize } from "react-native-modalize";
import { View } from "react-native";
import styled from "styled-components/native";

export const ModalComposedComponent = styled(Modalize)``;

export const ModalContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.sizes.xl}
`;