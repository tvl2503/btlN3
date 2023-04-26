import styled from "styled-components";
import { View } from "react-native";
import Form from "../../../../core/Form";
import { INPUT_VARIANT } from "../../../../constants/theme/input";
import Container from "../../../../core/Container";
import Button from "../../../../core/Button";

export const FormInput = styled(Form.Input).attrs(props => ({
  variant: INPUT_VARIANT.FILL_WHITE
}))`
  margin-bottom: ${props => props.theme.sizes.xl};
`;

export const FormComposed = styled(Form)`
`;

export const ContainerComposed = styled(Container)`
  background: transparent;
`;

export const MainFormContainer = styled(View)`
  flex-grow: 1;
`;

export const FormAction = styled(View)`
  background: ${props => props.theme.colors.white};
  padding-bottom: ${props => props.theme.sizes.xl};
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.neutral_6};
  padding-top: ${props => props.theme.sizes.xl};
`;

export const FormSubmitButton = styled(Button)``;

