import React, {useRef, useState, useEffect } from "react";
import { FormContainer, InputBox, InputStyle } from "./index.styles";
import { TextInput  } from "react-native";

interface State{
    first: string;
    second: string;
    third : string;
    fourth : string;
}
interface Props{
    otp : State;
    setOtp: React.Dispatch<React.SetStateAction<State>>;
}
const FormOtp : React.FC<Props> = (props) => {
    const {otp, setOtp} = props
    const firstInput = useRef<TextInput>(null);
    const secondInput = useRef<TextInput>(null);
    const thirdInput = useRef<TextInput>(null);
    const fourthInput = useRef<TextInput>(null);
    useEffect(() => {
        firstInput.current?.focus();
    }, [])
    return (
        <FormContainer>
            <InputBox>
                <InputStyle 
                    maxLength={1}
                    keyboardType="number-pad"
                    value = {otp.first}
                    ref={firstInput}
                    onChangeText={text => {
                    setOtp({...otp, first: text});
                    text && secondInput.current?.focus();
                    }}
                />
            </InputBox>
            <InputBox>
                <InputStyle 
                    maxLength={1}
                    keyboardType="number-pad"
                    value = {otp.second}
                    ref={secondInput}
                    onChangeText={text => {
                    setOtp({...otp, second: text});
                    text ? thirdInput.current?.focus() : firstInput.current?.focus();
                    }}
                />
            </InputBox>
            <InputBox>
                <InputStyle 
                    maxLength={1}
                    keyboardType="number-pad"
                    value = {otp.third}
                    ref={thirdInput}
                    onChangeText={text => {
                    setOtp({...otp, third: text});
                    text ? fourthInput.current?.focus() : secondInput.current?.focus();
                    }}
                />
            </InputBox>
            <InputBox>
                <InputStyle 
                    maxLength={1}
                    keyboardType="number-pad"
                    value = {otp.fourth}
                    ref={fourthInput}
                    onChangeText={text => {
                    setOtp({...otp, fourth: text});
                    !text && thirdInput.current?.focus();
                    }}
                />
            </InputBox>
        </FormContainer>
    )
}

export default FormOtp