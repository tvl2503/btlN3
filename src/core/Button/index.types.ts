import { TouchableOpacityProps } from 'react-native/types';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { AliasComponent } from '../../types';

export enum BUTTON_SIZE {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface ButtonProps extends TouchableOpacityProps, AliasComponent {
  size?: BUTTON_SIZE;
  variant?: BUTTON_VARIANT;
  fullWidth?: boolean;
  color?: BUTTON_VARIANT;
}
