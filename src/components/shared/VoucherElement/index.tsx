import React, { FC } from 'react';
import moment from 'moment';
import { IONICONS_NAME } from '../../../constants/icons/ionicons';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import Row from '../../../core/Row';
import Typography from '../../../core/Typography';
import { Voucher } from '../../../models/voucher';
import { AliasComponent } from '../../../types';
import {
  Content,
  Description,
  Element,
  IconCore,
  VoucherContainer,
} from './index.style';
import CheckBox from '../../../core/CheckBox';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { isFunction } from 'lodash';

interface VoucherElementProps extends AliasComponent {
  data?: Voucher;
  onSelect?: (data?: Voucher) => void;
  activeId?: string;
}
const VoucherElement: FC<VoucherElementProps> = props => {
  const { data, onSelect, activeId, ...rest } = props;

  const onHandle = () => {
    if (isFunction(onSelect)) {
      onSelect(activeId === data?._id ? undefined : data);
    }
  };

  return (
    <TouchableOpacity onPress={onHandle}>
      <VoucherContainer {...rest}>
        <Row style={styles.center}>
          <Element>
            <IconCore name={IONICONS_NAME.CREDIT_CARD} />
          </Element>
          <Content>
            <Typography variant={TYPOGRAPHY_VARIANT.HEADING_5}>
              Giảm {data?.discount_value}%
            </Typography>
            <Description variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
              {data?.description}
            </Description>
            <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_12_MEDIUM}>
              Có hiệu lực tới: {moment(data?.expire_time).format('DD/MM/YYYY')}
            </Typography>
          </Content>
          <CheckBox active={data?._id === activeId} style={styles.pr} />
        </Row>
      </VoucherContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  pr: {
    marginRight: 16,
  },
});

export default VoucherElement;
