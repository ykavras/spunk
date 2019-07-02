/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native'
import { App } from './src/containers'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

// eslint-disable-next-line
console.disableYellowBox = true
