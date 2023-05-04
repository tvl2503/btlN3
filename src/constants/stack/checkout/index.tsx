import BackScreen from '../../../screens/ListAddressScreen/ui/BackScreen';
import CheckoutScreen from '../../../screens/CheckoutScreen';
import { NAVIGATION } from '../../navigation';

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
];
