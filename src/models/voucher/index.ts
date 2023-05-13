import { User } from "../user";

export class Voucher {
  constructor(public readonly _id: string, public description: string, public creation_time: number, public creator: string | User, public discount_value: number, public expire_time: number) {}
}