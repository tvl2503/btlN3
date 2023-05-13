import { View } from "react-native";
import styled from "styled-components/native";
import Image from "../../core/Image";
import Card from "../../core/Card";
import Typography from "../../core/Typography";

export const ContainerSuccess = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.white};
`;

export const ImageContainer = styled(Image)`
  width: 308px;
  height: 308px;
`;

export const CardButton = styled(Card)`
  border-radius: 0;
`;

export const Content = styled(View)`
  padding-top: 40px;
`;

export const Description = styled(Typography)`
  padding-top: ${props => props.theme.sizes.md};
`;