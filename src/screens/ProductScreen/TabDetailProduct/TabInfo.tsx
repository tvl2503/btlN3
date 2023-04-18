import React from 'react'
import { TabInfoWrapper, VoucherItem, VoucherWrapper } from './index.styles'
import Typography from '../../../core/Typography'
import { Text, View } from 'react-native'
import VoucherSVG from "../../../assets/svg/VoucherSVG";
import { Product } from '../../../models/product';


interface Props{
    product : Product
}
const TabInfo : React.FC<Props> = ({product}) => {

  return (
    <View style = {{flex : 1}}>
    <VoucherWrapper>
        <VoucherItem> 
            <VoucherSVG style = {{marginRight: 12}} />
            <Typography>Giảm 300,000 đ khi thanh toán bằng Token</Typography>
        </VoucherItem>
        <VoucherItem style = {{marginTop: 8}}> 
            <VoucherSVG style = {{marginRight: 12}} />
            <Typography>Giảm 300,000 đ khi thanh toán bằng Token</Typography>
        </VoucherItem>
    </VoucherWrapper>
    <TabInfoWrapper>
        <Text style = {{color: '#000'}}>{product.getDescription}</Text>
    </TabInfoWrapper>
    </View>
  )
}

export default TabInfo