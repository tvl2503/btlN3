import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import AppStack from './AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants/navigation';
import ProductScreen from '../screens/ProductScreen';
import { RootStackParamList } from './index.type';
import { ROOT_STACK_ELEMENTS } from '../constants/stack/root';
import SearchScreen from '../screens/SearchScreen';
import ImageViewScreen from '../screens/ImageViewScreen';

export const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name = {NAVIGATION.HOME_APP} component={AppStack}/>
        <Stack.Screen name = {NAVIGATION.PRODUCT} component={ProductScreen} />
        <Stack.Screen name = {NAVIGATION.SEARCH} component={SearchScreen} />
        <Stack.Screen name = {NAVIGATION.IMAGE_VIEW} component={ImageViewScreen} />
        {ROOT_STACK_ELEMENTS.map(item => <Stack.Screen {...item} key={item.name}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
