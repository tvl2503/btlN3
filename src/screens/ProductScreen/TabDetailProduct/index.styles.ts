import { View } from "react-native"
import { Rating } from "react-native-ratings"
import styled from "styled-components"


export const TabInfoWrapper = styled(View)`
    padding: 16px 20px;
    backgroundColor: ${props => props.theme.colors.white};
`
export const VoucherWrapper = styled(View)`
    padding: 16px;
`
export const VoucherItem = styled(View)`
    backgroundColor: ${props => props.theme.colors.white};
    padding: 13px 16px;
    flexDirection: row;
    border-radius: 8px;
`
export const RateNumeralWrapper = styled(View)`
    padding: 24px 16px;
    flexDirection: row;
`
export const RateNumeralLeft = styled(View)`
    padding: 16px 13px;
    backgroundColor: ${props => props.theme.colors.white};
    alignItems: center;
    border-radius: 8px;
    justify-content: center;
`
export const RateNumeralRight = styled(View)`
    flex : 1;
    margin-left: 16px;
`
export const RateStar = styled(Rating)`
    marginVetical: 12px;
`
export const ListReivewWrapper = styled(View)`
    marginHorizontal: 16px;
    borderTopWidth : 1px;
    borderColor: ${props => props.theme.colors.borderSecondary};
    flex: 1;
`
export const  ListReivewHeader = styled(View)`
    paddingVertical: 12px;
`
export const ListReivewDetail = styled(View)`
    padding: 20px 16px;
    backgroundColor: ${props => props.theme.colors.white};
    borderRadius: 8px;

`
export const ListReviewDetailHeader = styled(View)`
    flexDirection : row;
    alignItems: center;
    justifyContent: space-between;
`