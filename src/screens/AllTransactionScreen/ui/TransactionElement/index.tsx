import React, { FC, useMemo } from 'react';
import { AliasComponent } from '../../../../types';
import {
  CenterText,
  Content,
  DiscountPrice,
  Header,
  ImageView,
  OriginalPrice,
  RightContent,
  RowCenter,
  RowEnd,
  RowTotal,
  TotalContent,
  TotalTitle,
  TotalWrapper,
  TransactionElementContainer,
  WatchMoreContent,
} from './index.style';
import { Bill } from '../../../../models/bill';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { StyleSheet } from 'react-native';
import { toCurrency } from '../../../../utils/currency';
import { getTotal } from '../../../../utils/cart';
import { MAP_STATUS_BILL } from '../../../../constants/transaction';

interface TransactionElementProps extends AliasComponent {
  data?: Bill;
}

const TransactionElement: FC<TransactionElementProps> = props => {
  const { data } = props;
  const info = useMemo(() => {
    return data?.items?.[0];
  }, [data]);

  const values = useMemo(() => {
    return getTotal(data?.items || []);
  }, [data]);
  
  const getStatus = useMemo(() => {
    if (!data?.status) {
      return null;
    }
    if (!(data?.status in MAP_STATUS_BILL)) {
      return null;
    }
    return MAP_STATUS_BILL[data?.status]
  }, [data]);
  return (
    <TransactionElementContainer>
      <Header>
        <Typography>
          Trạng thái đơn hàng:{' '}
          <Typography variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
            {getStatus}
          </Typography>
        </Typography>
      </Header>
      <Content>
        <RowCenter>
          <ImageView source={{ uri: info?.product?.media_urls?.[0]?.src }} />
          <RightContent>
            <Typography
              numberOfLines={1}
              variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
              {info?.product?.name}
            </Typography>
            <Typography
              style={styles.top}
              variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
              Số lượng: {info?.quantity}
            </Typography>
            <RowEnd style={styles.top}>
              {info?.product?.price?.discount_price && (
                <OriginalPrice variant={TYPOGRAPHY_VARIANT.BODY}>
                  {toCurrency(info?.product?.price?.original_price)}
                </OriginalPrice>
              )}
              <DiscountPrice>
                {toCurrency(
                  info?.product?.price?.discount_price ||
                    info?.product?.price?.original_price,
                )}
              </DiscountPrice>
            </RowEnd>
          </RightContent>
        </RowCenter>
        <WatchMoreContent>
          <CenterText variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            Xem thêm
          </CenterText>
        </WatchMoreContent>
        <TotalWrapper>
          <RowTotal>
            <TotalTitle variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
              Tổng cộng:
            </TotalTitle>
            <TotalContent>{toCurrency(values?.total)}</TotalContent>
          </RowTotal>
        </TotalWrapper>
      </Content>
    </TransactionElementContainer>
  );
};

const styles = StyleSheet.create({
  top: {
    paddingTop: 8,
  },
});

export default TransactionElement;
