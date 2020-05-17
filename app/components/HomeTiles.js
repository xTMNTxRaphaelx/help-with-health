import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight ,Alert} from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

import { AsyncStorage } from 'react-native';

export default class HomeTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 5000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleStopwatch() {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  };




  render() {
    return (
      <View style={styles.screen}>

        <TouchableHighlight style={styles.topContainer} onPress={this.toggleTimer}>


          <Text style={styles.topText}>{!this.state.timerStart ? "Press and start hand wash " : " Great You have done good job!"}</Text>


        </TouchableHighlight>
        <View >

          <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
            reset={this.state.timerReset}
            options={options}
            handleFinish={storeData}
            getTime={this.getFormattedTime} />

        </View >

      </View>
    );
  }
}

const handleTimerComplete = () => {

  alert("custom completion function");


}
ShowCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hr = new Date().getHours();
  var min = new Date().getMinutes();

  var finalDateString  = hr +':'+ min + ' '+ date + '-' + month + '-' + year;

  Alert.alert(finalDateString);

 }


storeData = async () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hr = new Date().getHours();
  var min = new Date().getMinutes();

  var finalDateString  = hr +':'+ min + ' '+ date + '-' + month + '-' + year;

  
  let arr = [];
  id= 0;

  

  let dummydata = 'Neeraj Soni'
  try {
    let key = '@###1'
    let value = JSON.parse(await AsyncStorage.getItem(key));
    console.log(value)
    alert(value);
    if (value === null) {
      arr.push({id:id,data:finalDateString})

      await AsyncStorage.setItem(
        key,
        JSON.stringify(arr)
      );


    }
    else {
      value.push({id:id,data:finalDateString})
      await AsyncStorage.setItem(
        key,
        JSON.stringify(value)
      );


    }this.id++;

  }
  catch (error) {

  }

};

const options = {

  container: {
    backgroundColor: '#008000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50
  },
  topContainer: {
    backgroundColor: '#008000',
    padding: 5,
    borderRadius: 5,
    height: 100
  },
  topText: {
    fontSize: 20,
    color: '#FFF',
    padding: 5,
  }

});


