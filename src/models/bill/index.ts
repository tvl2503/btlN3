import { Address } from "../address";
import { CartItem } from "../cart";
import { User } from "../user";

export enum BILL_STATUS {
  CREATED = 'created',
  PROCESSING = 'processing',
  SHIPPING = 'shipping',
  SUCCESS = 'success',
  CANCEL = 'cancel'
}
export interface Bill {
  address?: Address;
  items?: Array<CartItem & {_id: string}>;
  owner?: User | string;
  payment_method?: 'card' | 'cash';
  status?: BILL_STATUS;
  transaction_id: string;
  _id: string;
  payment_info?: any;
  payment_id?: string;
  creation_time: number;
};
