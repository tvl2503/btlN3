import React from "react";
import { Product } from "../../../models/product";
import { ImageProduct, Line, NameProduct, PriceText, PriceWrapper, ProductCardWrapper } from "./index.styles";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
import { truncate } from "../../../utils/string";
import Icons from "../../../core/Icons";
import { IONICONS_NAME } from "../../../constants/icons/ionicons";
import { COLORS } from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { SearchScreenNavigationProp } from "../../../navigators/index.type";
import { NAVIGATION } from "../../../constants/navigation";
const imgDefault = require("../../../assets/default-image.jpg")
interface Props extends SearchScreenNavigationProp{
    product: Product
}

const ProductCardSearch : React.FC<Props> = ({product, navigation}) => {
    const handleClick = () => {
        navigation.navigate(NAVIGATION.PRODUCT, {id : product._id})
    }
    return(
        <ProductCardWrapper onPress={handleClick}>
             <ImageProduct 
                source={product.media_urls.length > 0 ? { uri : product.media_urls[0].src} : imgDefault}
            />
            <NameProduct
                variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}
            >
                {truncate(product.name, 50)}
            </NameProduct>
            <Line />
            <PriceWrapper>
                <PriceText>{product.price.original_price} đ</PriceText>
                <Icons.MaterialCommunityIcons name = {IONICONS_NAME.DOTS_HORIZONTAL} color={COLORS.neutral_4} size = {16} />
            </PriceWrapper>
        </ProductCardWrapper>
    )
}

export default ProductCardSearch