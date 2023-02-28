import { PropsWithChildren } from 'react';

export interface SetQueryParams {
  key: string;
  value: any;
  timeCache?: number;
}
export interface QueryContextProps {
  set: (params: SetQueryParams) => void;
  remove: (key: string) => void;
  get: <T = any>(key: string) => T | null;
}

export interface QueryProviderProps extends PropsWithChildren {}

export interface CacheValue {
  [key: string]: {
    data: any;
    expireIn: number;
  };
}
