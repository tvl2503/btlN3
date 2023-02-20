import { RefObject, useRef } from "react";

export type CallbackRef<T = any> = (refValue: T) => void;
const useCallbackRefs = <T extends any>(): [RefObject<T> | null, CallbackRef<T>] => {
  const ref = useRef<T>(null);

  const setRef = (refValue: T) => {
    // @ts-ignore
    ref.current = refValue;
  };

  return [ref, setRef];
};

export default useCallbackRefs;
