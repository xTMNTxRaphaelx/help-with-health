import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.container}>
    <Text>Hand Wash Timer</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
