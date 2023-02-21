import React, { FC } from 'react';
import { CardComposedComponent } from './index.style';
import { CardProps } from './index.types';

const Card: FC<CardProps> = props => {
  return <CardComposedComponent {...props} />;
};

export default Card;
