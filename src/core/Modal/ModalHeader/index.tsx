import { isEmpty, isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native/types';
import { IONICONS_NAME } from '../../../constants/icons/ionicons';
import { BUTTON_VARIANT } from '../../../constants/theme/button';
import { useModal } from '../index.context';
import {
  ModalButton,
  ModalButtonIcon,
  ModalHeaderComposedComponent,
  ModalHeaderContainer,
} from './index.style';
import { ModalHeaderProps } from './index.types';

const ModalHeader: FC<ModalHeaderProps> = props => {
  const { buttonClose, buttonProps, children, ...rest } = props;
  const { onHide } = useModal();

  const onPressModal = (event: GestureResponderEvent) => {
    if (!isEmpty(buttonProps) && buttonProps?.onPress) {
      buttonProps?.onPress(event);
    }
    if (isFunction(onHide)) {
      onHide();
    }
  };
  return (
    <ModalHeaderComposedComponent {...rest}>
      <ModalHeaderContainer>
        {buttonClose && (
          <ModalButton
            onPress={onPressModal}
            variant={BUTTON_VARIANT.icon}
            {...(buttonProps || {})}>
            <ModalButtonIcon name={IONICONS_NAME.CLOSE_OUTLINE} />
          </ModalButton>
        )}
        {children}
      </ModalHeaderContainer>
    </ModalHeaderComposedComponent>
  );
};

ModalHeader.defaultProps = {
  buttonProps: {},
  buttonClose: true,
};

ModalHeader.propTypes = {
  buttonProps: PropTypes.object,
  buttonClose: PropTypes.bool,
};

export default ModalHeader;
