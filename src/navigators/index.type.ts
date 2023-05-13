import { StackScreenProps } from '@react-navigation/stack';
import { NAVIGATION } from '../constants/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  [NAVIGATION.HOME_APP]: undefined;
  [NAVIGATION.PRODUCT]: { id: string };
  [NAVIGATION.SEARCH]: { keyword: string };
  [NAVIGATION.CREATE_ADDRESS]: undefined;
  [NAVIGATION.IMAGE_VIEW]: {images: Array<any>};
};

export type HomeAppScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  NAVIGATION.HOME_APP
>;
export type ProductScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  NAVIGATION.PRODUCT
>;
export type SearchScreenNavigationProp = StackScreenProps<
  RootStackParamList,
  NAVIGATION.SEARCH
>;
export type CreateAddressNavigationProp = StackScreenProps<
  RootStackParamList,
  NAVIGATION.CREATE_ADDRESS
>;
export type ImageViewNavigationProp = StackScreenProps<
  RootStackParamList,
  NAVIGATION.IMAGE_VIEW
>;