import React, { forwardRef, useState } from 'react';
import { INPUT_VARIANT } from '../../constants/theme/input';
import { SELECT_SIZE } from '../../constants/theme/select';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import Modal from '../Modal';
import { SelectItem, TextSelectItem } from './index.style';

export interface SelectProps {
  size?: SELECT_SIZE;
  variant?: INPUT_VARIANT;
  placeholder?: string
}
const Select = forwardRef<any, SelectProps>((props, ref) => {
  const [show, setShow] = useState(false);
  const { size, variant, placeholder } = props;

  const onHide = () => {
    setShow(false);
  };
  return (
    <>
      <SelectItem variant={variant} size={size}>
        <TextSelectItem>{placeholder}</TextSelectItem>
      </SelectItem>
      <Modal ref={ref} visible={show} onHide={onHide}>
       
      </Modal>
    </>
  );
});

Select.displayName = 'Select';

export default Select;
