import React, { Component } from 'react'
import { View } from 'react-native'
import { ChallengeVideo, AnswerModal } from '../../components'
import styles from './styles'


// * Mock Data
const currentVideo = {
  pauseTimes: [
    [2, 6]
  ]
}

export class VideoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false
    }
  }

  render() {
    const { isShowModal } = this.state

    return (
      <View style={styles.screen}>
        <AnswerModal
          isShowModal={isShowModal}
          answerTimeout={currentVideo.pauseTimes[0][1] - currentVideo.pauseTimes[0][0]}
        />
        <ChallengeVideo
          onSlowMotionStart={() => { this.setState({ isShowModal: true }) }}
          onSlowMotionEnd={() => { this.setState({ isShowModal: false }) }}
          pauseTime={currentVideo.pauseTimes[0]}
        />
      </View>
    )
  }
}

export default VideoScreen
