import React, { FC } from 'react';
import { AliasComponent } from '../../../../types';
import { ContainerInfoBill, RowCenter } from './index.style';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { StyleSheet } from 'react-native';
import { Bill } from '../../../../models/bill';
import { getDateFromTime } from '../../../../utils/date';

interface InfoBillProps extends AliasComponent {
  data?: Bill
};

const InfoBill: FC<InfoBillProps> = (props) => {
  const { data, ...rest } = props;
  const code = data?._id;
  const time = data?.creation_time!;
  return (
    <ContainerInfoBill {...rest}>
      <Typography variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>Thông tin đơn hàng</Typography>
      <RowCenter style={styles.default}>
        <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>Mã đơn hàng:</Typography>
        <Typography variant={TYPOGRAPHY_VARIANT.ACTION_14_MEDIUM}>{code}</Typography>
      </RowCenter>
      <RowCenter style={styles.default}>
        <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>Thời gian đặt hàng</Typography>
        <Typography variant={TYPOGRAPHY_VARIANT.ACTION_14_MEDIUM}>{getDateFromTime(time)}</Typography>
      </RowCenter>
    </ContainerInfoBill>
  )
};

const styles = StyleSheet.create({
  default: {
    paddingTop: 8,
  }
})

export default InfoBill;
