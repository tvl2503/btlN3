import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M23 10C23.552 10 24 9.552 24 9V4C24 3.448 23.552 3 23 3H1C0.448 3 0 3.448 0 4V9C0 9.552 0.448 10 1 10C2.14 10 3 10.86 3 12C3 13.14 2.14 14 1 14C0.448 14 0 14.448 0 15V20C0 20.552 0.448 21 1 21H23C23.552 21 24 20.552 24 20V15C24 14.448 23.552 14 23 14C21.86 14 21 13.14 21 12C21 10.86 21.86 10 23 10ZM8.5 7C9.328 7 10 7.672 10 8.5C10 9.328 9.328 10 8.5 10C7.672 10 7 9.328 7 8.5C7 7.672 7.672 7 8.5 7ZM15.5 17C14.672 17 14 16.328 14 15.5C14 14.672 14.672 14 15.5 14C16.328 14 17 14.672 17 15.5C17 16.328 16.328 17 15.5 17ZM8 17.414L6.586 16L16 6.586L17.414 8L8 17.414Z"
      fill="url(#paint0_linear_5828_4394)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_5828_4394"
        x1={12}
        y1={21}
        x2={3.00236}
        y2={11.7937}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF7A45" />
        <Stop offset={1} stopColor="#FF9C6E" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
