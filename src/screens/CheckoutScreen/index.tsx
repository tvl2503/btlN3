import React, { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  AddressComposed,
  CardCustom,
  CheckoutContainer,
  PaymentMethodComposed,
  CardPaymnetComposed,
  CartItemComposed,
  ContainerList,
  Title,
  BoxTotal,
  ViewSize,
  RowEnd,
  Price,
  BoxVoucher,
  Icon,
  RowCenter,
  Badge,
  TextDiscount,
  ErrorMessage,
} from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { CartItem } from '../../models/cart';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import { getTotal } from '../../utils/cart';
import Button from '../../core/Button';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { BUTTON_SIZE } from '../../core/Button/index.types';
import Typography from '../../core/Typography';
import { toCurrency } from '../../utils/currency';
import { PaymentMethodProps } from './ui/CartItemElement/index.types';
import { IONICONS_NAME } from '../../constants/icons/ionicons';
import { TouchableOpacity } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { CheckoutStackProps } from '../../constants/stack/checkout';
import { NAVIGATION } from '../../constants/navigation';
import { Voucher } from '../../models/voucher';
import { CASH } from '../../constants/payment';
import { Address } from '../../models/address';
import { checkout } from '../../services/checkout';
import useCallApi from '../../hook/useCallApi';
import { cartActions } from '../../store/slices/cart';
import { BaseError, BaseResponse } from '../../services/shared/types';
import { Bill } from '../../models/bill';

type CheckoutParams = {
  voucher: {
    voucher: Voucher;
  };
};
const CheckoutScreen = () => {
  const items = useSelector<RootState, Array<CartItem>>(
    state => state.cart?.cart,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<CheckoutStackProps>>();
  const { params } = useRoute<RouteProp<CheckoutParams, 'voucher'>>();
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodProps>({
    type: CASH,
  });
  const voucher = params?.voucher;
  const { bottom } = useSafeAreaInsets();
  const values = useMemo(() => {
    const { total, quantity } = getTotal(items);
    let totalValue = total;
    if (voucher) {
      totalValue -= (totalValue * voucher.discount_value) / 100;
      totalValue = +totalValue.toFixed(2);
    }
    return {
      total: totalValue,
      quantity,
    };
  }, [items, voucher]);

  const onSubmit = (data: PaymentMethodProps) => {
    setPaymentMethod(data);
  };
  const onNavigate = () => {
    navigation.navigate(NAVIGATION.VOUCHER, {
      voucher_id: voucher?._id,
    });
  };

  const onChangeAddress = (data: Address) => {
    setAddress(data);
  };

  const onCheckout = () => {
    if (!address) {
      return;
    }
    setError(null);
    return checkout({
      address: address?._id,
      payment_method: paymentMethod.type,
      card: paymentMethod?.card,
      voucher: voucher?._id,
    });
  };

  const onCallbackSuccess = (data: BaseResponse<Bill>) => {
    dispatch(cartActions.removeCart());
    navigation.replace(NAVIGATION.SUCCESS_CHECKOUT, {
      bill: data?.data,
    });
  };

  const onCallbackError = (err: BaseError<string>) => {
    setError(err?.message || 'Có lỗi xảy ra, xin thử lại sau');
  };

  const { isLoading, send } = useCallApi({
    request: onCheckout,
    error: onCallbackError,
    success: onCallbackSuccess,
  });
  return (
    <ViewSize>
      <ScrollView>
        <CheckoutContainer>
          <CardCustom>
            <AddressComposed onGetAddress={onChangeAddress} />
          </CardCustom>
          <CardPaymnetComposed>
            <PaymentMethodComposed
              data={paymentMethod}
              onSubmitForm={onSubmit}
            />
          </CardPaymnetComposed>
        </CheckoutContainer>
        <ContainerList>
          <Title variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
            Danh sách sản phẩm
          </Title>
          {items?.map(item => (
            <CartItemComposed key={item?.product?._id} data={item} />
          ))}
        </ContainerList>
      </ScrollView>
      <BoxVoucher>
        <TouchableOpacity onPress={onNavigate}>
          <RowCenter>
            <Typography>Voucher</Typography>
            <RowCenter>
              {!voucher && <Icon name={IONICONS_NAME.CHEVRON_RIGHT} />}
              {voucher && (
                <Badge>
                  <TextDiscount variant={TYPOGRAPHY_VARIANT.CAPTION_12_MEDIUM}>
                    -{voucher?.discount_value}%
                  </TextDiscount>
                </Badge>
              )}
            </RowCenter>
          </RowCenter>
        </TouchableOpacity>
      </BoxVoucher>
      <BoxTotal style={{ paddingBottom: bottom }}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <RowEnd>
          <Typography>Tổng tiền</Typography>
          <Price variant={TYPOGRAPHY_VARIANT.HEADING_4}>
            {toCurrency(values?.total)}
          </Price>
        </RowEnd>
        <Button
          onPress={send}
          loading={isLoading}
          disabled={isLoading}
          size={BUTTON_SIZE.lg}
          fullWidth
          variant={BUTTON_VARIANT.secondary}>
          Đặt hàng
        </Button>
      </BoxTotal>
    </ViewSize>
  );
};

export default CheckoutScreen;
