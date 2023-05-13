import React from 'react';
import { StyleSheet } from 'react-native';
import {
  CardButton,
  ContainerSuccess,
  Content,
  Description,
  ImageContainer,
} from './index.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../core/Button';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { BUTTON_SIZE } from '../../core/Button/index.types';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants/navigation';
import Typography from '../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';

const CheckoutSuccessScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate(NAVIGATION.HOME);
  };

  return (
    <>
      <ContainerSuccess>
        <ImageContainer source={require('../../assets/Shipping.png')} />
        <Content>
          <Typography style={styles.center} variant={TYPOGRAPHY_VARIANT.HEADING_3}>
            Đặt hàng thành công
          </Typography>
          <Description>
            Bạn chờ chút nhé, nhà ngay gần phóng tí là tới
          </Description>
        </Content>
      </ContainerSuccess>
      <CardButton style={{ paddingBottom: bottom }}>
        <Button
          onPress={onNavigate}
          variant={BUTTON_VARIANT.secondary}
          fullWidth
          size={BUTTON_SIZE.lg}>
          Khám phá tiếp
        </Button>
      </CardButton>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

export default CheckoutSuccessScreen;
