import React, { FC, useState } from 'react';
import Button from '../../../../core/Button';
import { BUTTON_VARIANT } from '../../../../constants/theme/button';
import { ButtonProps } from '../../../../core/Button/index.types';
import ModalCancelTransaction from '../ModalCancelTransaction';

interface ButtonCancelOrderProps extends ButtonProps {
  billId?: string;
}
const ButtonCancelOrder: FC<ButtonCancelOrderProps> = props => {
  const [show, setShow] = useState(false);
  const onCancel = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  }
  return (
    <>
      <ModalCancelTransaction visible={show} onHide={onHide}/>
      <Button
        onPress={onCancel}
        fullWidth
        variant={BUTTON_VARIANT.danger}
        {...props}>
        Hủy đơn hàng
      </Button>
    </>
  );
};

export default ButtonCancelOrder;
