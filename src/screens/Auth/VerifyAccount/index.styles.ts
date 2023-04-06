import styled from "styled-components";
import { View, TouchableOpacity } from 'react-native';
import Typography from './../../../core/Typography/index';

export const VerifyWrapper = styled(View)`
    flex : 1;
    backgroundColor: ${props => props.theme.colors.white};
`
export const TitleVerify = styled(View)`
    alignItems: center;
    paddingVertical: 12px;
    paddingHorizontal: 24px;
    marginTop: 16px;
    backgroundColor:  ${props => props.theme.colors.borderPrimary};
`
export const EmailName = styled(Typography)`
    color: ${props => props.theme.colors.secondary}
    fontWeight: 500;
`
export const ButtonWrapper = styled(View)`
    flex : 1;
    justifyContent: flex-end;
`
export const ButtonStyle = styled(TouchableOpacity)`
    backgroundColor: ${props => props.theme.colors.secondary};
    paddingVertical : 12px;
    marginHorizontal : 24px;
    marginBottom : 16px;
    alignItems: center;
    borderRadius: 8px;
`