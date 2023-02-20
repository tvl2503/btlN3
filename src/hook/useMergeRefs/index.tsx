import { isFunction } from 'lodash';
import { ForwardedRef } from 'react';

export type UseMergeRefCallback<T = any> = (ref: T) => any;

const useMergeRefs = <T extends any>(
  callback: UseMergeRefCallback<T>,
  ref: ForwardedRef<T>,
) => {
  const mergeRefs = (refValue: T) => {
    if (!isFunction(callback)) {
      throw new Error(
        'Callback must be a function to callback ref, please using from useCallbackRefs, your value now is ' +
          typeof callback,
      );
    }
    // @ts-ignore
    ref.current = refValue;
    callback(refValue);
  };

  return mergeRefs;
};

export default useMergeRefs;
