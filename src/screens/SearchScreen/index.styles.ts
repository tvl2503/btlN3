import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import Typography from "../../core/Typography";

export const SearchScreenwrapper = styled(View)`
    flex: 1;
    backgroundColor: #F5F5F5;
`
export const HeaderWrapper = styled(View)`
    height: 92px;
    backgroundColor: ${props => props.theme.colors.white};
    flexDirection: row;
    paddingHorizontal: 24px;
    justifyContent: space-between;
    alignItems: center;
`
export const TitleHeader = styled(Typography)`

`
export const IconWrapperHeader = styled(TouchableOpacity)`
    width: 32px;
    height: 32px;
    borderRadius: 16px;
    alignItems: center;
    justifyContent: center;
`
export const ListProductWrapper = styled(View)`
    flex : 1;
    marginTop: 16px;
    marginHorizontal: 16px;
`