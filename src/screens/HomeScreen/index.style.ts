import styled from "styled-components";
import { View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Typography from "../../core/Typography";
import { TextInput } from "react-native-gesture-handler";


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
export const InputSearchWrapper = styled(View)`
    flexDirection: row;
    position: absolute;
    top: 112px;
    width: ${width - 32}px;
    marginHorizontal: 16px;
    borderRadius: 8px;
    backgroundColor: ${(props) => props.theme.colors.white};
    alignItems: center;
    paddingHorizontal: 16px;
    borderWidth: 0.5px;
    borderColor: ${(props) => props.theme.colors.borderPrimary};
`
export const ButtonSearch = styled(TouchableOpacity)`
    borderWidth: 0;
    width: 40px;
`
export const InputSearch = styled(TextInput)`
    flex : 1;
    borderWidth: 0;
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