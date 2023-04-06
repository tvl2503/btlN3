import React, { FC } from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

const MaterialCommunityIcons: FC<IconProps> = (props) => {
  return <Icons {...props}/>
};

export default MaterialCommunityIcons;
