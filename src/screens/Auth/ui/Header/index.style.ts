import { View } from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../../../components/shared/Logo';
import Link from '../../../../core/Link';
import Row from '../../../../core/Row';
import Typography from '../../../../core/Typography';

export const LogoWrapper = styled(Logo)`
  width: 81px;
  height: 81px;
`;

export const RowWrapper = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const Container = styled(View)`
  padding-top: ${props => props.theme.sizes.xxl};
  padding-bottom: ${props => props.theme.sizes.xxl};
`;

export const Title = styled(Typography)``;

export const Line = styled(View)`
  height: 4px;
  width: 64px;
  border-radius: 2px;
  background: ${props => props.theme.colors.secondary};
  margin-top: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const Description = styled(Typography)``;

export const RowTitle = styled(Row)`
  align-items: center;
`;

export const LinkAction = styled(Link)`
  padding-left: ${props => props.theme.space[1]};
`;
