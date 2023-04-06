import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/Login';
import RegisterScreen from '../../screens/Auth/Register';
import Button from '../../core/Button';
import Icons from '../../core/Icons';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { IONICONS_NAME } from '../../constants/icons/ionicons';
import { NAVIGATION } from '../../constants/navigation';
import VerifyAccount from './../../screens/Auth/VerifyAccount/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.LOGIN} component={LoginScreen} />
      <Stack.Screen name={NAVIGATION.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={NAVIGATION.VERIFYACCOUNT} component={VerifyAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
