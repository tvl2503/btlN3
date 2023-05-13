import React, { FC, useEffect, useState } from 'react';
import { isFunction } from 'lodash';
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
import { FormData } from '../../../../core/Form/FormInstance';
import { PaymentMethodProps } from '../CartItemElement/index.types';

interface ModalSelectPaymentMethodProps extends ModalProps {
  onSubmitHandler?: (params: FormData) => void;
  data?: PaymentMethodProps;
}
const ModalSelectPaymentMethod: FC<ModalSelectPaymentMethodProps> = props => {
  const { onSubmitHandler, data, visible, onHide, ...rest } = props;
  const [method, setMethod] = useState<string | null>(data?.type || CASH);

  const onCheck = (key: string | Array<string>) => {
    setMethod(key as string);
  };

  const onSubmitForm = (params?: FormData) => {
    if (isFunction(onSubmitHandler)) {
      onSubmitHandler({
        type: method,
        card: params,
      });
    }
    if (isFunction(onHide)) {
      onHide();
    }
  };

  useEffect(() => {
    if (!visible) {
      setMethod(data?.type || CASH);
    }
  }, [visible, data]);
  return (
    <Modal visible={visible} onHide={onHide} {...rest}>
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
      {method === CARD ? (
        <FormCardContainer>
          <Form onSubmit={onSubmitForm}>
            {({ onSubmit, isValidForm }) => {
              return (
                <>
                  <FormCard data={data} />
                  <Modal.Footer style={[styles.footer]}>
                    <Button
                      onPress={onSubmit}
                      disabled={!isValidForm}
                      size={BUTTON_SIZE.lg}
                      fullWidth>
                      Xác nhận
                    </Button>
                  </Modal.Footer>
                </>
              );
            }}
          </Form>
        </FormCardContainer>
      ) : (
        <Modal.Footer style={[styles.footer]}>
          <Button onPress={() => onSubmitForm(undefined)} size={BUTTON_SIZE.lg} fullWidth>
            Xác nhận
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default ModalSelectPaymentMethod;
