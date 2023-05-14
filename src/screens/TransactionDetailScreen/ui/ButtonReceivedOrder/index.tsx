import React, { FC } from 'react';
import Button from '../../../../core/Button';
import { ButtonProps } from '../../../../core/Button/index.types';
import { BUTTON_VARIANT } from '../../../../constants/theme/button';

interface ButtonReceivedOrderProps extends ButtonProps {
  billId?: string;
}
const ButtonReceivedOrder: FC<ButtonReceivedOrderProps> = (props) => {
  return (
    <Button variant={BUTTON_VARIANT.secondary} {...props}>
      Đã nhận được hàng
    </Button>
  );
};

export default ButtonReceivedOrder;
