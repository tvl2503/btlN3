import { COLORS } from "../../../theme/colors";

export enum BUTTON_VARIANT {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  warning = 'warning',
  icon = 'icon',
  text = 'text'
}
export enum BUTTON_THEME {
  primary = COLORS.primary,
  secondary = COLORS.secondary,
  danger = COLORS.danger,
  warning = COLORS.warning,
  icon = COLORS.transparent,
  text = COLORS.transparent
}

export const BUTTON_ICON_SIZE = {
  lg: '44px',
  md: '36px',
  sm: '32px',
};

export const BUTTON_SIZE_PADDING = {
  sm: '6px 12px',
  md: '8px 12px',
  lg: '12px 16px',
};

export const BUTTON_RADIUS = '4px';
