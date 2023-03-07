import { omit } from 'lodash';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import {
  INPUT_PADDING,
  INPUT_RADIUS,
  INPUT_SIZE,
  INPUT_VARIANT,
} from '../../constants/theme/input';
import { TypographyConfig, TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import { InputProps } from './index.types';

export const InputWrapper = styled(View)<InputProps>`
  padding: ${props => INPUT_PADDING[props.size || INPUT_SIZE.md]};
  ${props =>
    props.variant === INPUT_VARIANT.STROKE &&
    `border: 1px solid ${props.theme.colors.neutral_6}`};
  border-radius: ${INPUT_RADIUS};
  border-color: ${({theme}) => theme.colors.neutral_6};
  ${({variant, theme}) => variant === INPUT_VARIANT.FILL && `background-color: ${theme.colors.textfield}`};
  ${({theme, error}) => error && `border-color: ${theme.colors.danger}`};
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled(TouchableOpacity)<{size?: INPUT_SIZE}>`
  margin-left: ${props => props.theme.space[2]};
`;


export const InputComposed = styled(TextInput).attrs<InputProps>(props => ({
  placeholderTextColor: props.error ? props.theme.colors.danger : props.theme.colors.gray_6,
}))<InputProps>`
  color: ${props => props.theme.colors.neutral_2};
  flex: 1;
  ${omit(TypographyConfig[TYPOGRAPHY_VARIANT.BODY], 'lineHeight')}
`;
