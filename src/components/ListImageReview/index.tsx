import React from 'react'
import { ImageReview, ListImageReviewWrapper, TextMore, ViewMore } from './index.styles'
import { Review } from '../../types/review'
import Typography from '../../core/Typography'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION } from '../../constants/navigation'

type Props = {
    review : Review
}
const ListImageReview : React.FC<Props> = ({review}) => {
    const navigation = useNavigation();
    const onClickImage = () => {
        navigation.navigate(NAVIGATION.IMAGE_VIEW, { images : review.media })
    }
  return (
    <ListImageReviewWrapper>
        {
            review.media.map((item, index) => {
                if(index < 3){
                    return <ImageReview key = {index} source={{uri : item.src}} />
                }
                return null;
            })
        }
        {review.media.length > 3 && <ViewMore onPress = {onClickImage}  >
            <TextMore>+{review.media.length-3}</TextMore>
        </ViewMore>}
    </ListImageReviewWrapper>
  )
}

export default ListImageReview