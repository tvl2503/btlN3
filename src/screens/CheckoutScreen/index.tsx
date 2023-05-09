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
} from './index.style';
import { useSelector } from 'react-redux';
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
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CheckoutStackProps } from '../../constants/stack/checkout';
import { NAVIGATION } from '../../constants/navigation';

const CheckoutScreen = () => {
  const items = useSelector<RootState, Array<CartItem>>(
    state => state.cart?.cart,
  );
  const navigation = useNavigation<NavigationProp<CheckoutStackProps>>();
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethodProps | undefined
  >();
  const { bottom } = useSafeAreaInsets();
  const values = useMemo(() => {
    return getTotal(items);
  }, [items]);

  const onSubmit = (data: PaymentMethodProps) => {
    setPaymentMethod(data);
  };
  const onNavigate = () => {
    navigation.navigate(NAVIGATION.VOUCHER);
  };
  return (
    <ViewSize>
      <ScrollView>
        <CheckoutContainer>
          <CardCustom>
            <AddressComposed />
          </CardCustom>
          <CardPaymnetComposed>
            <PaymentMethodComposed
              data={paymentMethod as any}
              onSubmitForm={onSubmit as any}
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
            <Icon name={IONICONS_NAME.CHEVRON_RIGHT} />
          </RowCenter>
        </TouchableOpacity>
      </BoxVoucher>
      <BoxTotal style={{ paddingBottom: bottom }}>
        <RowEnd>
          <Typography>Tổng tiền</Typography>
          <Price variant={TYPOGRAPHY_VARIANT.HEADING_4}>
            {toCurrency(values?.total)}
          </Price>
        </RowEnd>
        <Button
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
