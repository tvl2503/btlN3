import { useAction } from "../../helper/ActionProvider"

const useDispatchAction = () => {
  return useAction().dispatch;
};

export default useDispatchAction;
