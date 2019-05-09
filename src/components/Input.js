import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { iColor, iSpace } from '../settings'

const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='What needs to be done?'
      placeholderTextColor={iColor.greydark}
      selectionColor={iColor.greydarker}
      onChangeText={inputChange} />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: iSpace.LG,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: iColor.black,
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: iSpace.XXL,
    backgroundColor: iColor.white,
    paddingLeft: iSpace.AS,
    paddingRight:iSpace.AS,
  }
})

export default Input