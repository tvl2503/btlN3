import React, { useState } from "react";
import { NavigationProp, RouteProp  } from "@react-navigation/native";
import { ButtonStyle, ButtonWrapper, EmailName, TitleVerify, VerifyWrapper } from "./index.styles";
import SafeArea from "../../../core/SafeArea";
import HeaderBack from './../../../components/shared/HeaderBack';
import Typography from "../../../core/Typography";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
import FormOtp from "./FormOtp";
import { COLORS } from "../../../theme/colors";
interface Props{
    navigation : NavigationProp<any,any>,
    route : RouteProp<any>
}
interface State{
    first: string;
    second: string;
    third : string;
    fourth : string;
}
const VerifyAccount : React.FC<Props> = (props) => {
    const [otp, setOtp] = useState<State>({first: '', second: '', third: '', fourth: ''});
    const handleSubmit = () => {
        const otpNumber = `${otp.first}${otp.second}${otp.third}${otp.fourth}`
        console.log(otpNumber);
        
    }
    return(
        <SafeArea>

            <VerifyWrapper>
                <HeaderBack title = {'Nhập mã xác nhận'} />
                <TitleVerify>
                    <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
                        Vui lòng nhập mã OTP vừa được gửi tới Email :
                        {` `}
                        <EmailName variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>volinh@gmail.com</EmailName>
                    </Typography>
                </TitleVerify>
                <FormOtp otp = {otp} setOtp = {setOtp} />
                    <ButtonWrapper>
                        <ButtonStyle onPress={handleSubmit}>
                            <Typography variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM} style = {{color: COLORS.white}}  >
                                Đăng nhập
                            </Typography>
                        </ButtonStyle>
                    </ButtonWrapper>
            </VerifyWrapper>
        </SafeArea>
    )
}

export default VerifyAccount;