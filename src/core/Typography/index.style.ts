import styled from 'styled-components/native';
import {
  TypographyConfig,
  TYPOGRAPHY_VARIANT,
} from '../../constants/theme/typography';
import { TypographyProps } from './index.types';

export const TypographyComposed = styled.Text<TypographyProps>`
  ${({ variant }) => TypographyConfig[variant || TYPOGRAPHY_VARIANT.BODY]}
`;
