import { StyleSheet } from 'react-native'
import theme from '../../lib/theme'


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 3,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  form: {
    width: 290,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textButtonTitle: {
    fontSize: 16,
    color: 'white',
    fontFamily: theme.FONT_REGULAR,
    textAlign: 'center',
  },
})
