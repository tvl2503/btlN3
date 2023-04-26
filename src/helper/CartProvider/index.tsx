import React, { PropsWithChildren, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useCRUDCart from '../../hook/useCRUDCart';
import { RootState } from '../../store/types';

const CartProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const token = useSelector<RootState, string | null | undefined>(state => state.user?.token);
  const { fetchCart } = useCRUDCart();
  useEffect(() => {
    if (!token) {
      return;
    }
    fetchCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <>
      {children}
    </>
  );
};

export default React.memo(CartProvider);
