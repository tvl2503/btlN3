import React, { FC } from 'react';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Modal from '../../../../core/Modal';
import { ModalProps } from '../../../../core/Modal/index.types';
import Typography from '../../../../core/Typography';
import FormAddress from '../../../CreateAddressScreen/ui/FormAddress';

interface ModalCreateAddressProps extends ModalProps {}

const ModalCreateAddress: FC<ModalCreateAddressProps> = props => {
  const { ...rest } = props;
  return (
    <>
      <Modal {...rest}>
        <Modal.Header buttonClose={false}>
          <Typography variant={TYPOGRAPHY_VARIANT.HEADING_3}>Tạo địa chỉ mới</Typography>
        </Modal.Header>
        <FormAddress />
      </Modal>
    </>
  );
};

export default ModalCreateAddress;
