import { ElementType } from 'react';

export interface AliasComponent<T = any> {
  as?: ElementType<T>;
}

export interface BuildKey {
  [key: string]: any;
};
