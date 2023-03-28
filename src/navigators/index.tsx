import React, { useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Text, View, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Portal from '../core/Portal';
import Modal from '../core/Modal';
import Button from '../core/Button';
import { Modalize } from 'react-native-modalize';
import Card from '../core/Card';
import Tree from '../core/Tree';
import TreeItem from '../core/Tree/TreeItem';
import useQuery from '../hook/useQuery';
import Test from './View';
import useDispatchAction from '../hook/useDispatchAction';
import { ACTION_TYPE } from '../constants/actions';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

// const Stack = createNativeStackNavigator();

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
