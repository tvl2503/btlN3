import React, { useState } from "react";
import { Product } from "../../../models/product";
import {Route} from 'react-native-tab-view'
import { StyleSheet, Text, View } from 'react-native';
import TabInfo from './TabInfo';
import TabRate from "./TabRate";

interface Props {
    product : Product
}
const routes : Route[]= [
    {
        key: 'info',
        title: 'Thông tin'
    },
    {
        key : 'rate',
        title: 'Đánh giá'
    }
]

const TabDetailProduct : React.FC<Props> = ({product}) => {
    return (
        <View style = {{flex: 1, marginBottom: 100}}>
            <TabInfo product={product} />
            <TabRate id={product._id} />
        </View>
    )
}


export default TabDetailProduct