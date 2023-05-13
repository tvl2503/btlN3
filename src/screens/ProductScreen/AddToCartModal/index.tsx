import React, { useState } from "react";
import { ModalProps } from '../../../core/Modal/index.types'
import Modal from "../../../core/Modal";
import { Product } from "../../../models/product";
import { ImageProduct, InfoProductWrapper, InfoProduct, NameProduct, PriceProduct, InputQuantityWrapper, CircleButton, QuantityInput, ButtonSubmit } from "./index.styles";
import Typography from "../../../core/Typography";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
import { numberWithVND } from "../../../utils/string";
import Icons from "../../../core/Icons";
import { FEATHER_ICONS } from "../../../constants/icons/feather";
import useCRUDCart from "../../../hook/useCRUDCart";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../../constants/navigation";
const imgDefault = require("../../../assets/default-image.jpg")
interface ModalCreateReviewProps extends ModalProps {
    product : Product
}
const AddToCartModal : React.FC<ModalCreateReviewProps>  = (props) => {
    const { product ,...rest } = props;
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const { addProductCart } = useCRUDCart();
    const PlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const MinusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const addToCart = () => {
        addProductCart({
            id: product._id,
            quantity
        })
        navigation.navigate(NAVIGATION.CART)
    }
    return(
        <Modal {...rest}>
            <InfoProductWrapper>
                <ImageProduct 
                    source={product.media_urls.length > 0 ? { uri : product.media_urls[0].src} : imgDefault}
                />
                <InfoProduct>
                    <NameProduct variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
                        {product.name}
                    </NameProduct>
                    <PriceProduct>
                        {numberWithVND(product.price.discount_price)}
                    </PriceProduct>
                    <InputQuantityWrapper>
                        <CircleButton disabled = {quantity === 1} onPress={MinusQuantity}>
                            <Icons.Feather name={FEATHER_ICONS.MINUS} size={16} />
                        </CircleButton>
                        <QuantityInput value={quantity?.toString()} keyboardType="number-pad" />
                        <CircleButton onPress = {PlusQuantity}>
                            <Icons.Feather name={FEATHER_ICONS.PLUS} size={16} />
                        </CircleButton>
                    </InputQuantityWrapper>
                </InfoProduct>
            </InfoProductWrapper>
            <ButtonSubmit onPress={addToCart}>
                <Typography style = {{color: 'white'}}>Thêm vào giỏ hàng</Typography>
            </ButtonSubmit>
        </Modal>
    )
}

export default AddToCartModal