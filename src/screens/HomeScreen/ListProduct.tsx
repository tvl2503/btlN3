import React, { useEffect, useState } from 'react'
import { ProductNearYouWrapper, TitleProductNearYou } from './index.style'
import Typography from '../../core/Typography'
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography'
import { NAVIGATION } from '../../constants/navigation'
import Link from '../../core/Link'
import { FlashList } from '@shopify/flash-list'
import ProductCard from '../../components/shared/ProductCard'
import { View } from 'react-native'
import useCallApi from '../../hook/useCallApi'
import { getAllProduct } from '../../services/product'
import { ProductRequest } from '../../services/product/index.types'

interface Props{
    title: string;
    query : {[key : string] : any} | { [key : string] : { [key : string] : any }}
}
const ListProduct :React.FC<Props> = ({title, query}) => {
    const [products, setProducts] = useState([]);
    const onGetProduct = (data: ProductRequest) => {
        return getAllProduct(data);
      };
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
        send(query)
    } , [])
  return (
    <ProductNearYouWrapper>
        <TitleProductNearYou>
            <Typography variant={TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM}>{title}</Typography>
            <Link screen = {NAVIGATION.HOME}>Tất cả</Link>
        </TitleProductNearYou>
        {products.length > 0 &&
            <FlashList 
            data = {products}
            renderItem={({item}) => (<ProductCard product={item} />)}
            ItemSeparatorComponent = {() => <View style={{width: 16}} />}
            keyExtractor={(item, index) => item._id}
            horizontal
            estimatedItemSize = {1000}
            showsHorizontalScrollIndicator = {false}
            contentContainerStyle={{
                paddingLeft: 16
            }}
        />}
    </ProductNearYouWrapper>
  )
}

export default ListProduct