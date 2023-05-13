import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

import ImageViewer from "react-native-image-zoom-viewer";
import { ImageViewNavigationProp } from "../../navigators/index.type";
import { COLORS } from "../../theme/colors";
import Icons from "../../core/Icons";
import { IONICONS_NAME } from "../../constants/icons/ionicons";

const ImageViewScreen: React.FC<ImageViewNavigationProp>  = ({route, navigation}) => {
    const images = route.params.images
    
    return(
        <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.black }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[{alignItems: 'flex-end', paddingRight: 12, paddingTop: 12 }]}>
                <Icons.Ionicons name = {IONICONS_NAME.CLOSE_OUTLINE} size = {32} color={COLORS.white} />
              </View>
            </TouchableOpacity>
            <ImageViewer
                imageUrls={images.map((item) =>  { return {url : item.src}})}
                index = {0}
                enableSwipeDown = { true }
            />
        </SafeAreaView>
    )
}

export default ImageViewScreen