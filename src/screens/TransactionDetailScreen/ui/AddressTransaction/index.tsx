import React, { FC } from 'react';
import { AliasComponent } from '../../../../types';
import { Address } from '../../../../models/address';
import {
  AddressTransactionContainer,
  Content,
  IconComposed,
  IconContainer,
} from './index.style';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import Row from '../../../../core/Row';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { StyleSheet } from 'react-native';

interface AddressTransactionProps extends AliasComponent {
  address?: Address;
}
const AddressTransaction: FC<AddressTransactionProps> = props => {
  const { address } = props;
  return (
    <AddressTransactionContainer>
      <Row>
        <IconContainer>
          <IconComposed name={IONICONS_NAME.MAP_MARKER} />
        </IconContainer>
        <Content style={styles.content}>
          <Typography style={styles.wrap} variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>Tên người nhận: {address?.name}</Typography>
          <Typography style={[styles.wrap, styles.space]} variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            Địa chỉ: {address?.detail}, {address?.ward}, {address?.district}, {address?.city}
          </Typography>
          <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            Số điện thoại: {address?.phone}
          </Typography>
        </Content>
      </Row>
    </AddressTransactionContainer>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexWrap: 'wrap',
  },
  space: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  content: {
    flex: 1
  }
});

export default AddressTransaction;
