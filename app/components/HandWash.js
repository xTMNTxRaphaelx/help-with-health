import React from "react";
import { Platform, View, Text, Button } from "react-native";

class HandWash extends React.Component {
  render() {
    const { test } = this.props
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{test}</Text>
        <Text> Component Called</Text>
      </View>
    );
  }
}

export default HandWash