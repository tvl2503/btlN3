import React, { ReactNode } from "react";
import { HeaderBackWraper, IconButton, IconLeftWrapper, RightWrapper, Title, TitleWrapper } from "./index.styles";
import Icons from "../../../core/Icons";
import { IONICONS_NAME } from "../../../constants/icons/ionicons";
import { BUTTON_VARIANT } from "../../../constants/theme/button";
import { useNavigation } from '@react-navigation/native';

interface Props{
    title?: string,
    right?: ReactNode
}
const HeaderBack: React.FC<Props> = (props) => {
    const naviagiton = useNavigation()
    return(
        <HeaderBackWraper>
            <IconLeftWrapper>
                <IconButton onPress = {() => naviagiton.goBack()}>
                    <Icons.Ionicons name = {IONICONS_NAME.CHEVRON_BACK} size = {24} />
                </IconButton>
            </IconLeftWrapper>
            <TitleWrapper>
                <Title>{props.title}</Title>
            </TitleWrapper>
            <RightWrapper>
                {props.right}
            </RightWrapper>
        </HeaderBackWraper>
    )
}

export default HeaderBack;