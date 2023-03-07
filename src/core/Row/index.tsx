import React, { FC } from 'react';
import { RowWrapper } from './index.style';
import { RowProps } from './index.types';

const Row: FC<RowProps> = props => {
  return <RowWrapper {...props} />;
};

Row.defaultProps = {
  fluid: false,
};

export default Row;
