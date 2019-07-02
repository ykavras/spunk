import { StyleSheet } from 'react-native'
import { theme } from '../../lib'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 185,
    resizeMode: 'contain'
  },
  mb: {
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: theme.FONT_REGULAR,
  },
  goLogin: {
    marginTop: 40,
    height: 24,
    marginBottom: 30,
  },
})
