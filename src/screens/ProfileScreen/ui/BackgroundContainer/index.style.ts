import { View } from 'react-native';
import styled from 'styled-components/native';
import Image from '../../../../core/Image';

export const Container = styled(View)`
  position: relative;
  background: ${props => props.theme.colors.white};
`;

export const ImageBackground = styled(Image)`
  width: 100%;
  height: 136px;
`;

export const UserAvatar = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.white};
`;

export const UserAvatarContainer = styled(View)`
  align-items: center;
  position: relative;
  top: -28px;
`;

export const ContainerInfoUser = styled(View)`
  background: ${props => props.theme.colors.white};
  padding-bottom: ${props => props.theme.sizes.lg};
  margin-top: -16px;
`;