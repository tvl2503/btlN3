import React, { FC, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TabView as TabViewCore,
  TabViewProps as TabViewPropsCore,
  Route,
} from 'react-native-tab-view';

interface TabViewProps extends TabViewPropsCore<Route> {}
const TabView: FC<TabViewProps> = props => {
  const { initialLayout = {}, ...rest } = props;
  const layout = useWindowDimensions();

  const valueLayout = useMemo(() => {
    return Object.assign(
      {
        width: layout.width,
      },
      initialLayout,
    );
  }, [layout, initialLayout]);

  return <TabViewCore {...rest} initialLayout={valueLayout} />;
};

TabView.defaultProps = {
  initialLayout: {},  
};

export default TabView;
