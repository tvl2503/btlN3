import styled from 'styled-components/native';
import Card from '../../../../core/Card';
import { View, Image } from 'react-native';
import Row from '../../../../core/Row';
// import Image from '../../../../core/Image';
import Typography from '../../../../core/Typography';

export const TransactionElementContainer = styled(Card)`
  padding: 0;
  border-radius: 0;
`;

export const Header = styled(View)`
  padding-top: ${props => props.theme.sizes.xl};
  padding-left: ${props => props.theme.sizes.xl};
  padding-right: ${props => props.theme.sizes.xl};
  padding-bottom: ${props => props.theme.sizes.md};
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
`;

export const Content = styled(View)`
  padding: ${props => props.theme.sizes.xl};
`;

export const RowCenter = styled(Row)``;

export const ImageView = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const RightContent = styled(View)`
  padding-left: ${props => props.theme.sizes.xl};
  flex: 1;
`;

export const RowEnd = styled(Row)`
  align-items: flex-end;
`;

export const OriginalPrice = styled(Typography)`
  text-decoration: line-through;
  padding-right: ${props => props.theme.sizes.md};
`;

export const DiscountPrice = styled(Typography)`
  color: ${props => props.theme.colors.danger};
`;

export const WatchMoreContent = styled(View)`
  padding-top: ${props => props.theme.sizes.md};
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  margin-top: ${props => props.theme.sizes.xl};
`;

export const TotalWrapper = styled(View)`
  padding-top: ${props => props.theme.sizes.md};
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  margin-top: ${props => props.theme.sizes.md};
`;

export const CenterText = styled(Typography)`
  text-align: center;
`;

export const TotalTitle = styled(Typography)`
  text-align: right;
`;

export const TotalContent = styled(Typography)`
  color: ${props => props.theme.colors.danger};
  padding-left: ${props => props.theme.sizes.sm};
`;

export const RowTotal = styled(Row)`
  align-items: center;
  justify-content: flex-end;
`;