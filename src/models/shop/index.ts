import { User } from "../user";

export class Shop {
  constructor(public readonly _id: string, public owner: User | string, public time_creation: number, public name: string) {}
};
