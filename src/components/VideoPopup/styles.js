import { StyleSheet } from 'react-native'
import { theme } from '../../lib'

export default StyleSheet.create({
  popup: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blur: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  blurColor: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    opacity: 0.5,
    backgroundColor: '#1900FF',
  },
  answer: {
    alignItems: 'center',
    transform: [
      {
        rotate: '-15deg',
      }
    ]
  },
  answerColorBox: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  answerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 34,
    fontFamily: theme.FONT_SEMI_BOLD,
  },
  upBox: {
    top: 10,
    zIndex: 1,
  },
  primary: {
    backgroundColor: theme.COLOR_PRIMARY,
  },
  accent: {
    backgroundColor: theme.COLOR_ACCENT,
  },
  secondary: {
    backgroundColor: theme.COLOR_SECONDARY,
  },
})
