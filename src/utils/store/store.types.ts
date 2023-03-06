export interface Action<T = any> {
  data?: T;
  type: string;
  key: string;
}

export type Listener = (args: Action) => any;

export type Unsubscribe = () => void;

export interface Listeners {
  [key: string]: Array<Listener>;
}

export interface ActionStoreProps {
  subscribe: (key: string, func: Listener) => { unsubscribe: Unsubscribe };
  dispatch: <T = any>(key: string, value: T) => any;
}
