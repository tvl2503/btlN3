import React, { createContext, ElementType, FC, PropsWithChildren, useContext } from 'react';

interface ModalContextProps {
  onHide?: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  onHide: () => {},
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const wrapperModalContext = (Component: ElementType) => {
  const C = React.forwardRef((props, ref) => {
    const ctx = useModal();
    return <Component {...props} modal={ctx} ref={ref}/>;
  });

  C.displayName = 'C';
  return C;
};

export interface ModalProviderProps
  extends PropsWithChildren,
    ModalContextProps {}

const ModalProvider: FC<ModalProviderProps> = props => {
  const { children, onHide } = props;

  return (
    <ModalContext.Provider
      value={{
        onHide,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
