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

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  const { data } = useQuery({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  const dispatchAction = useDispatchAction();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable
        onPress={() =>
          dispatchAction(ACTION_TYPE.TEST, {
            a: 1,
            b: 2,
            c: 3,
          })
        }>
        <Text>Home Screen</Text>
      </Pressable>
      <Test />
    </View>
  );
};

const Another = () => {
  const ref = useRef<Modalize>(null);
  const { data } = useQuery({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Portal>
        <Modal ref={ref}>
          <Text>Test Modal</Text>
        </Modal>
      </Portal>
      <Button onPress={() => ref.current?.open()}>Hello</Button>
      <Tree multiple>
        <TreeItem eventKey="Key">Hello</TreeItem>
        <TreeItem eventKey="Key2">Hello2</TreeItem>
      </Tree>
    </View>
  );
};

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <Stack.Navigator initialRouteName='test'>
        <Stack.Screen name='test' component={Home}/>
        <Stack.Screen name='abc' component={Another}/>
      </Stack.Navigator> */}
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
