import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text> Enable disable push</Text>
      </View>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: 'flex-end',

    padding: 50,
  },
  text: {
    alignItems: "flex-start",
  },
  switch: {
    alignItems: "flex-end",
  },
});
