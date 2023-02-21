import React, { FC } from 'react';
import { ModalHeaderProps } from '../ModalHeader/index.types';
import { ModalFooterContainer } from './index.style';

const ModalFooter: FC<ModalHeaderProps> = props => {
  const { ...rest } = props;

  return <ModalFooterContainer {...rest} />;
};

export default ModalFooter;
