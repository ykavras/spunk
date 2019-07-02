import { StyleSheet } from 'react-native'
import theme from '../../lib/theme'

export default StyleSheet.create({
  primary: {
    backgroundColor: '#E25110',
  },
  accent: {
    backgroundColor: 'rgba(249,130,26,80)',
  },
  inputBox: {
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    height: 44,
    fontFamily: theme.FONT_REGULAR,
    fontSize: 16,
    color: 'white',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#EEAC49',
    overflow: 'hidden',
  },
  pd: {
    paddingRight: 45,
  },
  passBtn: {
    position: 'absolute',
    right: 20,
  },
  passBtnIcon: {
    width: 25,
    height: 18,
    resizeMode: 'contain',
  },
  radius: {
    borderRadius: 10,
  },
  radiusTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  radiusBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  borderTop: {
    borderTopWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  shadow: {
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowColor: '#000000',
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 1,
  },
})
