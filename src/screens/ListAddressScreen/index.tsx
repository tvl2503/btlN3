import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { KEY_DEFAULT_ADDRESS } from '../../constants/address';
import { NAVIGATION } from '../../constants/navigation';
import SafeArea from '../../core/SafeArea';
import Storage from '../../utils/storage';
import ListAddress from './ui/ListAddress';

const ListAddressScreen: FC = (props) => {
  const navigation = useNavigation();
  const onHandleAddress = (id: string) => {
    Storage.setItem(KEY_DEFAULT_ADDRESS, id).then(() => {
      navigation.navigate(NAVIGATION.CART_HOME, {
        id: id
      });
    });
  };
  return (
    <SafeArea>
      <ListAddress onHandle={onHandleAddress}/>
    </SafeArea>
  );
};

export default ListAddressScreen;
