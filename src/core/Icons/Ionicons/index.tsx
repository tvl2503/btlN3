import React, { FC } from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

const Ionicons: FC<IconProps> = (props) => {
  return <Icons {...props}/>
};

export default Ionicons;
