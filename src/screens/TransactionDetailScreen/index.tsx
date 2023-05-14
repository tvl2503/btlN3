import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Bill } from '../../models/bill';
import AddressTransaction from './ui/AddressTransaction';
import TransactionItems from './ui/TransactionItems';
import TransactionPaymentMethod from './ui/TransactionPaymentMethod';
import InfoBill from './ui/InfoBill';
import { ScrollViewComposed, ViewBase } from './index.style';
import DetailTransactionActions from './ui/DetailTransactionActions';

type RouteParams = {
  bill: {
    detail: Bill;
  };
};
const TransactionDetailScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'bill'>>();
  const bill = route?.params?.detail;
  const items = bill?.items;
  const address = bill?.address;
  const payment_method = bill?.payment_method;
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
