import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { iColor, iSpace, fade } from '../settings'

const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor={iColor.red+'dd'}
      style={styles.button}
      onPress={submitTodo}>
      <Text style={styles.submit}>
        Add ToDo
      </Text>
    </TouchableHighlight>
  </View>
)
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: iSpace.XXL,
    paddingHorizontal: 20,
    backgroundColor: iColor.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: iColor.greylight
  },
  submit: {
    color: iColor.white,
    fontWeight: '600'
  }
})

export default Button