import { isArray, isFunction } from 'lodash';
import React, { FC, useMemo } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import CheckBox from '../../CheckBox';
import { useTree } from '../index.context';
import { TreeItemComposedComponent, TreeItemText } from './index.style';
import { TreeItemProps } from './index.types';

const TreeItem: FC<TreeItemProps> = props => {
  const { as: Component = Pressable, children, eventKey, ...rest } = props;
  const { onCheck, keys } = useTree();

  const onPress = (event: GestureResponderEvent) => {
    if (isFunction(onCheck)) {
      onCheck(eventKey, event);
    }
  };

  const isChecked = useMemo(() => {
    if (!keys || !eventKey) {
      return false;
    }
    if (isArray(keys)) {
      return keys.includes(eventKey);
    }
    return keys === eventKey;
  }, [eventKey, keys]);

  return (
    <TreeItemComposedComponent onPress={onPress} as={Component} {...rest}>
      <TreeItemText variant={TYPOGRAPHY_VARIANT.BODY}>{children}</TreeItemText>
      <CheckBox onCheck={onPress} active={isChecked}/>
    </TreeItemComposedComponent>
  );
};

export default TreeItem;
