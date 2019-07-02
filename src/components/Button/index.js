// @flow

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type PropsType = {
  title: string,
  type?: 'primary' | 'accent' | 'secondary',
  size?: 'medium' | 'large',
  textSize?: 'textMedium' | 'textLarge',
  onPress: Function,
  style: null,
}

function Button(props: PropsType) {
  const {
    title, type, size, textSize, onPress, style
  } = props

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[type], styles[size], style]}>
      <Text style={[styles.title, styles[textSize]]}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  textSize: 'textMedium',
}

export default Button
