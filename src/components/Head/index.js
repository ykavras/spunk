// @flow

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type PropsType = {
  title: string,
  type?: 'primary' | 'accent' | 'secondary',
  onPress: Function
}

function Head(props: PropsType) {
  const {
    title, type, onPress
  } = props

  return (
    <View style={styles.head}>
      <View style={[styles.headPattern, styles.type, styles[type]]} />
      <TouchableOpacity style={styles.headBackBtn} onPress={onPress}>
        <Text style={styles.headBackBtnTitle}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.headTitle}>{title}</Text>
    </View>
  )
}

Head.defaultProps = {
  type: 'primary',
}

export default Head
