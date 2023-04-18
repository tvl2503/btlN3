import styled from "styled-components";
import { View } from 'react-native';
import Image from "../../core/Image";
import Typography from "../../core/Typography";

export const ListImageReviewWrapper = styled(View)`
    flexDirection: row;
    marginTop: 8px;
    justify-content: space-between;
`;

export const ImageReview = styled(Image)`
    width: 106px;
    height: 106px;
`
export const ViewMore = styled(View)`
    position: absolute;
    top: 0;
    right: 0;
    width: 106px;
    height: 106px;
    zIndex: 10;
    backgroundColor: rgba(0,0,0,0.5);
    alignItems: center;
    justifyContent: center;
    borderRadius: 4px;
`
export const TextMore = styled(Typography)`
    color: ${props => props.theme.colors.white};
    font-size: 24px;
`