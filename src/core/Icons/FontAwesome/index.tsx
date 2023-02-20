import React, { FC } from 'react';
import Icons, {
  FontAwesome5IconProps,
} from 'react-native-vector-icons/FontAwesome5';

const FontAwesomeIcon: FC<FontAwesome5IconProps> = props => {
  return <Icons {...props} />;
};

export default FontAwesomeIcon;
