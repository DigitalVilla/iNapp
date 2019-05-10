import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './src/components/Heading'
import InputBar from './src/components/InputBar'

import TodoList from './src/components/TodoList'
import { iColor, iSpace } from './src/settings'


let todoIndex = 0

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    //  this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange(inputValue) {
    // console.log(' Input Value: ', inputValue)
    this.setState({ inputValue })
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }

    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state.todos)
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <InputBar inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
            submitTodo={() => this.submitTodo()} />
          <TodoList todos={this.state.todos} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: iColor.offwhite
  },
  content: {
    flex: 1,
    paddingTop: iSpace.XXL
  }
})

export default App