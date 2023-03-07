import React, { FC } from 'react';
import Image from '../../../core/Image';
import { ImageProps } from '../../../core/Image/index.types';

const Logo: FC<Omit<ImageProps, 'source'>> = props => {
  return <Image {...props} source={require('../../../assets/Logo.png')} />;
};

export default Logo;
