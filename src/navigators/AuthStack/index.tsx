import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTHENTICATION_STACKS } from '../../constants/views/authentication';

const Stack = createNativeStackNavigator<any>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {AUTHENTICATION_STACKS.map(item => (
        <Stack.Screen key={item?.name} {...item as any} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
