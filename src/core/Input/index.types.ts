import { TextInputProps } from 'react-native/types';
import { INPUT_SIZE, INPUT_VARIANT } from '../../constants/theme/input';

export interface InputProps extends TextInputProps {
  size?: INPUT_SIZE;
  variant?: INPUT_VARIANT;
  isActive?: boolean;
  error?: boolean;
}
