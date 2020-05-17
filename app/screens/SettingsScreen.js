import React from "react";
import { Button, Text, View } from "react-native";
import Settings from "../components/Settings";
export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Settings />
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>Settings!</Text>
      //   <Button
      //     title="Go to Home"
      //     onPress={() => this.props.navigation.navigate('Home')}
      //   />

      // </View>
    );
  }
}
