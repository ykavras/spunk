// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'
import styles from './styles'
import videoSource from '../../assets/video/video-2.mp4'

type PauseTime = [number, number]

type Props = {
  onSlowMotionStart: () => void,
  onSlowMotionEnd: () => void,
  pauseTime: PauseTime
}

type State = {
  rate: number,
  isSlowMotionStarted: boolean
}

class ChallengeVideo extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      rate: 1,
      isSlowMotionStarted: false
    }
  }

  handleVideoProgress = (prog: { currentTime: number }) => {
    const { pauseTime, onSlowMotionStart, onSlowMotionEnd } = this.props
    const { rate, isSlowMotionStarted } = this.state
    if (
      prog.currentTime >= pauseTime[0]
      && prog.currentTime < pauseTime[1]
      && rate >= 0.4
    ) {
      if (!isSlowMotionStarted) {
        onSlowMotionStart()
      }
      this.setState(state => ({
        rate: Number((state.rate - 0.1).toFixed(2)),
        isSlowMotionStarted: true
      }))
    }
    if (prog.currentTime >= pauseTime[1] && rate < 1) {
      this.setState(state => ({ rate: Number((state.rate + 0.1).toFixed(2)) }))
    } else if (prog.currentTime >= pauseTime[1] && isSlowMotionStarted) {
      this.setState({ rate: 1, isSlowMotionStarted: false }, onSlowMotionEnd)
    }
  }

  render() {
    const { rate } = this.state

    return (
      <View style={styles.wrapper}>
        <Video
          style={styles.video}
          resizeMode="cover"
          source={videoSource}
          onProgress={this.handleVideoProgress}
          rate={rate}
        />
      </View>
    )
  }
}

export default ChallengeVideo
