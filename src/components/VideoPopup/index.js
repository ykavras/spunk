// @flow

import React from 'react'
import {
  View, Text,
} from 'react-native'
import { BlurView } from 'react-native-blur'
import styles from './styles'

type PropsType = {
  isShow: false,
  answerTextUp: string,
  answerTextDown: string,
  answerColorUpBox?: 'primary' | 'accent' | 'secondary',
  answerColorDownBox?: 'primary' | 'accent' | 'secondary',
}

function VideoPopup(props: PropsType) {
  const {
    isShow, answerTextUp, answerTextDown, answerColorUpBox, answerColorDownBox
  } = props
  if (isShow === true) {
    return (
      <View style={styles.popup}>
        <BlurView
          style={styles.blur}
          blurType="dark"
          blurAmount={14}
        />
        <View style={styles.blurColor} />
        <View style={styles.answer}>
          <View style={[styles.answerColorBox, styles.upBox, styles[answerColorUpBox]]}>
            <Text style={styles.answerText}>{answerTextUp}</Text>
          </View>
          <View style={[styles.answerColorBox, styles[answerColorDownBox]]}>
            <Text style={styles.answerText}>{answerTextDown}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (<View />)
}

VideoPopup.defaultProps = {
  answerColorUpBox: 'accent',
  answerColorDownBox: 'secondary'
}
export default VideoPopup
