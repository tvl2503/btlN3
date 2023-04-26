import styled from "styled-components";
import { View } from "react-native";
import { BACKGROUND_INPUT, INPUT_PADDING, INPUT_RADIUS, INPUT_VARIANT } from "../../constants/theme/input";
import { SelectProps } from ".";
import { SELECT_SIZE } from "../../constants/theme/select";
import Typography from "../Typography";
import Icons from "../Icons";

export const SelectItem = styled(View)<SelectProps>`
  padding: ${props => INPUT_PADDING[props.size || SELECT_SIZE.md]};
  border: 1px solid ${props => props.theme.colors.neutral_6};
  border-radius: ${INPUT_RADIUS};
  background: ${props => BACKGROUND_INPUT[props.variant || INPUT_VARIANT.STROKE]};
`;

export const TextSelectItem = styled(Typography)`
  color: ${props => props.theme.colors.gray_6};
  line-height: 0px;
`;

export const IconDropdown = styled(Icons.)