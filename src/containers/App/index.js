/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { View } from 'react-native'
import AppNavigator from '../AppNavigator'

export default function() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  )
}
