// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import {
  Text, View, TouchableOpacity, SafeAreaView
} from 'react-native'
import { NavigationState, NavigationScreenProp } from 'react-navigation'
import styles from './styles'
import BroadcastTime from '../../icons/SideMenu/BroadcastTime'
import Settings from '../../icons/SideMenu/Settings'
import LeaderBoard from '../../icons/SideMenu/LeaderBoard'
import Awards from '../../icons/SideMenu/Awards'
import GetPayment from '../../icons/SideMenu/GetPayment'
import InviteYourFriends from '../../icons/SideMenu/InviteYourFriends'
import FrequentlyAskedQuestions from '../../icons/SideMenu/FrequentlyAskedQuestions'
import SignOut from '../../icons/SideMenu/SignOut'
import SideMenuClose from '../../icons/SideMenu/SideMenuClose'
import { AnimationBox } from '../../components'

type Link = {
  +label: string,
  +icon?: Node,
  +screen?: string,
  +action?: 'logout'
}

type Props = {
  navigation: NavigationScreenProp<NavigationState>
}

const links: Array<Link> = [
  {
    screen: 'BroadcastTime',
    label: 'Yayın Saatleri',
    icon: <BroadcastTime style={styles.linkIcon} />
  },
  {
    screen: 'Settings',
    label: 'Ayarlar',
    icon: <Settings style={styles.linkIcon} />
  },
  {
    screen: 'LeaderBoard',
    label: 'Lider Bordu',
    icon: <LeaderBoard style={styles.linkIcon} />
  },
  {
    screen: 'Awards',
    label: 'Ödüllerin',
    icon: <Awards style={styles.linkIcon} />
  },
  {
    screen: 'GetPayment',
    label: 'Ödeme Al',
    icon: <GetPayment style={styles.linkIcon} />
  },
  {
    screen: 'InviteYourFriends',
    label: 'Arkadaşlarını Davet Et',
    icon: <InviteYourFriends style={styles.linkIcon} />
  },
  {
    screen: 'FrequentlyAskedQuestions',
    label: 'S.S.S',
    icon: <FrequentlyAskedQuestions style={styles.linkIcon} />
  }
]

class Drawer extends Component<Props> {
  closeControlPanel = () => {
    this.props.navigation.closeDrawer()
  }

  handleLinkPress = <+T: Link>(link: ?T): void => {
    this.props.navigation.navigate(link)
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.sideMenu}>
        <View style={styles.pattern} />
        <TouchableOpacity
          style={styles.closeMenu}
          onPress={this.closeControlPanel}
        >
          <SideMenuClose style={styles.closeMenuIcon} />
        </TouchableOpacity>
        <View style={styles.links}>
          {links.map((L: Link) => (
            <TouchableOpacity
              key={L.screen || L.action}
              onPress={
                /* $FlowFixMe */
                L.action ? this[L.action] : () => navigation.navigate(L.screen)
              }
              style={styles.link}
            >
              {L.icon}
              <Text style={styles.linkTitle}>{L.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={[styles.link, styles.signOut]}>
          <SignOut style={styles.linkIcon} />
          <Text style={styles.linkTitle}>Oturumu Kapat</Text>
        </TouchableOpacity>
        <AnimationBox bottom={115} left={-100} size="large" type="secondary" />
        <AnimationBox bottom={140} left={-80} size="medium" type="primary" />
        <AnimationBox bottom={110} right={80} size="small" type="accent" />
        <AnimationBox bottom={-25} right={30} size="large" type="accent" />
        <AnimationBox bottom={-35} right={5} size="large" type="primary" />
      </SafeAreaView>
    )
  }
}

export default Drawer
