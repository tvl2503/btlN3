import { View } from 'react-native';
import styled from 'styled-components/native';
import { SPACE } from '../../constants/theme/space';
import { RowProps } from './index.types';

export const RowWrapper = styled(View)<RowProps>`
  ${({ theme, fluid, variant }) => `
    flex-direction: row;
    ${
      fluid &&
      `
      padding-left: ${theme.sizes[variant || SPACE.xl]};
      padding-right: ${theme.sizes[variant || SPACE.xl]};
    `
    }
  `}
`;
