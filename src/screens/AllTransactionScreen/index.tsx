import React, { FC, useMemo } from 'react';
import { Route, SceneRendererProps } from 'react-native-tab-view';
import useQuery from '../../hook/useQuery';
import { getListCheckout } from '../../services/checkout';
import {
  Container,
  ContainerLoading,
  SeperatorComponent,
  ViewList,
} from './index.style';
import Spinner from '../../core/Spinner';
import { FlatList, ListRenderItem } from 'react-native';
import {
  BasePaginationResponse,
  FILTER_OPERATOR,
  Filter,
} from '../../services/shared/types';
import { Bill } from '../../models/bill';
import TransactionElement from './ui/TransactionElement';
import { ALL_TRANSACTION } from '../../constants/transaction';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileStackProps } from '../../navigators/ProfileStack';
import { NAVIGATION } from '../../constants/navigation';
import useTransaction from './hook/useTransaction';

interface AllTransactionScreenProps extends SceneRendererProps {
  route: Route;
}
const AllTransactionScreen: FC<AllTransactionScreenProps> = props => {
  const { route } = props;
  const routeKey = route?.key;
  const navigation = useNavigation<NavigationProp<ProfileStackProps>>();
  const baseBody = useMemo(() => {
    const filter: Array<Filter> = [];
    if (routeKey !== ALL_TRANSACTION) {
      filter.push({
        operator: FILTER_OPERATOR.EQUAL,
        key: 'status',
        value: routeKey,
      });
    }
    return {
      sort: {
        key: 'creation_time',
        value: -1,
      },
      filter: filter,
    };
  }, [routeKey]);
  const { data, error, isLoading, setData } = useQuery<
    BasePaginationResponse<Array<Bill>>
  >({
    url: getListCheckout,
    config: {
      method: 'POST',
      data: baseBody,
    },
    useCache: false,
    deps: [routeKey],
  });
  useTransaction({
    setData
  });
  const onNavigate = (item: Bill) => {
    navigation.navigate(NAVIGATION.TRANSACTION_DETAIL, {
      detail: item
    });
  };

  const onRender: ListRenderItem<Bill> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onNavigate(item)}>
        <TransactionElement data={item} />
      </TouchableOpacity>
    );
  };

  const onGetKey = (item: Bill) => {
    return item?._id;
  };

  const onRenderSeperator = () => {
    return <SeperatorComponent />;
  };

  return (
    <Container>
      {isLoading && (
        <ContainerLoading>
          <Spinner />
        </ContainerLoading>
      )}
      {!isLoading && data && (
        <ViewList>
          <FlatList
            keyExtractor={onGetKey}
            data={data?.data}
            renderItem={onRender}
            ItemSeparatorComponent={onRenderSeperator}
          />
        </ViewList>
      )}
    </Container>
  );
};

export default AllTransactionScreen;
