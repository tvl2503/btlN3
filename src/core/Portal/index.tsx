import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import uuid from 'react-native-uuid';
import { usePortalProvider } from './PortalProvider';

const Portal: FC<PropsWithChildren> = props => {
  const { children } = props;
  const keyChildren = useRef(uuid.v4() as string);
  const pProps = usePortalProvider();

  const checkProvider = useCallback(() => {
    if (!pProps) {
      throw new Error('Please register portal with PortalProvider');
    }
  }, [pProps]);

  const { mounted, unmount, isExisted, update } = pProps;

  const render = useCallback(() => {
    const key = keyChildren.current;
    checkProvider();
    if (isExisted(key)) {
      update(key, children);
    } else {
      mounted(key, children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useEffect(() => {
    render();
  }, [render]);

  useEffect(() => {
    const key = keyChildren.current;
    return () => {
      unmount(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Portal;
