import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../lib'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  footer: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  footerPattern: {
    position: 'absolute',
    left: -5,
    top: 50,
    width: width + 40,
    height: '100%',
    transform: [
      {
        rotate: '-15deg',
      }
    ],
  },
  button: {
    width: 290,
    height: 44,
    bottom: 40,
  },
  footerPatternTwo: {
    height: 90,
    width: 250,
    borderRadius: 90 / 2,
    position: 'absolute',
    zIndex: 1,
    top: -44,
    right: -100,
    transform: [
      {
        rotate: '-15deg',
      }
    ],
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
  four: {
    backgroundColor: '#A1F293',
  },
})
