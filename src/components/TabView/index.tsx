import React, { FC } from 'react';
import { TabView as TabViewCore, TabViewProps } from 'react-native-tab-view';
import { TabBarComposed } from './index.style';

const TabView: FC<TabViewProps<any>> = (props) => {

  const onRenderTabBar = (props: any) => {
    return <TabBarComposed {...props}/>
  }
  return (
    <TabViewCore renderTabBar={onRenderTabBar} {...props}/>
  )
};

export default TabView;
