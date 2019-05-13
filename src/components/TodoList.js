import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <View>
      {
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete} />
          )
        })
      }
    </View>
  )
}

export default TodoList