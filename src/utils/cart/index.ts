import { CartItem } from '../../models/cart';

export const getTotal = (cart: Array<CartItem>) => {
  const values = cart.reduce(
    (acc, item) => {
      const product = item.product;
      const quantity = item.quantity;
      const priceProduct =
        product?.price?.discount_price || product?.price?.original_price;
      return Object.assign(acc, {
        total: acc.total + quantity * priceProduct,
        quantity: acc.quantity + quantity,
      });
    },
    {
      total: 0,
      quantity: 0,
    },
  );
  return values;
};
