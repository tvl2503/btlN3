import React from 'react'
import { ModalProps } from '../../../core/Modal/index.types'
import Modal from '../../../core/Modal';
import Typography from '../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import FormReview from './FormReview';

interface ModalCreateReviewProps extends ModalProps {}
const AddReviewModal : React.FC<ModalCreateReviewProps> = (props) => {
  const { ...rest } = props;
  return (
    <>
      <Modal {...rest}>
        <Modal.Header>
          <Typography variant={TYPOGRAPHY_VARIANT.HEADING_3}>Viết đánh giá</Typography>
        </Modal.Header>
        <FormReview />
        <Modal.Footer>    
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddReviewModal