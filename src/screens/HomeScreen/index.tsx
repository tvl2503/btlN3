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
    } from './index.style';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';
import Typography from '../../core/Typography';
import Link from '../../core/Link';
import { NAVIGATION } from '../../constants/navigation';
import ProductCard from '../../components/shared/ProductCard';
import { FlashList } from '@shopify/flash-list';
import useCallApi from '../../hook/useCallApi';
import { RootState } from '../../store/types';
import { useSelector } from 'react-redux';
import ListProduct from './ListProduct';
interface Product {
    media_urls: string[],
    name: string,
    price: number,
    description?: string
}
const HomeScreen: React.FC = () => {
    const user = useSelector<RootState>(state => state.user?.user);
    return (
        <>
            
            <StatusBar translucent  backgroundColor='transparent' />
            <ContainerHomeScreen>
                <BannerWrapper>
                    <BannerImage source={require('../../assets/BannerHome.png')} />
                    <TextBanner variant= {TYPOGRAPHY_VARIANT.LABEL}>Chào buổi sáng, {user?.username}</TextBanner>
                    <InputSearch placeholder='Bạn muốn tìm gì?' />
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