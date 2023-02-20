import { GestureResponderEvent, ViewProps } from 'react-native/types';
import { COLORS } from '../../theme/colors';

export enum CHECKBOX_SIZE {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export enum CHECKBOX_VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning'
}

export enum CHECKBOX_THEME {
  primary = COLORS.primary,
  secondary = COLORS.secondary,
  danger = COLORS.danger,
  warning = COLORS.warning
}

export interface CheckBoxProps extends ViewProps {
  size?: CHECKBOX_SIZE;
  active?: boolean;
  variant?: CHECKBOX_VARIANT;
  onCheck?: (event: GestureResponderEvent) => void;
};
