import { omit } from 'lodash';
import { TextInput } from 'react-native';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';
import {
  INPUT_PADDING,
  INPUT_RADIUS,
  INPUT_SIZE,
  INPUT_VARIANT,
} from '../../constants/theme/input';
import { TypographyConfig, TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import { ThemeCore } from '../../theme';
import { InputProps } from './index.types';

const getSelectionColor = (props: ThemedStyledProps<InputProps, ThemeCore>) => {
  const { isActive, error, theme } = props;
  if (error) {
    return theme.colors.danger;
  }
  if (isActive) {
    return theme.colors.primary;
  }
  return theme.colors.neutral_2;
};

export const InputComposed = styled(TextInput).attrs<InputProps>(props => ({
  selectionColor: getSelectionColor(props),
  placeholderTextColor: props.error ? props.theme.colors.danger : props.theme.colors.gray_6,
}))<InputProps>`
  padding: ${props => INPUT_PADDING[props.size || INPUT_SIZE.md]};
  ${props =>
    props.variant === INPUT_VARIANT.STROKE &&
    `border: 1px solid ${props.theme.colors.neutral_6}`};
  border-radius: ${INPUT_RADIUS};
  border-color: ${({isActive, theme}) => isActive ? theme.colors.primary : theme.colors.neutral_6};
  ${({variant, theme}) => variant === INPUT_VARIANT.FILL && `background-color: ${theme.colors.textfield}`};
  ${({theme, error}) => error && `border-color: ${theme.colors.danger}`};
  color: ${props => props.theme.colors.neutral_2};
  ${omit(TypographyConfig[TYPOGRAPHY_VARIANT.BODY], 'lineHeight')}
`;
