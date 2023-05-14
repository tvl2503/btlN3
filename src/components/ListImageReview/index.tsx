import React from 'react'
import { ImageReview, ListImageReviewWrapper, TextMore, ViewMore } from './index.styles'
import { Review } from '../../types/review'
import Typography from '../../core/Typography'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION } from '../../constants/navigation'
import { TouchableOpacity } from 'react-native';

type Props = {
    review : Review
}
const ListImageReview : React.FC<Props> = ({review}) => {
    const navigation = useNavigation();
    const onClickImage = (index: number) => {
        navigation.navigate(NAVIGATION.IMAGE_VIEW, { images : review.media, index : index })
    }
  return (
    <ListImageReviewWrapper>
        {
            review.media.map((item, index) => {
                if(index < 3){
                    return <TouchableOpacity onPress = {() => onClickImage(index)}>
                        <ImageReview  key = {index} source={{uri : item.src}} />
                    </TouchableOpacity>
                }
                return null;
            })
        }
        {review.media.length > 3 && <ViewMore onPress = {() => onClickImage(2)}  >
            <TextMore>+{review.media.length-3}</TextMore>
        </ViewMore>}
    </ListImageReviewWrapper>
  )
}

export default ListImageReview