import { StyleSheet } from 'react-native'
import { theme } from '../../lib'

export default StyleSheet.create({
  button: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowColor: '#000000',
    shadowOffset: {
      height: 8,
      width: 3
    },
    elevation: 1,
  },
  title: {
    fontFamily: theme.FONT_MEDIUM,
    color: 'white',
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
  medium: {
    width: 220,
    height: 50,
  },
  large: {
    width: 290,
    height: 44,
  },
  textMedium: {
    fontSize: 14,
  },
  textLarge: {
    fontSize: 18,
  },
})
