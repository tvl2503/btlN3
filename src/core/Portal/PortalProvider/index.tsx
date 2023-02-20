import React, {
  createContext,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useContext,
} from 'react';
import usePortal from '../usePortal';

export interface PortalContextProps {
  mounted: (key: string, children: ReactNode) => void;
  unmount: (key?: string) => void;
  isExisted: (key: string) => boolean;
  update: (key: string, children: ReactNode) => void;
}

const PortalContext = createContext<PortalContextProps>({
  mounted: (_: string) => {},
  unmount: (_?: string) => {},
  isExisted: (_: string) => false,
  update: (_: string, __: ReactNode) => {},
});

export interface PortalProviderProps extends PropsWithChildren {}

export const usePortalProvider = () => useContext(PortalContext);

const PortalProvider: FC<PortalProviderProps> = props => {
  const { children } = props;
  const { childrens, mounted, unmount, isExisted, update } = usePortal();
  return (
    <PortalContext.Provider
      value={{
        mounted,
        unmount,
        isExisted,
        update
      }}>
      {childrens.map((item, index) => (
        <Fragment key={`${item?.key}-${index}`}>{item.children}</Fragment>
      ))}
      {children}
    </PortalContext.Provider>
  );
};

export default PortalProvider;
