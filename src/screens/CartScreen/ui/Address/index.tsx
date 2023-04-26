import { isArray, isEmpty } from 'lodash';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ViewProps } from 'react-native';
import { ACTION_TYPE } from '../../../../constants/actions';
import { PAGE } from '../../../../constants/apis';
import { ADDRESS_API } from '../../../../constants/apis/address';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Row from '../../../../core/Row';
import Spinner from '../../../../core/Spinner';
import Typography from '../../../../core/Typography';
import useListenerAction from '../../../../hook/useListenerAction';
import useQuery from '../../../../hook/useQuery';
import { Address as AddressModel } from '../../../../models/address';
import { BasePaginationResponse } from '../../../../services/shared/types';
import { AliasComponent } from '../../../../types';
import ModalCreateAddress from '../ModalCreateAddress';
import {
  AddressContainer,
  AddressDetail,
  AddressDetailContainer,
  AddressIcon,
  IconMarker,
  LinkText,
  LoadingContainer,
  TitleDetailAddress,
} from './index.style';

interface AddressProps extends AliasComponent<ViewProps> {}

interface AddressComposed extends AddressModel {
  selected?: boolean;
}
const Address: FC<AddressProps> = props => {
  const { ...restProps } = props;
  const [show, setShow] = useState(false);
  const { data: dataAction } = useListenerAction<AddressModel>({
    key: ACTION_TYPE.CREATE_ADDRESS
  });

  const { data, error, isLoading, setData } = useQuery<BasePaginationResponse<Array<AddressComposed>>>({
    url: ADDRESS_API.LIST,
    config: {
      method: 'POST',
      data: {
        [PAGE]: -1,
      },
    },
    useCache: false,
  });

  const onHandle = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  useEffect(() => {
    if (!dataAction || !dataAction?.data) {
      return;
    }
    setData((prevState: any) => {
      return {
        ...(prevState || {}),
        data: [dataAction.data, ...(prevState?.data || {})],
      };
    });
    onHide();
  }, [dataAction, setData]);

  const selectedAddress = useMemo(() => {
    const value = data?.data;
    if (isEmpty(value) || !isArray(value)) {
      return null;
    }
    const addressSelected = value.find(item => item?.selected);
    if (!addressSelected) {
      return value[0];
    }
    return addressSelected;
  }, [data]);

  return (
    <>
      <ModalCreateAddress visible={show} onHide={onHide} />
      <AddressContainer {...restProps}>
        <Row>
          <AddressIcon>
            <IconMarker name={IONICONS_NAME.MAP_MARKER} />
          </AddressIcon>
          <AddressDetailContainer>
            {!isLoading && error && <Typography>{error}</Typography>}
            {!isLoading ? (
              <>
                {!isEmpty(selectedAddress) ? (
                  <>
                    <TitleDetailAddress variant={TYPOGRAPHY_VARIANT.HEADING_5}>
                      Giao hàng đến
                    </TitleDetailAddress>
                    <AddressDetail
                      variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
                      {selectedAddress?.detail}, {selectedAddress?.district}, {selectedAddress?.ward}, {selectedAddress?.city}
                    </AddressDetail>
                    <LinkText>Thay đổi</LinkText>
                  </>
                ) : (
                  <>
                    <TitleDetailAddress variant={TYPOGRAPHY_VARIANT.HEADING_5}>
                      Bạn chưa có địa chỉ giao hàng
                    </TitleDetailAddress>
                    <LinkText onPress={onHandle}>Tạo mới ngay</LinkText>
                  </>
                )}
              </>
            ) : (
              <LoadingContainer>
                <Spinner />
              </LoadingContainer>
            )}
          </AddressDetailContainer>
        </Row>
      </AddressContainer>
    </>
  );
};

export default Address;
