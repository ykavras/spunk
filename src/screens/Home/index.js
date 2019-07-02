import React, { Component } from 'react'
import {
  SafeAreaView, Text, View, TouchableOpacity, StatusBar
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { Button } from '../../components'
import Spunk from '../../icons/Spunk'

export class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <LinearGradient
        colors={['#FFD334', '#FF5232']}
        start={{
          x: 1,
          y: 0
        }}
        end={{
          x: 0,
          y: 1
        }}
        style={styles.wrapper}
      >
        <StatusBar hidden />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.logoBox}>
            <Spunk style={styles.logo} />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Giriş Yap"
              type="primary"
              textSize="textLarge"
              style={styles.mb}
              onPress={() => navigate('Login')}
            />
            <Button
              title="Kayıt Ol"
              type="accent"
              textSize="textLarge"
              onPress={() => navigate('Register')}
            />
            <TouchableOpacity style={styles.goLogin} onPress={() => navigate('Video')}>
              <Text style={styles.title}>Üye olmadan giriş yap</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

export default Home
