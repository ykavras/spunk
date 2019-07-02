import React from 'react'
import {
  Text, View, Modal, TouchableOpacity, Image
} from 'react-native'
import { BlurView } from 'react-native-blur'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import styles from './styles'
import { theme } from '../../lib'

import ProfileBoxIcon from '../../icons/downProfile/ProfileBox'
import LikeBtnIcon from '../../icons/downProfile/LikeBtn'

function AnswerModal(props) {
  const { isShowModal, answerTimeout } = props
  console.log(props)

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isShowModal}
    >
      <View style={styles.stopBox}>
        <BlurView
          style={styles.blur}
          blurType="dark"
          blurAmount={14}
        />
        <View style={styles.questionBox}>
          <View style={styles.question}>
            <Text style={[styles.questionText, styles.rotate]}>
                  Golf mü? Kim sevmez..Sizce vurabilmiş
                  midir?
            </Text>
          </View>
          <View style={styles.answerButtons}>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.answerBtn, styles.rotate]}
            >
              <Text style={styles.answerBtnTitle}>EVET</Text>
              <View style={[styles.answerBtnLine, styles.answerBtnLineYes]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.answerBtn, styles.rotate]}
            >
              <Text style={styles.answerBtnTitle}>HAYIR</Text>
              <View style={[styles.answerBtnLine, styles.answerBtnLineNo]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileBox}>
          <ProfileBoxIcon style={styles.profileBoxBG} />
          <TouchableOpacity style={styles.profileImageBox}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/img/profile-test.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeBtn}>
            <LikeBtnIcon style={styles.likeIcon} />
          </TouchableOpacity>
          <View style={styles.timing}>
            <AnimatedCircularProgress
              size={48}
              width={6}
              backgroundWidth={5}
              fill={ answerTimeout / answerTimeout * 100}
              tintColor={theme.COLOR_SECONDARY}
              backgroundColor="#ffffff"
              rotation={360}
              lineCap="round"
              duration={10000}
            >
              {fill => (
                <View style={styles.timingBg}>
                  <Text style={styles.timingPoint}>
                    {Math.round(10 * fill / 100)}
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>Aknkaragz</Text>
            <View style={styles.profileInfoBoxes}>
              <View style={[styles.profileInfoBox, styles.boxLeft]}>
                <Text style={styles.key}>Ödül:</Text>
                <Text style={styles.value}>850₺</Text>
              </View>
              <View style={[styles.profileInfoBox, styles.boxRight]}>
                <Text style={styles.key}>Derece:</Text>
                <Text style={styles.value}>Çaylak</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AnswerModal
