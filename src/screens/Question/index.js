import React, { Component } from 'react'
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import { BlurView } from 'react-native-blur'
import { ChallengeVideo } from '../../components'
import styles from './styles'

export class Question extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ChallengeVideo/>
        <BlurView
          style={styles.blur}
          blurType="dark"
          blurAmount={14}
        />
        <SafeAreaView style={styles.wrapperIn}>
          <View style={styles.head}>
            <TouchableOpacity style={styles.sideMenu}>
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>Golf mü? Kim sevmez.. Sizce vurabilmiş midir?</Text>
            <View style={styles.answerButtons}>
              <TouchableOpacity style={styles.answerBtn}>
                <Text style={styles.answerBtnTitle}>EVET</Text>
                <View style={styles.answerBtnLine} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.answerBtn}>
                <Text style={styles.answerBtnTitle}>HAYIR</Text>
                <View style={styles.answerBtnLine} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.profileInfo}></View>
        </SafeAreaView>
      </View>
    )
  }
}

export default Question
