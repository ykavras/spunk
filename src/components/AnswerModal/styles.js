import { StyleSheet } from 'react-native'
import { theme } from '../../lib'
import { windowWidth as width, windowHeight as height } from '../../lib/vars'

let questionSize

if (width <= 375) {
  questionSize = 24
} else if (width <= 320) {
  questionSize = 20
} else {
  questionSize = 30
}

export default StyleSheet.create({
  stopBox: {
    width,
    height,
    position: 'absolute',
    zIndex: 1,
  },
  questionBox: {
    width,
    height,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    zIndex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
    paddingBottom: 200,
  },
  blur: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  rotate: {
    transform: [
      {
        rotate: '-15deg',
      }
    ]
  },
  question: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  questionText: {
    fontSize: questionSize,
    color: 'white',
    textAlign: 'center',
    fontFamily: theme.FONT_SEMI_BOLD,
  },
  answerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginBottom: 20,
    zIndex: 1,
  },
  answerBtn: {
    width: '45%',
  },
  answerBtnTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: theme.FONT_SEMI_BOLD,
    color: 'white',
  },
  answerBtnLine: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    width: 90,
    height: 20,
    zIndex: -1,
  },
  answerBtnLineYes: {
    backgroundColor: theme.COLOR_ACCENT
  },
  answerBtnLineNo: {
    backgroundColor: theme.COLOR_PRIMARY
  },
  profileBox: {
    height: 200,
    width: 320,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    zIndex: 2,
  },
  profileImageBox: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    zIndex: 1,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    resizeMode: 'cover',
  },
  profileBoxBG: {
    width: '100%',
    height: 200,
    top: 40,
    resizeMode: 'contain',
    opacity: 0.9,
    position: 'absolute',
    zIndex: 1,
  },
  likeBtn: {
    position: 'absolute',
    left: 30,
    top: 26,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  likeIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  timing: {
    position: 'absolute',
    right: 30,
    top: 26,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  timingBg: {
    width: 42,
    height: 42,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingPoint: {
    fontSize: 24,
    lineHeight: 42,
    fontFamily: theme.FONT_SEMI_BOLD,
    color: theme.COLOR_SECONDARY,
  },
  profileInfo: {
    zIndex: 2,
    width: 320,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  username: {
    color: '#0058F6',
    fontSize: 20,
    fontFamily: theme.FONT_SEMI_BOLD,
    textAlign: 'center',
  },
  profileInfoBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileInfoBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxLeft: {
    justifyContent: 'flex-start'
  },
  boxRight: {
    justifyContent: 'flex-end'
  },
  key: {
    color: '#192B57',
    fontFamily: theme.FONT_SEMI_BOLD,
    fontSize: 18,
  },
  value: {
    color: '#F64198',
    fontFamily: theme.FONT_MEDIUM,
    fontSize: 18,
    paddingLeft: 4,
  },
})
