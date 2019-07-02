// @flow

import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../index'
import styles from './styles'

type PropsType = {
  onAnswer: Function
}

function QuestionBox(props: PropsType) {
  const { onAnswer } = props

  return (
    <View style={styles.wrapper}>
      <View style={styles.overlay} />
      <Text style={styles.question}> Can he do it? </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => onAnswer('yes')} title="YES" />
        <Button onPress={() => onAnswer('no')} title="NO" type="no" />
      </View>
    </View>
  )
}

export default QuestionBox
