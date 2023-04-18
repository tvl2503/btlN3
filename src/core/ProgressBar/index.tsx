import React from 'react'
import * as Progress from 'react-native-progress';
import { COLORS } from '../../theme/colors';

type Percent = number & { __percent: true };

function createPercent(value: number): Percent {
  if (value < 0 || value > 1) {
    throw new Error('Invalid percent value. Value must be between 0 and 1');
  }
  return value as Percent;
}

type Props = {
    percent: Percent,
    width? : number
}
const ProgressBar : React.FC<Props> = ({percent, width = 200}) => {
  return (
    <Progress.Bar progress={createPercent(percent)} borderWidth = {0} width={width} color={COLORS.warning} unfilledColor = {COLORS.gray_6} />
  )
}

export default ProgressBar