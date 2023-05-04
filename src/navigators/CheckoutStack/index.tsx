import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CHECKOUT_STACK } from '../../constants/stack/checkout';

const Stack = createStackNavigator();
const CheckoutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        {CHECKOUT_STACK.map(item => <Stack.Screen key={item.name} {...item}/>)}
      </Stack.Navigator>
  );
};

export default CheckoutStack;
