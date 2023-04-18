import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import isIOS from '../../utils/typeof/isIOS';

const SafeAreaStyle = styled.SafeAreaView`
  flex: 1;
  margin-top: 0;
`;
interface Props extends SafeAreaViewProps {
  children: JSX.Element;
}
const SafeArea: React.FC<Props> = ({ children }) => {
  return <SafeAreaStyle>{children}</SafeAreaStyle>;
};

export default SafeArea;
