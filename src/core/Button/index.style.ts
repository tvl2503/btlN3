import styled from 'styled-components/native';
import { Text } from 'react-native';
import {
  BUTTON_RADIUS,
  BUTTON_SIZE_PADDING,
  BUTTON_THEME,
} from '../../constants/theme/button';
import { ButtonProps, BUTTON_SIZE } from './index.types';

export const TouchableOpacityComposed = styled.TouchableOpacity<ButtonProps>`
  align-self: flex-start;
  padding: ${props =>
    (BUTTON_SIZE_PADDING as any)[props.size || BUTTON_SIZE.md]};
  background-color: ${props => BUTTON_THEME[props.variant || 'primary']};
  border-radius: ${BUTTON_RADIUS};
  ${props => props.fullWidth && 'width: 100%'}
`;

export const TextButtonComposed = styled(Text)`
  color: ${props => props.theme.colors.white}
  text-align: center;
`;
