import React, { FC } from 'react';
import TreeProvider from './index.context';
import { TreeProps } from './index.types';
import TreeItem from './TreeItem';

const Tree: FC<TreeProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TreeProvider {...rest}>
      {children}
    </TreeProvider>
  );
};

export default Object.assign(Tree, {
  Item: TreeItem,
});
