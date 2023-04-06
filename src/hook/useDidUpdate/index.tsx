import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useDidUpdate = (cb: EffectCallback, deps: DependencyList = []) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      cb();
    }
    mounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export default useDidUpdate;
