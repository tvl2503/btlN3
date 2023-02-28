export interface UseCallApiParams<T = any> {
  request: (...params: Array<any>) => Promise<T>;
  success?: (data: T) => any;
  error?: (err: any) => any;
}
