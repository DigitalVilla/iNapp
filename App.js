import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './src/components/Heading'
import Input from './src/components/Input'
import Button from './src/components/Button'
import Todo from './src/components/Todo'
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
     this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange(inputValue) {
    // console.log(' Input Value: ', inputValue)
    this.setState({ inputValue })
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
          <Input inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
            <Button submitTodo={this.submitTodo} />
            {/* {
              this.state.map ()
            } */}
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