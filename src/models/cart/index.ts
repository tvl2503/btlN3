import { Product } from "../product";
import { User } from "../user";

export interface CartItem {
  readonly product: Product;
  quantity: number;
}
export interface Cart {
  readonly _id: string;
  readonly user: User | string;
  items: Array<CartItem>;
};
