import { User } from "../user";

export class Shop {
  constructor(public owner: User | string, public time_creation: number, public name: string) {}
};
