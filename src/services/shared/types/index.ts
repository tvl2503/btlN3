import { BuildKey } from '../../../types';
export interface BaseResponse<T = any> extends BuildKey {
  code: number;
  message: string;
  data?: T;
};

export interface BaseError<T = string> extends BuildKey {
  code?: number;
  message?: T;
};
