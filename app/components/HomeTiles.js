import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { connect } from 'react-redux'
import { Timer } from "react-native-stopwatch-timer";

import { addTimer, getTimers } from "app/state/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getTimers: () => dispatch(getTimers()),
    addTimer: (payload) => dispatch(addTimer(payload)),
  };
};

class HomeTiles extends Component {
  state = {
    timerStart: false,
    stopwatchStart: false,
    totalDuration: 5000,
    timerReset: false,
    stopwatchReset: false,
  };

  componentDidMount() {
    const { getTimers } = this.props
    getTimers()
  }

  toggleTimer = () => {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  };

  resetTimer = () => {
    this.setState({ timerStart: false, timerReset: true });
  };

  toggleStopwatch = () => {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  };

  resetStopwatch = () => {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  };

  getFormattedTime = (time) => {
    this.currentTime = time;
  };

  storeData = () => {
    const { addTimer } = this.props
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hr = new Date().getHours();
    var min = new Date().getMinutes();

    var finalDateString =
      hr + ":" + min + " " + date + "-" + month + "-" + year;

    addTimer(finalDateString)
  };

  render() {
    return (
      <View style={styles.screen}>
        <TouchableHighlight
          style={styles.topContainer}
          onPress={this.toggleTimer}
        >
          <Text style={styles.topText}>
            {!this.state.timerStart
              ? "Press and start hand wash "
              : " Great You have done good job!"}
          </Text>
        </TouchableHighlight>
        <View>
          <Timer
            totalDuration={this.state.totalDuration}
            msecs
            start={this.state.timerStart}
            reset={this.state.timerReset}
            options={options}
            handleFinish={this.storeData}
            getTime={this.getFormattedTime}
          />
        </View>
      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: "#008000",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
  },
  topContainer: {
    backgroundColor: "#008000",
    padding: 5,
    borderRadius: 5,
    height: 100,
  },
  topText: {
    fontSize: 20,
    color: "#FFF",
    padding: 5,
  },
});

export default connect(null, mapDispatchToProps)(HomeTiles)