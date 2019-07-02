import React, { Component } from 'react'
import {
  View, StatusBar, Animated, Easing, Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {
  Button, Footer, Head, AnimationBox, Input
} from '../../components'

export default class PhoneCode extends Component {
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
        <StatusBar hidden/>
        <AnimationBox
          right={movingRightToLeft}
          top={movingRightToLeft}
          up={100}
          size="medium"
          type="accent"
        />
        <AnimationBox
          right={movingRightToLeft}
          top={movingRightToLeft}
          up={200}
          size="small"
          type="primary"
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
          type="accent"
        />
        <Head title="Kod Giriniz" type="accent"/>
        <View style={styles.body}>
          <Text style={styles.textButtonTitle}>Telefonuna gelen, 4 haneli kodu giriniz</Text>
          <View style={styles.form}>
            <Input title="XXXX" type="accent" radius shadow style={{ textAlign: 'center' }}/>
          </View>
          <Text style={styles.textButtonTitle}>116 sn.</Text>
        </View>
        <Footer type="primary" typeTwo="four"/>
        <Button
          title="Kaydı Tamamla"
          size="large"
          type="accent"
          style={styles.button}
          textSize="textLarge"
          onPress={() => navigate('Video')}
        />
      </LinearGradient>
    )
  }
}
