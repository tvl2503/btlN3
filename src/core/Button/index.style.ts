import styled from 'styled-components/native';
import { Text } from 'react-native';
import {
  BUTTON_ICON_SIZE,
  BUTTON_RADIUS,
  BUTTON_SIZE_PADDING,
  BUTTON_THEME,
  BUTTON_VARIANT,
} from '../../constants/theme/button';
import { ButtonProps, BUTTON_SIZE } from './index.types';

export const TouchableOpacityComposed = styled.TouchableOpacity<ButtonProps>`
  align-self: flex-start;
  padding: ${props =>
    (BUTTON_SIZE_PADDING as any)[props.size || BUTTON_SIZE.md]};
  background-color: ${props => BUTTON_THEME[props.variant || 'primary']};
  border-radius: ${BUTTON_RADIUS};
  justify-content: center;
  align-items: center;
  ${props => props.fullWidth && 'width: 100%'};
  ${({variant, size}) => variant === BUTTON_VARIANT.icon && `
  padding: 0px;
  width: ${(BUTTON_ICON_SIZE as any)[size || BUTTON_SIZE.md]};
  height: ${(BUTTON_ICON_SIZE as any)[size || BUTTON_SIZE.md]};
  `}
`;

export const TextButtonComposed = styled(Text)<ButtonProps>`
  color: ${props => props?.variant !== BUTTON_VARIANT.text ? props.theme.colors.white : props.theme.colors.neutral_2}
  text-align: center;
`;