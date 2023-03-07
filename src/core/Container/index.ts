import styled from "styled-components/native";
import { ContainerProps } from "./index.style";
import { COLORS } from "../../theme/colors";

const Container = styled.View<ContainerProps>`
    flex: 1
    flexDirection: ${(props) => props.direction || 'column'}
    justifyContent: ${(props) => props.justifyContent || 'flex-start'}
    backgroundColor : ${(props) =>props.backgroundColor || COLORS.white}
    marginTop: ${(props) => props.marginTop || 0}px
    marginBottom: ${(props) => props.marginBottom || 0}px
    marginVertical: ${(props) => props.marginVertical || 0}px
    marginHorizontal: ${(props) => props.marginHorizontal || 0}px
    paddingHorizontal: ${(props) => props.paddingHorizontal || 16}px
    paddingVertical: ${(props) => props.paddingVertical || 0}px
`

export default Container;
