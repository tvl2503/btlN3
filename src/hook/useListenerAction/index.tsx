import { useState, useEffect, useCallback } from 'react';
import { Action } from '../../utils/store/store.types';
import { ACTION_TYPE } from '../../constants/actions';
import { useAction } from '../../helper/ActionProvider';

interface UseListenerActionProps {
  key: ACTION_TYPE;
}
const useListenerAction = <T extends any>(props: UseListenerActionProps) => {
  const { key } = props;
  const [data, setData] = useState<Action<T> | null>(null);
  const { subscribe } = useAction();

  const listenerEvent = useCallback((value: Action<T>) => {
    setData(value);
  }, []);
  useEffect(() => {
    const { unsubscribe } = subscribe(key as unknown as string, listenerEvent);

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listenerEvent]);

  return {
    data,
  };
};

export default useListenerAction;
