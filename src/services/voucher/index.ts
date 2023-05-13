import { request } from "../../utils/axios";
import { BasePaginationRequest } from "../shared/types";

export const getVoucher = (body: BasePaginationRequest) => {
  return request.post('/voucher/list', body);
};
