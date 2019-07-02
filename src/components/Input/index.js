import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import PassEye from '../../icons/PassEye'

type PropsType = {
  title: string,
  type?: 'primary' | 'accent' | 'secondary',
  secureTextEntry: false,
  radius: false,
  radiusTop: false,
  radiusBottom: false,
  borderTop: false,
  borderBottom: false,
  shadow: false,
  style: null,
}

function Input(props: PropsType) {
  const {
    title, type, placeholderColor, style, secureTextEntry, radius, radiusTop, radiusBottom, borderTop, borderBottom, shadow
  } = props

  return (
    <View style={[styles.inputBox, shadow ? styles.shadow : undefined]}>
      <TextInput
        style={[styles.input, styles[type], style,
          secureTextEntry ? styles.pd : undefined,
          radiusTop ? styles.radiusTop : undefined,
          radiusBottom ? styles.radiusBottom : undefined,
          borderTop ? styles.borderTop : undefined,
          borderBottom ? styles.borderBottom : undefined,
          radius ? styles.radius : undefined,
        ]}
        placeholder={title}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderColor}
      />
      {secureTextEntry ? (
        <TouchableOpacity style={styles.passBtn}>
          <PassEye style={styles.passBtnIcon}/>
        </TouchableOpacity>
      ) : undefined}
    </View>
  )
}

Input.defaultProps = {
  type: 'primary',
  placeholderColor: 'white',
}

export default Input
