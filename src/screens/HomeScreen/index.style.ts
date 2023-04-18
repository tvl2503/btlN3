import styled from "styled-components";
import { View, Image, ScrollView, Dimensions } from 'react-native';
import Input from "../../core/Input";
import Typography from "../../core/Typography";
import { FlashList } from "@shopify/flash-list";


const width = Dimensions.get('window').width
export const ContainerHomeScreen = styled(ScrollView)`
    flex : 1;
    backgroundColor : ${(props) => props.theme.colors.white}
`;
export const BannerWrapper = styled(View)`

`
export const BannerImage = styled(Image)`
    width: 100%;
    height: 136px;
`
export const TextBanner = styled(Typography) `
    position: absolute;
    color: ${(props) => props.theme.colors.white};
    marginHorizontal: 16px;
    marginTop: 80px;
    fontSize : 16px;
`;
export const InputSearch = styled(Input)`
    position: absolute;
    backgroundColor: ${(props) => props.theme.colors.white};
    marginHorizontal: 16px;
    top: 112px;
    borderRadius: 8px;
    width: ${width - 32}px;
`
export const ProductNearYouWrapper = styled(View)`
    marginTop: 44px;
`
export const TitleProductNearYou = styled(View)`
    flexDirection: row;
    justifyContent: space-between;
    paddingHorizontal: 16px;
    marginBottom: 12px;
`
export const BannerSale = styled(Image)`
    width: 100%;
    height: 167px;
    marginTop: 28px;
`