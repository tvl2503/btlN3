import React, { FC, useMemo } from 'react';
import useCRUDCart from '../../../../hook/useCRUDCart';
import { Product } from '../../../../models/product';
import QuantityButton, { QuantityButtonProps } from '../QuantityButton';

interface QuantityButtonActionsProps extends QuantityButtonProps {
  product?: Product
}
const QuantityButtonActions: FC<QuantityButtonActionsProps> = props => {
  const { product, quantity, ...rest } = props;
  const productId = product?._id;
  const { isLoadingAddCart, addProductCart, deleteItemCart, isLoadingDeleteCart } = useCRUDCart();

  const onAddItem = () => {
    addProductCart({
      id: productId,
      quantity: 1,
    });
  };

  const onDeleteItem = () => {
    deleteItemCart({
      id: productId!,
      quantity: 1,
    });
  };

  const disabled = useMemo(() => {
    return isLoadingAddCart || isLoadingDeleteCart;
  }, [isLoadingAddCart, isLoadingDeleteCart]);

  return (
    <QuantityButton
      plusProps={{
        onPress: onAddItem,
        disabled: disabled,
      }}
      minusProps={{
        onPress: onDeleteItem,
        disabled: disabled || quantity === 1,
      }}
      quantity={quantity}
      {...rest}
    />
  );
};

export default QuantityButtonActions;
