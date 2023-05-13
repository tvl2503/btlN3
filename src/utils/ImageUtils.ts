import { Platform } from 'react-native'
import { Alert } from 'react-native'
import { Linking } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

export const openImagePicker = (handleChosenImage : any
    ) => {
    const  options = {
      maxWidth: 1024,
      mediaType: 'photo'
    }
    launchImageLibrary(options , (response) => {
      if (response.didCancel) {
        // console.log('zzz ImagePicker has been canceled')
      } else if (response.errorCode) {
        alertPermission()
      } else {
        handleChosenImage(response.assets[0])
      }
    })
  }
  export const alertPermission = () => {
    Alert.alert(
      'Thông báo',
      'Vui lòng cấp quyền truy cập thư viện ảnh / video cho ứng dụng',
      Platform.OS === 'ios'
        ? [
          {
            text: 'Để sau',
            style: 'cancel',
            onPress: () => {
            }
          },
          {
            text: 'Cài đặt',
            onPress: () => Linking.openURL('app-settings://photos')
          },
        ]
        : [{
          text: 'OK',
          onPress: () => {
          }
        }],
      { cancelable: false },
    )
  }
  