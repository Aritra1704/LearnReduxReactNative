/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

class CounterApp extends Component {
  // state = {
  //   counter: 0
  // }

  // increaseCounter = () => {
  //   this.setState({counter: this.state.counter + 1})
  // }
  // decreaseCounter = () => {
  //   this.setState({counter: this.state.counter - 1})
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{fontSize: 20, margin: 20}}>Increase</Text>
          </TouchableOpacity>

          <Text style={{fontSize: 40, marginTop: 10, marginLeft: 30, marginRight: 30}}>{this.props.counter}</Text>
          
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{fontSize: 20, margin: 20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(states) {
    return {
        counter: states.counter
    }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
// export default CounterApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
