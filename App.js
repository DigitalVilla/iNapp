import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={viewStyles}>
        <TouchableHighlight
          style={[buttonStyles.core, buttonStyles.hairlineBorder,
          buttonStyles.spacer]}
          underlayColor="#efefef"
          activeOpacity={0.8}
          onPress={() => { }}
        >
          <Text>Default Hairline</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.spacer]}>
          <Text>Default Normal</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer]}>
          <Text>Default Hairline</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.primary, buttonStyles.spacer]}>
          <Text>Primary Normal</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder]}>
          <Text>Primary Hairline</Text>
        </TouchableHighlight>
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
    padding: 3,
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
