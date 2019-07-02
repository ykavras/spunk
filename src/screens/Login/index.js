import React, { Component } from 'react'
import {
  View, StatusBar, Animated, Easing, TouchableOpacity, Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {
  Button, Footer, Head, AnimationBox, Input
} from '../../components'


export default class Login extends Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 300000,
        easing: Easing.linear
      }
    )
      .start(() => this.animate())
  }

  render() {
    const { navigate } = this.props.navigation
    const movingLeftToRight = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const movingRightToLeft = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
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
        style={styles.container}
      >
        <StatusBar hidden />
        <AnimationBox
          right={movingRightToLeft}
          top={movingRightToLeft}
          up={100}
          size="medium"
          type="primary"
        />
        <AnimationBox
          right={movingRightToLeft}
          top={movingRightToLeft}
          up={200}
          size="small"
          type="accent"
        />
        <AnimationBox
          left={movingLeftToRight}
          bottom={movingRightToLeft}
          down={300}
          size="large"
          type="primary"
        />
        <AnimationBox
          left={movingLeftToRight}
          bottom={movingRightToLeft}
          down={200}
          size="medium"
          type="secondary"
        />
        <Head title="Giriş Yap" type="accent" onPress={() => navigate('Home')} />
        <View style={styles.body}>
          <View style={styles.form}>
            <Input title="Kullanıcı Adı" type="accent" radiusTop shadow borderBottom />
            <Input title="Parola" type="primary" secureTextEntry radiusBottom shadow borderTop />
            <TouchableOpacity style={styles.textButton}>
              <Text style={styles.textButtonTitle}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer type="secondary" typeTwo="accent" />
        <Button title="Giriş Yap" size="large" textSize="textLarge" style={styles.button} onPress={() => navigate('Video')} />
      </LinearGradient>
    )
  }
}
