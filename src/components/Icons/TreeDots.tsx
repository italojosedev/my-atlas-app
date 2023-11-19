import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconTreeDots = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9 12.724a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconTreeDots;
