import React from 'react';
import BackScreen from '../../../ListAddressScreen/ui/BackScreen';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../../../constants/navigation';

const BackHomeNavigator = () => {
  const { navigate } = useNavigation();
  const onBack = () => {
    navigate(NAVIGATION.HOME);
  };
  return (
    <Pressable onPress={onBack}>
      <BackScreen />
    </Pressable>
  );
};

export default BackHomeNavigator;
