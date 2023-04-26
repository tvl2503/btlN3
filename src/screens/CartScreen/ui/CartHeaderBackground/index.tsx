import React, { FC } from 'react';
import { ImageProps } from '../../../../core/Image/index.types';
import { CartImage } from './index.style';


const CartHeaderBackground: FC<Partial<ImageProps>> = (props) => {
  return (
    <CartImage source={require('../../../../assets/banner-cart.png')} {...props}/>
  )
};

export default CartHeaderBackground;
