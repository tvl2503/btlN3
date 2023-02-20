import React, { FC } from 'react';
import { SpinnerComposedComponent } from './index.style';
import { SpinnerProps } from './index.types';

const Spinner: FC<SpinnerProps> = props => {
  return <SpinnerComposedComponent {...props} />;
};

Spinner.defaultProps = {
  size: 'small',
};

export default Spinner;
