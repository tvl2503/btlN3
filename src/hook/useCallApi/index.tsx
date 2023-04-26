import { AxiosError, AxiosResponse } from 'axios';
import { isFunction } from 'lodash';
import { useState } from 'react';
import { UseCallApiParams } from './index.types';

const useCallApi = <T = any>(props: UseCallApiParams<T>) => {
  const { error, request, success } = props;
  const [isLoading, setIsLoading] = useState(false);
  const send = async (...params: Array<any>) => {
    try {
      setIsLoading(true);
      const response = (await request(...params)) as AxiosResponse;
      const data = response?.data || response;
      if (isFunction(success)) {
        success(Object.assign(data, {
          params,
        }));
      }
    } catch (err) {
      const e = err as unknown as AxiosError;
      if (isFunction(error)) {
        error(e?.response?.data || e?.response || e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    send,
    isLoading,
  };
};

export default useCallApi;
