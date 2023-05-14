import { AxiosRequestConfig } from "axios";
export interface UseQueryParams {
  url: string;
  useCache?: boolean;
  timeCache?: number;
  config?: AxiosRequestConfig;
  deps?: any[];
}
