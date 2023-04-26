import { ReactNode } from 'react';
import { TextStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { GestureResponderEvent, TextInputProps } from 'react-native/types';
import { INPUT_SIZE, INPUT_VARIANT } from '../../constants/theme/input';

export type Rule = (value: string) => Promise<string> | boolean;
export interface InputProps extends TextInputProps {
  size?: INPUT_SIZE;
  variant?: INPUT_VARIANT;
  error?: boolean;
  icon?: ReactNode;
  onPressIcon?: (event: GestureResponderEvent) => any;
  errorMessage?: string;
  styleInput?: StyleProp<TextStyle>;
}
