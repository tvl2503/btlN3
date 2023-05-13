import { TransitionPresets } from '@react-navigation/stack';
import BackScreen from '../../../screens/ListAddressScreen/ui/BackScreen';
import CheckoutScreen from '../../../screens/CheckoutScreen';
import { NAVIGATION } from '../../navigation';
import ListAddressScreen from '../../../screens/ListAddressScreen';
import VoucherScreen from '../../../screens/VoucherScreen';
import { Voucher } from '../../../models/voucher';
import CheckoutSuccessScreen from '../../../screens/CheckoutSuccessScreen';
import { Bill } from '../../../models/bill';
import BackHomeNavigator from '../../../screens/CheckoutSuccessScreen/ui/BackHomeNavigator';

export type CheckoutStackProps = {
  [NAVIGATION.CHECKOUT_SCREEN]: {
    voucher?: Voucher;
  };
  [NAVIGATION.LIST_ADDRESS]: undefined;
  [NAVIGATION.VOUCHER]: {
    voucher_id?: string;
  };
  [NAVIGATION.SUCCESS_CHECKOUT]: {
    bill?: Bill;
  };
};
export const CHECKOUT_STACK = [
  {
    name: NAVIGATION.CHECKOUT_SCREEN,
    component: CheckoutScreen,
    options: {
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props} />,
      headerTitle: 'Thông tin đơn hàng',
    },
  },
  {
    name: NAVIGATION.LIST_ADDRESS,
    component: ListAddressScreen,
    options: {
      headerShown: true,
      headerLeft: (props: any) => <BackScreen {...props} />,
      headerTitle: 'Chọn địa chỉ nhận hàng',
    },
  },
  {
    name: NAVIGATION.VOUCHER,
    component: VoucherScreen,
    options: {
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
  {
    name: NAVIGATION.SUCCESS_CHECKOUT,
    component: CheckoutSuccessScreen
  },
];
