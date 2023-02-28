import React, { createContext, PureComponent, useContext } from 'react';
import Storage from '../../utils/storage';
import { KEY_STORAGE, TIME_CACHE } from '../../constants/cache';
import {
  CacheValue,
  QueryContextProps,
  QueryProviderProps,
  SetQueryParams,
} from './index.types';

const QueryContext = createContext<QueryContextProps>({
  get: (_: string) => null as any,
  remove: (_: string) => {},
  set: (_: SetQueryParams) => {},
});

export const useQueryContext = () => {
  return useContext(QueryContext);
};

class QueryProvider
  extends PureComponent<QueryProviderProps>
  implements QueryContextProps
{
  private values: CacheValue = {};
  constructor(props: QueryProviderProps) {
    super(props);
    this.values = {};
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.remove = this.remove.bind(this);
    this.getAsyncStorage = this.getAsyncStorage.bind(this);
    this.getAsyncStorage();
  }

  getAsyncStorage() {
    Storage.get(KEY_STORAGE).then(payload => {
      this.values = payload || {};
    });
  };

  get<T = any>(key: string): T | null {
    if (!(key in this.values)) {
      return null;
    }
    const value = this.values[key];
    const expireTime = value?.expireIn;
    if (expireTime && Date.now() >= expireTime) {
      return null;
    }
    return this.values[key]?.data as T;
  }

  set(params: SetQueryParams) {
    const { key, value, timeCache = TIME_CACHE } = params;
    const expireTime = Date.now() + timeCache;
    const obj = Object.assign({}, this.values, {
      [key]: {
        data: value,
        expireIn: expireTime,
      },
    });
    this.values = obj;
    Storage.setItem(KEY_STORAGE, obj).then(_ => {}).catch(console.log);
  }

  remove(key: string) {
    delete this.values[key];
  }

  render(): React.ReactNode {
    const { children } = this.props;
    return (
      <QueryContext.Provider
        value={{
          get: this.get,
          set: this.set,
          remove: this.remove
        }}>
        {children}
      </QueryContext.Provider>
    );
  }
}

export default QueryProvider;
