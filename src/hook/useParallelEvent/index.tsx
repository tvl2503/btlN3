import { isEmpty } from "lodash";
import { useEffect } from "react";

interface UseParallelEventProps {
  [key: string]: any;
}

interface TriggerEventProps {
  [eventName: string]: (...params: Array<any>) => any;
}

const useParallelEvent = (props: UseParallelEventProps, events: TriggerEventProps) => {
  useEffect(() => {
    if (isEmpty(events)) {
      return;
    }
    Object.entries(events).forEach(([eventName, func]) => {
      if (eventName in props) {
        
      }
    })
  }, [events, props]);
}

export default useParallelEvent;
