import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath,RadialGradient,Stop,Rect} from "react-native-svg"


export const CropIcon = ({props,color}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#484C52"
      d="M7.5 2.625a1.125 1.125 0 0 0-2.25 0V5.25H2.625a1.125 1.125 0 0 0 0 2.25H5.25v6.75a4.5 4.5 0 0 0 4.5 4.5h6.75v2.625a1.125 1.125 0 1 0 2.25 0V18.75h2.625a1.125 1.125 0 1 0 0-2.25H9.75a2.25 2.25 0 0 1-2.25-2.25V2.625Zm9 7.125V15h2.25V9.75a4.5 4.5 0 0 0-4.5-4.5H9V7.5h5.25a2.25 2.25 0 0 1 2.25 2.25Z"
    />
  </Svg>
  )

  export const RotateIcon = ({props,color}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#484C52"
      d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34ZM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11ZM16 14h2V8a2 2 0 0 0-2-2h-6v2h6v6Zm-8 2V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2h2v-2H8Z"
    />
  </Svg>
  )
  

  export const ResizeIcon = ({props,color}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#484C52"
      d="M3 3v6.75h1.5V5.578L10.922 12 4.5 18.422V14.25H3V21h6.75v-1.5H5.578L12 13.078l6.422 6.422H14.25V21H21v-6.75h-1.5v4.172L13.078 12 19.5 5.578V9.75H21V3h-6.75v1.5h4.172L12 10.922 5.578 4.5H9.75V3H3Z"
    />
  </Svg>
  )

  export const TextIcon = ({props,color}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#484C52"
      d="M9.15 4.625h4.635V6.5h1.875V2.75H.75V6.5h1.875V4.625h4.65v15.75H4.05v1.875h8.325v-1.875H9.15V4.625Z"
    />
    <Path
      fill="#484C52"
      d="M18.6 10.625h-6.51v3.75h1.875V12.5h2.76v7.875h-2.28v1.875h6.45v-1.875H18.6V12.5h2.775v1.875h1.875v-3.75H18.6Z"
    />
  </Svg>
  )
  
  export const ShapeIcon = ({props,color}) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#484C52"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.75 15H1.5L8.625 2.25 15.75 15Z"
    />
    <Path
      stroke="#484C52"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.437 9.118A6.75 6.75 0 1 1 9 15"
    />
  </Svg>
  )