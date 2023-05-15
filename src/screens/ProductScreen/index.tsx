import React, { useEffect, useRef, useState } from "react";
import { FooterWrapper, HeaderLeft, HeaderWrapper, IconWrapper, IconWrapperHeader, ImageBanner, InfoProduct, Price, PriceOld, PriceWrapper, ProductScreenWrapper, TitleProduct, ViewExtra } from "./index.styles";
import useCallApi from "../../hook/useCallApi";
import { getProduct } from "../../services/product";
import { Animated, FlatList, Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import { TYPOGRAPHY_VARIANT } from "../../constants/theme/typography";
import Icons from "../../core/Icons";
import { COLORS } from "../../theme/colors";
import { IONICONS_NAME } from "../../constants/icons/ionicons";
import Typography from "../../core/Typography";
import { calculateAverageRate } from "../../utils/rate";
import numberWithVND from "../../utils/numberwithvnd";
import { ProductScreenNavigationProp } from "../../navigators/index.type";
import TabDetailProduct from "./TabDetailProduct";
import { Product } from "../../models/product";
import { FlashList } from "@shopify/flash-list";
import Button from "../../core/Button";
import { BUTTON_VARIANT } from "../../constants/theme/button";
import { BUTTON_SIZE } from "../../core/Button/index.types";
import AddToCartModal from "./AddToCartModal";
import { NAVIGATION } from "../../constants/navigation";


const ProductScreen: React.FC<ProductScreenNavigationProp> = ({route, navigation}) => {

    const { id } = route.params;
    const [product, setProduct] = useState<any>(null);
    const scrollY = useRef(new Animated.Value(0)).current;
    const [show, setShow] = useState(false);
    const onHandle = () => {
        setShow(true);
      };
    
      const onHide = () => {
        setShow(false);
      };
    const headerOpacity = scrollY.interpolate({
        inputRange : [0, 200],
        outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
        extrapolate: "clamp",
    });
    const headerShadow = scrollY.interpolate({
        inputRange : [0, 200],
        outputRange: ['rgba(204, 204, 204, 0)', 'rgba(204, 204, 204, 1)'],
        extrapolate: "clamp",
    });
     const onGetProduct = (id: string) => {
        return getProduct(id);
      };
    const onCallbackSuccess = (data: any) => {
        setProduct(data.data)
      };
    
    const onCallbackError = (err: any) => {
        console.log(err);
    };
    const { send, isLoading } = useCallApi({
        request: onGetProduct,
        success: onCallbackSuccess,
        error: onCallbackError,
    })
    useEffect(() => {
        send(id)
    }, [])
    const renderContent = () => {
            return(
                <ScrollView style = {{flex : 1}}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                    useNativeDriver: false,
                    },
                )}>
                    <ImageBanner source = {{uri : product?.media_urls[0]?.src}}  />
                    <InfoProduct >
                        <TitleProduct variant={TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM}>{product?.name}</TitleProduct>
                        <ViewExtra>
                            <IconWrapper>
                                <Icons.Ionicons name = {IONICONS_NAME.STAR} color={COLORS.warning} size = {14} />
                                <Typography variant={TYPOGRAPHY_VARIANT.LABEL} style = {{marginLeft: 6, fontSize: 12}}>
                                {`${product?.num_reviews === 0 ? 0 : calculateAverageRate(product.reviews) + "(" + product?.num_reviews + ")" }`}
                                </Typography>
                            </IconWrapper>
                            <IconWrapper marginLeft = {16}>
                                <Icons.FontAwesome name = {IONICONS_NAME.CLOCK} color={COLORS.neutral_4} size = {14} />
                                <Typography variant={TYPOGRAPHY_VARIANT.LABEL} style = {{marginLeft: 6, fontSize: 10}}>1.6km - Tầng 1, Vincom Center Phạm Ngọc Thạch </Typography>
                            </IconWrapper>
                        </ViewExtra>
                        <PriceWrapper>
                            <Price>{numberWithVND(product.price.discount_price)}</Price>
                            <PriceOld>{numberWithVND(product.price.original_price)}</PriceOld>
                        </PriceWrapper>
                    </InfoProduct>
                    <TabDetailProduct product={new Product(product)} />
                </ScrollView>
            )
    }
    const renderHeader = () => {
          return(
            <Animated.View style = {[style.header, { backgroundColor : headerOpacity, borderColor : headerShadow}]}>
                <IconWrapperHeader onPress={() => navigation.goBack()}>
                    <Icons.Ionicons name = {IONICONS_NAME.CLOSE} size = {20} color={COLORS.white} />
                </IconWrapperHeader>
                <HeaderLeft>
                    <IconWrapperHeader style = {{marginRight: 8}} onPress={() => navigation.navigate(NAVIGATION.CART)}>
                        <Icons.Ionicons name = {IONICONS_NAME.CART_OUTLINE} size = {20} color={COLORS.white} />
                    </IconWrapperHeader>
                    <IconWrapperHeader style = {{marginRight: 8}}>
                        <Icons.Ionicons name = {IONICONS_NAME.HEART_OUTLINE} size = {20} color={COLORS.white} />
                    </IconWrapperHeader>
                    <IconWrapperHeader>
                        <Icons.MaterialCommunityIcons name = {IONICONS_NAME.DOTS_HORIZONTAL} size = {20} color={COLORS.white} />
                    </IconWrapperHeader>
                </HeaderLeft>
            </Animated.View>
          )
    }
    const renderFooter = () => {
        return (
            <FooterWrapper>
                <Button onPress={onHandle} variant={BUTTON_VARIANT.secondary} fullWidth size= {BUTTON_SIZE.lg}>
                    <Icons.Ionicons name = {IONICONS_NAME.CART_OUTLINE} size = {16} color={COLORS.white} />
                    Thêm vào giỏ hàng
                </Button>
            </FooterWrapper>
        )
    }
    return(
        <>
            { product && <>
                { Platform.OS === 'android' && <StatusBar translucent barStyle={'dark-content'}  backgroundColor='transparent' />}
                <ProductScreenWrapper>
                        <AddToCartModal product = {product} visible = {show} onHide={onHide} />
                        {renderHeader()}
                        {renderContent()}
                        {renderFooter()}
                </ProductScreenWrapper>
            </>}
        </>
    )
}

const style = StyleSheet.create({
    header: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        top : 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 86,
        alignItems: 'flex-end',
        paddingBottom: 12,
        borderBottomWidth: 1
    }
})
export default ProductScreen;