import { ActivityIndicatorProps, ImageProps as ImagePropsCore } from 'react-native/types';

export interface ImageProps extends ImagePropsCore {
  loadingProps?: ActivityIndicatorProps
}
