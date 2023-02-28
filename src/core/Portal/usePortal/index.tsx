import { ReactNode, useCallback, useState } from 'react';

interface PortalPayload {
  key: string;
  children: ReactNode;
}
const usePortal = () => {
  const [childrens, setChildrens] = useState<Array<PortalPayload>>([]);

  const mounted = useCallback((key: string, children: ReactNode) => {
    setChildrens(prevState => [...prevState, { key, children }]);
  }, []);

  const unmount = (key?: string) => {
    if (!key) {
      return;
    }
    const filterChildren = childrens.filter(item => item.key !== key);
    setChildrens(filterChildren);
  };

  const isExisted = (key: string) => {
    return childrens.some(item => item.key === key);
  };

  const update = (key: string, children: ReactNode) => {
    setChildrens(prevState => {
      return prevState.map(item => {
        if (item.key === key) {
          return {
            key,
            children,
          };
        }
        return item;
      });
    });
  };

  return {
    childrens,
    mounted,
    unmount,
    isExisted,
    update,
  };
};

export default usePortal;
