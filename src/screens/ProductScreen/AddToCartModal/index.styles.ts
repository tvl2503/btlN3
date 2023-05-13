import { Dimensions, Image, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import Typography from "../../../core/Typography";
import Button from "../../../core/Button";
import Input from "../../../core/Input";

const width = Dimensions.get('window').width
export const InfoProductWrapper = styled(View)`
    flexDirection: row;
`
export const ImageProduct = styled(Image)`
    width: 150px;
    height: 150px;
    borderRadius: 8px;
`
export const InfoProduct = styled(View)`
    flex : 1;
    paddingHorizontal : 16px;
`
export const NameProduct = styled(Typography)`
    flexWrap: wrap;
    fontSize: 14px;
    lineHeight: 22px;
    marginVertical: 8px;
`
export const PriceProduct = styled(Typography)`
    color: ${props => props.theme.colors.danger};
`
export const InputQuantityWrapper  = styled(View)`
    flexDirection: row;
    justifyContent: center;
    marginTop: 12px;
    alignItems: center;
`
export const CircleButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 0;
  justifyContent: center;
  alignItems: center;
  background: ${props => props.theme.colors.neutral_6};
`;
export const QuantityInput = styled(TextInput)`
    border: 1px solid #ccc;
    paddingVertical: 0;
    paddingHorizontal : 8px;
    marginHorizontal : 8px;
    width: 60px;
    textAlign: center;
`
export const ButtonSubmit = styled(TouchableOpacity)`
    justifyContent: center;
    alignItems: center;
    marginTop: 30px;
    backgroundColor: ${props => props.theme.colors.secondary};
    paddingVertical: 12px ;
    borderRadius: 8px;
`