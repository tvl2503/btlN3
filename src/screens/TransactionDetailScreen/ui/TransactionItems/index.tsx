import React, { FC, useMemo } from 'react';
import { groupBy, isEmpty } from 'lodash';
import { AliasComponent } from '../../../../types';
import { CartItem } from '../../../../models/cart';
import { Shop } from '../../../../models/shop';
import TransactionItem from '../TransactionItem';
import { ContainerTransactionItems } from './index.style';

interface TransactionItemsProps extends AliasComponent {
  items?: Array<CartItem & { _id: string }>;
}
const TransactionItems: FC<TransactionItemsProps> = props => {
  const { items, ...rest } = props;
  const groupItems = useMemo(() => {
    if (isEmpty(items)) {
      return {};
    }
    const group = groupBy(items, item => (item?.product?.shop as Shop)?._id);
    return group;
  }, [items]);

  return (
    <ContainerTransactionItems {...rest}>
      {Object.entries(groupItems).map(([key, value]) => {
        return <TransactionItem key={key} data={value}/>
      })}
    </ContainerTransactionItems>
  );
};

export default TransactionItems;
