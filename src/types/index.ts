import { ElementType } from 'react';
import { ViewProps } from 'react-native';

export interface AliasComponent<T = any> extends ViewProps {
  as?: ElementType<T>;
}

export interface BuildKey {
  [key: string]: any;
};
