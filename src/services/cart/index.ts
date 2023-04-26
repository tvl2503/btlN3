import { request } from "../../utils/axios";
import { BasePaginationRequest } from "../shared/types";

export const getCartInfo = (body: BasePaginationRequest = {}) => {
  return request.post('/cart/list', body);
};

export const deleteCart = (id: string, quantity: number) => {
  return request.put('/cart/delete', {
    product_id: id,
    quantity,
  });
};

export const addCart = (id: string, quantity: number) => {
  return request.put('/cart/add', {
    product_id: id,
    quantity: quantity
  });
};
