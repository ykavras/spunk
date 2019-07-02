import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../lib'

const { width, height } = Dimensions.get('window')
let questionSize = 30

if (width <= 375) {
  questionSize = 24
}
if (width <= 320) {
  questionSize = 20
}

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  headNav: {
    position: 'absolute',
    left: 0,
    top: 30,
    right: 0,
    paddingHorizontal: 20,
    zIndex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headNavBtn: {},
  headNavIcon: {
    resizeMode: 'contain',
  },
  slide: {
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    width,
    height,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    zIndex: 1,
  },
})
