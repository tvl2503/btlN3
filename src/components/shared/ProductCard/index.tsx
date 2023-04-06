import React from "react";
import { IconWrapper, ImageProduct, Line, NameProduct, PriceText, PriceWrapper, ProductCardWrapper, ViewExtra } from "./index.styles";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
import Icons from "../../../core/Icons";
import { IONICONS_NAME } from "../../../constants/icons/ionicons";
import { COLORS } from "../../../theme/colors";
import Typography from "../../../core/Typography";
import { truncate } from './../../../utils/string';
interface Product{
   product : {
    media_urls: string[],
    name: string,
    price: number,
    description?: string,
   };
}

const ProductCard = ({product} : Product) => {
    
    return(
        <ProductCardWrapper>
            <ImageProduct 
                source={{uri : product.media_urls[0]}}
            />
            <NameProduct variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>{truncate(product.name, 30)}</NameProduct>
            <ViewExtra>
                <IconWrapper>
                    <Icons.Ionicons name = {IONICONS_NAME.STAR} color={COLORS.warning} size = {14} />
                    <Typography variant={TYPOGRAPHY_VARIANT.LABEL} style = {{marginLeft: 6, fontSize: 10}}>4.4(80)</Typography>
                </IconWrapper>
                <IconWrapper marginLeft = {16}>
                    <Icons.FontAwesome name = {IONICONS_NAME.CLOCK} color={COLORS.neutral_4} size = {14} />
                    <Typography variant={TYPOGRAPHY_VARIANT.LABEL} style = {{marginLeft: 6, fontSize: 10}}>1.6km</Typography>
                </IconWrapper>
            </ViewExtra>
            <Line />
            <PriceWrapper>
                <PriceText>{product.price} đ</PriceText>
                <Icons.MaterialCommunityIcons name = {IONICONS_NAME.DOTS_HORIZONTAL} color={COLORS.neutral_4} size = {16} />
            </PriceWrapper>
        </ProductCardWrapper>
    )
}

export default ProductCard