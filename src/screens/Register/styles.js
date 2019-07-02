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
    alignItems: 'flex-start',
  },
  textButton: {
    marginTop: 20,
  },
  textButtonTitle: {
    fontSize: 16,
    color: 'white',
    fontFamily: theme.FONT_REGULAR,
  },
  profileImageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 54,
    height: 54,
    borderWidth: 3,
    borderColor: '#FBDD5C',
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: 54 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  profileText: {
    fontFamily: theme.FONT_MEDIUM,
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  image: {
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  plus: {
    width: 20,
    height: 20,
  },
})
