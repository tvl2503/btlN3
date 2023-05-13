import { Image } from "react-native";
import { View } from "react-native";
import styled from "styled-components";
import Typography from "../../../core/Typography";
import { TouchableOpacity } from "react-native";

export const ProductCardWrapper = styled(TouchableOpacity)`
    padding: 10px;
    backgroundColor: ${props => props.theme.colors.white}; 
    borderRadius: 8px;
    width : 183px;
`
export const ImageProduct = styled(Image)`
    width: 163px;
    height: 163px;
    borderRadius: 8px;
`
export const NameProduct = styled(Typography)`
    flexWrap: wrap;
    fontSize: 14px;
    lineHeight: 22px;
    marginVertical: 8px;
    height: 45px;
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