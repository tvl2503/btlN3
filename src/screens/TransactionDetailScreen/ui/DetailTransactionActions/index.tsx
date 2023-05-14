import React, { FC, useMemo } from 'react';
import { DetailTransactionActionsContainer } from './index.style';
import { AliasComponent } from '../../../../types';
import { Bill } from '../../../../models/bill';
import { RENDER_FOOTER_BY_STATUS } from '../../../../constants/transaction';
import { isEmpty } from 'lodash';
import { BUTTON_SIZE } from '../../../../core/Button/index.types';
import Row from '../../../../core/Row';

interface DetailTransactionActionsProps extends AliasComponent {
  data?: Bill;
}
const DetailTransactionActions: FC<DetailTransactionActionsProps> = props => {
  const { data, ...rest } = props;
  const billId = data?._id;
  const status = data?.status;

  const footer = useMemo(() => {
    if (!status) {
      return [];
    }
    if (!(status in RENDER_FOOTER_BY_STATUS)) {
      return [];
    }
    return RENDER_FOOTER_BY_STATUS[status];
  }, [status]);
  if (isEmpty(footer)) {
    return null;
  }
  return (
    <DetailTransactionActionsContainer {...rest}>
      <Row>
        {footer.map((Component, index) => (
          <Component fullWidth key={index} billId={billId} size={BUTTON_SIZE.lg} />
        ))}
      </Row>
    </DetailTransactionActionsContainer>
  );
};


export default DetailTransactionActions;
