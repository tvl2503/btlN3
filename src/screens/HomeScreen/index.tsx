import React from 'react';
import { Text, View } from 'react-native';
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
import { NAVIGATION } from '../../navigators/constants';
import ProductCard from '../../components/shared/ProductCard';
import { FlashList } from '@shopify/flash-list';
interface Product {
    media_urls: string[],
    name: string,
    price: number,
    description?: string
}
const fakeData = [
    {
        name: "Tai nghe Sony MDR ZX310AP - Chính hãng",
        media_urls : ["https://fptshop.com.vn/Uploads/Originals/2022/8/8/637955569082653401_HASP-TAINGHE-SOUNDMAX-AH335-AVT.jpg"],
        price: 22000,
        description: ""
    },
    {
        name: "Philips Shoqbox SB7200 Bluetooth Speaker",
        media_urls : ["https://fptshop.com.vn/Uploads/Originals/2022/8/8/637955569082653401_HASP-TAINGHE-SOUNDMAX-AH335-AVT.jpg"],
        price: 220000,
        description: ""
    },
    {
        name: "Áo đũi nam cộc tay cổ bẻ hai túi ngực",
        media_urls : ["https://fptshop.com.vn/Uploads/Originals/2022/8/8/637955569082653401_HASP-TAINGHE-SOUNDMAX-AH335-AVT.jpg"],
        price: 22000,
        description: ""
    }
    ,
    {
        name: "Philips Shoqbox SB7200 Bluetooth Speaker",
        media_urls : ["https://fptshop.com.vn/Uploads/Originals/2022/8/8/637955569082653401_HASP-TAINGHE-SOUNDMAX-AH335-AVT.jpg"],
        price: 220000,
        description: ""
    },
    {
        name: "Áo đũi nam cộc tay cổ bẻ hai túi ngực",
        media_urls : ["https://fptshop.com.vn/Uploads/Originals/2022/8/8/637955569082653401_HASP-TAINGHE-SOUNDMAX-AH335-AVT.jpg"],
        price: 22000,
        description: ""
    }
]
const HomeScreen: React.FC = () => {
    return (
        <SafeArea>
            <ContainerHomeScreen>
                <BannerWrapper>
                    <BannerImage source={require('../../assets/BannerHome.png')} />
                    <TextBanner variant= {TYPOGRAPHY_VARIANT.LABEL}>Chào buổi sáng, Hưng</TextBanner>
                    <InputSearch placeholder='Bạn muốn tìm gì?' />
                </BannerWrapper>
                <ProductNearYouWrapper>
                    <TitleProductNearYou>
                        <Typography variant={TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM}>Sản phẩm tốt gần bạn</Typography>
                        <Link screen = {NAVIGATION.home}>Tất cả</Link>
                    </TitleProductNearYou>
                    <FlashList 
                        data = {fakeData}
                        renderItem={({item}) => (<ProductCard product={item} />)}
                        ItemSeparatorComponent = {() => <View style={{width: 16}} />}
                        horizontal
                        estimatedItemSize = {1000}
                        showsHorizontalScrollIndicator = {false}
                        contentContainerStyle={{
                            paddingLeft: 16
                        }}
                    />
                </ProductNearYouWrapper>
                <BannerSale 
                    source={require('../../assets/bannerSale.png')}
                />
                
            </ContainerHomeScreen>
        </SafeArea>
    )
}
export default HomeScreen;