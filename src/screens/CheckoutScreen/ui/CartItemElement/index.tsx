import React, { FC } from 'react';
import { AliasComponent } from '../../../../types';
import {
  CartImage,
  CartItemContainer,
  CartItemContent,
  DiscountPrice,
  Price,
  QuantityWrapper,
  TitleWrapper,
} from './index.style';
import Row from '../../../../core/Row';
import { CartItem } from '../../../../models/cart';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { toCurrency } from '../../../../utils/currency';
import { StyleSheet } from 'react-native';

interface CartItemElementProps extends AliasComponent {
  data?: CartItem;
}

const CartItemElement: FC<CartItemElementProps> = props => {
  const { data, ...rest } = props;
  const src = data?.product?.media_urls?.[0]?.src;
  const title = data?.product?.name;
  const price =
    data?.product?.price?.discount_price ||
    data?.product?.price?.original_price;
  const discount = data?.product?.price?.discount_price
  const original = data?.product?.price?.original_price
  return (
    <CartItemContainer {...rest}>
      <Row style={styles.centerContainer}>
        <CartImage source={{ uri: src }} />
        <CartItemContent>
          <TitleWrapper
            numberOfLines={1}
            variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
            {title}
          </TitleWrapper>
          <Row style={styles.center}>
            {discount && <DiscountPrice>{toCurrency(original)}</DiscountPrice>}
            <Price>{toCurrency(price || 0)}</Price>
          </Row>
        </CartItemContent>
        <QuantityWrapper>
          {data?.quantity}
        </QuantityWrapper>
      </Row>
    </CartItemContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'flex-end'
  },
  centerContainer: {
    alignItems: 'center'
  }
})

export default CartItemElement;
