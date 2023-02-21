import { View } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import styled from "styled-components/native";
import { BUTTON_ICON_SIZE } from "../../../constants/theme/modal";
import Button from "../../Button";
import Icons from "../../Icons";
import { ModalHeaderProps } from "./index.types";

export const ModalHeaderComposedComponent = styled(View)<ModalHeaderProps>`
  padding: ${props => props.theme.sizes.xl};
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
`;

export const ModalHeaderContainer = styled(View)`
  align-items: center;
  position: relative;
`;

export const ModalButton = styled(Button)`
  position: absolute;
  right: 0;
  top: -50%;
`;

export const ModalButtonIcon = styled(Icons.Ionicons).attrs<IconProps>(props => ({
  color: props.theme.colors.neutral_3,
  size: BUTTON_ICON_SIZE,
}))``;

