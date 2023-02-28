import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryContext } from '../../helper/QueryProvider';
import { UseQueryParams } from './index.types';
import { request } from '../../utils/axios';
import { isEmpty } from 'lodash';
import { AxiosError } from 'axios';
import { buildKey } from '../../utils/query';

const useQuery = <T extends any>(params: UseQueryParams) => {
  const { get, set } = useQueryContext();
  const { url, useCache = true, timeCache, config = {}, deps = [] } = params;

  const keyCache = useMemo(() => {
    return buildKey(url, config?.params);
  }, [url, config]);
  const [data, setData] = useState<T | null>(useCache ? (get(keyCache) || null) : null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callQuery = useCallback(async () => {
    if (useCache) {
      const payload = get(keyCache);
      if (payload) {
        setData(payload);
        return;
      }
    }
    try {
      setIsLoading(true);
      const response = await request({
        baseURL: url,
        method: 'GET',
        ...config,
      });
      const payload = response?.data;
      if (!isEmpty(payload)) {
        setData(payload);
        if (useCache) {
          set({
            key: keyCache,
            value: payload,
            timeCache,
          });
        }
      }
    } catch (err: unknown) {
      const errorPayload = err as unknown as AxiosError;
      setError(errorPayload?.message);
    } finally {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, config, useCache]);

  useEffect(() => {
    callQuery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callQuery, ...deps]);

  return {
    data,
    isLoading,
    error,
    fetch: callQuery,
  };
};

export default useQuery;
