import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import isIOS from '../../utils/typeof/isIOS';

const SafeAreaStyle = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isIOS() ? '0px' : `${StatusBar.currentHeight}px`}
`;
interface Props {
  children: JSX.Element;
}
const SafeArea: React.FC<Props> = ({ children }) => {
  return <SafeAreaStyle>{children}</SafeAreaStyle>;
};

export default SafeArea;
