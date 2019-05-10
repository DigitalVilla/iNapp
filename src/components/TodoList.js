import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <View>
      {
        todos.map((todo, i) => {
          return (
            <Todo key={todo.todoIndex}
              todo={todo} />
          )
        })
      }
    </View>
  )
}

export default TodoList