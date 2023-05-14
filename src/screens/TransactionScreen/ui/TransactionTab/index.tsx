import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TAB_TRANSACTION,
  renderScene,
} from '../../../../constants/transaction';
import TabView from '../../../../components/TabView';

const TransactionTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(TAB_TRANSACTION);
  const layout = useWindowDimensions();

  const onChangeIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={onChangeIndex}
      initialLayout={{ width: layout.width }}
      lazy
    />
  );
};

export default TransactionTab;
