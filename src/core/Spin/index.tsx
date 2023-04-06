import React, { FC } from 'react';
import Spinner, { SpinnerProps } from 'react-native-spinkit';

const Spin: FC<SpinnerProps> = (props) => {
  return <Spinner {...props}/>;
};

export default Spin;
