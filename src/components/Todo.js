import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { iColor, iSpace, fade } from '../settings'

const Todo = ({ todo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {todo.title}
    </Text>
  </View>
)
const styles = StyleSheet.create({
  todoContainer: {
    marginHorizontal: iSpace.LG,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17,
    color: '#444444'
  }
})
export default Todo