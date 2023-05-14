import { TabBar } from "react-native-tab-view";
import styled from "styled-components/native";

export const TabBarComposed = styled(TabBar).attrs(props => ({
  indicatorStyle: {
    backgroundColor: props.theme.colors.secondary,
  },
  indicatorContainerStyle: {
    backgroundColor: props.theme.colors.white,
  },
  inactiveColor: props.theme.colors.neutral_1,
  activeColor: props.theme.colors.secondary,
  labelStyle: {
    textTransform: 'capitalize',
  }
}))`
`;