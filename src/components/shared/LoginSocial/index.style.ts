import { View } from "react-native";
import styled from "styled-components/native";
import Image from "../../../core/Image";
import Row from "../../../core/Row";

export const LoginSocialContainer = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const Circle = styled(View)`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: 1px solid ${props => props.theme.colors.neutral_6};
`;

export const ImageIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const ImageFacebook = styled(Image)`
  width: 12px;
  height: 22px;
`;
