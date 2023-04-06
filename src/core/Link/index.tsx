import { useNavigation } from '@react-navigation/native';
import { isFunction, isObject } from 'lodash';
import React, { FC } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { TypographyProps } from '../Typography/index.types';
import { LinkWrapper } from './index.style';

export interface LinkProps extends TypographyProps {
  screen?: string;
  config?: any;
}
const Link: FC<LinkProps> = props => {
  const { children, onPress, screen, config,  ...restProps } = props;
  const navigation = useNavigation();

  const onHandle = (event: GestureResponderEvent) => {
    if (isFunction(onPress)) {
      onPress(event);
    }
    if (screen && isObject(navigation)) {
      // @ts-ignore
      navigation.navigate(screen, config);
    }
  };
  return (
    <TouchableOpacity onPress={onHandle}>
      <LinkWrapper {...restProps}>{children}</LinkWrapper>
    </TouchableOpacity>
  );
};

export default Link;
