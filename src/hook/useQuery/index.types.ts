import { AxiosRequestConfig } from "axios";
import { DependencyList } from "react";

export interface UseQueryParams {
  url: string;
  useCache?: boolean;
  timeCache?: number;
  config?: AxiosRequestConfig;
  deps?: DependencyList[];
}
