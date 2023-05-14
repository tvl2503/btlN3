import { SceneMap } from "react-native-tab-view";
import { BILL_STATUS } from "../../models/bill";
import AllTransactionScreen from "../../screens/AllTransactionScreen";
import ButtonCancelOrder from "../../screens/TransactionDetailScreen/ui/ButtonCancelOrder";
import ButtonReceivedOrder from "../../screens/TransactionDetailScreen/ui/ButtonReceivedOrder";

export const ALL_TRANSACTION = 'all';

export const TAB_TRANSACTION = [
  {
    key: ALL_TRANSACTION,
    title: 'Tất cả'
  },
  {
    key: BILL_STATUS.SHIPPING,
    title: 'Đang giao'
  }
];

export const renderScene = SceneMap({
  [ALL_TRANSACTION]: AllTransactionScreen,
  [BILL_STATUS.SHIPPING]: AllTransactionScreen
})

export const MAP_STATUS_BILL = {
  [BILL_STATUS.CREATED]: 'Đã tạo',
  [BILL_STATUS.PROCESSING]: 'Đang xử lý',
  [BILL_STATUS.SHIPPING]: 'Đang giao',
  [BILL_STATUS.CANCEL]: 'Đã hủy',
  [BILL_STATUS.SUCCESS]: 'Đã giao',
}

export const RENDER_FOOTER_BY_STATUS = {
  [BILL_STATUS.CREATED]: [ButtonCancelOrder],
  [BILL_STATUS.PROCESSING]: [ButtonCancelOrder, ButtonReceivedOrder],
  [BILL_STATUS.SHIPPING]: [ButtonReceivedOrder],
  [BILL_STATUS.SUCCESS]: [],
  [BILL_STATUS.CANCEL]: [],
};
