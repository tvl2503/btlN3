import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ACTION_TYPE } from '../../constants/actions';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import SafeArea from '../../core/SafeArea';
import Typography from '../../core/Typography';
import useListenerAction from '../../hook/useListenerAction';
import { Title, WrapperComposedAddress } from './index.style';

const CreateAddressScreen = () => {
  const navigation = useNavigation();
  const params = useRoute();
  const { data } = useListenerAction({
    key: ACTION_TYPE.CREATE_ADDRESS,
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const route = (params.params as {route?: string})?.route;
    if (!route) {
      navigation.goBack();
    } else {
      navigation.navigate(route, {
        address: data?.data,
      });
    };
  }, [params, navigation, data]);
  return (
    <SafeArea>
      <>
        <Title>
          <Typography variant={TYPOGRAPHY_VARIANT.HEADING_2}>Tạo địa chỉ mới</Typography>
        </Title>
        <WrapperComposedAddress />
      </>
    </SafeArea>
  );
};

export default CreateAddressScreen;
