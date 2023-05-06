import { TransitionPresets } from '@react-navigation/stack';
import BackScreen from '../../../screens/ListAddressScreen/ui/BackScreen';
import CheckoutScreen from '../../../screens/CheckoutScreen';
import { NAVIGATION } from '../../navigation';
import ListAddressScreen from '../../../screens/ListAddressScreen';

export const CHECKOUT_STACK = [
  {
    name: NAVIGATION.CHECKOUT_SCREEN,
    component: CheckoutScreen,
    options: {
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props}/>,
      headerTitle: 'Thông tin đơn hàng',
    }
  },
  {
    name: NAVIGATION.LIST_ADDRESS,
    component: ListAddressScreen,
    options: {
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props}/>,
      headerTitle: 'Chọn địa chỉ nhận hàng',
    },
  }
];
