import { TextProps } from 'react-native/types';
import { AliasComponent } from '../../types';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';

export interface TypographyProps extends AliasComponent, TextProps {
  variant?: TYPOGRAPHY_VARIANT
}
