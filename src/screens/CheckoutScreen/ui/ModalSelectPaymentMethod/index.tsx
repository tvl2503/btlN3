import React, { FC, useState } from 'react';
import { ModalProps } from '../../../../core/Modal/index.types';
import Modal from '../../../../core/Modal';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Tree from '../../../../core/Tree';
import { CARD, CASH, PAYMENT_METHODS } from '../../../../constants/payment';
import { FormCardContainer, ModalHeaderComposed } from './index.style';
import Form from '../../../../core/Form';
import FormCard from '../FormCard';
import Button from '../../../../core/Button';
import { BUTTON_SIZE } from '../../../../core/Button/index.types';
import { StyleSheet } from 'react-native';

interface ModalSelectPaymentMethodProps extends ModalProps {}
const ModalSelectPaymentMethod: FC<ModalSelectPaymentMethodProps> = props => {
  const { ...rest } = props;
  const [method, setMethod] = useState<string | null>(CASH);

  const onCheck = (key: string) => {
    setMethod(key);
  }
  return (
    <Modal {...rest}>
      <ModalHeaderComposed buttonClose={false}>
        <Typography variant={TYPOGRAPHY_VARIANT.HEADING_2}>
          Chọn hình thức thanh toán
        </Typography>
      </ModalHeaderComposed>
      <Tree value={method} onCheck={onCheck}>
        {PAYMENT_METHODS.map(item => (
          <Tree.Item key={item?.id} eventKey={item?.id}>
            {item?.title}
          </Tree.Item>
        ))}
      </Tree>
      {method === CARD && <FormCardContainer>
        <Form>
          <FormCard />
        </Form>
      </FormCardContainer>}
      <Modal.Footer style={[styles.footer]}>
        <Button size={BUTTON_SIZE.lg} fullWidth>Xác nhận</Button>
      </Modal.Footer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingLeft: 0,
    paddingRight: 0
  }
})

export default ModalSelectPaymentMethod;
