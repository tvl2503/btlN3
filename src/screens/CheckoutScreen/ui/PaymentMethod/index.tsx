import React, { FC, useState } from 'react';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Link from '../../../../core/Link';
import Row from '../../../../core/Row';
import { AliasComponent } from '../../../../types';
import ModalSelectPaymentMethod from '../ModalSelectPaymentMethod';
import {
  InfoContainer,
  PaymentIconContainer,
  PaymentMethodContainer,
  PaymentMethodIcon,
  SubTitle,
  Title,
} from './index.style';

interface PaymentMethodProps extends AliasComponent {}

const PaymentMethod: FC<PaymentMethodProps> = props => {
  const { ...rest } = props;
  const [show, setShow] = useState(false);
  const onHandle = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  return (
    <>
      <ModalSelectPaymentMethod visible={show} onHide={onHide}/>
      <PaymentMethodContainer {...rest}>
        <Row>
          <PaymentIconContainer>
            <PaymentMethodIcon name={IONICONS_NAME.PAYMENT} />
          </PaymentIconContainer>
          <InfoContainer>
            <Title variant={TYPOGRAPHY_VARIANT.HEADING_5}>
              Hình thức thanh toán
            </Title>
            <SubTitle variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
              Tiền mặt
            </SubTitle>
            <Link onPress={onHandle}>Thay đổi</Link>
          </InfoContainer>
        </Row>
      </PaymentMethodContainer>
    </>
  );
};

export default PaymentMethod;
