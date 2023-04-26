import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';

const Feather: FC<IconProps> = (props) => {
  return (
    <Icon {...props}/>
  );
};

export default Feather;
