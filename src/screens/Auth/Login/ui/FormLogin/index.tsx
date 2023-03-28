import React, { useState } from "react";
import { FormLoginContainer, InputComposed } from "./index.style";
import Icons from "../../../../../core/Icons";
import { INPUT_SIZE } from "../../../../../constants/theme/input";
import { IONICONS_NAME } from "../../../../../constants/icons/ionicons";
import { ButtonComposed } from './../../../Register/ui/FormRegister/index.style';
import { BUTTON_SIZE } from "../../../../../core/Button/index.types";
import { BUTTON_VARIANT } from "../../../../../constants/theme/button";
import LoginSocialWrapper from './../../../../../components/shared/LoginSocialWrapper/index';

interface FormLoginProps{

}
const FormLogin : React.FC<FormLoginProps> = (props) => {
    const [active, setActive] = useState(false);

    const onPressIcon = () => {
      setActive(prevState => !prevState);
    };
    return(
        <FormLoginContainer {...props}>
            <InputComposed placeholder="Email" />
            <InputComposed placeholder="Mật khẩu"
                onPressIcon={onPressIcon}
                icon={
                    <Icons.Ionicons
                    size={20}
                    name={active ? IONICONS_NAME.EYE_OFF : IONICONS_NAME.EYE}
                    />
                }
                size={INPUT_SIZE.md}
                secureTextEntry={!active}
            />
             <ButtonComposed
                fullWidth
                size={BUTTON_SIZE.lg}
                variant={BUTTON_VARIANT.secondary}>
                Đăng nhập
            </ButtonComposed>
            <LoginSocialWrapper />
        </FormLoginContainer>
    )
}
export default FormLogin