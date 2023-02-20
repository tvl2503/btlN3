import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CHECKBOX_RADIUS, CHECKBOX_SIZE as CHECKBOX_SIZE_CONFIG, CHECKBOX_SIZE_ICON } from '../../constants/theme/checkbox';
import Icons from '../Icons';
import { CheckBoxProps, CHECKBOX_SIZE, CHECKBOX_THEME, CHECKBOX_VARIANT } from './index.types';

export const CheckBoxComposedComponent = styled(TouchableOpacity)<CheckBoxProps>`
  width: ${props => CHECKBOX_SIZE_CONFIG[props.size || CHECKBOX_SIZE.sm]};
  height: ${props => CHECKBOX_SIZE_CONFIG[props.size || CHECKBOX_SIZE.sm]};
  border-radius: ${CHECKBOX_RADIUS};
  border: 1px solid ${props => props.theme.colors.neutral_6};
  ${({active, variant}) => active && `
  background: ${CHECKBOX_THEME[variant || CHECKBOX_VARIANT.PRIMARY]};
  border-color: ${CHECKBOX_THEME[variant || CHECKBOX_VARIANT.PRIMARY]};
  `}
  justify-content: center;
  align-items: center;
`;

export const CheckboxIcon = styled(Icons.Ionicons).attrs<CheckBoxProps>(({size, theme}) => ({
  size: CHECKBOX_SIZE_ICON[size || CHECKBOX_SIZE.md],
  color: theme.colors.white,
}))<CheckBoxProps>``;

