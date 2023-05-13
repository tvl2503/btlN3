import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const FilterSVG = (props : SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.833 4.5H22v1.667h-9.167V4.5ZM2 4.5h4.167v1.667H2V4.5ZM19.5 11.167H22v1.666h-2.5v-1.666ZM2 11.167h10.833v1.666H2v-1.666ZM12.833 17.833H22V19.5h-9.167v-1.667ZM2 17.833h4.167V19.5H2v-1.667Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.833 3.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333ZM4.5 5.333a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0ZM14.5 10.333a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334ZM11.167 12a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0ZM7.833 17a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333ZM4.5 18.667a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default FilterSVG