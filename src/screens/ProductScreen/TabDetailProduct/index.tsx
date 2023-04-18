import React, { useState } from "react";
import { Product } from "../../../models/product";
import { NavigationState, SceneMap, SceneRendererProps, TabBar, TabView } from "react-native-tab-view";
import {Route} from 'react-native-tab-view'
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from "../../../theme/colors";
import Typography from "../../../core/Typography";
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
    const [index, setIndex ] = useState(0);

    const renderSecene = SceneMap({
        info : () => <TabInfo product={product} />,
        rate : () => <TabRate id={product.getId} />
    })
    const renderTabbar = (props : SceneRendererProps & { navigationState: NavigationState<any> } ) => {
        return(
            <TabBar 
                {...props}
                style = {styles.tabbar}
                indicatorStyle = {{ backgroundColor: COLORS.secondary}}
                renderLabel={({ route, focused}) => (
                    <Typography style={{ color : focused ? COLORS.secondary : COLORS.neutral_4}}>
                      {route.title}
                    </Typography>
                  )}
            />
        )
    }
    return (
        <View style = {{flex: 1, minHeight: 1000}}>
            <TabView 
                lazy = {true}

                onIndexChange={setIndex} 
                navigationState={{index, routes}}
                renderScene={renderSecene}       
                renderTabBar={renderTabbar}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor : 'white', 
        elevation: 0, 
        borderTopWidth : 1, 
        borderColor : '#f5f5f5',
    }
})
export default TabDetailProduct