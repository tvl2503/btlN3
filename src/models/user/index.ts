export class User {
  public email?: string;
  public phone_number?: string;
  public username?: string;
  public validated?: boolean;
  public _id: string;

  constructor(props: User) {
    this.email = props.email;
    this.phone_number = props.phone_number;
    this.username = props.username;
    this.validated = props.validated;
    this._id = props._id;
  }

  public get getEmail(): string | undefined {
    return this.email;
  }
  public get getPhoneNumber(): string | undefined {
    return this.phone_number;
  }
  public get getUserName(): string | undefined {
    return this.username;
  }
  public get getValidated(): boolean | undefined {
    return this.validated;
  }
  public get getId(): string {
    return this._id;
  }

};
