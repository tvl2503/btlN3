import { BuildKey } from '../../../types';
export interface BaseResponse<T = any> extends BuildKey {
  code: number;
  message: string;
  data?: T;
  params?: Array<any>;
};

export interface BaseError<T = string> extends BuildKey {
  code?: number;
  message?: T;
};

export interface BasePaginationResponse<T = any> extends BaseResponse<T> {
  load_more_able: boolean;
  page: number;
  total: number;
}

export interface Filter {
  operator: string;
  key: string;
  value: any;
}

export interface Sort {
  key: string;
  operator: 1 | -1;
}

export interface BasePaginationRequest {
  page?: number;
  page_size?: number;
  filter?: Array<Filter>;
  sort?: Sort
};
