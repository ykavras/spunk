// @flow

import React from 'react'
import { Animated } from 'react-native'
import styles from './styles'

type PropsType = {
  type?: 'primary' | 'accent' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  top: number,
  bottom: number,
  left: number,
  right: number,
  up: number,
  down: number
}

function AnimationBox(props: PropsType) {
  const {
    type, size, top, bottom, left, right, up, down
  } = props

  return (
    <Animated.View
      style={[
        styles.animatedLine,
        styles[size],
        styles[type],
        {
          top,
          bottom,
          left,
          right,
          marginTop: up,
          marginBottom: down
        }
      ]}
    />
  )
}

AnimationBox.defaultProps = {
  type: 'primary',
  size: 'small'
}

export default AnimationBox
