import { Address } from "../../models/address";
import { request } from "../../utils/axios";
import { BaseResponse } from "../shared/types";

export interface CreateAddressBody {
  city: string;
  detail: string;
  district: string;
  ward: string;
  name: string;
  phone: string;
}

export interface CreateAddressResponse extends BaseResponse<Address> {

}

export const createAddress = (body: CreateAddressBody) => {
  return request.post<CreateAddressResponse>('/address/create', body);
};
