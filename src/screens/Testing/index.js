import React, { Component } from 'react'
import {
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { BlurView } from 'react-native-blur'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { NavigationState, NavigationScreenProp } from 'react-navigation'
import styles from './styles'
import { ChallengeVideo } from '../../components'
import { theme } from '../../lib'

import MenuIcon from '../../icons/headNav/Menu'
import SpunkLogo from '../../icons/headNav/Spunk'
import QuestionIcon from '../../icons/headNav/Question'
import ProfileBox from '../../icons/downProfile/ProfileBox'
import LikeBtn from '../../icons/downProfile/LikeBtn'

const MAX_POINTS = 10

export default class Testing extends Component {
  state = {
    points: MAX_POINTS,
    isShowTopBox: false,
  }

  openControlPanel = () => {
    this.props.navigation.openDrawer()
  }

  closeStopBox = () => {
    this.setState({ isShowTopBox: false })
    setTimeout(() => {

    })
  }

  test = () => {
    setTimeout(() => {
      this.setState({ isShowTopBox: true })
    }, 5000)
  }

  render() {
    this.test()
    const fill = this.state.points / MAX_POINTS * 100
    const { isShowTopBox } = this.state
    return (
      <View style={styles.wrapper}>
        <StatusBar hidden />
        <View style={styles.headNav}>
          <TouchableOpacity style={styles.headNavBtn} onPress={this.openControlPanel}>
            <MenuIcon style={styles.headNavIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headNavBtn}>
            <SpunkLogo style={styles.headNavIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headNavBtn}>
            <QuestionIcon style={styles.headNavIcon} />
          </TouchableOpacity>
        </View>
        <Swiper
          autoplay
          autoplayTimeout={10}
          loop={false}
          showsPagination={false}
        >
          <View style={styles.slide}>
            <ChallengeVideo
              onSlowMotionStart={2}
              onSlowMotionEnd={2}
              pauseTime={2}
              style={styles.image}
            />
          </View>
        </Swiper>
        {
          isShowTopBox ? (
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
                    onPress={this.closeStopBox}
                    style={[styles.answerBtn, styles.rotate]}
                  >
                    <Text style={styles.answerBtnTitle}>EVET</Text>
                    <View style={[styles.answerBtnLine, styles.answerBtnLineYes]} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.closeStopBox}
                    style={[styles.answerBtn, styles.rotate]}
                  >
                    <Text style={styles.answerBtnTitle}>HAYIR</Text>
                    <View style={[styles.answerBtnLine, styles.answerBtnLineNo]} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.profileBox}>
                <ProfileBox style={styles.profileBoxBG} />
                <TouchableOpacity style={styles.profileImageBox}>
                  <Image
                    style={styles.profileImage}
                    source={require('../../assets/img/profile-test.jpg')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeBtn}>
                  <LikeBtn style={styles.likeIcon} />
                </TouchableOpacity>
                <View style={styles.timing}>
                  <AnimatedCircularProgress
                    size={48}
                    width={6}
                    backgroundWidth={5}
                    fill={fill}
                    tintColor={theme.COLOR_SECONDARY}
                    backgroundColor="#ffffff"
                    rotation={360}
                    lineCap="round"
                    duration={10000}
                  >
                    {fill => (
                      <View style={styles.timingBg}>
                        <Text style={styles.timingPoint}>
                          {Math.round(MAX_POINTS * fill / 100)}
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
          ) : undefined
        }
      </View>
    )
  }
}
