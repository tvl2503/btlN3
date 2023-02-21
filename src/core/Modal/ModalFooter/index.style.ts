import { View } from 'react-native';
import styled from 'styled-components/native';
import { ModalFooterProps } from './index.types';

export const ModalFooterContainer = styled(View)<ModalFooterProps & {bottom?: number}>`
  padding: ${({theme}) => `${theme.sizes.xl} ${theme.sizes.xl} ${theme.sizes.xxl} ${theme.sizes.xl}`}
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6}
`;
