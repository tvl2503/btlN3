import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import SafeArea from './../../core/SafeArea/index';
import { BannerImage, 
    BannerWrapper, 
    InputSearch, 
    TextBanner, 
    ProductNearYouWrapper,
    TitleProductNearYou, 
    ContainerHomeScreen,
    BannerSale,
    InputSearchWrapper,
    ButtonSearch,
    } from './index.style';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import { NAVIGATION } from '../../constants/navigation';
import { RootState } from '../../store/types';
import { useSelector } from 'react-redux';
import ListProduct from './ListProduct';
import Icons from '../../core/Icons';
import { IONICONS_NAME } from '../../constants/icons/ionicons';
import { HomeAppScreenNavigationProp } from '../../navigators/index.type';
import { useNavigation } from '@react-navigation/native';
interface Product {
    media_urls: string[],
    name: string,
    price: number,
    description?: string
}
const HomeScreen: React.FC = () => {
    const user = useSelector<RootState>(state => state.user?.user);
    const navigation = useNavigation<HomeAppScreenNavigationProp>();
    const [keyword, setKeyword] = useState('');
    const HandleSearch = () => {
        if (keyword.length > 0) {
                navigation.navigate(NAVIGATION.SEARCH, { keyword });
        }
    }
    return (
        <>
            
            <StatusBar translucent  backgroundColor='transparent' />
            <ContainerHomeScreen>
                <BannerWrapper>
                    <BannerImage source={require('../../assets/BannerHome.png')} />
                    <TextBanner variant= {TYPOGRAPHY_VARIANT.LABEL}>Chào buổi sáng, {user?.username}</TextBanner>
                    <InputSearchWrapper>
                        <ButtonSearch onPress={HandleSearch}>
                            <Icons.Ionicons name={IONICONS_NAME.SEARCH_OUTLINE} size={28} />
                        </ButtonSearch>
                        <InputSearch onChangeText={text => setKeyword(text)} value={keyword} placeholder='Bạn muốn tìm gì?' />
                    </InputSearchWrapper>
                </BannerWrapper>
                <ListProduct title='Được mua nhiều' query={{sort : { key : "num_buy", operator : -1 }}} />
                <BannerSale 
                    source={require('../../assets/bannerSale.png')}
                />
                
            </ContainerHomeScreen>
        </>
    )
}
export default HomeScreen;