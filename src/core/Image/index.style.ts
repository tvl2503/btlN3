import styled from 'styled-components/native';
import { Image, View } from 'react-native';
import { ImageProps } from './index.types';

export const ImageComponentComposed = styled(Image)<ImageProps>`
  border-radius: ${props => props.theme.sizes.sm}
`;

export const LoadingContainer = styled(View)`
  width: 100%;
  height: 100%;
  max-height: 200px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.neutral_6};
  border-radius: ${props => props.theme.sizes.sm};
  background-color: ${props => props.theme.colors.lightdark}
`;
