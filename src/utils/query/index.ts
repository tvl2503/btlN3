import { isEmpty, isObject } from "lodash";
import { BuildKey } from "../../types";

export const buildKey = (url: string, params?: BuildKey) => {
  if (!isObject(params) || isEmpty(params)) {
    return url;
  }

  const p = Object.entries(params).reduce((acc, item, index) => {
    const [key, value] = item;
    if (index === 0) {
      return `${acc}?${key}=${value}`;
    }
    return `acc&${key}=${value}`;
  }, '');

  return p;
};
