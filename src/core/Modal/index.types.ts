import { ModalizeProps } from 'react-native-modalize';

export interface ModalProps extends ModalizeProps {
  visible?: boolean;
  onHide?: () => void;
  unmountOnExit?: boolean;
  usePortal?: boolean;
}

