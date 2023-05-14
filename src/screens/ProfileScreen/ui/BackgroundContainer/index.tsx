import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  ContainerInfoUser,
  ImageBackground,
  UserAvatar,
  UserAvatarContainer,
} from './index.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/types';
import { User } from '../../../../models/user';
import Typography from '../../../../core/Typography';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';

const BackgroundContainer = () => {
  const user = useSelector<RootState, User | null | undefined>(
    state => state.user?.user,
  );
  return (
    <Container>
      <ImageBackground source={require('../../../../assets/BannerHome.png')} />
      <UserAvatarContainer>
        <UserAvatar source={require('../../../../assets/default-image.jpg')} />
      </UserAvatarContainer>
      <ContainerInfoUser>
        <Typography
          style={styles.textCenter}
          variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
          {user?.username}
        </Typography>
      </ContainerInfoUser>
    </Container>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
});

export default BackgroundContainer;
