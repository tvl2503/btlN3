import styled from "styled-components";
import { View, TextInput } from 'react-native';

export const FormContainer = styled(View)`
    marginHorizontal: 20px;
    marginBottom: 20px;
    justifyContent: space-evenly;
    marginVertical : 24px;
    alignItems: center;
    flexDirection: row;
`;
export const InputBox = styled(View)`
    borderRadius: 8px;
    backgroundColor: ${props => props.theme.colors.neutral_6}
`
export const InputStyle = styled(TextInput)`
    fontSize: 25px;
    color: ${props => props.theme.colors.black};
    textAlign: center;
    paddingHorizontal: 18px;
    paddingVertical: 10px;
`