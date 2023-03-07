import { ViewProps } from 'react-native/types';
export interface ContainerProps extends ViewProps {
  direction?: string;
  justifyContent?: string;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
}
