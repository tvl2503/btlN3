import React, { FC, useMemo } from 'react';
import { AliasComponent } from '../../../../types';
import {
  CardShop,
  RowCenter,
  Total,
  TotalComposed,
  TotalValue,
  TransactionElementComposed,
  TransactionItemContainer,
} from './index.style';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Icons from '../../../../core/Icons';
import { FEATHER_ICONS } from '../../../../constants/icons/feather';
import { TouchableOpacity } from 'react-native';
import { CartItem } from '../../../../models/cart';
import { isEmpty } from 'lodash';
import { Shop } from '../../../../models/shop';
import { getTotal } from '../../../../utils/cart';
import { toCurrency } from '../../../../utils/currency';

interface TransactionItemProps extends AliasComponent {
  data?: Array<CartItem & { _id: string }>;
}
const TransactionItem: FC<TransactionItemProps> = props => {
  const { data } = props;
  const shop = useMemo(() => {
    if (isEmpty(data)) {
      return null;
    }
    return data?.[0]?.product?.shop as Shop;
  }, [data]);

  const values = useMemo(() => {
    return getTotal(data as any);
  }, [data]);

  return (
    <TransactionItemContainer>
      <TouchableOpacity>
        <CardShop>
          <RowCenter>
            <Typography
              numberOfLines={1}
              variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
              {shop?.name}
            </Typography>
            <Icons.Feather name={FEATHER_ICONS.CHEVRON_RIGHT} size={20} />
          </RowCenter>
        </CardShop>
      </TouchableOpacity>
      {data?.map(item => (
        <TransactionElementComposed key={item?._id} items={item} />
      ))}
      <TotalComposed>
        <Total variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
          Tổng cộng: <TotalValue>{toCurrency(values?.total)}</TotalValue>
        </Total>
      </TotalComposed>
    </TransactionItemContainer>
  );
};

export default TransactionItem;
