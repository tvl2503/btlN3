import { isArray, isFunction } from 'lodash';
import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native/types';

interface TreeContextProps {
  onCheck?: (key: string, event: GestureResponderEvent) => void;
  keys?: Array<string> | null | string;
}

const TreeContext = createContext<TreeContextProps>({
  onCheck: (_: string, __: GestureResponderEvent) => {},
});

export const useTree = () => useContext(TreeContext);

type OnCheckParams = Array<string> | string;

export interface TreeProviderProps extends PropsWithChildren {
  multiple?: boolean;
  onCheck?: (key: OnCheckParams, event: GestureResponderEvent) => void;
  value?: Array<string> | string;
};

const TreeProvider: FC<TreeProviderProps> = props => {
  const { children, onCheck, multiple, value, ...rest } = props;
  const [selected, setSelected] = useState<Array<string> | null | string>(multiple ? [] : null);

  useEffect(() => {
    if (value && value !== selected) {
      setSelected(value);
    }
  }, [value, selected]);
  const onCheckKey = (eventKey: string, event: GestureResponderEvent) => {
    let payload: Array<string> | string | null = null;
    if (multiple && isArray(selected)) {
      if (selected?.includes(eventKey)) {
        payload = selected.filter(item => item !== eventKey);
      } else {
        payload = [...selected, eventKey];
      }
    } else {
      payload = eventKey;
    }
    setSelected(payload);
    if (isFunction(onCheck)) {
      onCheck(payload, event);
    }
  };
  return (
    <TreeContext.Provider
      value={{
        onCheck: onCheckKey,
        keys: selected
      }}
      {...rest}>
      {children}
    </TreeContext.Provider>
  );
};

TreeProvider.defaultProps = {
  multiple: false,
  value: undefined
}

export default TreeProvider;
