import styled from "styled-components/native";
import Button from "../../../../core/Button";
import Input from "../../../../core/Input";
import Row from "../../../../core/Row";

export const CircleButton = styled(Button)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 0;
  background: ${props => props.theme.colors.neutral_6};
`;

export const QuantityInput = styled(Input).attrs(_ => ({
  styleInput: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
}))`
  width: 50px;
  margin-left: ${props => props.theme.sizes.md};
  margin-right: ${props => props.theme.sizes.md};
`;

export const RowCenter = styled(Row)`
  align-items: center;
`;