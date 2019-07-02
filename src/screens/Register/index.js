import React, { Component } from 'react'
import {
  View, StatusBar, Animated, Easing, TouchableOpacity, ImageBackground, Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {
  Button, Footer, Head, AnimationBox, Input
} from '../../components'
import Plus from '../../icons/Plus'

export default class Register extends Component {
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
        <Head title="Kayıt Ol" type="accent" onPress={() => navigate('Home')}/>
        <View style={styles.body}>
          <View style={styles.form}>
            <TouchableOpacity style={styles.profileImageBox}>
              <View style={styles.profileImage}>
                {/*  <ImageBackground source={require('../../assets/img/profile-test.jpg')} style={styles.image} /> */}
                <Plus style={styles.plus}/>
              </View>
              <Text style={styles.profileText}>Resminizi yükleyiniz</Text>
            </TouchableOpacity>
            <Input title="*Kullanıcı Adı" type="accent" radiusTop/>
            <Input title="*Parola" type="accent" secureTextEntry borderTop borderBottom/>
            <Input title="*Parola Tekrar" type="accent" secureTextEntry borderTop borderBottom/>
            <Input title="Referans kodunuz" type="accent" radiusBottom shadow/>
          </View>
        </View>
        <Footer type="primary" typeTwo="accent"/>
        <Button
          title="Kayıt Ol"
          size="large"
          type="accent"
          textSize="textLarge"
          style={styles.button}
          onPress={() => navigate('PhoneCode')}
        />
      </LinearGradient>
    )
  }
}
