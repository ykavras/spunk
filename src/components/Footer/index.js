// @flow

import React from 'react'
import { View } from 'react-native'
import styles from './styles'

type PropsType = {
  type?: 'primary' | 'accent' | 'secondary' | 'four',
  typeTwo?: 'primary' | 'accent' | 'secondary' | 'four',
}

function Footer(props: PropsType) {
  const {
    type, typeTwo
  } = props

  return (
    <View style={styles.footer}>
      <View style={[styles.footerPattern, styles.type, styles[type]]} />
      <View style={[styles.footerPatternTwo, styles.type, styles[typeTwo]]} />
    </View>
  )
}

Footer.defaultProps = {
  type: 'primary',
  typeTwo: 'primary',
}

export default Footer
