import { StyleSheet } from 'react-native'
import theme from '../../lib/theme'


export default StyleSheet.create({
  animatedLine: {
    position: 'absolute',
    borderRadius: 28,
    backgroundColor: theme.COLOR_PRIMARY,
    transform: [
      {
        rotate: '-15deg'
      }
    ],
    zIndex: -1,
  },
  small: {
    width: 50,
    height: 24,
  },
  medium: {
    width: 140,
    height: 24,
  },
  large: {
    width: 224,
    height: 44,
  },
  primary: {
    backgroundColor: theme.COLOR_PRIMARY
  },
  accent: {
    backgroundColor: theme.COLOR_ACCENT
  },
  secondary: {
    backgroundColor: theme.COLOR_SECONDARY
  },
})
