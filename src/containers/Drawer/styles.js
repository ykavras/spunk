import { StyleSheet } from 'react-native'
import { theme } from '../../lib'

export default StyleSheet.create({
  sideMenu: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  links: {
    marginTop: 50,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    marginLeft: 20,
  },
  linkIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  linkTitle: {
    fontSize: 16,
    fontFamily: theme.FONT_SEMI_BOLD,
    color: '#43537B',
  },
  pattern: {
    width: 300,
    height: 40,
    position: 'absolute',
    top: -25,
    left: -15,
    backgroundColor: '#FE401E',
    transform: [
      {
        rotate: '-10deg',
      }
    ]
  },
  signOut: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  closeMenu: {
    alignSelf: 'flex-end',
    right: 20,
    top: 20,
  },
  closeMenuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
})
