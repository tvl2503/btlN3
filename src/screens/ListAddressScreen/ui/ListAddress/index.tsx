import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { filter, isEmpty, isFunction } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import AddressElement from '../../../../components/shared/AddressElement';
import { ACTION_TYPE } from '../../../../constants/actions';
import { NAVIGATION } from '../../../../constants/navigation';
import { BUTTON_VARIANT } from '../../../../constants/theme/button';
import Button from '../../../../core/Button';
import { BUTTON_SIZE } from '../../../../core/Button/index.types';
import Spinner from '../../../../core/Spinner';
import useCallApi from '../../../../hook/useCallApi';
import useDidUpdate from '../../../../hook/useDidUpdate';
import useListenerAction from '../../../../hook/useListenerAction';
import { Address } from '../../../../models/address';
import { listAddress } from '../../../../services/address';
import { BasePaginationResponse } from '../../../../services/shared/types';
import { AliasComponent } from '../../../../types';
import {
  AddressElementComposed,
  CardButton,
  ContainerAddress,
  LoadingCenterSpinner,
  Seperator,
} from './index.style';

type ParamList = {
  data?: {
    address?: Address
  }
}

interface ListAddressProps extends AliasComponent {
  onHandle?: (id: string) => any;
}
const ListAddress: FC<ListAddressProps> = props => {
  const { onHandle, ...rest } = props;
  const navigation = useNavigation();
  const { data: dataDeleteAddress } = useListenerAction<{id: string}>({
    key: ACTION_TYPE.DELETE_ADDRESS
  });
  const [initLoad, setInitLoad] = useState(false);
  const [addresses, setAddresses] = useState<Array<Address>>([]);
  const [page, setPage] = useState(1);
  const route = useRoute<RouteProp<ParamList, 'data'>>();
  const [loadMoreAble, setLoadMoreAble] = useState(true);

  const onFetch = (page: number) => {
    return listAddress({
      page,
      sort: {
        key: 'creation_time',
        operator: -1,
      },
    });
  };

  const onSuccess = (data: BasePaginationResponse<Array<Address>>) => {
    const items = data?.data || [];
    setLoadMoreAble(data?.load_more_able);
    setInitLoad(true);
    if (isEmpty(items)) {
      return;
    };

    setAddresses(prevState => [...prevState, ...items]);
  };

  const onError = (error: string) => {
    console.log(error);
  };
  const { isLoading, send } = useCallApi({
    request: onFetch,
    error: onError,
    success: onSuccess,
  });

  useEffect(() => {
    send(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useDidUpdate(() => {
    const address = route.params?.address;
    if (!address) {
      return;
    }
    setAddresses(prevState => [address, ...prevState]);
  }, [route]);

  useDidUpdate(() => {
    if (!dataDeleteAddress) {
      return;
    }
    const id = dataDeleteAddress?.data?.id;
    if (!id) {
      return;
    }
    const filterAddress = filter(addresses, item => item?._id !== id);
    setAddresses(filterAddress);
  }, [dataDeleteAddress]);


  const onExtractor = (item: Address, index: number) => {
    return item?._id || index.toString();
  };

  const onChangeAddress = (id: string) => {
    if (isFunction(onHandle)) {
      onHandle(id);
    };
  };

  const onRender: ListRenderItem<Address> = ({ item }) => {
    return (
      <AddressElementComposed>
        <AddressElement onHandle={onChangeAddress} data={item} />
      </AddressElementComposed>
    );
  };

  const renderSeperator = () => {
    return <Seperator />;
  };

  const renderFooter = () => {
    if (!loadMoreAble || !isLoading) {
      return null;
    }
    return <Spinner />;
  };

  const onCallMore = () => {
    if (!loadMoreAble) {
      return;
    }
    setPage(prevState => prevState + 1);
  };

  const onCreate = () => {
    navigation.navigate(NAVIGATION.CREATE_ADDRESS, {
      route: NAVIGATION.LIST_ADDRESS
    });
  };

  return (
    <>
      <ContainerAddress {...rest}>
        {!initLoad && isLoading && (
          <LoadingCenterSpinner>
            <Spinner />
          </LoadingCenterSpinner>
        )}
        {initLoad && (
          <FlatList
            renderItem={onRender}
            keyExtractor={onExtractor}
            data={addresses}
            onEndReached={onCallMore}
            onEndReachedThreshold={100}
            ItemSeparatorComponent={renderSeperator}
            ListFooterComponent={renderFooter}
          />
        )}
      </ContainerAddress>
      <CardButton>
        <Button
          onPress={onCreate}
          fullWidth
          variant={BUTTON_VARIANT.secondary}
          size={BUTTON_SIZE.lg}>
          Thêm địa chỉ mới
        </Button>
      </CardButton>
    </>
  );
};

export default ListAddress;
