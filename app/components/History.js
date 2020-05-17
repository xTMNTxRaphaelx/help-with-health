import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (timers) => ({
  timers,
});

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}> You washed your hand on {title}</Text>
    </View>
  );
}

class History extends React.Component {
  renderItem = ({ item }) => {
    return <Item title={item} />;
  };

  render() {
    const { timers } = this.props
    console.log(timers)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={timers.filter(timer => !!timer)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#008000",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
  },
});

export default connect(mapStateToProps)(History);
