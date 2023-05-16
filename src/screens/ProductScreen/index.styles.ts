import styled from "styled-components";
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import Typography from "../../core/Typography";
interface IconWrapperProp{
    marginLeft? : number
}
const width = Dimensions.get('window').width
export const ProductScreenWrapper = styled(View)`
    flex: 1;
`
export const ImageBanner = styled(Image)`
    width: 100%;
    height : 300px;
`
export const InfoProduct = styled(View)`
    paddingHorizontal : 20px;
    paddingVertical : 16px;
    font-family : Roboto;
    backgroundColor : ${props => props.theme.colors.white}
`
export const TitleProduct = styled(Typography)`

`
export const HeaderWrapper = styled(View)`
    position: absolute;
    right: 0;
    top: 56px;
    left: 0;
    flexDirection: row;
    justifyContent: space-between;
    paddingHorizontal: 16px;
    z-index: 100;
`
export const IconWrapperHeader = styled(TouchableOpacity)`
    width: 32px;
    height: 32px;
    borderRadius: 16px;
    alignItems: center;
    justifyContent: center;
    backgroundColor: ${props => props.theme.colors.black}
`
export const HeaderLeft = styled(View)`
    flexDirection: row;
`
export const ViewExtra = styled(View)`
    flexDirection: row;
    marginBottom: 10px;
`
export const IconWrapper = styled(View)<IconWrapperProp>`
    flexDirection: row;
    alignItems: center;
    marginLeft: ${(props) => props?.marginLeft || 0}px;
`
export const PriceWrapper = styled(View)`
    alignItems: flex-end;
    flexDirection: row;

`
export const Price = styled(Typography)`
    color : ${props => props.theme.colors.danger}
`
export const PriceOld = styled(Typography)`
    textDecorationLine : line-through;
    color : ${props => props.theme.colors.gray};
    marginLeft : 8px;
`
export const FooterWrapper = styled(View)`
    position: absolute;
    bottom: 0;
    align-items: center;
    flexDirection: row;
    justifyContent: center;
    left: 0;
    right: 0;
    backgroundColor: ${props => props.theme.colors.white};
    paddingTop: 16px;
    paddingBottom: 30px;
    paddingHorizontal: 16px;
`