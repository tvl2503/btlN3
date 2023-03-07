import React, { FC } from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

const Gradient: FC<LinearGradientProps> = props => {
  return <LinearGradient {...props} />;
};

export default Gradient;
