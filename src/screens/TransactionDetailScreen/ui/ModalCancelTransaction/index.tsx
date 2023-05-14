import React, { FC } from 'react';
import Modal from '../../../../core/Modal';
import Typography from '../../../../core/Typography';
import { ModalProps } from '../../../../core/Modal/index.types';
import Form from '../../../../core/Form';
import required from '../../../../core/Input/rules/required';
import Button from '../../../../core/Button';
import { BUTTON_SIZE } from '../../../../core/Button/index.types';
import { StyleSheet } from 'react-native';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { isFunction } from 'lodash';

interface ModalCancelTransactionProps extends ModalProps {
  billId?: string;
}
const ModalCancelTransaction: FC<ModalCancelTransactionProps> = props => {
  const { onHide, ...rest } = props;

  const onSubmitForm = () => {
    
  }
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Typography variant={TYPOGRAPHY_VARIANT.HEADING_2}>Hủy đơn hàng</Typography>
      </Modal.Header>
      <Form onSubmit={onSubmitForm}>
        {({ isValidForm, onSubmit }) => {
          return (
            <>
              <Form.Input
                rules={[required]}
                placeholder="Lý do hủy"
                name="reason"
              />
              <Modal.Footer style={styles.resize}>
                <Button disabled={!isValidForm} onPress={onSubmit} fullWidth size={BUTTON_SIZE.lg}>
                  Huỷ đơn hàng
                </Button>
              </Modal.Footer>
            </>
          );
        }}
      </Form>
    </Modal>
  );
};

const styles = StyleSheet.create({
  resize: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 16
  }
})

export default ModalCancelTransaction;
