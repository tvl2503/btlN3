import { isEmpty, isObject } from 'lodash';
import React, { FC, useMemo } from 'react';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { CardProps } from '../../../../core/Card/index.types';
import Icons from '../../../../core/Icons';
import Row from '../../../../core/Row';
import useCRUDCart from '../../../../hook/useCRUDCart';
import { CartItem as CartItemProduct } from '../../../../models/cart';
import { toCurrency } from '../../../../utils/currency';
import {
  CartBoxContent,
  CartItemCard,
  CartItemImage,
  TextWrap,
  TextDescription,
  TextOriginalPrice,
  TextPrice,
  QuantityButtonComposed,
  ButtonClose
} from './index.style';

interface CartItemProps extends CardProps {
  data?: CartItemProduct;
};

const CartItem: FC<CartItemProps> = (props) => {
  const { data, ...rest } = props;
  const { deleteItemCart } = useCRUDCart();
  const { product, quantity } = data || {};
  const mediaUrl = product?.media_urls;
  const title = product?.name;
  const shop = product?.shop;
  const productId = product?._id;
  const originalPrice = product?.price?.original_price;
  const discountPrice = product?.price?.discount_price;
  const url = useMemo(() => {
    if (!mediaUrl || isEmpty(mediaUrl)) {
      return require('../../../../assets/default-image.jpg');
    }
    return {
      uri: mediaUrl[0]?.src,
    };
  }, [mediaUrl]);

  const onDelete = () => {
    if (!productId || !quantity) {
      return;
    }
    deleteItemCart({
      id: productId,
      quantity
    });
  };

  return (
    <CartItemCard {...rest}>
      <ButtonClose onPress={onDelete}>
        <Icons.Ionicons name={IONICONS_NAME.CLOSE} size={12}/>
      </ButtonClose>
      <Row>
        <CartItemImage
          source={url}
        />
        <CartBoxContent>
          <TextWrap variant={TYPOGRAPHY_VARIANT.HEADING_5}>
            {title}
          </TextWrap>
          <TextDescription variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            Cung cấp bởi {isObject(shop) && shop?.name}
          </TextDescription>
          {discountPrice && <TextOriginalPrice variant={TYPOGRAPHY_VARIANT.ACTION_14_MEDIUM}>{toCurrency(discountPrice)}</TextOriginalPrice>}
          <TextPrice>
            {toCurrency(originalPrice!)}
          </TextPrice>
          <QuantityButtonComposed product={product} quantity={quantity}/>
        </CartBoxContent>
      </Row>
    </CartItemCard>
  );
};

export default CartItem;
