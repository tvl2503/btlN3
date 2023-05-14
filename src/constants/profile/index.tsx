import Icons from '../../core/Icons';
import { BILL_STATUS } from '../../models/bill';
import { FEATHER_ICONS } from '../icons/feather';
import { MATERIAL_ICON } from '../icons/material';
import { MATERIAL_COMMUNITY_ICON_NAME } from '../icons/material-community';
import { NAVIGATION } from '../navigation';

export const ACTION_PROFILE = [
  {
    title: 'Lịch sử đặt',
    icon: <Icons.Feather name={FEATHER_ICONS.PACKCAGE} />,
    navigation: NAVIGATION.TRANSACTION_HISTORY,
    params: {
      status: 'all'
    }
  },
  {
    title: 'Đang giao',
    icon: (
      <Icons.MaterialCommunityIcons
        name={MATERIAL_COMMUNITY_ICON_NAME.TRUCK_FAST_OUTLINE}
      />
    ),
    params: {
      status: BILL_STATUS.CREATED,
    }
  },
  {
    title: 'Đánh giá',
    icon: <Icons.Material name={MATERIAL_ICON.STAR} />,
    navigation: NAVIGATION.RATING_SCREEN
  },
];
