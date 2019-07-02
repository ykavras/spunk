import React from 'react'
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  TSpan
} from 'react-native-svg'
import { theme } from '../lib'

export default function Spunk(props) {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 374.604 231.276">
      <G id="Group_58" data-name="Group 58" transform="translate(-0.055 -233.56)">
        <G id="Group_57" data-name="Group 57">
          <Rect id="Rectangle_11" data-name="Rectangle 11" width="251" height="111" transform="matrix(0.966, -0.259, 0.259, 0.966, 103.482, 357.275)" fill="#ffcc32" />
          <G id="Group_6" data-name="Group 6">
            <Rect id="Rectangle_10" data-name="Rectangle 10" width="316" height="131" transform="matrix(0.966, -0.259, 0.259, 0.966, 13.538, 338.299)" fill="#fc4199" />
            <Text
              id="WELCOME_TO_SPUNK"
              data-name="WELCOME TO
SPUNK"
              transform="translate(0.055 312.426) rotate(-14)"
              fill="#fff"
              fontSize="40"
              fontFamily={theme.FONT_SEMIBOLD}
              fontWeight="700"
              fontStyle="italic"
            >
              <TSpan x="30.86" y="42">WELCOME TO </TSpan>
              <TSpan fontSize="90"><TSpan x="12.16" y="122">SPUNK</TSpan></TSpan>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
  )
}
