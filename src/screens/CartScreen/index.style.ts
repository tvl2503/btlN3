import { View } from 'react-native';
import styled from 'styled-components/native';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import Button from '../../core/Button';
import Card from '../../core/Card';
import Row from '../../core/Row';
import Typography from '../../core/Typography';
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


export const WrapperButton = styled(Card)`
  padding: ${props => props.theme.sizes.xl};
`;

export const WhiteTitle = styled(Typography).attrs(_ => ({
  variant: TYPOGRAPHY_VARIANT.ACTION_14_MEDIUM
}))`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
`;

export const RowCenter = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled(Button)`
  
`;