import React, { forwardRef } from 'react';
import { Modalize } from 'react-native-modalize';
import useCallbackRefs from '../../hook/useCallbackRefs';
import useMergeRefs from '../../hook/useMergeRefs';
import { ModalProps } from './index.types';

const Modal = forwardRef<Modalize, ModalProps>((props, ref) => {
  const { children } = props;
  const [modalRef, setModalRef] = useCallbackRefs<Modalize>();
  const mergeRefs = useMergeRefs(setModalRef, ref);
  return <Modalize ref={mergeRefs}>{children}</Modalize>;
});

Modal.displayName = 'Modal';

export default Modal;
