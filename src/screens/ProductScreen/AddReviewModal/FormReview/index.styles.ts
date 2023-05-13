import styled from "styled-components";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Rating } from "react-native-ratings";
import { INPUT_RADIUS } from "../../../../constants/theme/input";

export const FormWrapper = styled(View)`
    flex : 1;
` 
export const RateWrapper = styled(View)`
    paddingVertical : 36px;
`

export const RateStarInput = styled(Rating)`
`
export const MainForm = styled(View)`
    flex : 1;
`
export const InputDescription = styled(TextInput)`
    ${props => `border: 1px solid ${props.theme.colors.neutral_6}`};
    border-radius: ${INPUT_RADIUS};
    border-color: ${({theme}) => theme.colors.neutral_6};
    padding: 16px;
    fontSize : 14px;
    color: ${props => props.theme.colors.neutral_2};
`
export const UploadImageWrapper = styled(View)`
    height: 84px;
    flexDirections: row;
    marginTop: 20px;

`
export const ButtonUploadImage = styled(TouchableOpacity)`
    padding : 9px 16px;
    alignItems: center;
    border: 1px dashed #BFBFBF;
    borderRadius: 8px;
    justify-content: center;
    width: 150px;
    height: 100%;
`
export const TextButtonUpload = styled(Text)`
    alignItems: center;

`