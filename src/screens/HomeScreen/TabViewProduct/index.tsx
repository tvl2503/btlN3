import React, { useState } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { COLORS } from '../../../theme/colors';

const routes = [
    {
        key : "new",
        title : "Mới nhất"
    },
    {
        key: "discount",
        title: "Giảm giá mạnh"
    },
    {
        key: "popular",
        title: "Phổ biến"
    }
]
const TabViewProduct: React.FC<any> = (props) => {
    const [index, setIndex] = useState(0);
    const renderScene = ({route}) => {
        switch(route.key){
            case 'new' : 

        }
    }
    const renderTabBar = (props) => {
        return(
            <TabBar 
                {...props}
                indicatorStyle = {{color : COLORS.secondary}}
                renderLabel={(route) => {
                    
                }}
            />
        )
    }
    return(
        <TabView 
            onIndexChange={index => setIndex(index)}
            navigationState={{ index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
        />
    )
} 

export default TabViewProduct