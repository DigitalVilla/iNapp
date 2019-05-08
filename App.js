import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      //https://facebook.github.io/react-native/docs/flexbox
      // flexDirection: row (default), column
      //align on primary axis
      // justifyContent: flex-start, center, flex-end, space-around, space-between and space-evenly.
      //align on secondary axis
      // alignItems: flex-start, center, flex-end, and stretch.
      //note For stretch to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.

      <View style={{ flex: 1, justifyContent: 'space-between', alignItems:'flex-end' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

const viewStyles = {
  alignItems: 'center',
  backgroundColor: '#ddd',
  flex: 1,
  justifyContent: 'center',
};

const buttonStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom: 10
  }
});
