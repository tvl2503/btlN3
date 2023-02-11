import React from "react";
import { SafeAreaView  } from 'react-native';
import styled from "styled-components/native";

const SafeAreaStyle = styled.SafeAreaView`
    flex : 1
`
interface Props {
    children: JSX.Element
}
const SafeArea : React.FC<Props> = ({children}) => {
    return(
        <SafeAreaStyle>
            {children}
        </SafeAreaStyle>
    )
}

export default SafeArea