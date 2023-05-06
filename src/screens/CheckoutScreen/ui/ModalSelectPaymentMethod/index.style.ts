import { View } from "react-native";
import styled from "styled-components/native";
import Modal from "../../../../core/Modal";

export const ModalHeaderComposed = styled(Modal.Header)`
  margin-bottom: 0;
`;

export const FormCardContainer = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
`;