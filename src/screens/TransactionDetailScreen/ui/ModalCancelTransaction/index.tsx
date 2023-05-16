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
import { FormData } from '../../../../core/Form/FormInstance';
import { cancelCheckout } from '../../../../services/checkout';
import useCallApi from '../../../../hook/useCallApi';
import { BaseResponse } from '../../../../services/shared/types';
import useDispatchAction from '../../../../hook/useDispatchAction';
import { ACTION_TYPE } from '../../../../constants/actions';

interface ModalCancelTransactionProps extends ModalProps {
  billId?: string;
}
const ModalCancelTransaction: FC<ModalCancelTransactionProps> = props => {
  const { onHide, billId, ...rest } = props;

  const dispatchAction = useDispatchAction();

  const onCancelCheckout = (reason: string) => {
    if (!billId) {
      return;
    }
    return cancelCheckout(billId, reason);
  };

  const onCallbackSuccess = (_: BaseResponse) => {
    if (isFunction(onHide)) {
      onHide();
    }
    dispatchAction(ACTION_TYPE.CANCEL_BILL, {
      billId,
    });
  };

  const onCallbackError = (err: string) => {
    console.log(err);
  }
  const { isLoading, send } = useCallApi({
    request: onCancelCheckout,
    error: onCallbackError,
    success: onCallbackSuccess
  })

  const onSubmitForm = (data: FormData) => {
    if (!billId) {
      return;
    }
    const reason = data?.reason;
    if (!reason) {
      return;
    }
    return send(reason);
  }
  return (
    <Modal onHide={onHide} {...rest}>
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
                <Button loading={isLoading} disabled={!isValidForm || isLoading} onPress={onSubmit} fullWidth size={BUTTON_SIZE.lg}>
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
