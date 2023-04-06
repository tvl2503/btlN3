import styled from "styled-components";
import { View, Text, TouchableOpacity } from 'react-native';
import Typography from './../../../core/Typography/index';
import Button from "../../../core/Button";

export const HeaderBackWraper = styled(View)`
    flexDirection : row;
    alignItems : center;
    paddingHorizontal : 24px;
    paddingVertical : 12px;
`
export const IconLeftWrapper = styled(View)`
    flex : 1;
    alignItems: flex-start;
`
export const IconButton = styled(TouchableOpacity)`

`
export const TitleWrapper = styled(View)`
    flex : 4;
    alignItems: center;
    justifyContent: center;
`  
export const Title = styled(Text)`
    fontWeight : 500;
    fontSize : 16px;
    color: ${props => props.theme.colors.black}

`
export const RightWrapper = styled(View)`
    flex : 1;
    alignItems: flex-end;
`