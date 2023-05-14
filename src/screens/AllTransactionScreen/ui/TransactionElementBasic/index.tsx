import React, { FC, useMemo } from 'react';
import { AliasComponent } from '../../../../types';
import {
  Content,
  DiscountPrice,
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
} from '../TransactionElement/index.style';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { StyleSheet } from 'react-native';
import { toCurrency } from '../../../../utils/currency';
import { CartItem } from '../../../../models/cart';

interface TransactionElementProps extends AliasComponent {
  items?: CartItem;
}

const TransactionElementBasic: FC<TransactionElementProps> = props => {
  const { items: info, ...rest } = props;
  const values = useMemo(() => {
    if (!info) {
      return {
        total: 0,
        quantity: 0
      }
    }
    return {
      total:
        (info?.quantity *
        (info?.product?.price?.discount_price ||
          info?.product?.price?.original_price)).toFixed(2),
      quantity: info?.quantity,
    };
  }, [info]);

  return (
    <TransactionElementContainer {...rest}>
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

export default TransactionElementBasic;
