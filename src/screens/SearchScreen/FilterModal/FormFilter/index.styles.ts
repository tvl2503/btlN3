import styled from "styled-components";
import { View } from 'react-native';
import Typography from "../../../../core/Typography";
import { TYPOGRAPHY_VARIANT } from "../../../../constants/theme/typography";

export const FormFilterWrapper = styled(View)`
    flex: 1;
`

export const FilterItemWrapper = styled(View)`
    paddingVertical : 16px;
    borderBottomWidth: 0.5px ;
    borderColor: #ccc;
`
export const TitleFilter = styled(Typography).attrs(_ => ({
    variant: TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM
}))`
`
export const PriceRangeWrapper = styled(View)`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: 100%;
`
