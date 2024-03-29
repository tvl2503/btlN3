import { Card } from "../../screens/CheckoutScreen/ui/CartItemElement/index.types";
import { request } from "../../utils/axios";

interface CheckoutRequestBody {
  address: string;
  payment_method: string;
  card?: Card,
  currency?: string;
  note?: string;
  voucher?: string;
}

export const checkout = (body: CheckoutRequestBody) => {
  return request.post('/checkout/create', body);
};

export const getListCheckout = '/checkout/list';

export const cancelCheckout = (billId: string, reason: string) => {
  return request.put('/checkout/cancel/' + billId, {
    reason
  });
}