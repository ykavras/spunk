
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
  Stop
} from 'react-native-svg'

export default function Heart(props) {
  return (
    <Svg {...props} id="Layer_1" version="1.1" viewBox="0 0 496.158 496.158" x="0px" y="0px" xmlSpace="preserve">
      <G>
        <Path style={{ fill: '#FFFBFB' }} d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082  c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z" data-original="#E04F5F" data-old_color="#FBF3F4" />
        <Path className="active-path" style={{ fill: '#FA4B57' }} d="M374.116,155.145c-34.799-34.8-91.223-34.8-126.022,0h-0.029c-34.801-34.8-91.224-34.8-126.023,0  c-34.801,34.8-29.783,86.842,0,126.022c31.541,41.491,89.129,109.944,126.023,109.944h0.029c36.895,0,94.481-68.453,126.022-109.944  C403.9,241.988,408.916,189.946,374.116,155.145z" data-original="#FFFFFF" data-old_color="#E1C1C1" />
      </G>
    </Svg>
  )
}
