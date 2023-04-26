import { View } from 'react-native';
import styled from 'styled-components/native';
import Address from './ui/Address';
import ListCartItem from './ui/ListCartItem';

export const HeaderWrapper = styled(View)`
  position: relative;
  height: 200px;
`;

export const AddressComposed = styled(Address)`
  margin-left: ${props => props.theme.sizes.xl};
  margin-right: ${props => props.theme.sizes.xl};
  position: relative;
  top: -${props => props.theme.sizes.xxl};
`;

export const WrapperContainer = styled.View`
  flex: 1;
  background: transparent;
`;

export const ListCartItemComposed = styled(ListCartItem).attrs(_ => ({
  ListHeaderComponentStyle: {
    paddingBottom: 16,
  },
}))``;
