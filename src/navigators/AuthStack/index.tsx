import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../../screens/Auth/Login";
import RegisterScreen from '../../screens/Auth/Register';
import { NAVIGATION } from "../constants";
import { Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Button from "../../core/Button";
import Icons from "../../core/Icons";
import { BUTTON_VARIANT } from "../../constants/theme/button";
import { COLORS } from "../../theme/colors";
import {  useNavigation } from '@react-navigation/native';
import { IONICONS_NAME } from "../../constants/icons/ionicons";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const navigation = useNavigation();
    return (
    <Stack.Navigator 
        initialRouteName={NAVIGATION.login}
        screenOptions={{ 
            headerShown: true, 
            headerLeft : () =>(
                <Button onPress={() => navigation.goBack()} 
                variant = {BUTTON_VARIANT.icon}><Icons.Ionicons name={IONICONS_NAME.CHECKMARK} color={COLORS.black} size = {25} /></Button>
            ),
            headerTitle : () => null
        
        }}    
    >
        <Stack.Screen name={NAVIGATION.login} component={LoginScreen}/>
        <Stack.Screen name={NAVIGATION.register} component={RegisterScreen}/>
      </Stack.Navigator>
    )
}

export default AuthStack