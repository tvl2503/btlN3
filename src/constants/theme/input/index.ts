import { COLORS } from "../../../theme/colors";

export enum INPUT_SIZE {
  md = 'md',
  sm = 'sm',
  lg = 'lg',
}

export const INPUT_PADDING = {
  sm: '8px 12px',
  md: '12px 16px',
  lg: '16px 16px',
};

export enum INPUT_VARIANT {
  STROKE = 'stroke',
  FILL = 'fill',
  FILL_WHITE = 'fill-white'
}

export const INPUT_RADIUS = '4px';

export const ICON_POSITION = {
  sm: '8px',
  md: '12px',
  lg: '12px'
};

export const BACKGROUND_INPUT = {
  [INPUT_VARIANT.STROKE]: 'transparent',
  [INPUT_VARIANT.FILL]: COLORS.textfield,
  [INPUT_VARIANT.FILL_WHITE]: COLORS.white,
}