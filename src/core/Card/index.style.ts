import { View } from 'react-native';
import styled from 'styled-components/native';
import { CARD_RADIUS } from '../../constants/theme/card';

export const CardComposedComponent = styled(View)`
  padding: ${props => props.theme.sizes.xl};
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-shadow: 0px 4px 20px #00000008;
  border-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  border-radius: ${CARD_RADIUS};
`;
