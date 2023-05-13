import React, { useEffect, useRef, useState } from 'react'
import { Product } from '../../../models/product'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { ListReivewWrapper, ListReivewHeader, RateNumeralLeft, RateNumeralRight, RateNumeralWrapper, RateStar, ListReivewDetail, ListReviewDetailHeader, LinkText } from './index.styles'
import { getReviewById } from '../../../services/review'
import useCallApi from '../../../hook/useCallApi'
import Typography from '../../../core/Typography'
import ProgressStar from '../ProgressStar'
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography'
import { calculateAverageRate } from '../../../utils/rate'
import { COLORS } from '../../../theme/colors'
import { Review } from '../../../types/review'
import { getDayMonth } from '../../../utils/date'
import ListImageReview from '../../../components/ListImageReview'
import AddReviewModal from '../AddReviewModal'
import EditorSVG from '../../../assets/svg/EditorSVG'

interface Props{
    id : string
}
const TabRate : React.FC<Props> = ({id}) => {
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);
    const onHandle = () => {
        setShow(true);
      };
    
      const onHide = () => {
        setShow(false);
      };
    const onSuccess = (data : any) => {
        setReviews(data.data)
    }
    const onGetReview  = (id : string) => {
        return getReviewById(id)
    }
    const onCallbackError = (err: any) => {
        console.log(err);
    };
    const {send, isLoading } = useCallApi({
        request : onGetReview,
        success : onSuccess,
        error: onCallbackError
    })
    useEffect(() => {
        send(id)
    }, [id])
  return (
    <>
    <AddReviewModal adjustToContentHeight  = {false} visible = {show} onHide={onHide} />
    <View style = {{flex : 1}}>
        {
            isLoading &&
            <View style = {{flex : 1, justifyContent: 'center'}}>
                <ActivityIndicator />
            </View>
        }
        { reviews.length > 0 && !isLoading && <RateNumeralWrapper>
            <RateNumeralLeft>
                <Typography style = {{fontSize: 30, lineHeight: 30, marginBottom: 8}}>{calculateAverageRate(reviews)}</Typography>
                <RateStar readonly = {true} imageSize = {18} startingValue = {calculateAverageRate(reviews)} />
                <Typography variant= {TYPOGRAPHY_VARIANT.ACTION_12_MEDIUM} style = {{marginTop: 16}}>{reviews.length} Đánh giá</Typography>
            </RateNumeralLeft>
            <RateNumeralRight>
                <ProgressStar reviews={reviews} />
            </RateNumeralRight>
        </RateNumeralWrapper>}
        <ListReivewWrapper>
            <ListReivewHeader>
                <LinkText onPress={onHandle}> <EditorSVG /> Viết đánh giá</LinkText>
            </ListReivewHeader>
            {
                reviews.map((item : Review, index) => (
                    <ListReivewDetail key = {index}>
                        <ListReviewDetailHeader>
                            <RateStar readonly = {true} imageSize = {13} startingValue = {item.rating} />
                            <Typography variant= {TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>{getDayMonth(item.time_creation)}</Typography>
                        </ListReviewDetailHeader>
                        <Typography>{item.title}</Typography>
                        <Typography variant= {TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>{item.user.username}</Typography>
                        <Typography style = {{color: '#595959'}} variant= {TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>{item.description}</Typography>
                        <ListImageReview review={item} />
                    </ListReivewDetail>
                ))
            }
        </ListReivewWrapper>
    </View>
    </>
    )
    }

export default React.memo(TabRate)