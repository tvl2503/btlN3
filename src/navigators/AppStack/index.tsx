import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION } from '../constants';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import CartScreen from '../../screens/CartScreen';
import NewsScreen from '../../screens/NewsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import Icons from '../../core/Icons';
import { COLORS } from '../../theme/colors';

const Tab  = createBottomTabNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon : ({ focused, color, size }) => {
          if (route.name === NAVIGATION.HOME) {
            return (
              <Icons.Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === NAVIGATION.CATEGORY) {
            return (
              <Icons.Ionicons
                name={focused ? 'grid' : 'grid-outline'}
                size={size}
                color={color}
              />
            );
          }else if(route.name === NAVIGATION.CART){
            return (
              <Icons.Ionicons
                name={focused ? 'ios-cart' : 'ios-cart-outline'}
                size={size}
                color={color}
              />
            );
          }
          else if(route.name === NAVIGATION.NEWS){
            return (
              <Icons.Ionicons
                name={focused ? 'newspaper' : 'newspaper-outline'}
                size={size}
                color={color}
              />
            );
          }
          else if(route.name === NAVIGATION.PROFILE){
            return (
              <Icons.Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: COLORS.gray_6,
        tabBarActiveTintColor: COLORS.secondary,
        headerShown: false

      })}>
      <Tab.Screen name={NAVIGATION.HOME} component={HomeScreen}  options={{ title: 'Trang chủ' }} />
      <Tab.Screen name={NAVIGATION.CATEGORY} component={CategoryScreen}   options={{ title: 'Danh mục' }}/>
      <Tab.Screen name={NAVIGATION.CART} component={CartScreen}  options={{ title: 'Giỏ hàng' }} />
      <Tab.Screen name={NAVIGATION.NEWS} component={NewsScreen}  options={{ title: 'Tin tức' }} />
      <Tab.Screen name={NAVIGATION.PROFILE} component={ProfileScreen}  options={{ title: 'Cá nhân' }} />
    </Tab.Navigator>
  );
};

export default AppStack;