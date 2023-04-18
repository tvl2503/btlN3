import React from 'react'
import { ImageReview, ListImageReviewWrapper, TextMore, ViewMore } from './index.styles'
import { Review } from '../../types/review'
import Typography from '../../core/Typography'

type Props = {
    review : Review
}
const ListImageReview : React.FC<Props> = ({review}) => {
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
        {review.media.length > 3 && <ViewMore >
            <TextMore >+{review.media.length-3}</TextMore>
        </ViewMore>}
    </ListImageReviewWrapper>
  )
}

export default ListImageReview