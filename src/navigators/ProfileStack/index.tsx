import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PROFILE_STACK } from '../../constants/stack/profile';
import { NAVIGATION } from '../../constants/navigation';
import { BILL_STATUS, Bill } from '../../models/bill';

export type ProfileStackProps = {
  [NAVIGATION.PROFILE]: undefined;
  [NAVIGATION.TRANSACTION_HISTORY]: {
    status?: BILL_STATUS
  },
  [NAVIGATION.TRANSACTION_DETAIL]: {
    detail: Bill
  }
}

const Stack = createStackNavigator<ProfileStackProps>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        {PROFILE_STACK.map(item => <Stack.Screen key={item?.name} {...item}/>)}
      </Stack.Navigator>
  );
};

export default ProfileStack;
