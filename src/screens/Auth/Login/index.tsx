import React from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import SafeArea from '../../../core/SafeArea';
import Typography from '../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import Container from '../../../core/Container';
import { COLORS } from '../../../theme/colors';
import Input from '../../../core/Input';
import { IONICONS_NAME } from '../../../constants/icons/ionicons';
import Icons from '../../../core/Icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen: React.FC = () => {
  return (
    <Container
      paddingHorizontal={40}
      paddingVertical={16}
      backgroundColor={COLORS.white}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View>
        <Typography variant={TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM}>
          Nhập Email của bạn
        </Typography>
        <Icons.Ionicons
          name={IONICONS_NAME.CHECKMARK}
          color={COLORS.black}
          size={25}
        />
        <Typography style={{ marginTop: 10 }} variant={TYPOGRAPHY_VARIANT.BODY}>
          Chúng tôi sẽ gửi gửi cho bạn một tin nhắn với mã xác nhận đăng nhập.
        </Typography>
      </View>
    </Container>
  );
};

export default LoginScreen;
