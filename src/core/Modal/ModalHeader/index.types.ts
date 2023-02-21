import { ViewProps } from 'react-native/types';
import { ButtonProps } from '../../Button/index.types';

export interface ModalHeaderProps extends ViewProps {
  buttonClose?: boolean;
  buttonProps?: ButtonProps
}
