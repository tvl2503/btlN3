import React from 'react';
import {
  AddressComposed,
  HeaderWrapper,
  ListCartItemComposed,
  WrapperContainer,
} from './index.style';
import CartHeaderBackground from './ui/CartHeaderBackground';

const CartScreen = () => {
  const renderHeader = () => {
    return (
      <HeaderWrapper>
        <CartHeaderBackground />
        <AddressComposed />
      </HeaderWrapper>
    );
  };
  return (
    <>
      <WrapperContainer>
        <ListCartItemComposed ListHeaderComponent={renderHeader} />
      </WrapperContainer>
    </>
  );
};
export default CartScreen;
