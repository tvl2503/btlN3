import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, Text } from "react-native";
import { SearchScreenNavigationProp } from "../../navigators/index.type";
import { HeaderWrapper, IconWrapperHeader, ListProductWrapper, SearchScreenwrapper, TitleHeader } from "./index.styles";
import { IONICONS_NAME } from "../../constants/icons/ionicons";
import { COLORS } from "../../theme/colors";
import Icons from "../../core/Icons";
import FilterSVG from "../../assets/svg/FilterSVG";
import { TYPOGRAPHY_VARIANT } from "../../constants/theme/typography";
import { Product } from "../../models/product";
import { ProductRequest } from "../../services/product/index.types";
import { getAllProduct } from "../../services/product";
import useCallApi from "../../hook/useCallApi";
import ProductCardSearch from "./ProductCardSearch";
import { View } from "react-native";


const SearchScreen : React.FC<SearchScreenNavigationProp> = ({route, navigation}) => {
    const { keyword } = route.params;
    const [products, setProducts] = useState<Product[]>([]);
    const onGetProduct = (data: ProductRequest) => {
        return getAllProduct(data);
    }
    const onCallbackSuccess = (data: any) => {
        
        setProducts(data.data)
      };
    
    const onCallbackError = (err: any) => {
    console.log(err);
    };
    const { send, isLoading } = useCallApi({
        request: onGetProduct,
        success: onCallbackSuccess,
        error: onCallbackError,
    })
    useEffect(() =>{
        send({
            filter : [
               { key: "name",
                value: keyword,
                operator : "like"}
            ]
        })
    } , [])
    return (
        <SearchScreenwrapper>
            <StatusBar translucent barStyle={'dark-content'}  />
            <HeaderWrapper>
                <IconWrapperHeader onPress={() => navigation.goBack()}>
                    <Icons.Ionicons name = {IONICONS_NAME.CHEVRON_BACK} size = {24}  />
                </IconWrapperHeader>
                <TitleHeader variant= {TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM}>
                    Tìm kiếm: {keyword}
                </TitleHeader>
                <IconWrapperHeader>
                    <FilterSVG />
                </IconWrapperHeader>
            </HeaderWrapper>
            <ListProductWrapper>
                {
                    products.length > 0 && 
                    <FlatList
                        data = {products}
                        renderItem={({item}) => <ProductCardSearch route = {route} product = {item} navigation = {navigation} />}
                        keyExtractor={(item, index) => item._id}
                        numColumns={2}
                        ItemSeparatorComponent = {() => <View style={{height: 16}} />}
                        columnWrapperStyle = {{ justifyContent: "space-between" }}
                    />
                }
            </ListProductWrapper>
        </SearchScreenwrapper>
    )
}


export default SearchScreen;