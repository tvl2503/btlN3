import {StackScreenProps } from "@react-navigation/stack";
import { NAVIGATION } from "../constants/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootStackParamList = {
    [NAVIGATION.HOME_APP] : undefined;
    [NAVIGATION.PRODUCT] : {id : string};
}

export type HomeAppScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, NAVIGATION.HOME_APP>
export type ProductScreenNavigationProp = StackScreenProps<RootStackParamList, NAVIGATION.PRODUCT>