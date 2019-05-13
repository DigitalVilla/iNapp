import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { iColor, iSpace, fade } from '../settings'

const TodoButton = ({ onPress, complete, name }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}>
    <Text style={[
      styles.text,
      complete ? styles.complete : null,
      name === 'Delete' ? styles.deleteButton : null]}>
      {name}
    </Text>
  </TouchableHighlight>
)
const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5
  }, text: {
    color: '#666666'
  },
  complete: {
    color: iColor.greenlight,
    fontWeight: 'bold'
  },
  deleteButton: {
    color: iColor.socialpinterest
  }
})
export default TodoButtton