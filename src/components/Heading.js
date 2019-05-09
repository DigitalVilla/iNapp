import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { iColor, iSpace, iFont } from '../settings'

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      todos
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    margin: iSpace.LG,
  },
  headerText: {
    textAlign: 'center',
    fontSize: iFont.XXL,
    color: 'rgba(225, 47, 67, 0.85)',
    fontWeight: '100',
    letterSpacing: iSpace.XS
  }
})

export default Heading