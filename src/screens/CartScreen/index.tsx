import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION } from '../../constants/navigation';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { BUTTON_SIZE } from '../../core/Button/index.types';
import { CartItem } from '../../models/cart';
import { RootState } from '../../store/types';
import { getTotal } from '../../utils/cart';
import { toCurrency } from '../../utils/currency';
import {
  AddressComposed,
  ButtonContainer,
  HeaderWrapper,
  ListCartItemComposed,
  RowCenter,
  WhiteTitle,
  WrapperButton,
  WrapperContainer,
} from './index.style';
import CartHeaderBackground from './ui/CartHeaderBackground';
import { isEmpty } from 'lodash';

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector<RootState, Array<CartItem>>(
    state => state.cart.cart,
  );
  const renderHeader = () => {
    return (
      <HeaderWrapper>
        <CartHeaderBackground />
        <AddressComposed />
      </HeaderWrapper>
    );
  };
  const values = useMemo(() => {
    return getTotal(cart);
  }, [cart]);

  const onNavigate = () => {
    navigation.navigate(NAVIGATION.CHECKOUT_HOME);
  };

  return (
    <>
      <WrapperContainer>
        <ListCartItemComposed ListHeaderComponent={renderHeader} />
        {!isEmpty(cart) && (
          <WrapperButton>
            <ButtonContainer
              onPress={onNavigate}
              variant={BUTTON_VARIANT.secondary}
              size={BUTTON_SIZE.lg}
              fullWidth>
              <RowCenter>
                <WhiteTitle>Tổng: {toCurrency(values?.total)}</WhiteTitle>
                <WhiteTitle>Đặt hàng ({values?.quantity})</WhiteTitle>
              </RowCenter>
            </ButtonContainer>
          </WrapperButton>
        )}
      </WrapperContainer>
    </>
  );
};
export default CartScreen;
