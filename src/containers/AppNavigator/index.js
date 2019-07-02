import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import {
  Home, Register, Login, PhoneCode, Question, Video, Testing
} from '../../screens'
import Drawer from '../Drawer'

const RootNavigator = createDrawerNavigator(
  {
    Home,
    Login,
    Register,
    PhoneCode,
    Question,
    Video,
    Testing
  },
  {
    drawerWidth: 300,
    drawerBackgroundColor: 'transparent',
    initialRouteName: 'Home',
    contentComponent: props => <Drawer {...props} />
  }
)

export default createAppContainer(RootNavigator)
