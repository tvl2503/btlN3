import React, { useEffect } from 'react';
import { BasePaginationResponse } from '../../../../services/shared/types';
import { BILL_STATUS, Bill } from '../../../../models/bill';
import useListenerAction from '../../../../hook/useListenerAction';
import { ACTION_TYPE } from '../../../../constants/actions';

interface UseTransactionParams {
  setData: React.Dispatch<React.SetStateAction<BasePaginationResponse<Bill[]> | null>>;
}
const useTransaction = (params: UseTransactionParams) => {
  const { setData } = params;
  const { data } = useListenerAction<{billId?: string}>({
    key: ACTION_TYPE.CANCEL_BILL
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const billId = data?.data?.billId;
    if (!billId) {
      return;
    }
    setData(prevState => {
      const d = [...(prevState?.data || [])];
      const idx = d.findIndex(item => item._id === billId);
      if (idx === -1) {
        return prevState;
      }
      d[idx].status = BILL_STATUS.CANCEL;
      return {
        ...prevState,
        data: d,
      };
    })
  }, [data, setData]);
};

export default useTransaction;
