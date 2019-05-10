import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Button from './Button'
import { iColor, iSpace } from '../settings'


const Input = ({ inputValue, inputChange, submitTodo }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='What needs to be done?'
      placeholderTextColor={iColor.greydark}
      selectionColor={iColor.greydarker}
      onChangeText={inputChange} />
    <Button submitTodo={submitTodo} />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: iSpace.LG,
    marginBottom:iSpace.AS,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: iColor.black,
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:iColor.greylight
  },
  input: {
    flex: 2,
    height: iSpace.XXL,
    backgroundColor: iColor.white,
    paddingLeft: iSpace.AS,
    paddingRight: iSpace.AS,
  }
})

export default Input