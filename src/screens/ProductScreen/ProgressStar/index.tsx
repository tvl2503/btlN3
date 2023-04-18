import React from "react";
import { ItemWrapper, ProgressStarWrapper } from "./index.styles";
import ProgressBar from "../../../core/ProgressBar";
import { handleNumberRate } from "../../../utils/rate";
import Typography from "../../../core/Typography";
import { View } from "react-native";
import { Review } from "../../../models/review";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
type Percent = number & { __percent: true };

function createPercent(value: number): Percent {
  if (value < 0 || value > 1) {
    throw new Error('Invalid percent value. Value must be between 0 and 1');
  }
  return value as Percent;
}
type Reivews = {
    reviews : Review[]
}
const ProgressStar : React.FC<Reivews> = ({reviews}) => {

    const renderItem = (index :number, rating : Percent) => {
        return <ItemWrapper key = {index}>
            <View>
                <ProgressBar percent={rating} />
            </View>
            <Typography variant={TYPOGRAPHY_VARIANT.LABEL}>{5 - index} Sao </Typography>
        </ItemWrapper>
    }
    
    return(
        <ProgressStarWrapper>
            {
                handleNumberRate(reviews)?.map((item : any, index : number) => {
                    return renderItem(index, item.percentage)
                })
            }
        </ProgressStarWrapper>
    )
}

export default ProgressStar;