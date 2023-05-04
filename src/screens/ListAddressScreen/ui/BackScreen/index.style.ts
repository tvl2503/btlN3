import styled from "styled-components/native";
import Icons from "../../../../core/Icons";

export const BackScreenWrapper = styled(Icons.Ionicons).attrs(props => ({
  color: props.theme.colors.secondary,
  size: 24,
}))`
  margin-left: ${props => props.theme.sizes.xl};
`;