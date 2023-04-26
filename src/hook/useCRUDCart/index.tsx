import { isArray, isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';
import { addCart, deleteCart, getCartInfo } from '../../services/cart';
import { BasePaginationRequest, BasePaginationResponse, BaseResponse } from '../../services/shared/types';
import { cartActions } from '../../store/slices/cart';
import useCallApi from '../useCallApi';

interface SuccessAddCartResponse {
  info: Product;
  quantity: number;
}
const useCRUDCart = () => {
  const dispatch = useDispatch();

  const onFetchCart = (body: BasePaginationRequest = {}) => {
    return getCartInfo(body);
  };

  const onFetchCartError = (err: string) => {
    console.log(err);
  };

  const onFetchCartSuccess = (data: BasePaginationResponse<Cart>) => {
    const cart = data?.data;
    if (!cart || !isArray(cart) || isEmpty(cart)) {
      return;
    };
    dispatch(cartActions.setCart(cart[0]?.items));
  };

  const onDeleteCart = ({id, quantity}: {id: string, quantity: number}) => {
    return deleteCart(id, quantity);
  };

  const onDeleteCartError = (err: string) => {
    console.log(err);
  };

  const onDeleteCartSuccess = (data: BaseResponse) => {
    const params = data?.params;
    if (!params) {
      return;
    }
    const quantity = params?.[0]?.quantity;
    const id = params?.[0]?.id;
    dispatch(cartActions.deleteItem({
      id,
      quantity,
    }));
  };

  const { isLoading: isLoadingFetchCart, send: sendFetchCart } = useCallApi({
    request: onFetchCart,
    error: onFetchCartError,
    success: onFetchCartSuccess,
  });

  const { isLoading: isLoadingDeleteCart, send: deleteProductCart } = useCallApi({
    request: onDeleteCart,
    error: onDeleteCartError,
    success: onDeleteCartSuccess,
  });

  const onAddCartError = (err: string) => {
    console.log(err);
  };

  const onAddCartSuccess = (data: BaseResponse<SuccessAddCartResponse>) => {
    const payload = data?.data;
    const quantity = data?.params?.[0]?.quantity || 0;
    if (!payload) {
      return;
    }
    const { info } = payload;
    dispatch(cartActions.addItem({
      data: info,
      quantity,
    }));
  };

  const onAddCart = (params: {id: string, quantity: number}) => {
    const { id, quantity } = params;
    return addCart(id, quantity);
  };

  const { isLoading: isLoadingAddCart, send: addProductCart } = useCallApi({
    request: onAddCart,
    error: onAddCartError,
    success: onAddCartSuccess
  });

  const fetchCart = () => {
    sendFetchCart();
  };

  const deleteItemCart = (params: {id: string, quantity: number}) => {
    deleteProductCart(params);
  };

  return {
    fetchCart,
    isLoadingFetchCart,
    deleteItemCart,
    isLoadingDeleteCart,
    isLoadingAddCart,
    addProductCart,
  };
};

export default useCRUDCart;
