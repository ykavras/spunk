import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: '40%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.3
  },
  question: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '25%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 40
  }
})
