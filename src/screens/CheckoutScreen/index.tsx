import React from 'react';
import Card from '../../core/Card';
import {
  AddressComposed,
  CardCustom,
  CheckoutContainer,
  PaymentMethodComposed,
  CardPaymnetComposed
} from './index.style';

const CheckoutScreen = () => {
  return (
    <CheckoutContainer>
      <CardCustom>
        <AddressComposed />
      </CardCustom>
      <CardPaymnetComposed>
        <PaymentMethodComposed />
      </CardPaymnetComposed>
    </CheckoutContainer>
  );
};

export default CheckoutScreen;
