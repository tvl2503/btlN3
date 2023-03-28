import React, { FC } from "react";
import FontAwesomeIcon from "./FontAwesome";
import Ionicons from "./Ionicons";
import MaterialCommunityIcons from './MaterialCommunityIcons';

const Icon: FC = () => {
  return (
    <></>
  );
};

export default Object.assign(Icon, {
  FontAwesome: FontAwesomeIcon,
  Ionicons,
  MaterialCommunityIcons
});
