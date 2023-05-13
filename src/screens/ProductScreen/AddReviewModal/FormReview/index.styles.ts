import styled from "styled-components";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Rating } from "react-native-ratings";
import { INPUT_RADIUS, INPUT_VARIANT } from "../../../../constants/theme/input";
import Image from "../../../../core/Image";
import Icons from "../../../../core/Icons";
import Form from "../../../../core/Form";

export const FormWrapper = styled(View)`
    flex : 1;
    height: 100%;
` 
export const RateWrapper = styled(View)`
    paddingVertical : 36px;
`

export const RateStarInput = styled(Rating)`
`
export const MainForm = styled(View)`
    flex : 1;
`
export const InputDescription = styled(Form.Input).attrs(props => ({
    variant: INPUT_VARIANT.FILL_WHITE
  }))`
    margin-top: ${props => props.theme.sizes.xl};
    textAlignVertical : top;
`;
export const UploadImageWrapper = styled(View)`
    height: 84px;
    flexDirection: row;
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
export const ImageUploadWrapper = styled(View)`
    marginRight: 16px;
`
export const ImageUpload = styled(Image)`
    width: 84px;
    height: 84px;
`
export const CloseImage = styled(View)`
    position: absolute;
    bottom: 5px;
    left: 5px;
`
export const LoadingUploadImage = styled(View)`
    width: 84px;
    height: 84px;
    marginRight: 16px;
    alignItems: center;
    justifyContent: center;
`
export const ButtonSubmitWrapper = styled(View)`
    background: ${props => props.theme.colors.white};
    padding-bottom: ${props => props.theme.sizes.xl};
    border-color: ${props => props.theme.colors.neutral_6};
    padding-top: ${props => props.theme.sizes.xl};
`