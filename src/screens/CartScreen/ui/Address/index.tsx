import { RouteProp, useRoute } from '@react-navigation/native';
import { isArray, isEmpty } from 'lodash';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ViewProps } from 'react-native';
import { ACTION_TYPE } from '../../../../constants/actions';
import { KEY_DEFAULT_ADDRESS } from '../../../../constants/address';
import { PAGE } from '../../../../constants/apis';
import { ADDRESS_API } from '../../../../constants/apis/address';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import { NAVIGATION } from '../../../../constants/navigation';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import Row from '../../../../core/Row';
import Spinner from '../../../../core/Spinner';
import Typography from '../../../../core/Typography';
import useListenerAction from '../../../../hook/useListenerAction';
import useQuery from '../../../../hook/useQuery';
import { Address as AddressModel } from '../../../../models/address';
import { BasePaginationResponse } from '../../../../services/shared/types';
import { AliasComponent } from '../../../../types';
import Storage from '../../../../utils/storage';
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

type Params = {
  address: {
    id?: string
  }
}
interface AddressProps extends AliasComponent<ViewProps> {}

interface AddressComposed extends AddressModel {
  selected?: boolean;
}
const Address: FC<AddressProps> = props => {
  const { ...restProps } = props;
  const { params } = useRoute<RouteProp<Params, 'address'>>();
  const [idSelected, setIdSelected] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const { data: dataAction } = useListenerAction<AddressModel>({
    key: ACTION_TYPE.CREATE_ADDRESS,
  });

  const { data, error, isLoading, setData } = useQuery<BasePaginationResponse<Array<AddressComposed>>>({
    url: ADDRESS_API.LIST,
    config: {
      method: 'POST',
      data: {
        [PAGE]: -1,
      },
    },
    // useCache: false,
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

  useEffect(() => {
    (async () => {
      const payload = await Storage.get(KEY_DEFAULT_ADDRESS);
      if (!payload) {
        return;
      }
      setIdSelected(payload);
    })();

    if (params?.id) {
      setIdSelected(params?.id);
    }
  }, [params]);

  const selectedAddress = useMemo(() => {
    const value = data?.data;
    if (isEmpty(value) || !isArray(value)) {
      return null;
    }
    if (!idSelected) {
      return value[0];
    }
    const payload = value?.find(item => item?._id === idSelected);
    if (!payload) {
      return value[0];
    }
    return payload;
  }, [data, idSelected]);

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
                    <LinkText screen={NAVIGATION.LIST_ADDRESS}>Thay đổi</LinkText>
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
