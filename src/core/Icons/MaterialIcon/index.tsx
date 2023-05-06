import React, { FC } from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

interface MaterialIconProps extends IconProps {

}
const MaterialIcon: FC<MaterialIconProps> = (props) => {
  return (
    <Icons {...props}/>
  );
};

export default MaterialIcon;
