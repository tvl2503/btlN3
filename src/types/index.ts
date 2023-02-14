import { ElementType } from 'react';

export interface AliasComponent<T = any> {
  as?: ElementType<T>;
}
