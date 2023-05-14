import { TransitionPresets } from "@react-navigation/stack";
import BackScreen from "../../../screens/ListAddressScreen/ui/BackScreen";
import ProfileScreen from "../../../screens/ProfileScreen";
import TransactionDetailScreen from "../../../screens/TransactionDetailScreen";
import TransactionScreen from "../../../screens/TransactionScreen";
import { NAVIGATION } from "../../navigation";

export const PROFILE_STACK = [
  {
    name: NAVIGATION.PROFILE_HOME,
    component: ProfileScreen,
  },
  {
    name: NAVIGATION.TRANSACTION_HISTORY,
    component: TransactionScreen,
    options: {
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props}/>,
      headerTitle: 'Lịch sử đặt hàng',
    },
  },
  {
    name: NAVIGATION.TRANSACTION_DETAIL,
    component: TransactionDetailScreen,
    options: {
      ...TransitionPresets.ModalPresentationIOS,      
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props}/>,
      headerTitle: 'Thông tin đơn hàng'
    }
  }
];
