import { StyleSheet } from 'react-native'
import { theme } from '../../lib'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  blur: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  wrapperIn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionBox: {},
  questionText: {
    textAlign: 'center',
    fontFamily: theme.FONT_SEMI_BOLD,
    color: 'white',
    fontSize: 30,
    transform: [
      {
        rotate: '-15deg',
      }
    ]
  },
  answerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  answerBtn: {
    transform: [
      {
        rotate: '-15deg',
      }
    ]
  },
  answerBtnTitle: {
    textAlign: 'center',
    fontFamily: theme.FONT_SEMI_BOLD,
    color: 'white',
    fontSize: 25,

  },
  answerBtnLine: {
    height: 20,
  },
  profileInfo: {},
})
