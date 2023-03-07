import { ViewProps } from 'react-native/types';
import { SPACE } from '../../constants/theme/space';

export interface RowProps extends ViewProps {
  fluid?: boolean;
  variant?: SPACE;
};
