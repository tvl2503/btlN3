import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CART_STACK } from '../../constants/stack/cart';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {CART_STACK.map(item => (
        <Stack.Screen {...item} key={item.name}/>))}
    </Stack.Navigator>
  );
};

export default CartStack;
