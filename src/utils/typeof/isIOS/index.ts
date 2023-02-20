import { Platform } from 'react-native';

const isIOS = () => {
  return Platform.OS === 'ios';
};

export default isIOS;
