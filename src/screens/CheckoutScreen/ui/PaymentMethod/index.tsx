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
import { isFunction } from 'lodash';

interface PaymentMethodProps extends AliasComponent {
  onSubmitForm?: (data: PaymentMethodProps) => void;
  data?: PaymentMethodProps;
}

const PaymentMethod: FC<PaymentMethodProps> = props => {
  const { onSubmitForm, data, ...rest } = props;
  const [show, setShow] = useState(false);
  const onHandle = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  const onSubmit = (payload: PaymentMethodProps) => {
    if (isFunction(onSubmitForm)) {
      onSubmitForm(payload);
    }
  };

  return (
    <>
      <ModalSelectPaymentMethod
        onSubmitHandler={onSubmit}
        visible={show}
        onHide={onHide}
        data={data}
      />
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
