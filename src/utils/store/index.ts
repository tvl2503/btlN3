import { Listeners, Listener, Action, ActionStoreProps } from './store.types';
import uuid from 'react-native-uuid';
import { isEmpty } from 'lodash';

class ActionStore implements ActionStoreProps {
  private listeners: Listeners = {};
  private isDispatching = false;

  constructor() {
    this.subscribe = this.subscribe.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
  }

  subscribe(key: string, func: Listener) {
    if (!(key in this.listeners)) {
      this.listeners[key] = [func];
    } else {
      this.listeners[key].push(func);
    }

    const unsubscribe = () => {
      const index = this.listeners[key].indexOf(func);
      this.listeners[key].splice(index, 1);
    };

    return { unsubscribe };
  }

  dispatch<T = any>(key: string, value?: T) {
    try {
      if (this.isDispatching) {
        throw new Error('No duplicate dispatch action');
      }
      this.isDispatching = true;

      if (!(key in this.listeners)) {
        this.isDispatching = false;
        return;
      }
      const payload: Action<T> = {
        data: value,
        type: key,
        key: uuid.v4() as string,
      };
      const listenersMatchKey = this.listeners[key];
      if (isEmpty(listenersMatchKey)) {
        this.isDispatching = false;
        return;
      }
      listenersMatchKey.forEach(func => func(payload));
    } catch (err) {
      console.log(err);
    } finally {
      this.isDispatching = false;
    }
  }

  getState() {
    return this;
  }
}

export default ActionStore;
