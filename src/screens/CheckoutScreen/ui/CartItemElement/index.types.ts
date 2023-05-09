export interface Card {
  cvc: string;
  exp_month: string;
  exp_year: string;
  number: string;
}

export interface PaymentMethodProps {
  type: string;
  card?: Card
}
