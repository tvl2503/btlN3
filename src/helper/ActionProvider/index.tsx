import React, {
  PureComponent,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';
import ActionStore from '../../utils/store';
import { ActionStoreProps, Listener } from '../../utils/store/store.types';

const ActionContext = createContext<ActionStoreProps>({
  dispatch: (_: string, __: any) => {},
  subscribe: (_: string, __: Listener) => ({ unsubscribe: () => {} }),
});

export const useAction = () => useContext(ActionContext);

interface ActionProviderProps extends PropsWithChildren {}

class ActionProvider extends PureComponent<ActionProviderProps> {
  private actionStore: ActionStore;
  constructor(props: ActionProviderProps) {
    super(props);
    this.actionStore = new ActionStore();
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { dispatch, subscribe } = this.actionStore;
    return (
      <ActionContext.Provider
        value={{
          dispatch,
          subscribe,
        }}>
        {children}
      </ActionContext.Provider>
    );
  }
}

export default ActionProvider;
