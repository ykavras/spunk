import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../lib'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  head: {
    position: 'relative',
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 120,
  },
  headPattern: {
    width: width,
    height: 90,
    position: 'absolute',
    left: -45,
    top: -45,
    borderBottomRightRadius: 90,
    transform: [
      {
        rotate: '-15deg',
      }
    ]
  },
  headBackBtn: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 40,
  },
  headBackBtnTitle: {
    fontSize: 40,
    fontFamily: theme.FONT_EXTRA_LIGHT,
    color: 'white',
  },
  headTitle: {
    fontSize: 30,
    color: 'white',
    fontFamily: theme.FONT_MEDIUM,
    letterSpacing: -1
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
