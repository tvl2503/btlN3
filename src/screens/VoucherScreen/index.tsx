import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import VoucherElement from '../../components/shared/VoucherElement';
import { NAVIGATION } from '../../constants/navigation';
import { CheckoutStackProps } from '../../constants/stack/checkout';
import SafeArea from '../../core/SafeArea';
import Spinner from '../../core/Spinner';
import useCallApi from '../../hook/useCallApi';
import { Voucher } from '../../models/voucher';
import { BasePaginationResponse } from '../../services/shared/types';
import { getVoucher } from '../../services/voucher';
import { LoadingContainer } from './index.style';

const VoucherScreen = () => {
  const navigation = useNavigation<NavigationProp<CheckoutStackProps>>();
  const [voucher, setVoucher] = useState<Array<Voucher>>([]);
  const route = useRoute<RouteProp<CheckoutStackProps, NAVIGATION.VOUCHER>>();
  const voucherId = route?.params?.voucher_id;
  const onFetch = () => {
    return getVoucher({
      page: -1,
      filter: [
        {
          key: 'all',
          operator: 'equal',
          value: true,
        },
        // {
        //   key: 'expire_time',
        //   operator: 'greater',
        //   value: Date.now()
        // }
      ],
    });
  };

  const onError = (error: string) => {
    console.log(error);
  };

  const onSuccess = (data: BasePaginationResponse<Array<Voucher>>) => {
    const payload = data?.data;
    if (payload) {
      setVoucher(payload);
    }
  };

  const { isLoading, send } = useCallApi({
    request: onFetch,
    error: onError,
    success: onSuccess,
  });

  useEffect(() => {
    send();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandle = (voucher?: Voucher) => {
    navigation.navigate(NAVIGATION.CHECKOUT_SCREEN, {
      voucher,
    });
  };

  const onRender: ListRenderItem<Voucher> = ({ item }) => {
    return <VoucherElement activeId={voucherId} onSelect={onHandle} data={item} />;
  };

  const onExtractor = (item: Voucher) => {
    return item?._id;
  };

  return (
    <SafeArea>
      <>
        {isLoading && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
        {!isLoading && (
          <FlatList
            data={voucher}
            keyExtractor={onExtractor}
            renderItem={onRender}
          />
        )}
      </>
    </SafeArea>
  );
};

export default VoucherScreen;
