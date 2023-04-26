import React, { forwardRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';
import useCallbackRefs from '../../hook/useCallbackRefs';
import useMergeRefs from '../../hook/useMergeRefs';
import ModalProvider from './index.context';
import { ModalProps } from './index.types';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { ModalContainer } from './index.style';
import ConditionalWrapper from '../../helper/ConditionalWrapper';
import Portal from '../Portal';
import { isFunction } from 'lodash';

const Modal = forwardRef<Modalize, ModalProps>((props, ref) => {
  const { children, visible, unmountOnExit, usePortal = true, onHide: onHideProps, ...rest } = props;
  const [modalRef, setModalRef] = useCallbackRefs<Modalize>();
  const mergeRefs = useMergeRefs(setModalRef, ref);

  const onHide = useCallback(() => {
    modalRef?.current?.close();
  }, [modalRef]);

  const onOpen = useCallback(() => {
    modalRef?.current?.open();
  }, [modalRef]);

  useEffect(() => {
    if (visible) {
      onOpen();
    } else {
      onHide();
    }
  }, [visible, onOpen, onHide]);

  useEffect(() => {
    return () => {
      if (unmountOnExit) {
        onHide();
      }
    };
  }, [unmountOnExit, onHide]);

  const onClose = () => {
    if (isFunction(onHideProps)) {
      onHideProps();
    }
  };

  return (
    <ModalProvider onHide={onHide}>
      <ConditionalWrapper
        condition={usePortal}
        render={child => {
          return <Portal>{child}</Portal>;
        }}>
        <Modalize {...rest} ref={mergeRefs} onClose={onClose}>
          <ModalContainer>{children}</ModalContainer>
        </Modalize>
      </ConditionalWrapper>
    </ModalProvider>
  );
});

Modal.displayName = 'Modal';

Modal.defaultProps = {
  visible: false,
  unmountOnExit: true,
  adjustToContentHeight: true,
  usePortal: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  adjustToContentHeight: PropTypes.bool,
  usePortal: PropTypes.bool,
};

export default Object.assign(Modal, {
  Header: ModalHeader,
  Footer: ModalFooter,
});
