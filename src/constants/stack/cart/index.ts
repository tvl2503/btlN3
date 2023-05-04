import CartScreen from "../../../screens/CartScreen";
import { TransitionPresets } from "@react-navigation/stack";
import CreateAddressScreen from "../../../screens/CreateAddressScreen";
import { NAVIGATION } from "../../navigation";
import ListAddressScreen from "../../../screens/ListAddressScreen";
import BackScreen from "../../../screens/ListAddressScreen/ui/BackScreen";

export const CART_STACK = [
  {
    component: CartScreen,
    name: NAVIGATION.CART_HOME,
  },
  {
    component: CreateAddressScreen,
    name: NAVIGATION.CREATE_ADDRESS,
    options: {
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
  {
    component: ListAddressScreen,
    name: NAVIGATION.LIST_ADDRESS,
    options: {
      headerShown: true,
      headerTitle: 'Chọn địa chỉ nhận hàng',
      headerLeft: BackScreen,
    }
  }
];
