import React, { FC, useMemo } from 'react';
import { AliasComponent } from '../../../../types';
import { TransactionPaymentMethodContainer } from './index.style';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { PAYMENT_METHODS } from '../../../../constants/payment';
import { StyleSheet } from 'react-native';

interface TransactionPaymentMethodProps extends AliasComponent {
  payment_method?: 'card' | 'cash';
  payment_info?: any;
}
const TransactionPaymentMethod: FC<TransactionPaymentMethodProps> = (props) => {
  const { payment_method, ...rest } = props;
  
  const getTitlePaymentMethod = useMemo(() => {
    return PAYMENT_METHODS.find(item => item?.id === payment_method)?.title;
  }, [payment_method]);
  return (
    <TransactionPaymentMethodContainer {...rest}>
      <Typography variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
        Phương thức thanh toán
      </Typography> 
      <Typography style={styles.top} variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
        {getTitlePaymentMethod}
      </Typography>
    </TransactionPaymentMethodContainer>
  )
};

const styles = StyleSheet.create({
  top: {
    paddingTop: 4
  }
})

export default TransactionPaymentMethod;
