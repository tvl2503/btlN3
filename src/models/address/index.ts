import { User } from "../user";

export class Address {
  public readonly _id: string;
  constructor(public city: string, public creation_time: number, public detail: string, public district: string, public name: string, public phone: string, public user: User | string, public ward: string) {}
};
