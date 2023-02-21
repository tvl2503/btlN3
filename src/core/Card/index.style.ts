import { View } from 'react-native';
import styled from 'styled-components/native';

export const CardComposedComponent = styled(View)`
  padding: ${props => props.theme.sizes.xl};
  background: ${props => props.theme.colors.white};
  width: 100%;
  box-shadow: 0px 4px 20px #00000008;
`;
