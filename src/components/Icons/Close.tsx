import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconClose = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.75 15.75 2.25 2.25M15.75 2.25l-13.5 13.5"
    />
  </Svg>
);
export default IconClose;
