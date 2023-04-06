import styled from "styled-components";
import { View, Image } from 'react-native';
import Typography from "../../../core/Typography";

interface IconWrapperProp{
    marginLeft? : number
}
export const ProductCardWrapper = styled(View)`
    width : 163px;
`
export const ImageProduct = styled(Image)`
    width: 163px;
    height: 163px;
`
export const NameProduct = styled(Typography)`
    flexWrap: wrap;
    fontSize: 14px;
    lineHeight: 22px;
    marginVertical: 8px;
`
export const ViewExtra = styled(View)`
    flexDirection: row;
    marginBottom: 12px;
`
export const IconWrapper = styled(View)<IconWrapperProp>`
    flexDirection: row;
    alignItems: center;
    marginLeft: ${(props) => props?.marginLeft || 0}px;
`
export const Line  = styled(View)`
    height: 1px;
    backgroundColor : ${props => props.theme.colors.borderPrimary};
`
export const PriceWrapper = styled(View)`
    flexDirection: row;
    justifyContent: space-between;
    marginTop: 5px;
    alignItems: center;
`
export const PriceText = styled(Typography)`
    color: ${props => props.theme.colors.danger}
`