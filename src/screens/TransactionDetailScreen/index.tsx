import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BILL_STATUS, Bill } from '../../models/bill';
import AddressTransaction from './ui/AddressTransaction';
import TransactionItems from './ui/TransactionItems';
import TransactionPaymentMethod from './ui/TransactionPaymentMethod';
import InfoBill from './ui/InfoBill';
import { ScrollViewComposed, ViewBase } from './index.style';
import DetailTransactionActions from './ui/DetailTransactionActions';
import useListenerAction from '../../hook/useListenerAction';
import { ACTION_TYPE } from '../../constants/actions';

type RouteParams = {
  bill: {
    detail: Bill;
  };
};
const TransactionDetailScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'bill'>>();
  const { data } = useListenerAction<{billId?: string}>({
    key: ACTION_TYPE.CANCEL_BILL
  });
  const [bill, setBill] = useState(route?.params?.detail)
  const items = bill?.items;
  const address = bill?.address;
  const payment_method = bill?.payment_method;

  useEffect(() => {
    if (!data || !data?.data?.billId) {
      return;
    }
    setBill(prevState => {
      return {
        ...prevState,
        status: BILL_STATUS.CANCEL
      }
    })
  }, [data]);
  return (
    <ViewBase>
      <ScrollViewComposed>
        <AddressTransaction address={address} />
        <TransactionItems style={styles.size} items={items} />
        <TransactionPaymentMethod
          style={styles.size}
          payment_method={payment_method}
        />
        <InfoBill style={styles.size} data={bill} />
      </ScrollViewComposed>
      <DetailTransactionActions data={bill}/>
    </ViewBase>
  );
};

const styles = StyleSheet.create({
  size: {
    marginTop: 16,
  },
});

export default TransactionDetailScreen;
